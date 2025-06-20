// Digital Gurukulam - Utility Functions

/**
 * Speech synthesis utilities
 */
const SpeechUtils = {
    // Check if speech synthesis is supported
    isSupported() {
        return 'speechSynthesis' in window;
    },

    // Get available voices
    getVoices() {
        if (!this.isSupported()) return [];
        return speechSynthesis.getVoices();
    },

    // Find appropriate voice for language
    findVoice(language = 'en') {
        const voices = this.getVoices();
        return voices.find(voice => 
            voice.lang.includes(language) || 
            voice.lang.includes('hi') || 
            voice.lang.includes('en')
        );
    },

    // Speak text with options
    speak(text, options = {}) {
        if (!this.isSupported() || !text) return;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = options.rate || 0.7;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;

        const voice = this.findVoice(options.language);
        if (voice) utterance.voice = voice;

        speechSynthesis.speak(utterance);
    },

    // Stop current speech
    stop() {
        if (this.isSupported()) {
            speechSynthesis.cancel();
        }
    }
};

/**
 * Local storage utilities
 */
const StorageUtils = {
    // Save data to localStorage
    save(key, data) {
        try {
            localStorage.setItem
