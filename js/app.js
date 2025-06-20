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
        const languageSelect = document.getElementById('language');
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
        const speedSlider = document.getElementById('speedSlider');
        if (speedSlider) {
            speedSlider.addEventListener('input', (e) => {
                this.state.speechRate = parseFloat(e.target.value);
            });
        }

        // Quiz input - Enter key
        const answerInput = document.getElementById('answerInput');
        if (answerInput) {
            answerInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.checkAnswer();
                }
            });
        }

        // Load voices when available
        if ('speechSynthesis' in window) {
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
        const learnMode = document.getElementById('learnMode');
        const quizMode = document.getElementById('quizMode');
        const storyMode = document.getElementById('storyMode');

        if (learnMode) learnMode.classList.add('hidden');
        if (quizMode) quizMode.classList.add('hidden');
        if (storyMode) storyMode.classList.add('hidden');

        // Show selected mode
        switch(mode) {
            case 'learn':
                if (learnMode) learnMode.classList.remove('hidden');
                this.updateDisplay();
                break;
            case 'quiz':
                if (quizMode) quizMode.classList.remove('hidden');
                this.setupQuiz();
                break;
            case 'story':
                if (storyMode) storyMode.classList.remove('hidden');
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

        const foreignWord = document.getElementById('foreignWord');
        const pronunciation = document.getElementById('pronunciation');
        const phoneticGuide = document.getElementById('phoneticGuide');
        const englishWord = document.getElementById('englishWord');
        const culturalContext = document.getElementById('culturalContext');
        const wordCategory = document.getElementById('wordCategory');

        if (foreignWord) foreignWord.textContent = word.word;
        if (pronunciation) pronunciation.textContent = word.pronunciation;
        if (phoneticGuide) phoneticGuide.textContent = `Break it down: ${word.phonetic}`;
        if (englishWord) {
            englishWord.textContent = word.translation;
            englishWord.style.display = 'block';
        }
        if (culturalContext) {
            culturalContext.textContent = word.context;
            culturalContext.style.display = 'block';
        }
        if (wordCategory) wordCategory.textContent = word.category;

        this.updateProgress();
    }

    /**
     * Go to previous word
     */
    previousWord() {
        const words = this.getCurrentWords();
        if (words.length === 0) return;

        this.state.currentWordIndex = (this.state.currentWordIndex - 1 + words.length) % words.length;
        this.updateDisplay();
        this.saveProgress();
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
        if (word && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word.romanized);
            utterance.rate = this.state.speechRate;
            utterance.pitch = 1;
            utterance.volume = 1;
            
            // Try to use appropriate voice
            const voices = speechSynthesis.getVoices();
            const voice = voices.find(v => v.lang.includes('hi') || v.lang.includes('en'));
            if (voice) utterance.voice = voice;
            
            speechSynthesis.speak(utterance);
        }
    }

    /**
     * Update progress bar
     */
    updateProgress() {
        const words = this.getCurrentWords();
        if (words.length === 0) return;

        const progress = ((this.state.currentWordIndex + 1) / words.length) * 100;
        const progressBar = document.getElementById('progressBar');
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

        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];

        const quizQuestion = document.getElementById('quizQuestion');
        if (quizQuestion) {
            quizQuestion.textContent = `What does "${word.word}" mean in English?`;
        }
        
        const answerInput = document.getElementById('answerInput');
        if (answerInput) {
            answerInput.value = '';
            answerInput.dataset.correctAnswer = word.translation.toLowerCase();
            answerInput.focus();
        }

        // Hide feedback
        const feedback = document.getElementById('feedback');
        if (feedback) {
            feedback.classList.remove('show');
        }
    }

    /**
     * Check quiz answer
     */
    checkAnswer() {
        const answerInput = document.getElementById('answerInput');
        const feedback = document.getElementById('feedback');
        
        if (!answerInput || !feedback) return;

        const userAnswer = answerInput.value.trim();
        const correctAnswer = answerInput.dataset.correctAnswer;

        this.state.stats.totalAnswers++;

        const isCorrect = this.validateAnswer(userAnswer, correctAnswer);

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
     * Validate answer
     */
    validateAnswer(userAnswer, correctAnswer) {
        if (!userAnswer || !correctAnswer) return false;
        
        const normalize = (str) => str.toLowerCase().trim();
        const normalizedUser = normalize(userAnswer);
        const normalizedCorrect = normalize(correctAnswer);
        
        // Exact match
        if (normalizedUser === normalizedCorrect) return true;
        
        // Check if correct answer contains user answer (for partial matches)
        if (normalizedCorrect.includes(normalizedUser)) return true;
        
        // Check for common variations
        const variations = normalizedCorrect.split('/').map(v => v.trim());
        return variations.some(variation => 
            variation === normalizedUser || variation.includes(normalizedUser)
        );
    }

    /**
     * Display current story
     */
    displayStory() {
        const story = stories[this.state.currentStoryIndex] || stories[0];
        
        const storyTitle = document.getElementById('storyTitle');
        const storyContent = document.getElementById('storyContent');
        const storyMoral = document.getElementById('storyMoral');

        if (storyTitle) storyTitle.textContent = story.title;
        if (storyContent) storyContent.textContent = story.content;
        if (storyMoral) storyMoral.innerHTML = `<strong>Moral:</strong> ${story.moral}`;
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
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
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
        const wordsLearned = document.getElementById('wordsLearned');
        const correctAnswers = document.getElementById('correctAnswers');
        const streak = document.getElementById('streak');
        const accuracy = document.getElementById('accuracy');

        if (wordsLearned) wordsLearned.textContent = this.state.stats.wordsLearned.toString();
        if (correctAnswers) correctAnswers.textContent = this.state.stats.correctAnswers.toString();
        if (streak) streak.textContent = this.state.stats.streak.toString();
        
        const accuracyPercent = this.state.stats.totalAnswers > 0 ? 
            Math.round((this.state.stats.correctAnswers / this.state.stats.totalAnswers) * 100) : 0;
        if (accuracy) accuracy.textContent = `${accuracyPercent}%`;
    }

    /**
     * Show achievement notification
     */
    showAchievement(message) {
        const badge = document.getElementById('achievementBadge');
        if (badge) {
            badge.textContent = message;
            badge.classList.add('show');
            
            setTimeout(() => {
                badge.classList.remove('show');
            }, 3000);
        }
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
     * Save progress to localStorage (fallback if StorageUtils not available)
     */
    saveProgress() {
        this.endSession();
        try {
            if (typeof StorageUtils !== 'undefined') {
                StorageUtils.save(this.storageKey, this.state);
            } else {
                localStorage.setItem(this.storageKey, JSON.stringify(this.state));
            }
        } catch (error) {
            console.log('Progress save failed:', error);
        }
        this.startSession();
    }

    /**
     * Load progress from localStorage (fallback if StorageUtils not available)
     */
    loadProgress() {
        try {
            let savedState;
            if (typeof StorageUtils !== 'undefined') {
                savedState = StorageUtils.load(this.storageKey);
            } else {
                const item = localStorage.getItem(this.storageKey);
                savedState = item ? JSON.parse(item) : null;
            }
            
            if (savedState) {
                // Merge saved state with current state
                this.state = { ...this.state, ...savedState };
                
                // Reset session timer
                this.state.stats.startTime = Date.now();
                
                console.log('Progress loaded successfully');
            }
        } catch (error) {
            console.log('Progress load failed:', error);
        }
    }
}

// Global functions for onclick handlers
function previousWord() {
    if (window.app) window.app.previousWord();
}

function nextWord() {
    if (window.app) window.app.nextWord();
}

function speakWord() {
    if (window.app) window.app.speakWord();
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

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for other scripts to load
    setTimeout(() => {
        window.app = new GurukulamApp();
    }, 100);
});

// Save progress before page unload
window.addEventListener('beforeunload', () => {
    if (window.app) {
        window.app.saveProgress();
    }
});
