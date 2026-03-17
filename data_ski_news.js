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
        relatedResorts: ["Courchevel"]
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
