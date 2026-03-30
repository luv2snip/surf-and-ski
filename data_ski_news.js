/* ========================================
   Surf & Ski - Ski News Data
   ======================================== */

const skiNews = [
    {
        id: "heavy-snowfall-alps-2026",
        title: "The end of an era",
        subtitle: "Alexis Pinturault's retirement",
        date: "2026-03-14",
        author: "Matthieu",
        category: "News",
        featured: true,
        image: null,
        summary: "Alexis Pinturault announces retirement from World Cup skiing",
        content: `
            <p>On the 14th of March 2026, during a press conference in Courchevel, the well-known local athlete Alexis Pinturault announced that he was retiring, ending his career at the end of the 2025-2026 season. He confirmed on social media that his last race would take place on the 24th of March 2026 during the World Cup Finals in Norway.
During his career, Alexis Pinturault achieved 34 victories in the World Cup, 77 podiums and 355 starts. He is the most decorated French skier in the history of the World Cup. He is also a triple Olympic medalist, and participated in seven World Championships, winning eight medals including three titles.
But why is he retiring now? Alexis Pinturault was held back by two serious injuries over the past winters, which prevented him from qualifying for the 2026 Milan-Cortina Winter Olympics in February. Those Games, taking place in the Alps for the first time in his career, had been his main motivation to keep competing. Without that goal, he decided it was the right time to move on.
His last race on French soil was unfortunately cancelled, as heavy snowfall made the Courchevel super-G course unsafe to race on the day after his announcement.
</p>
        `,
        relatedResorts: ["courchevel"]
    },
    {
        id: "vail-resorts-worst-season-2026",
        title: "Vail Resorts Reports Worst Season in Over 30 Years",
        subtitle: "Historic snow drought hits the world's largest ski resort group",
        date: "2026-03-09",
        author: "Matthieu",
        category: "News",
        featured: true,
        image: null,
        summary: "Vail Resorts reported its worst season in over 30 years, with skier visits down 11.9% due to a historic snow drought across Colorado and Utah.",
        content: `
            <p>On the 9th of March 2026, Vail Resorts, the world's largest ski resort group, reported its worst season in over 30 years. According to the company's official financial results, skier visits across its North American resorts were down 11.9% compared to the previous year, with the CEO Rob Katz describing it as "the most challenging winter across the Rockies we have ever experienced."</p>

            <p>The cause is straightforward: a historic snow drought. Colorado and Utah, which represent the company's biggest revenue generators, recorded their lowest snowfall levels since the early 1980s. Combined with unusually warm temperatures, only 70 to 80 percent of the terrain was open for much of the season. The financial consequences were significant: resort net revenue dropped by $53.2 million in the second quarter alone, and ski school, dining and rental revenues all fell between 5 and 9 percent.</p>

            <p>However, the damage was partly contained thanks to the Epic Pass model. By selling annual passes months before the season begins, Vail locks in roughly 75% of its visits in advance. As a result, lift revenue only declined by 3.6%, far less than the drop in actual visitors. The company also benefited from its geographic diversification across 42 resorts worldwide, as the Northeast enjoyed one of its best seasons on record while the West struggled.</p>

            <p>The bigger picture, though, is harder to ignore. California ski resorts are now facing a historic heatwave this week, with forecasters warning that most slopes below 8,000 feet could lose all remaining snow before April. Vail has invested over $100 million in snowmaking infrastructure since 2015, but the question the industry can no longer avoid is whether artificial snow can be a long term solution, or just a temporary fix for a deepening climate problem.</p>
        `,
        relatedResorts: []
    }
];

// Helper function to find news by ID
function getNewsById(id) {
    return skiNews.find(n => n.id === id);
}

// Helper function to get featured news
function getFeaturedNews() {
    return skiNews.filter(n => n.featured);
}

// Helper function to get news by category
function getNewsByCategory(category) {
    return skiNews.filter(n => n.category === category);
}
