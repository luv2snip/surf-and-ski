/* ========================================
   Surf & Ski - Ski Gear Data
   ======================================== */

const skiGear = [
    {
        id: "skis-allmountain",
        category: "Skis",
        name: "All-Mountain Skis",
        description: "Versatile skis for various conditions",
        priceRange: { min: 400, max: 900 },
        level: "intermediate"
    },
    {
        id: "skis-freeride",
        category: "Skis",
        name: "Freeride Skis",
        description: "Wide skis for powder and off-piste skiing",
        priceRange: { min: 500, max: 1200 },
        level: "advanced"
    },
    {
        id: "boots-comfort",
        category: "Boots",
        name: "Comfort Ski Boots",
        description: "Easy entry boots with good warmth",
        priceRange: { min: 200, max: 400 },
        level: "beginner"
    },
    {
        id: "boots-performance",
        category: "Boots",
        name: "Performance Ski Boots",
        description: "Precise fit for advanced skiers",
        priceRange: { min: 350, max: 700 },
        level: "advanced"
    },
    {
        id: "helmet-basic",
        category: "Protection",
        name: "Ski Helmet",
        description: "Essential head protection with ventilation",
        priceRange: { min: 60, max: 200 },
        level: "all"
    },
    {
        id: "goggles-allweather",
        category: "Protection",
        name: "All-Weather Goggles",
        description: "Interchangeable lenses for all conditions",
        priceRange: { min: 80, max: 250 },
        level: "all"
    }
];

// Helper function to find gear by ID
function getGearById(id) {
    return skiGear.find(g => g.id === id);
}

// Helper function to filter gear by category
function getGearByCategory(category) {
    return skiGear.filter(g => g.category === category);
}
