// Digital Gurukulam - Stories Data
const stories = [
    {
        title: "The Wise Sage and the Arrogant Scholar",
        content: "Once upon a time, there was a great sage who lived in a simple ashram in the foothills of the Himalayas. A proud scholar visited him, speaking in complex Sanskrit verses to show his vast knowledge. The sage listened quietly, then offered him water in a broken clay pot. The scholar refused, saying 'I cannot drink from such a humble vessel.' The sage smiled and said, 'Knowledge, like water, takes the shape of its container. If the container is filled with pride, even the purest knowledge becomes bitter.' The scholar realized his arrogance and bowed before the sage, asking to be his student.",
        moral: "True wisdom lies in humility. Knowledge without humility is like a lamp without oil - it cannot give light to others. As the ancient saying goes: 'विद्या ददाति विनयं' - Knowledge bestows humility.",
        sanskritQuote: "विद्या ददाति विनयं",
        sanskritTranslation: "Knowledge bestows humility"
    },
    {
        title: "The Banyan Tree and the Reed",
        content: "A mighty banyan tree stood proud in a field, boasting about its strength to a humble reed nearby. 'Look at me,' said the banyan, 'I am strong and mighty. You are so weak that even a gentle breeze can bend you.' The reed replied humbly, 'You are indeed strong, great tree.' One day, a fierce storm came. The proud banyan tree, refusing to bend, was uprooted by the powerful winds. But the humble reed, bending with the wind, survived the storm unharmed.",
        moral: "Flexibility and humility often triumph over rigid pride. Those who bend do not break. As Krishna says in the Gita: 'नम्रता परम बल है' - Humility is the greatest strength.",
        sanskritQuote: "नम्रता परम बल है",
        sanskritTranslation: "Humility is the greatest strength"
    },
    {
        title: "The Student and the Master's Teaching",
        content: "A young student approached a learned master and said, 'I want to learn everything you know.' The master took him to a well and said, 'First, you must learn to draw water.' The student was disappointed, thinking this was too simple. For months, he drew water daily, growing frustrated. One day, he noticed that the rope had slowly worn a groove in the stone well. He understood: consistent practice, even of simple things, creates lasting change. He bowed to his master with newfound respect.",
        moral: "Great achievements come from consistent small efforts. Even water can cut through stone with persistence. 'अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते' - Through practice and detachment, all things can be achieved.",
        sanskritQuote: "अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते",
        sanskritTranslation: "Through practice and detachment, all can be achieved"
    },
    {
        title: "The Potter and the Clay",
        content: "A master potter worked with two lumps of clay. One piece of clay complained, 'Why do you keep pressing and shaping me? It hurts!' The other clay remained silent, accepting the potter's touch. The complaining clay became hard and cracked, unusable. The silent clay became a beautiful pot, capable of holding pure water. When asked about the difference, the potter said, 'One resisted the process of becoming; the other surrendered to it.'",
        moral: "Growth requires accepting life's challenges with grace. Resistance creates suffering, while acceptance leads to transformation. 'तत्त्वमसि' - Thou art That - we are all being shaped by divine hands.",
        sanskritQuote: "तत्त्वमसि",
        sanskritTranslation: "Thou art That"
    },
    {
        title: "The Lamp and the Darkness",
        content: "A small oil lamp was placed in a vast dark cave. The darkness mocked the lamp, saying, 'You are so tiny! How can you possibly dispel me? I have been here for thousands of years.' The lamp replied quietly, 'I do not fight you. I simply shine my light.' As soon as the lamp was lit, the ancient darkness vanished completely. The lamp continued to burn peacefully, illuminating the entire cave.",
        moral: "Light naturally dispels darkness without struggle. Knowledge eliminates ignorance not through conflict, but through presence. 'तमसो मा ज्योतिर्गमय' - Lead us from darkness to light.",
        sanskritQuote: "तमसो मा ज्योतिर्गमय",
        sanskritTranslation: "Lead us from darkness to light"
    },
    {
        title: "The Two Birds",
        content: "Two birds lived on the same tree. One bird constantly worried about finding food, building nests, and protecting territory. The other bird simply watched, peaceful and content. The worried bird asked, 'Why don't you struggle like me? Don't you need food and shelter?' The peaceful bird replied, 'I am fed by the same source that feeds you. I am sheltered by the same sky that covers you. I watch the divine play while you are lost in it.'",
        moral: "There are two aspects of our nature: the doer and the observer. When we identify with the observer, we find peace beyond action. 'द्वा सुपर्णा सयुजा सखाया' - Two birds, united friends, dwell on the same tree.",
        sanskritQuote: "द्वा सुपर्णा सयुजा सखाया",
        sanskritTranslation: "Two birds, united friends, dwell on the same tree"
    },
    {
        title: "The Ocean and the Waves",
        content: "Many waves danced on the ocean's surface. Each wave thought it was separate and important. 'I am the biggest!' claimed one. 'I am the most beautiful!' boasted another. They competed and crashed against each other. An old wave, about to merge back into the ocean, whispered to them, 'Dear friends, we are all just the ocean playing. When you realize this, there is no more fear, no more competition, only joy in the eternal dance.'",
        moral: "Individual identity is temporary; our true nature is universal. When we realize our oneness with the whole, ego dissolves into love. 'अहं ब्रह्मास्मि' - I am Brahman, the universal spirit.",
        sanskritQuote: "अहं ब्रह्मास्मि",
        sanskritTranslation: "I am Brahman (the universal spirit)"
    },
    {
        title: "The Seed's Journey",
        content: "A seed was comfortable in the earth's darkness. When told it needed to grow, it protested, 'But I like it here! It's safe and familiar.' Life said, 'You must leave what you know to become what you are meant to be.' Reluctantly, the seed began to grow. It broke through the soil into bright light, feeling scared and exposed. But as it grew into a mighty tree, it understood that its apparent death as a seed was actually its birth as something magnificent.",
        moral: "Spiritual growth requires leaving comfort zones. What seems like death to the ego is birth to the soul. 'मृत्योर्मा अमृतं गमय' - Lead us from death to immortality.",
        sanskritQuote: "मृत्योर्मा अमृतं गमय",
        sanskritTranslation: "Lead us from death to immortality"
    }
];

// Function to get a random story
function getRandomStory() {
    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
}

// Function to get story by index
function getStoryByIndex(index) {
    if (index >= 0 && index < stories.length) {
        return stories[index];
    }
    return stories[0]; // Return first story if index is invalid
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { stories, getRandomStory, getStoryByIndex };
}
