// Digital Gurukulam - Telugu Vocabulary Inspired by SPB's Pronunciation Style
const vocabularyData = {
    telugu: {
        beginner: [
            {
                word: "నమస్కారం", 
                pronunciation: "[na-mas-kaa-ram]", 
                phonetic: "na·mas·kaa·ram", 
                translation: "Hello/Greetings", 
                category: "Greetings", 
                romanized: "namaskaaram", 
                ipa: "/nʌmʌskaːrʌm/", 
                context: "A respectful greeting, beautifully pronounced in classical Telugu style like SPB's devotional songs."
            },
            {
                word: "సంగీతం", 
                pronunciation: "[san-gee-tam]", 
                phonetic: "san·gee·tam", 
                translation: "Music", 
                category: "Arts", 
                romanized: "sangeetam", 
                ipa: "/səŋgiːt̪əm/", 
                context: "SPB made this word magical through 40,000+ songs. Music connects hearts across languages."
            },
            {
                word: "ప్రేమ", 
                pronunciation: "[prey-ma]", 
                phonetic: "prey·ma", 
                translation: "Love", 
                category: "Emotions", 
                romanized: "prema", 
                ipa: "/preːmə/", 
                context: "SPB's romantic voice made this word iconic in Telugu cinema. Pure, divine love."
            },
            {
                word: "చందమామ", 
                pronunciation: "[chan-da-maa-ma]", 
                phonetic: "chan·da·maa·ma", 
                translation: "Moon", 
                category: "Nature", 
                romanized: "chandamama", 
                ipa: "/t͡ʃəndəmaːmə/", 
                context: "Often sung about in Telugu songs. The moon is a beloved metaphor in our poetry."
            },
            {
                word: "కవిత", 
                pronunciation: "[ka-vi-ta]", 
                phonetic: "ka·vi·ta", 
                translation: "Poetry", 
                category: "Literature", 
                romanized: "kavita", 
                ipa: "/kəvit̪ə/", 
                context: "SPB brought poetry to life through his melodious renditions of Telugu verses."
            },
            {
                word: "వీణ", 
                pronunciation: "[vee-na]", 
                phonetic: "vee·na", 
                translation: "Veena (Musical instrument)", 
                category: "Music", 
                romanized: "veena", 
                ipa: "/viːnə/", 
                context: "Sacred instrument of Goddess Saraswati, often mentioned in classical Telugu songs."
            },
            {
                word: "గోపాల", 
                pronunciation: "[go-paa-la]", 
                phonetic: "go·paa·la", 
                translation: "Krishna/Cowherd", 
                category: "Devotional", 
                romanized: "gopaala", 
                ipa: "/ɡoːpaːlə/", 
                context: "Lord Krishna as a cowherd. SPB sang many devotional songs about Gopala."
            },
            {
                word: "రాగం", 
                pronunciation: "[raa-gam]", 
                phonetic: "raa·gam", 
                translation: "Musical Raga", 
                category: "Music", 
                romanized: "raagam", 
                ipa: "/raːɡəm/", 
                context: "SPB mastered all ragas - from classical Shankarabharanam to folk melodies."
            },
            {
                word: "వసంతం", 
                pronunciation: "[va-san-tam]", 
                phonetic: "va·san·tam", 
                translation: "Spring", 
                category: "Seasons", 
                romanized: "vasantam", 
                ipa: "/vəsənt̪əm/", 
                context: "Spring season, symbolizing renewal and beauty in Telugu literature and songs."
            },
            {
                word: "మధుర", 
                pronunciation: "[ma-dhu-ra]", 
                phonetic: "ma·dhu·ra", 
                translation: "Sweet/Melodious", 
                category: "Qualities", 
                romanized: "madhura", 
                ipa: "/məd̪ʱurə/", 
                context: "SPB's voice was the epitome of madhura - sweet and melodious like honey."
            }
        ],
        intermediate: [
            {
                word: "సాగర", 
                pronunciation: "[saa-ga-ra]", 
                phonetic: "saa·ga·ra", 
                translation: "Ocean", 
                category: "Nature", 
                romanized: "saagara", 
                ipa: "/saːɡərə/", 
                context: "From 'Saagara Sangamam' - SPB's National Award winning performance. Ocean of music and emotions."
            },
            {
                word: "సంగమం", 
                pronunciation: "[san-ga-mam]", 
                phonetic: "san·ga·mam", 
                translation: "Union/Meeting", 
                category: "Concepts", 
                romanized: "sangamam", 
                ipa: "/səŋɡəməm/", 
                context: "Sacred confluence, like the meeting of rivers or hearts. SPB's 'Saagara Sangamam' is legendary."
            },
            {
                word: "రుద్రవీణ", 
                pronunciation: "[rud-ra-vee-na]", 
                phonetic: "rud·ra·vee·na", 
                translation: "Rudra's Veena", 
                category: "Music", 
                romanized: "rudraveena", 
                ipa: "/rud̪rəviːnə/", 
                context: "SPB won National Award for 'Rudraveena'. Lord Shiva's musical instrument representing divine music."
            },
            {
                word: "స్వరలహరి", 
                pronunciation: "[swa-ra-la-ha-ri]", 
                phonetic: "swa·ra·la·ha·ri", 
                translation: "Wave of Musical Notes", 
                category: "Music", 
                romanized: "swaralahari", 
                ipa: "/swərələɦəri/", 
                context: "Musical waves that touch the soul - exactly what SPB created with his voice."
            },
            {
                word: "భక్తి", 
                pronunciation: "[bhak-ti]", 
                phonetic: "bhak·ti", 
                translation: "Devotion", 
                category: "Spirituality", 
                romanized: "bhakti", 
                ipa: "/bʱəkt̪i/", 
                context: "Pure devotion. SPB's devotional songs filled hearts with divine love and surrender."
            },
            {
                word: "తల్లి", 
                pronunciation: "[tal-li]", 
                phonetic: "tal·li", 
                translation: "Mother", 
                category: "Family", 
                romanized: "talli", 
                ipa: "/t̪əlli/", 
                context: "Mother - the most sacred word in Telugu. SPB's voice made lullabies and mother songs unforgettable."
            },
            {
                word: "కరుణ", 
                pronunciation: "[ka-ru-na]", 
                phonetic: "ka·ru·na", 
                translation: "Compassion", 
                category: "Emotions", 
                romanized: "karuna", 
                ipa: "/kərunə/", 
                context: "Divine compassion. SPB's voice carried infinite karuna, touching millions of hearts."
            },
            {
                word: "చైతన్యం", 
                pronunciation: "[chai-tan-yam]", 
                phonetic: "chai·tan·yam", 
                translation: "Consciousness/Awareness", 
                category: "Philosophy", 
                romanized: "chaitanyam", 
                ipa: "/t͡ʃait̪ənjəm/", 
                context: "Spiritual consciousness. SPB's music awakened chaitanya in listeners' souls."
            },
            {
                word: "మణిమాలిక", 
                pronunciation: "[ma-ni-maa-li-ka]", 
                phonetic: "ma·ni·maa·li·ka", 
                translation: "Pearl Necklace", 
                category: "Beauty", 
                romanized: "manimakalika", 
                ipa: "/mənimaːlikə/", 
                context: "String of pearls - metaphor for beautiful songs linked together, like SPB's melodious voice."
            },
            {
                word: "వేణుగానం", 
                pronunciation: "[vey-nu-gaa-nam]", 
                phonetic: "vey·nu·gaa·nam", 
                translation: "Flute Music", 
                category: "Music", 
                romanized: "venugaanam", 
                ipa: "/veːnuɡaːnəm/", 
                context: "Divine flute music of Krishna. SPB's voice had the sweet melody of Krishna's flute."
            }
        ],
        advanced: [
            {
                word: "శంకరాభరణం", 
                pronunciation: "[shan-ka-raa-bha-ra-nam]", 
                phonetic: "shan·ka·raa·bha·ra·nam", 
                translation: "Shankarabharanam Raga", 
                category: "Classical Music", 
                romanized: "shankarabharanam", 
                ipa: "/ʃəŋkəraːbʱərəɳəm/", 
                context: "SPB's first National Award winning film. King of ragas in Carnatic music, equivalent to major scale."
            },
            {
                word: "భావప్రకాశన", 
                pronunciation: "[bhaa-va-pra-kaa-sha-na]", 
                phonetic: "bhaa·va·pra·kaa·sha·na", 
                translation: "Expression of Emotions", 
                category: "Arts", 
                romanized: "bhaavaprakaashana", 
                ipa: "/bʱaːvəprəkaːʃənə/", 
                context: "SPB was master of bhavaprakashana - expressing every emotion through his versatile voice."
            },
            {
                word: "అభిరుచి", 
                pronunciation: "[a-bhi-ru-chi]", 
                phonetic: "a·bhi·ru·chi", 
                translation: "Aesthetic Taste", 
                category: "Arts", 
                romanized: "abhiruchi", 
                ipa: "/əbʱirut͡ʃi/", 
                context: "Refined taste in arts. SPB cultivated sophisticated abhiruchi in music across 16 languages."
            },
            {
                word: "ఆలాపన", 
                pronunciation: "[aa-laa-pa-na]", 
                phonetic: "aa·laa·pa·na", 
                translation: "Musical Improvisation", 
                category: "Classical Music", 
                romanized: "aalaapana", 
                ipa: "/aːlaːpənə/", 
                context: "Free-form musical expression. SPB's aalaapanas in classical songs were divine experiences."
            },
            {
                word: "గమకలు", 
                pronunciation: "[ga-ma-ka-lu]", 
                phonetic: "ga·ma·ka·lu", 
                translation: "Musical Ornamentations", 
                category: "Classical Music", 
                romanized: "gamakalu", 
                ipa: "/ɡəməkəlu/", 
                context: "Graceful note bendings. SPB's gamakalu were subtle yet powerful, enhancing melody's beauty."
            },
            {
                word: "బహుభాషీ", 
                pronunciation: "[ba-hu-bhaa-shee]", 
                phonetic: "ba·hu·bhaa·shee", 
                translation: "Multilingual", 
                category: "Language", 
                romanized: "bahubbhaashee", 
                ipa: "/bəɦubʱaːʃiː/", 
                context: "SPB was truly bahubhaashi - singing in 16 languages with perfect pronunciation and emotion."
            },
            {
                word: "కీర్తనలు", 
                pronunciation: "[keer-ta-na-lu]", 
                phonetic: "keer·ta·na·lu", 
                translation: "Devotional Compositions", 
                category: "Devotional", 
                romanized: "keertanalu", 
                ipa: "/kiːrt̪ənəlu/", 
                context: "Sacred compositions praising God. SPB's keertanalu transported listeners to divine realms."
            },
            {
                word: "సంवादిత्व", 
                pronunciation: "[sam-vaa-dit-va]", 
                phonetic: "sam·vaa·dit·va", 
                translation: "Harmonious Resonance", 
                category: "Music Theory", 
                romanized: "samvaaditva", 
                ipa: "/səmvaːdit̪və/", 
                context: "Perfect harmony between notes. SPB achieved samvaaditva between voice, music, and emotions."
            },
            {
                word: "మానసపుత్రిక", 
                pronunciation: "[maa-na-sa-put-ri-ka]", 
                phonetic: "maa·na·sa·put·ri·ka", 
                translation: "Daughter of the Mind", 
                category: "Literature", 
                romanized: "maanasaputrika", 
                ipa: "/maːnəsəput̪rikə/", 
                context: "Creative inspiration born from the heart. SPB's songs were maanasaputrikas of composers."
            },
            {
                word: "ఆధ్యాత్మిక", 
                pronunciation: "[aadh-yaat-mi-ka]", 
                phonetic: "aadh·yaat·mi·ka", 
                translation: "Spiritual", 
                category: "Philosophy", 
                romanized: "aadhyaatmika", 
                ipa: "/aːd̪ʱjaːt̪mikə/", 
                context: "Relating to the soul. SPB's voice had aadhyaatmika power - it touched the deepest spiritual core."
            }
        ]
    },
    sanskrit: {
        beginner: [
            {
                word: "संगीत", 
                pronunciation: "[san-gee-ta]", 
                phonetic: "san·gee·ta", 
                translation: "Music", 
                category: "Arts", 
                romanized: "sangeeta", 
                ipa: "/səŋgiːt̪ə/", 
                context: "Sacred art form that elevates the soul, as demonstrated in SPB's classical renditions."
            },
            {
                word: "भक्ति", 
                pronunciation: "[bhak-ti]", 
                phonetic: "bhak·ti", 
                translation: "Devotion", 
                category: "Spirituality", 
                romanized: "bhakti", 
                ipa: "/bʱəkt̪i/", 
                context: "Pure devotion to the divine, expressed beautifully in SPB's devotional songs."
            },
            {
                word: "राग", 
                pronunciation: "[raa-ga]", 
                phonetic: "raa·ga", 
                translation: "Musical Mode", 
                category: "Music", 
                romanized: "raaga", 
                ipa: "/raːɡə/", 
                context: "Melodic framework in Indian classical music, mastered by SPB across genres."
            },
            {
                word: "स्वर", 
                pronunciation: "[swa-ra]", 
                phonetic: "swa·ra", 
                translation: "Musical Note", 
                category: "Music", 
                romanized: "swara", 
                ipa: "/swərə/", 
                context: "Seven sacred notes Sa Re Ga Ma Pa Dha Ni, which SPB rendered with divine perfection."
            },
            {
                word: "वीणा", 
                pronunciation: "[vee-naa]", 
                phonetic: "vee·naa", 
                translation: "Veena", 
                category: "Instruments", 
                romanized: "veenaa", 
                ipa: "/viːnaː/", 
                context: "Sacred string instrument of Saraswati, symbol of learning and music."
            },
            {
                word: "गुरु", 
                pronunciation: "[gu-ru]", 
                phonetic: "gu·ru", 
                translation: "Teacher", 
                category: "Education", 
                romanized: "guru", 
                ipa: "/ɡuru/", 
                context: "One who dispels darkness of ignorance. SPB was guru to countless musicians."
            },
            {
                word: "शिष्य", 
                pronunciation: "[shish-ya]", 
                phonetic: "shish·ya", 
                translation: "Student", 
                category: "Education", 
                romanized: "shishya", 
                ipa: "/ʃiʂjə/", 
                context: "Dedicated learner in guru-shishya tradition, learning through service and devotion."
            },
            {
                word: "आनंद", 
                pronunciation: "[aa-nan-da]", 
                phonetic: "aa·nan·da", 
                translation: "Bliss", 
                category: "Emotions", 
                romanized: "aananda", 
                ipa: "/aːnəndə/", 
                context: "Pure joy and bliss that SPB's music brought to millions of hearts worldwide."
            }
        ],
        intermediate: [
            {
                word: "सरस्वती", 
                pronunciation: "[sa-ras-va-tee]", 
                phonetic: "sa·ras·va·tee", 
                translation: "Goddess of Learning", 
                category: "Deities", 
                romanized: "sarasvatee", 
                ipa: "/sərəswət̪iː/", 
                context: "Goddess of music, learning and arts. SPB was her blessed devotee."
            },
            {
                word: "गमक", 
                pronunciation: "[ga-ma-ka]", 
                phonetic: "ga·ma·ka", 
                translation: "Musical Ornament", 
                category: "Classical Music", 
                romanized: "gamaka", 
                ipa: "/ɡəməkə/", 
                context: "Graceful note bendings that SPB mastered to perfection in classical renditions."
            },
            {
                word: "आलाप", 
                pronunciation: "[aa-laa-pa]", 
                phonetic: "aa·laa·pa", 
                translation: "Free-form Singing", 
                category: "Classical Music", 
                romanized: "aalaapa", 
                ipa: "/aːlaːpə/", 
                context: "Improvisational exploration of raga, where SPB's genius truly shone."
            },
            {
                word: "तान", 
                pronunciation: "[taa-na]", 
                phonetic: "taa·na", 
                translation: "Fast Musical Passages", 
                category: "Classical Music", 
                romanized: "taana", 
                ipa: "/t̪aːnə/", 
                context: "Rapid melodic runs that showcase vocal agility, SPB's specialty."
            },
            {
                word: "भाव", 
                pronunciation: "[bhaa-va]", 
                phonetic: "bhaa·va", 
                translation: "Emotion/Expression", 
                category: "Arts", 
                romanized: "bhaava", 
                ipa: "/bʱaːvə/", 
                context: "Emotional expression that SPB conveyed through every note he sang."
            }
        ],
        advanced: [
            {
                word: "रागगमक", 
                pronunciation: "[raa-ga-ga-ma-ka]", 
                phonetic: "raa·ga·ga·ma·ka", 
                translation: "Raga with Ornamentations", 
                category: "Classical Music", 
                romanized: "raagagamaka", 
                ipa: "/raːɡəɡəməkə/", 
                context: "Complex classical technique combining raga structure with ornamental phrases."
            },
            {
                word: "स्वरसाधना", 
                pronunciation: "[swa-ra-saa-dha-naa]", 
                phonetic: "swa·ra·saa·dha·naa", 
                translation: "Voice Training Practice", 
                category: "Music Practice", 
                romanized: "swarasaadhanaa", 
                ipa: "/swərəsaːd̪ʱənaː/", 
                context: "Dedicated practice of vocal techniques that made SPB the legend he was."
            },
            {
                word: "आध्यात्मिक", 
                pronunciation: "[aadh-yaat-mi-ka]", 
                phonetic: "aadh·yaat·mi·ka", 
                translation: "Spiritual", 
                category: "Philosophy", 
                romanized: "aadhyaatmika", 
                ipa: "/aːd̪ʱjaːt̪mikə/", 
                context: "Pertaining to the soul - the essence of SPB's deeply moving spiritual songs."
            }
        ]
    }
};

// SPB-inspired pronunciation tips for Telugu learning
const spbPronunciationTips = {
    general: [
        "SPB's secret: Breathe from diaphragm for sustained, clear pronunciation",
        "Practice with emotion - feeling helps correct pronunciation flow naturally", 
        "Listen to classical Telugu songs for authentic accent patterns",
        "SPB emphasized pure vowel sounds - practice 'aa', 'ee', 'oo' clearly",
        "Consonant clusters in Telugu need gentle separation, like SPB's style"
    ],
    
    techniques: [
        "Start slow like SPB's classical training - speed comes with accuracy",
        "Use 'ma' sound for pitch practice - it opens the mouth correctly",
        "SPB's tip: Practice scales (sa-re-ga-ma) for better tone quality",
        "Record yourself and compare with native speakers",
        "Practice with lyrics from devotional songs - they have pure pronunciation"
    ],
    
    difficult_sounds: [
        "Retroflex sounds (టి, డి, ణి): Curl tongue back like SPB's classical training",
        "Aspirated consonants (భ, ధ, థ): Add breath like SPB's dramatic expressions",
        "Long vowels (కా, గీ, పూ): Hold for full duration like sustained musical notes",
        "Conjunct consonants: Practice slowly, don't rush like SPB's careful articulation"
    ]
};

// Musical pronunciation exercises inspired by SPB
const musicalExercises = [
    {
        exercise: "Sa-Re-Ga-Ma with Telugu Vowels",
        practice: "సా-రె-గా-మా-పా-ధా-నీ-సా",
        tip: "Practice like musical scales for better vowel clarity"
    },
    {
        exercise: "Consonant + Vowel Combinations",
        practice: "కా-కి-కీ-కు-కూ-కె-కే-కై-కో-కౌ",
        tip: "Each combination should be clear and distinct like SPB's pronunciation"
    },
    {
        exercise: "Devotional Word Practice",
        practice: "గోవింద-గోవింద-గోపాల-గోపాల",
        tip: "Repeat with devotion for natural flow and emotion"
    }
];

// Export enhanced data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        vocabularyData, 
        spbPronunciationTips, 
        musicalExercises 
    };
}
