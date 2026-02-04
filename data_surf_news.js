/* ========================================
   Surf & Ski - Surf News Data
   (Placeholder for future development)
   ======================================== */

const surfNews = [
    // Data will be added when surf section is developed
];

// Helper function to find news by ID
function getSurfNewsById(id) {
    return surfNews.find(n => n.id === id);
}

// Helper function to get featured surf news
function getFeaturedSurfNews() {
    return surfNews.filter(n => n.featured);
}
