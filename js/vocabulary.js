// Digital Gurukulam - Vocabulary Data
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
                context: "A respectful greeting combining 'namas' (bow) and 'karam' (doing), expressing reverence and humility in traditional Indian culture."
            },
            {
                word: "ధన్యవాదాలు", 
                pronunciation: "[dhan-ya-vaa-daa-lu]", 
                phonetic: "dhan·ya·vaa·daa·lu", 
                translation: "Thank you", 
                category: "Politeness", 
                romanized: "dhanyavaadaalu", 
                ipa: "/d̪ʰʌn̪jʌvaːd̪aːlu/", 
                context: "Expresses gratitude; 'dhanya' means blessed, showing appreciation makes one blessed."
            },
            {
                word: "వీడ్కోలు", 
                pronunciation: "[veed-ko-lu]", 
                phonetic: "veed·ko·lu", 
                translation: "Goodbye", 
                category: "Greetings", 
                romanized: "veedkolu", 
                ipa: "/viːɖkoːlu/", 
                context: "A formal farewell wishing well-being until the next meeting."
            },
            {
                word: "దయచేసి", 
                pronunciation: "[da-ya-chey-si]", 
                phonetic: "da·ya·chey·si", 
                translation: "Please", 
                category: "Politeness", 
                romanized: "dayachesi", 
                ipa: "/d̪ʌjʌt͡ʃeːsi/", 
                context: "Shows respect when making requests; literally means 'with kindness'."
            },
            {
                word: "క్షమించండి", 
                pronunciation: "[ksha-min-chan-di]", 
                phonetic: "ksha·min·chan·di", 
                translation: "Sorry/Excuse me", 
                category: "Politeness", 
                romanized: "kshaminchandii", 
                ipa: "/kʂʌmint͡ʃʌndi/", 
                context: "Used for apologies and to politely get attention."
            },
            {
                word: "నీళ్లు", 
                pronunciation: "[neel-lu]", 
                phonetic: "neel·lu", 
                translation: "Water", 
                category: "Basic Needs", 
                romanized: "neellu", 
                ipa: "/niːɭu/", 
                context: "Essential for life; in Telugu culture, offering water to guests is a sacred duty."
            },
            {
                word: "అన్నం", 
                pronunciation: "[an-nam]", 
                phonetic: "an·nam", 
                translation: "Rice/Food", 
                category: "Food", 
                romanized: "annam", 
                ipa: "/ʌnnʌm/", 
                context: "Rice is the staple food; 'annam' also means food in general, considered sacred."
            },
            {
                word: "ఇల్లు", 
                pronunciation: "[il-lu]", 
                phonetic: "il·lu", 
                translation: "House", 
                category: "Places", 
                romanized: "illu", 
                ipa: "/illu/", 
                context: "Home is considered sacred in Indian culture, where family bonds are strongest."
            }
        ],
        intermediate: [
            {
                word: "ప్రేమ", 
                pronunciation: "[prey-ma]", 
                phonetic: "prey·ma", 
                translation: "Love", 
                category: "Emotions", 
                romanized: "prema", 
                ipa: "/preːmʌ/", 
                context: "Pure, unconditional love; also divine love in spiritual contexts."
            },
            {
                word: "సమయం", 
                pronunciation: "[sa-ma-yam]", 
                phonetic: "sa·ma·yam", 
                translation: "Time", 
                category: "Concepts", 
                romanized: "samayam", 
                ipa: "/sʌmʌjʌm/", 
                context: "Time is considered precious in Indian philosophy; 'time and tide wait for none'."
            },
            {
                word: "కుటుంబం", 
                pronunciation: "[ku-tum-bam]", 
                phonetic: "ku·tum·bam", 
                translation: "Family", 
                category: "People", 
                romanized: "kutumbam", 
                ipa: "/kuʈumbʌm/", 
                context: "Family is the foundation of Indian society; includes extended family members."
            },
            {
                word: "విద్యార్థి", 
                pronunciation: "[vid-yaar-thi]", 
                phonetic: "vid·yaar·thi", 
                translation: "Student", 
                category: "Education", 
                romanized: "vidyaarthi", 
                ipa: "/vid̪jaːrt̪ʰi/", 
                context: "One who seeks knowledge; students are highly respected in Indian tradition."
            },
            {
                word: "ఉపాధ్యాయుడు", 
                pronunciation: "[u-paa-dhyaa-yu-du]", 
                phonetic: "u·paa·dhyaa·yu·du", 
                translation: "Teacher", 
                category: "Education", 
                romanized: "upaadhyaayudu", 
                ipa: "/upaːd̪ʰjaːjuɖu/", 
                context: "Teachers are revered as gurus; 'Guru Brahma Guru Vishnu' - teachers are divine."
            },
            {
                word: "వైద్యుడు", 
                pronunciation: "[vai-dyu-du]", 
                phonetic: "vai·dyu·du", 
                translation: "Doctor", 
                category: "Professions", 
                romanized: "vaidyudu", 
                ipa: "/vaid̪juɖu/", 
                context: "Healers are respected; Ayurveda is the traditional Indian medical system."
            },
            {
                word: "పుస్తకం", 
                pronunciation: "[pus-ta-kam]", 
                phonetic: "pus·ta·kam", 
                translation: "Book", 
                category: "Education", 
                romanized: "pustakam", 
                ipa: "/pustʌkʌm/", 
                context: "Books are treated with reverence; before reading, one pays respects to Saraswati."
            },
            {
                word: "సంగీతం", 
                pronunciation: "[san-gee-tam]", 
                phonetic: "san·gee·tam", 
                translation: "Music", 
                category: "Arts", 
                romanized: "sangeetam", 
                ipa: "/sʌngiːt̪ʌm/", 
                context: "Music is divine; classical Indian music is considered a path to moksha."
            }
        ],
        advanced: [
            {
                word: "అభిప్రాయం", 
                pronunciation: "[a-bhi-praa-yam]", 
                phonetic: "a·bhi·praa·yam", 
                translation: "Opinion", 
                category: "Abstract", 
                romanized: "abhipraayam", 
                ipa: "/ʌbʰipraːjʌm/", 
                context: "Personal viewpoint; in discussions, all opinions are valued in Indian tradition."
            },
            {
                word: "సాంస్కృతిక", 
                pronunciation: "[saan-skru-ti-ka]", 
                phonetic: "saan·skru·ti·ka", 
                translation: "Cultural", 
                category: "Society", 
                romanized: "saanskrutika", 
                ipa: "/saːnskɾut̪ikʌ/", 
                context: "Related to culture and traditions passed down through generations."
            },
            {
                word: "వ్యాపారం", 
                pronunciation: "[vyaa-paa-ram]", 
                phonetic: "vyaa·paa·ram", 
                translation: "Business", 
                category: "Economy", 
                romanized: "vyaapaaram", 
                ipa: "/vjaːpaːrʌm/", 
                context: "Trade and commerce; India has ancient trade traditions with the world."
            },
            {
                word: "రాజకీయం", 
                pronunciation: "[raa-ja-kee-yam]", 
                phonetic: "raa·ja·kee·yam", 
                translation: "Politics", 
                category: "Government", 
                romanized: "raajakeyam", 
                ipa: "/raːd͡ʒʌkiːjʌm/", 
                context: "Governance; ancient Indian texts like Arthashastra discuss political science."
            },
            {
                word: "పర్యావరణం", 
                pronunciation: "[par-yaa-va-ra-nam]", 
                phonetic: "par·yaa·va·ra·nam", 
                translation: "Environment", 
                category: "Nature", 
                romanized: "paryaavaranam", 
                ipa: "/pʌrjaːvʌrʌɳʌm/", 
                context: "Nature worship is central to Indian philosophy; 'Vasudhaiva Kutumbakam'."
            },
            {
                word: "సాంకేతికత", 
                pronunciation: "[saan-key-ti-ka-ta]", 
                phonetic: "saan·key·ti·ka·ta", 
                translation: "Technology", 
                category: "Modern", 
                romanized: "saanketikta", 
                ipa: "/saːnkeːt̪ikʌt̪ʌ/", 
                context: "Modern technology blending with ancient wisdom and traditions."
            }
        ]
    },
    sanskrit: {
        beginner: [
            {
                word: "नमस्ते", 
                pronunciation: "[na-mas-te]", 
                phonetic: "na·mas·te", 
                translation: "Hello/Greetings", 
                category: "Greetings", 
                romanized: "namaste", 
                ipa: "/nʌməsteː/", 
                context: "Sacred greeting meaning 'I bow to you'; acknowledges the divine in another person."
            },
            {
                word: "धन्यवाद", 
                pronunciation: "[dhan-ya-vaad]", 
                phonetic: "dhan·ya·vaad", 
                translation: "Thank you", 
                category: "Politeness", 
                romanized: "dhanyavaad", 
                ipa: "/d̪ʰʌnjəvaːd̪/", 
                context: "Expressing gratitude; 'dhanya' means blessed, fortunate."
            },
            {
                word: "विदाई", 
                pronunciation: "[vi-daa-ee]", 
                phonetic: "vi·daa·ee", 
                translation: "Farewell", 
                category: "Greetings", 
                romanized: "vidaayee", 
                ipa: "/vid̪aːiː/", 
                context: "Respectful goodbye; often accompanied by blessings."
            },
            {
                word: "कृपया", 
                pronunciation: "[kri-pa-ya]", 
                phonetic: "kri·pa·ya", 
                translation: "Please", 
                category: "Politeness", 
                romanized: "kripaya", 
                ipa: "/kɾipəjə/", 
                context: "Request with humility; 'kripa' means grace, mercy."
            },
            {
                word: "क्षमा", 
                pronunciation: "[ksha-ma]", 
                phonetic: "ksha·ma", 
                translation: "Forgiveness", 
                category: "Politeness", 
                romanized: "kshama", 
                ipa: "/kʂəmaː/", 
                context: "One of divine qualities; forgiveness is strength, not weakness."
            },
            {
                word: "जल", 
                pronunciation: "[ja-la]", 
                phonetic: "ja·la", 
                translation: "Water", 
                category: "Elements", 
                romanized: "jala", 
                ipa: "/d͡ʒələ/", 
                context: "Sacred element; rivers are worshipped as goddesses in Hinduism."
            },
            {
                word: "अन्न", 
                pronunciation: "[an-na]", 
                phonetic: "an·na", 
                translation: "Food/Grain", 
                category: "Food", 
                romanized: "anna", 
                ipa: "/ənna/", 
                context: "Food is considered sacred; 'Annam Brahma' - food is divine."
            },
            {
                word: "गृह", 
                pronunciation: "[gri-ha]", 
                phonetic: "gri·ha", 
                translation: "Home", 
                category: "Places", 
                romanized: "griha", 
                ipa: "/gɾiha/", 
                context: "Sacred space where family traditions are maintained and passed on."
            }
        ],
        intermediate: [
            {
                word: "प्रेम", 
                pronunciation: "[pre-ma]", 
                phonetic: "pre·ma", 
                translation: "Divine Love", 
                category: "Emotions", 
                romanized: "prema", 
                ipa: "/preːma/", 
                context: "Pure, selfless love; the highest form of emotion in spiritual practice."
            },
            {
                word: "काल", 
                pronunciation: "[kaa-la]", 
                phonetic: "kaa·la", 
                translation: "Time", 
                category: "Philosophy", 
                romanized: "kaala", 
                ipa: "/kaːla/", 
                context: "Time as cosmic principle; also represents death and transformation."
            },
            {
                word: "कुटुम्ब", 
                pronunciation: "[ku-tum-ba]", 
                phonetic: "ku·tum·ba", 
                translation: "Family", 
                category: "Relations", 
                romanized: "kutumba", 
                ipa: "/kuʈumba/", 
                context: "Extended family; basis of 'Vasudhaiva Kutumbakam' - world is one family."
            },
            {
                word: "शिष्य", 
                pronunciation: "[shish-ya]", 
                phonetic: "shish·ya", 
                translation: "Disciple", 
                category: "Education", 
                romanized: "shishya", 
                ipa: "/ʃiʂja/", 
                context: "Student in guru-shishya tradition; learning through service and devotion."
            },
            {
                word: "गुरु", 
                pronunciation: "[gu-ru]", 
                phonetic: "gu·ru", 
                translation: "Teacher/Master", 
                category: "Education", 
                romanized: "guru", 
                ipa: "/guɾu/", 
                context: "Spiritual teacher; 'Gu' means darkness, 'Ru' means light - one who removes ignorance."
            },
            {
                word: "वैद्य", 
                pronunciation: "[vai-dya]", 
                phonetic: "vai·dya", 
                translation: "Physician", 
                category: "Professions", 
                romanized: "vaidya", 
                ipa: "/vaid̪ja/", 
                context: "Traditional healer; Ayurveda practitioners who treat body, mind, and spirit."
            },
            {
                word: "शास्त्र", 
                pronunciation: "[shaas-tra]", 
                phonetic: "shaas·tra", 
                translation: "Scripture", 
                category: "Knowledge", 
                romanized: "shaastra", 
                ipa: "/ʃaːstra/", 
                context: "Sacred texts containing eternal wisdom and knowledge."
            },
            {
                word: "संगीत", 
                pronunciation: "[san-gee-ta]", 
                phonetic: "san·gee·ta", 
                translation: "Music", 
                category: "Arts", 
                romanized: "sangeeta", 
                ipa: "/səŋgiːt̪a/", 
                context: "Sacred art form; classical music is considered a spiritual practice."
            }
        ],
        advanced: [
            {
                word: "दर्शन", 
                pronunciation: "[dar-sha-na]", 
                phonetic: "dar·sha·na", 
                translation: "Philosophy", 
                category: "Philosophy", 
                romanized: "darshana", 
                ipa: "/d̪arʃana/", 
                context: "Systems of Indian philosophy; literally means 'vision' or 'seeing truth'."
            },
            {
                word: "संस्कृति", 
                pronunciation: "[sans-kri-ti]", 
                phonetic: "sans·kri·ti", 
                translation: "Culture", 
                category: "Society", 
                romanized: "sanskriti", 
                ipa: "/sənskɾit̪i/", 
                context: "Refined culture; literally means 'perfectly formed' or 'well-cultured'."
            },
            {
                word: "व्यापार", 
                pronunciation: "[vyaa-paa-ra]", 
                phonetic: "vyaa·paa·ra", 
                translation: "Trade", 
                category: "Economy", 
                romanized: "vyaapaara", 
                ipa: "/vjaːpaːra/", 
                context: "Ancient trade traditions; India was center of global commerce."
            },
            {
                word: "राजनीति", 
                pronunciation: "[raa-ja-nee-ti]", 
                phonetic: "raa·ja·nee·ti", 
                translation: "Politics", 
                category: "Governance", 
                romanized: "raajaneetii", 
                ipa: "/raːd͡ʒaniːt̪i/", 
                context: "Science of governance; ancient texts like Arthashastra detail political philosophy."
            },
            {
                word: "प्रकृति", 
                pronunciation: "[pra-kri-ti]", 
                phonetic: "pra·kri·ti", 
                translation: "Nature", 
                category: "Philosophy", 
                romanized: "prakriti", 
                ipa: "/prakɾit̪i/", 
                context: "Primordial nature; the creative force of the universe in Samkhya philosophy."
            },
            {
                word: "तकनीकी", 
                pronunciation: "[tak-nee-kee]", 
                phonetic: "tak·nee·kee", 
                translation: "Technical", 
                category: "Modern", 
                romanized: "takneekee", 
                ipa: "/t̪akniːkiː/", 
                context: "Modern adaptation; Sanskrit evolves to include contemporary concepts."
            }
        ]
    }
};
