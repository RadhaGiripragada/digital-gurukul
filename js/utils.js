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
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Storage save failed:', error);
            return false;
        }
    },

    // Load data from localStorage
    load(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Storage load failed:', error);
            return null;
        }
    },

    // Remove data from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Storage remove failed:', error);
            return false;
        }
    },

    // Clear all data
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Storage clear failed:', error);
            return false;
        }
    }
};

/**
 * Animation utilities
 */
const AnimationUtils = {
    // Fade in element
    fadeIn(element, duration = 300) {
        if (!element) return;
        
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    },

    // Fade out element
    fadeOut(element, duration = 300) {
        if (!element) return;
        
        let start = null;
        const initialOpacity = parseFloat(element.style.opacity) || 1;
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(initialOpacity - (progress / duration), 0);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        }
        
        requestAnimationFrame(animate);
    },

    // Slide in from top
    slideInDown(element, duration = 300) {
        if (!element) return;
        
        element.style.transform = 'translateY(-50px)';
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percent = Math.min(progress / duration, 1);
            
            const translateY = -50 + (50 * percent);
            element.style.transform = `translateY(${translateY}px)`;
            element.style.opacity = percent;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            }
        }
        
        requestAnimationFrame(animate);
    }
};

/**
 * DOM utilities
 */
const DOMUtils = {
    // Get element by ID safely
    getElementById(id) {
        return document.getElementById(id);
    },

    // Get elements by class name
    getElementsByClassName(className) {
        return Array.from(document.getElementsByClassName(className));
    },

    // Add event listener with error handling
    addEventListener(element, event, handler) {
        if (element && typeof handler === 'function') {
            element.addEventListener(event, handler);
        }
    },

    // Toggle class on element
    toggleClass(element, className) {
        if (element) {
            element.classList.toggle(className);
        }
    },

    // Add class to element
    addClass(element, className) {
        if (element) {
            element.classList.add(className);
        }
    },

    // Remove class from element
    removeClass(element, className) {
        if (element) {
            element.classList.remove(className);
        }
    },

    // Check if element has class
    hasClass(element, className) {
        return element ? element.classList.contains(className) : false;
    }
};

/**
 * String utilities
 */
const StringUtils = {
    // Normalize string for comparison
    normalize(str) {
        if (!str) return '';
        return str.toLowerCase().trim();
    },

    // Check if strings match (case insensitive)
    matches(str1, str2) {
        return this.normalize(str1) === this.normalize(str2);
    },

    // Check if string contains another string
    contains(str, substring) {
        return this.normalize(str).includes(this.normalize(substring));
    },

    // Capitalize first letter
    capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    // Truncate string
    truncate(str, length = 50) {
        if (!str || str.length <= length) return str;
        return str.substring(0, length) + '...';
    }
};

/**
 * Math utilities
 */
const MathUtils = {
    // Generate random number between min and max
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Calculate percentage
    percentage(value, total) {
        if (total === 0) return 0;
        return Math.round((value / total) * 100);
    },

    // Clamp value between min and max
    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
};

/**
 * Validation utilities
 */
const ValidationUtils = {
    // Check if value is not empty
    isNotEmpty(value) {
        return value !== null && value !== undefined && value.toString().trim() !== '';
    },

    // Check if value is a number
    isNumber(value) {
        return !isNaN(value) && !isNaN(parseFloat(value));
    },

    // Check if value is a valid email
    isEmail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
};

/**
 * Time utilities
 */
const TimeUtils = {
    // Format seconds to MM:SS
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },

    // Get current timestamp
    now() {
        return Date.now();
    },

    // Calculate time difference in seconds
    diffInSeconds(start, end = Date.now()) {
        return Math.floor((end - start) / 1000);
    }
};

// Export utilities if in module environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SpeechUtils,
        StorageUtils,
        AnimationUtils,
        DOMUtils,
        StringUtils,
        MathUtils,
        ValidationUtils,
        TimeUtils
    };
}
