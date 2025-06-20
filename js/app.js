// Digital Gurukulam - Fixed Telugu & Sanskrit Speech System

/**
 * Enhanced Telugu & Sanskrit Speech with Robust Fallbacks
 */
class TeluguSanskritSpeech {
    constructor() {
        this.availableVoices = [];
        this.isVoicesLoaded = false;
        this.teluguVoice = null;
        this.sanskritVoice = null;
        this.hindiVoice = null;
        this.indianEnglishVoice = null;
        this.loadVoices();
    }

    loadVoices() {
        const loadVoicesWhenReady = () => {
            this.availableVoices = speechSynthesis.getVoices();
            this.isVoicesLoaded = true;
            this.findAllVoices();
            this.logAvailableVoices();
        };

        if (speechSynthesis.getVoices().length !== 0) {
            loadVoicesWhenReady();
        } else {
            speechSynthesis.addEventListener('voiceschanged', loadVoicesWhenReady);
        }
    }

    findAllVoices() {
        // Find Telugu voice (if available)
        this.teluguVoice = this.availableVoices.find(voice => 
            voice.lang.includes('te-IN') ||
            voice.name.toLowerCase().includes('telugu') ||
            voice.name.toLowerCase().includes('heera')
        );

        // Find Hindi voice (for Sanskrit)
        this.hindiVoice = this.availableVoices.find(voice => 
            voice.lang.includes('hi-IN') ||
            voice.name.toLowerCase().includes('hindi') ||
            voice.name.toLowerCase().includes('hemant') ||
            voice.name.toLowerCase().includes('kalpana')
        );

        // Find Indian English voice (fallback)
        this.indianEnglishVoice = this.availableVoices.find(voice => 
            voice.lang.includes('en-IN') ||
            voice.name.toLowerCase().includes('ravi')
        );

        // Set Sanskrit voice (prefer Hindi)
        this.sanskritVoice = this.hindiVoice || this.indianEnglishVoice;

        console.log('🎯 Voice Detection Results:');
        console.log(`Telugu: ${this.teluguVoice?.name || '❌ Not found'}`);
        console.log(`Hindi: ${this.hindiVoice?.name || '❌ Not found'}`);  
        console.log(`Indian English: ${this.indianEnglishVoice?.name || '❌ Not found'}`);
    }

    logAvailableVoices() {
        console.log('🎤 All available voices:');
        this.availableVoices.forEach((voice, index) => {
            const isRelevant = voice.lang.includes('te-IN') || 
                             voice.lang.includes('hi-IN') || 
                             voice.lang.includes('en-IN') ||
                             voice.name.toLowerCase().includes('telugu') ||
                             voice.name.toLowerCase().includes('hindi') ||
                             voice.name.toLowerCase().includes('heera') ||
                             voice.name.toLowerCase().includes('hemant') ||
                             voice.name.toLowerCase().includes('kalpana') ||
                             voice.name.toLowerCase().includes('ravi');
            
            if (isRelevant) {
                console.log(`  ✅ ${voice.name} (${voice.lang})`);
            }
        });
    }

    speakTelugu(text, options = {}) {
        console.log(`🔊 Attempting Telugu speech: "${text}"`);
        
        // Strategy 1: Try native Telugu voice if available
        if (this.teluguVoice) {
            console.log(`Using Telugu voice: ${this.teluguVoice.name}`);
            this.speak(text, this.teluguVoice, 'Telugu', options);
            return;
        }

        // Strategy 2: Use romanized text with Hindi voice
        const word = this.getCurrentWordData();
        if (word && word.romanized && this.hindiVoice) {
            console.log(`Using Hindi voice with romanized: ${word.romanized}`);
            this.speak(word.romanized, this.hindiVoice, 'Telugu (Hindi voice)', options);
            return;
        }

        // Strategy 3: Use romanized text with Indian English
        if (word && word.romanized && this.indianEnglishVoice) {
            console.log(`Using Indian English with romanized: ${word.romanized}`);
            this.speak(word.romanized, this.indianEnglishVoice, 'Telugu (Indian English)', options);
            return;
        }

        // Strategy 4: Use romanized text with any voice
        if (word && word.romanized) {
            console.log(`Using default voice with romanized: ${word.romanized}`);
            this.speak(word.romanized, null, 'Telugu (default)', options);
            return;
        }

        // Strategy 5: Last resort - original text with any voice
        console.log(`Last resort: using original text with default voice`);
        this.speak(text, null, 'Telugu (fallback)', options);
    }

    speakSanskrit(text, options = {}) {
        console.log(`🔊 Attempting Sanskrit speech: "${text}"`);
        
        if (this.sanskritVoice) {
            this.speak(text, this.sanskritVoice, 'Sanskrit', options);
        } else {
            // Fallback to romanized if available
            const word = this.getCurrentWordData();
            if (word && word.romanized) {
                console.log(`Using romanized Sanskrit: ${word.romanized}`);
                this.speak(word.romanized, null, 'Sanskrit (romanized)', options);
            } else {
                this.speak(text, null, 'Sanskrit (fallback)', options);
            }
        }
    }

    speak(text, voice, language, options = {}) {
        if (!('speechSynthesis' in window)) {
            console.error('❌ Speech synthesis not supported');
            return;
        }

        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        
        if (voice) {
            utterance.voice = voice;
        }

        utterance.rate = options.rate || 0.75;
        utterance.pitch = options.pitch || 1.0; 
        utterance.volume = options.volume || 1.0;

        utterance.onstart = () => {
            console.log(`🔊 Speaking ${language}: "${text}"`);
            console.log(`Voice: ${utterance.voice?.name || 'default'}`);
        };

        utterance.onerror = (event) => {
            console.error(`❌ Speech error for ${language}:`, event.error);
            // Try backup method
            this.tryBackupSpeech(text, language, options);
        };

        utterance.onend = () => {
            console.log(`✅ Completed speaking ${language}`);
        };

        try {
            speechSynthesis.speak(utterance);
        } catch (error) {
            console.error(`❌ Failed to speak ${language}:`, error);
            this.tryBackupSpeech(text, language, options);
        }
    }

    tryBackupSpeech(text, language, options) {
        console.log(`🔄 Trying backup speech for ${language}`);
        
        // Get word data for romanized fallback
        const word = this.getCurrentWordData();
        if (word && word.romanized && word.romanized !== text) {
            console.log(`Using romanized backup: ${word.romanized}`);
            const utterance = new SpeechSynthesisUtterance(word.romanized);
            utterance.rate = options.rate || 0.75;
            
            try {
                speechSynthesis.speak(utterance);
            } catch (error) {
                console.error(`❌ Backup speech also failed:`, error);
            }
        }
    }

    getCurrentWordData() {
        // Get current word data from the app
        if (window.app && window.app.getCurrentWord) {
            return window.app.getCurrentWord();
        }
        return null;
    }

    speakSyllables(text, language, syllableBreak = '·') {
        if (!text.includes(syllableBreak)) {
            if (language === 'telugu') {
                this.speakTelugu(text, { rate: 0.6 });
            } else {
                this.speakSanskrit(text, { rate: 0.6 });
            }
            return;
        }

        const syllables = text.split(syllableBreak);
        console.log(`🔤 Speaking ${language} syllables: ${syllables.join(' - ')}`);

        syllables.forEach((syllable, index) => {
            setTimeout(() => {
                const cleanSyllable = syllable.trim();
                if (language === 'telugu') {
                    this.speakTelugu(cleanSyllable, { rate: 0.6 });
                } else {
                    this.speakSanskrit(cleanSyllable, { rate: 0.6 });
                }
            }, index * 1800); // Longer delay between syllables
        });
    }

    // Enhanced voice testing
    testVoices() {
        console.log('🧪 Testing all available voices...');
        
        // Test Telugu
        setTimeout(() => {
            console.log('Testing Telugu pronunciation...');
            this.speakTelugu('నమస్కారం');
        }, 1000);
        
        // Test Sanskrit  
        setTimeout(() => {
            console.log('Testing Sanskrit pronunciation...');
            this.speakSanskrit('नमस्ते');
        }, 4000);

        // Test with romanized
        setTimeout(() => {
            console.log('Testing romanized Telugu...');
            this.speak('namaskaaram', this.hindiVoice || this.indianEnglishVoice, 'Telugu (romanized)');
        }, 7000);
    }

    // Debug function to list all voices
    listAllVoices() {
        console.log('📋 ALL AVAILABLE VOICES:');
        this.availableVoices.forEach((voice, index) => {
            console.log(`${index + 1}. ${voice.name} (${voice.lang}) - ${voice.localService ? 'Local' : 'Remote'}`);
        });
    }
}

/**
 * Enhanced Gurukulam App with Fixed Telugu Support
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
            speechRate: 0.75,
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
        this.currentQuizWord = null;
        this.speechSystem = new TeluguSanskritSpeech();
        this.init();
    }

    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.updateDisplay();
        this.updateStats();
        this.startSession();
        
        // Wait longer for voices to load properly
        setTimeout(() => {
            console.log('🏛️ Digital Gurukulam ready!');
            console.log('💡 If Telugu is not working, the system will use romanized pronunciation automatically.');
            
            // Auto-test voices to help debug
            this.speechSystem.listAllVoices();
        }, 3000);
    }

    setupEventListeners() {
        // Language selector
        const languageSelect = document.getElementById('language');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
            languageSelect.value = this.state.currentLanguage;
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
            speedSlider.value = this.state.speechRate;
        }

        // Quiz input
        const answerInput = document.getElementById('answerInput');
        if (answerInput) {
            answerInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.checkAnswer();
                }
            });
        }
    }

    changeLanguage(language) {
        if (language !== 'telugu' && language !== 'sanskrit') {
            console.warn('⚠️ Only Telugu and Sanskrit are supported');
            return;
        }
        
        this.state.currentLanguage = language;
        this.state.currentWordIndex = 0;
        this.updateDisplay();
        this.updateProgress();
        this.saveProgress();
        
        console.log(`🔄 Language changed to: ${language}`);
    }

    changeDifficulty(difficulty) {
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === difficulty);
        });

        this.state.currentDifficulty = difficulty;
        this.state.currentWordIndex = 0;
        this.updateDisplay();
        this.updateProgress();
        this.saveProgress();
    }

    switchMode(mode) {
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        this.state.currentMode = mode;

        const learnMode = document.getElementById('learnMode');
        const quizMode = document.getElementById('quizMode'); 
        const storyMode = document.getElementById('storyMode');

        if (learnMode) learnMode.classList.add('hidden');
        if (quizMode) quizMode.classList.add('hidden');
        if (storyMode) storyMode.classList.add('hidden');

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

    getCurrentWords() {
        if (!vocabularyData || !vocabularyData[this.state.currentLanguage]) {
            console.error(`❌ No vocabulary data for ${this.state.currentLanguage}`);
            return [];
        }
        return vocabularyData[this.state.currentLanguage][this.state.currentDifficulty] || [];
    }

    getCurrentWord() {
        const words = this.getCurrentWords();
        if (words.length === 0) return null;
        return words[this.state.currentWordIndex] || null;
    }

    updateDisplay() {
        const word = this.getCurrentWord();
        if (!word) {
            console.error('❌ No word found to display');
            return;
        }

        const foreignWord = document.getElementById('foreignWord');
        const pronunciation = document.getElementById('pronunciation');
        const phoneticGuide = document.getElementById('phoneticGuide');
        const englishWord = document.getElementById('englishWord');
        const culturalContext = document.getElementById('culturalContext');
        const wordCategory = document.getElementById('wordCategory');

        if (foreignWord) foreignWord.textContent = word.word;
        if (pronunciation) pronunciation.textContent = word.pronunciation;
        if (phoneticGuide) phoneticGuide.textContent = `Break it down: ${word.phonetic}`;
        if (englishWord) englishWord.textContent = word.translation;
        if (culturalContext) culturalContext.textContent = word.context;
        if (wordCategory) wordCategory.textContent = word.category;

        this.updateProgress();
        console.log(`📖 Displaying ${this.state.currentLanguage} word: ${word.word} (${word.romanized})`);
    }

    /**
     * Enhanced speak word function with better Telugu support
     */
    speakWord() {
        const word = this.getCurrentWord();
        if (!word) {
            console.log('❌ No word to speak');
            return;
        }

        console.log(`🎯 Speaking ${this.state.currentLanguage} word:`, {
            original: word.word,
            romanized: word.romanized,
            pronunciation: word.pronunciation
        });

        if (this.state.currentLanguage === 'telugu') {
            this.speechSystem.speakTelugu(word.word, {
                rate: this.state.speechRate
            });
        } else if (this.state.currentLanguage === 'sanskrit') {
            this.speechSystem.speakSanskrit(word.word, {
                rate: this.state.speechRate
            });
        }
    }

    speakSyllables() {
        const word = this.getCurrentWord();
        if (!word || !word.phonetic) {
            console.log('❌ No phonetic breakdown available, using regular pronunciation');
            this.speakWord();
            return;
        }

        console.log(`🔤 Speaking syllables for: ${word.word}`);
        this.speechSystem.speakSyllables(
            word.phonetic, 
            this.state.currentLanguage
        );
    }

    previousWord() {
        const words = this.getCurrentWords();
        if (words.length === 0) return;

        this.state.currentWordIndex = (this.state.currentWordIndex - 1 + words.length) % words.length;
        this.updateDisplay();
        this.saveProgress();
    }

    nextWord() {
        const words = this.getCurrentWords();
        if (words.length === 0) return;

        this.state.currentWordIndex = (this.state.currentWordIndex + 1) % words.length;
        this.updateDisplay();

        this.state.stats.wordsLearned = Math.max(
            this.state.stats.wordsLearned, 
            this.state.currentWordIndex + 1
        );
        this.updateStats();
        this.saveProgress();

        if (this.state.currentWordIndex === 0 && this.state.stats.wordsLearned > 0) {
            this.showAchievement("Completed all words! 🎉");
        }
    }

    updateProgress() {
        const words = this.getCurrentWords();
        if (words.length === 0) return;

        const progress = ((this.state.currentWordIndex + 1) / words.length) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }

    setupQuiz() {
        const words = this.getCurrentWords();
        if (words.length === 0) {
            console.error('❌ No words available for quiz');
            return;
        }

        const randomIndex = Math.floor(Math.random() * words.length);
        this.currentQuizWord = words[randomIndex];

        const quizQuestion = document.getElementById('quizQuestion');
        if (quizQuestion) {
            quizQuestion.textContent = `What does "${this.currentQuizWord.word}" mean in English?`;
        }
        
        const answerInput = document.getElementById('answerInput');
        if (answerInput) {
            answerInput.value = '';
            answerInput.focus();
        }

        const feedback = document.getElementById('feedback');
        if (feedback) {
            feedback.classList.remove('show');
        }
    }

    checkAnswer() {
        const answerInput = document.getElementById('answerInput');
        const feedback = document.getElementById('feedback');
        
        if (!answerInput || !feedback || !this.currentQuizWord) return;

        const userAnswer = answerInput.value.trim();
        const correctAnswer = this.currentQuizWord.translation.toLowerCase();

        this.state.stats.totalAnswers++;

        const isCorrect = this.validateAnswer(userAnswer, correctAnswer);

        if (isCorrect) {
            feedback.textContent = "Correct! Well done! 🎉";
            feedback.className = "feedback correct show";
            this.state.stats.correctAnswers++;
            this.state.stats.streak++;
            this.showAchievement("Correct Answer! 🎯");
        } else {
            feedback.textContent = `Incorrect. The correct answer is: ${this.currentQuizWord.translation}`;
            feedback.className = "feedback incorrect show";
            this.state.stats.streak = 0;
        }

        this.updateStats();
        this.saveProgress();

        setTimeout(() => {
            this.setupQuiz();
        }, 2000);
    }

    validateAnswer(userAnswer, correctAnswer) {
        if (!userAnswer || !correctAnswer) return false;
        
        const normalize = (str) => str.toLowerCase().trim();
        const normalizedUser = normalize(userAnswer);
        const normalizedCorrect = normalize(correctAnswer);
        
        if (normalizedUser === normalizedCorrect) return true;
        if (normalizedCorrect.includes(normalizedUser)) return true;
        
        const variations = normalizedCorrect.split('/').map(v => v.trim());
        return variations.some(variation => 
            variation === normalizedUser || variation.includes(normalizedUser)
        );
    }

    displayStory() {
        if (!stories || stories.length === 0) {
            console.error('❌ No stories available');
            return;
        }

        const story = stories[this.state.currentStoryIndex] || stories[0];
        
        const storyTitle = document.getElementById('storyTitle');
        const storyContent = document.getElementById('storyContent');
        const storyMoral = document.querySelector('.story-moral');

        if (storyTitle) storyTitle.textContent = story.title;
        if (storyContent) storyContent.textContent = story.content;
        if (storyMoral) storyMoral.innerHTML = `<strong>Moral:</strong> ${story.moral}`;
    }

    nextStory() {
        if (!stories || stories.length === 0) return;
        
        this.state.currentStoryIndex = (this.state.currentStoryIndex + 1) % stories.length;
        this.displayStory();
    }

    speakStory() {
        if (!stories || stories.length === 0) return;
        
        const story = stories[this.state.currentStoryIndex] || stories[0];
        const text = `${story.title}. ${story.content}. ${story.moral}`;
        
        this.speechSystem.speakSanskrit(text, { rate: 0.8 });
    }

    toggleAutoplay() {
        this.state.isAutoplay = !this.state.isAutoplay;
        
        const autoplayBtns = document.querySelectorAll('button');
        let autoplayBtn = null;
        autoplayBtns.forEach(btn => {
            if (btn.textContent.includes('Auto Play') || btn.textContent.includes('Pause Auto')) {
                autoplayBtn = btn;
            }
        });
        
        if (this.state.isAutoplay) {
            if (autoplayBtn) autoplayBtn.textContent = '⏸️ Pause Auto';
            this.state.autoplayInterval = setInterval(() => {
                this.nextWord();
                setTimeout(() => this.speakWord(), 500);
            }, 4000);
        } else {
            if (autoplayBtn) autoplayBtn.textContent = '⏯️ Auto Play';
            if (this.state.autoplayInterval) {
                clearInterval(this.state.autoplayInterval);
                this.state.autoplayInterval = null;
            }
        }
    }

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

    calculateTimeSpent() {
        if (this.state.stats.startTime) {
            const elapsed = Math.floor((Date.now() - this.state.stats.startTime) / 1000);
            return elapsed + (this.state.stats.timeSpent || 0);
        }
        return this.state.stats.timeSpent || 0;
    }

    startSession() {
        this.state.stats.startTime = Date.now();
    }

    endSession() {
        if (this.state.stats.startTime) {
            const sessionTime = Math.floor((Date.now() - this.state.stats.startTime) / 1000);
            this.state.stats.timeSpent = (this.state.stats.timeSpent || 0) + sessionTime;
            this.state.stats.startTime = null;
        }
    }

    saveProgress() {
        this.endSession();
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.state));
        } catch (error) {
            console.log('Progress save failed:', error);
        }
        this.startSession();
    }

    loadProgress() {
        try {
            const item = localStorage.getItem(this.storageKey);
            const savedState = item ? JSON.parse(item) : null;
            
            if (savedState) {
                this.state = { ...this.state, ...savedState };
                this.state.stats.startTime = Date.now();
                console.log('📚 Progress loaded successfully');
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

function speakSyllables() {
    if (window.app) window.app.speakSyllables();
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

// Debug functions
function testVoices() {
    if (window.app) window.app.speechSystem.testVoices();
}

function listAllVoices() {
    if (window.app) window.app.speechSystem.listAllVoices();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (typeof vocabularyData === 'undefined') {
            console.error('❌ vocabularyData not loaded');
            return;
        }
        if (typeof stories === 'undefined') {
            console.error('❌ stories not loaded');
            return;
        }
        
        window.app = new GurukulamApp();
    }, 100);
});

window.addEventListener('beforeunload', () => {
    if (window.app) {
        window.app.saveProgress();
    }
});
