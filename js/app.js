// Digital Gurukulam - Main Application Logic

/**
 * Application state management
 */
class GurukulamApp {
    constructor() {
        this.state = {
            currentLanguage: 'telugu',
            currentDifficulty: 'beginner',
            currentWordIndex: 0,
            currentMode: 'learn',
            currentStoryIndex: 0,
            isAutoplay: false,
            autoplayInterval: null,
            speechRate: 0.7,
            stats: {
                wordsLearned: 0,
                correctAnswers: 0,
                totalAnswers: 0,
                streak: 0,
                timeSpent: 0,
                startTime: null
            }
        };
        
        this.storageKey = 'gurukulam-progress';
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.updateDisplay();
        this.updateStats();
        this.startSession();
        console.log('Digital Gurukulam initialized successfully!');
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Language selector
        const languageSelect = DOMUtils.getElementById('language');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }

        // Difficulty selector
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.changeDifficulty(e.target.dataset.level);
            });
        });

        // Mode selector
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchMode(e.target.dataset.mode);
            });
        });

        // Speed slider
        const speedSlider = DOMUtils.getElementById('speedSlider');
        if (speedSlider) {
            speedSlider.addEventListener('input', (e) => {
                this.state.speechRate = parseFloat(e.target.value);
            });
        }

        // Quiz input - Enter key
        const answerInput = DOMUtils.getElementById('answerInput');
        if (answerInput) {
            answerInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.checkAnswer();
                }
            });
        }

        // Load voices when available
        if (SpeechUtils.isSupported()) {
            speechSynthesis.addEventListener('voiceschanged', () => {
                console.log('Speech voices loaded');
            });
        }
    }

    /**
     * Change current language
     */
    changeLanguage(language) {
        this.state.currentLanguage = language;
        this.state.currentWordIndex = 0;
        this.updateDisplay();
        this.updateProgress();
        this.saveProgress();
    }

    /**
     * Change difficulty level
     */
    changeDifficulty(difficulty) {
        // Update UI
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === difficulty);
        });

        this.state.currentDifficulty = difficulty;
        this.state.currentWordIndex = 0;
        this.updateDisplay();
        this.updateProgress();
        this.saveProgress();
    }

    /**
     * Switch between modes
     */
    switchMode(mode) {
        // Update UI
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        this.state.currentMode = mode;

        // Hide all modes
        DOMUtils.getElementById('learnMode')?.classList.add('hidden');
        DOMUtils.getElementById('quizMode')?.classList.add('hidden');
        DOMUtils.getElementById('storyMode')?.classList.add('hidden');

        // Show selected mode
        switch(mode) {
            case 'learn':
                DOMUtils.getElementById('learnMode')?.classList.remove('hidden');
                this.updateDisplay();
                break;
            case 'quiz':
                DOMUtils.getElementById('quizMode')?.classList.remove('hidden');
                this.setupQuiz();
                break;
            case 'story':
                DOMUtils.getElementById('storyMode')?.classList.remove('hidden');
                this.displayStory();
                break;
        }
    }

    /**
     * Get current vocabulary words
     */
    getCurrentWords() {
        return vocabularyData[this.state.currentLanguage]?.[this.state.currentDifficulty] || [];
    }

    /**
     * Get current word
     */
    getCurrentWord() {
        const words = this.getCurrentWords();
        return words[this.state.currentWordIndex] || null;
    }

    /**
     * Update word display
     */
    updateDisplay() {
        const word = this.getCurrentWord();
        if (!word) return;

        DOMUtils.setTextContent('foreignWord', word.word);
        DOMUtils.setTextContent('pronunciation', word.pronunciation);
        DOMUtils.setTextContent('phoneticGuide', `Break it down: ${word.phonetic}`);
        DOMUtils.setTextContent('englishWord', word.translation);
        DOMUtils.setTextContent('culturalContext', word.context);
        DOMUtils.setTextContent('wordCategory', word.category);

        // Hide translation and context by default
        const englishWord = DOMUtils.getElementById('englishWord');
        const culturalContext = DOMUtils.getElementById('culturalContext');
        if (englishWord) englishWord.style.display = 'none';
        if (culturalContext) culturalContext.style.display = 'none';

        this.updateProgress();
    }

    /**
     * Go to next word
     */
    nextWord() {
        const words = this.getCurrentWords();
        if (words.length === 0) return;

        this.state.currentWordIndex = (this.state.currentWordIndex + 1) % words.length;
        this.updateDisplay();

        // Update stats
        this.state.stats.wordsLearned = Math.max(
            this.state.stats.wordsLearned, 
            this.state.currentWordIndex + 1
        );
        this.updateStats();
        this.saveProgress();

        // Show achievement for completing all words
        if (this.state.currentWordIndex === 0 && this.state.stats.wordsLearned > 0) {
            this.showAchievement("Completed all words! 🎉");
        }
    }

    /**
     * Speak current word
     */
    speakWord() {
        const word = this.getCurrentWord();
        if (word) {
            SpeechUtils.speak(word.romanized, {
                rate: this.state.speechRate,
                language: this.state.currentLanguage
            });
        }
    }

    /**
     * Speak word slowly
     */
    speakSlow() {
        const word = this.getCurrentWord();
        if (word) {
            SpeechUtils.speak(word.romanized, {
                rate: 0.3,
                language: this.state.currentLanguage
            });
        }
    }

    /**
     * Toggle translation visibility
     */
    showTranslation() {
        const englishWord = DOMUtils.getElementById('englishWord');
        if (englishWord) {
            const isHidden = englishWord.style.display === 'none';
            englishWord.style.display = isHidden ? 'block' : 'none';
            
            if (isHidden) {
                AnimationUtils.fadeIn(englishWord);
            }
        }
    }

    /**
     * Toggle cultural context visibility
     */
    showCulturalContext() {
        const context = DOMUtils.getElementById('culturalContext');
        if (context) {
            const isHidden = context.style.display === 'none';
            context.style.display = isHidden ? 'block' : 'none';
            
            if (isHidden) {
                AnimationUtils.fadeIn(context);
            }
        }
    }

    /**
     * Update progress bar
     */
    updateProgress() {
        const words = this.getCurrentWords();
        if (words.length === 0) return;

        const progress = ((this.state.currentWordIndex + 1) / words.length) * 100;
        const progressBar = DOMUtils.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }

    /**
     * Setup quiz mode
     */
    setupQuiz() {
        const words = this.getCurrentWords();
        if (words.length === 0) return;

        const randomIndex = RandomUtils.randomInt(0, words.length - 1);
        const word = words[randomIndex];

        DOMUtils.setTextContent('quizQuestion', `What does "${word.word}" mean in English?`);
        
        const answerInput = DOMUtils.getElementById('answerInput');
        if (answerInput) {
            answerInput.value = '';
            answerInput.dataset.correctAnswer = word.translation.toLowerCase();
            answerInput.focus();
        }

        // Hide feedback
        const feedback = DOMUtils.getElementById('feedback');
        if (feedback) {
            feedback.classList.remove('show');
        }
    }

    /**
     * Check quiz answer
     */
    checkAnswer() {
        const answerInput = DOMUtils.getElementById('answerInput');
        const feedback = DOMUtils.getElementById('feedback');
        
        if (!answerInput || !feedback) return;

        const userAnswer = answerInput.value.trim();
        const correctAnswer = answerInput.dataset.correctAnswer;

        this.state.stats.totalAnswers++;

        const isCorrect = ValidationUtils.checkAnswer(userAnswer, correctAnswer);

        if (isCorrect) {
            feedback.textContent = "Correct! Well done! 🎉";
            feedback.className = "feedback correct show";
            this.state.stats.correctAnswers++;
            this.state.stats.streak++;
            this.showAchievement("Correct Answer! 🎯");
        } else {
            feedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
            feedback.className = "feedback incorrect show";
            this.state.stats.streak = 0;
        }

        this.updateStats();
        this.saveProgress();

        // Setup next question after delay
        setTimeout(() => {
            this.setupQuiz();
        }, 2000);
    }

    /**
     * Display current story
     */
    displayStory() {
        const story = stories[this.state.currentStoryIndex] || stories[0];
        
        DOMUtils.setTextContent('storyTitle', story.title);
        DOMUtils.setTextContent('storyContent', story.content);
        DOMUtils.setHTML('storyMoral', `<strong>Moral:</strong> ${story.moral}`);
    }

    /**
     * Go to next story
     */
    nextStory() {
        this.state.currentStoryIndex = (this.state.currentStoryIndex + 1) % stories.length;
        this.displayStory();
    }

    /**
     * Speak current story
     */
    speakStory() {
        const story = stories[this.state.currentStoryIndex] || stories[0];
        const text = `${story.title}. ${story.content}. ${story.moral}`;
        
        SpeechUtils.speak(text, {
            rate: 0.8,
            language: 'en'
        });
    }

    /**
     * Toggle autoplay
     */
    toggleAutoplay() {
        this.state.isAutoplay = !this.state.isAutoplay;
        
        const btn = event?.target;
        
        if (this.state.isAutoplay) {
            if (btn) btn.textContent = '⏸️ Pause Auto';
            this.state.autoplayInterval = setInterval(() => {
                this.nextWord();
                setTimeout(() => this.speakWord(), 500);
            }, 4000);
        } else {
            if (btn) btn.textContent = '⏯️ Auto Play';
            if (this.state.autoplayInterval) {
                clearInterval(this.state.autoplayInterval);
                this.state.autoplayInterval = null;
            }
        }
    }

    /**
     * Update statistics display
     */
    updateStats() {
        DOMUtils.setTextContent('wordsLearned', this.state.stats.wordsLearned.toString());
        DOMUtils.setTextContent('correctAnswers', this.state.stats.correctAnswers.toString());
        DOMUtils.setTextContent('streak', this.state.stats.streak.toString());
        
        const accuracy = ProgressUtils.calculateAccuracy(
            this.state.stats.correctAnswers, 
            this.state.stats.totalAnswers
        );
        DOMUtils.setTextContent('accuracy', `${accuracy}%`);
    }

    /**
     * Show achievement notification
     */
    showAchievement(message) {
        const badge = DOMUtils.getElementById('achievementBadge');
        if (badge) {
            badge.textContent = message;
            badge.classList.add('show');
            
            setTimeout(() => {
                badge.classList.remove('show');
            }, 3000);
        }
    }

    /**
     * Reset all progress
     */
    resetProgress() {
        if (confirm('Are you sure you want to reset all progress?')) {
            this.state.currentWordIndex = 0;
            this.state.stats = {
                wordsLearned: 0,
                correctAnswers: 0,
                totalAnswers: 0,
                streak: 0,
                timeSpent: 0,
                startTime: Date.now()
            };
            
            this.updateDisplay();
            this.updateStats();
            this.saveProgress();
            this.showAchievement('Progress Reset! 🔄');
        }
    }

    /**
     * Export progress data
     */
    exportProgress() {
        const progressData = {
            language: this.state.currentLanguage,
            difficulty: this.state.currentDifficulty,
            wordsLearned: this.state.stats.wordsLearned,
            accuracy: ProgressUtils.calculateAccuracy(
                this.state.stats.correctAnswers, 
                this.state.stats.totalAnswers
            ),
            streak: this.state.stats.streak,
            timeSpent: this.calculateTimeSpent(),
            exportDate: DateUtils.formatDate(),
            exportTime: DateUtils.formatTime()
        };
        
        ExportUtils.exportJSON(progressData, `gurukulam-progress-${DateUtils.getTimestamp()}`);
        this.showAchievement('Progress Exported! 💾');
    }

    /**
     * Calculate time spent in session
     */
    calculateTimeSpent() {
        if (this.state.stats.startTime) {
            const elapsed = Math.floor((Date.now() - this.state.stats.startTime) / 1000);
            return elapsed + (this.state.stats.timeSpent || 0);
        }
        return this.state.stats.timeSpent || 0;
    }

    /**
     * Start learning session
     */
    startSession() {
        this.state.stats.startTime = Date.now();
    }

    /**
     * End learning session
     */
    endSession() {
        if (this.state.stats.startTime) {
            const sessionTime = Math.floor((Date.now() - this.state.stats.startTime) / 1000);
            this.state.stats.timeSpent = (this.state.stats.timeSpent || 0) + sessionTime;
            this.state.stats.startTime = null;
        }
    }

    /**
     * Save progress to localStorage
     */
    saveProgress() {
        this.endSession();
        StorageUtils.save(this.storageKey, this.state);
        this.startSession();
    }

    /**
     * Load progress from localStorage
     */
    loadProgress() {
        const savedState = StorageUtils.load(this.storageKey);
        if (savedState) {
            // Merge saved state with current state
            this.state = { ...this.state, ...savedState };
            
            // Reset session timer
            this.state.stats.startTime = Date.now();
            
            console.log('Progress loaded successfully');
        }
    }
}

// Global functions for onclick handlers
function nextWord() {
    if (window.app) window.app.nextWord();
}

function speakWord() {
    if (window.app) window.app.speakWord();
}

function speakSlow() {
    if (window.app) window.app.speakSlow();
}

function showTranslation() {
    if (window.app) window.app.showTranslation();
}

function showCulturalContext() {
    if (window.app) window.app.showCulturalContext();
}

function checkAnswer() {
    if (window.app) window.app.checkAnswer();
}

function nextStory() {
    if (window.app) window.app.nextStory();
}

function speakStory() {
    if (window.app) window.app.speakStory();
}

function toggleAutoplay() {
    if (window.app) window.app.toggleAutoplay();
}

function resetProgress() {
    if (window.app) window.app.resetProgress();
}

function exportProgress() {
    if (window.app) window.app.exportProgress();
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new GurukulamApp();
});

// Save progress before page unload
window.addEventListener('beforeunload', () => {
    if (window.app) {
        window.app.saveProgress();
    }
});
