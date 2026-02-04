/* ========================================
   Surf & Ski - Surf Gear Data
   ======================================== */

const surfGear = [
    // BEGINNER SURF GEAR
    {
        id: "board-foam-beginner",
        category: "Surfboard",
        name: "Foam Soft-Top Longboard",
        description: "Safe, stable foam board perfect for learning. High volume for easy paddling and catching waves.",
        priceRange: { min: 150, max: 300 },
        level: "beginner",
        features: ["8-9 ft", "Foam deck", "Stable"],
        brands: ["Wavestorm", "Catch Surf", "BIC Sport"]
    },
    {
        id: "wetsuit-beginner",
        category: "Wetsuit",
        name: "Entry-Level Fullsuit",
        description: "3/2mm wetsuit for mild to warm water. Back zip for easy entry.",
        priceRange: { min: 100, max: 200 },
        level: "beginner",
        features: ["3/2mm", "Back zip", "Comfortable"],
        brands: ["O'Neill Reactor", "Rip Curl Omega", "Quiksilver Prologue"]
    },
    {
        id: "leash-beginner",
        category: "Accessories",
        name: "Standard Surf Leash",
        description: "7-9ft leash appropriate for longboards. Essential safety gear.",
        priceRange: { min: 20, max: 40 },
        level: "beginner",
        features: ["7-9 ft", "Comfortable cuff", "Strong swivel"],
        brands: ["FCS", "Dakine", "Creatures of Leisure"]
    },
    {
        id: "wax-beginner",
        category: "Accessories",
        name: "Surf Wax Kit",
        description: "Temperature-specific wax for grip. Includes base coat and top coat.",
        priceRange: { min: 5, max: 15 },
        level: "beginner",
        features: ["Multi-temp", "Base + top coat", "Easy apply"],
        brands: ["Sex Wax", "Sticky Bumps", "Bubble Gum"]
    },

    // INTERMEDIATE SURF GEAR
    {
        id: "board-funboard",
        category: "Surfboard",
        name: "Funboard/Mini-Mal",
        description: "Versatile 7-8ft board for progressing surfers. Good paddle power with more maneuverability.",
        priceRange: { min: 350, max: 600 },
        level: "intermediate",
        features: ["7-8 ft", "Epoxy/PU", "Versatile"],
        brands: ["Torq", "NSP", "Channel Islands"]
    },
    {
        id: "board-fish",
        category: "Surfboard",
        name: "Fish Surfboard",
        description: "Retro fish design for small to medium waves. Extra volume for paddle power.",
        priceRange: { min: 400, max: 700 },
        level: "intermediate",
        features: ["5'6-6'2", "Twin/quad fin", "Fast paddle"],
        brands: ["Lost", "Firewire", "Channel Islands"]
    },
    {
        id: "wetsuit-intermediate",
        category: "Wetsuit",
        name: "Performance Fullsuit",
        description: "4/3mm or 3/2mm with front/chest zip. Better flexibility and warmth.",
        priceRange: { min: 200, max: 400 },
        level: "intermediate",
        features: ["Chest zip", "Sealed seams", "Flexible"],
        brands: ["O'Neill Hyperfreak", "Rip Curl Flashbomb", "Xcel Drylock"]
    },
    {
        id: "fins-intermediate",
        category: "Fins",
        name: "Performance Fin Set",
        description: "Thruster or quad fin setup. Fiberglass/composite for better response.",
        priceRange: { min: 80, max: 150 },
        level: "intermediate",
        features: ["Fiberglass", "FCS II/Futures", "Responsive"],
        brands: ["FCS", "Futures", "Captain Fin"]
    },

    // ADVANCED SURF GEAR
    {
        id: "board-shortboard",
        category: "Surfboard",
        name: "High-Performance Shortboard",
        description: "Pro-level shortboard for advanced maneuvers. Custom dims available.",
        priceRange: { min: 500, max: 900 },
        level: "advanced",
        features: ["5'8-6'4", "Performance shape", "Light glass"],
        brands: ["Channel Islands", "JS Industries", "Pyzel"]
    },
    {
        id: "board-step-up",
        category: "Surfboard",
        name: "Step-Up / Gun",
        description: "For bigger, more powerful waves. Extra length and volume for paddle-in.",
        priceRange: { min: 600, max: 1000 },
        level: "advanced",
        features: ["6'6-8'0", "Pin tail", "Hold at speed"],
        brands: ["DHD", "Rusty", "Sharp Eye"]
    },
    {
        id: "wetsuit-advanced",
        category: "Wetsuit",
        name: "Premium Performance Suit",
        description: "Top-of-line wetsuit with maximum stretch and warmth. Japanese neoprene.",
        priceRange: { min: 400, max: 700 },
        level: "advanced",
        features: ["Premium neoprene", "Zipperless", "Max flex"],
        brands: ["O'Neill Psycho Tech", "Rip Curl E-Bomb", "Vissla High Seas"]
    },
    {
        id: "fins-advanced",
        category: "Fins",
        name: "Pro Carbon Fins",
        description: "Lightweight carbon fins for maximum performance. Tour-proven designs.",
        priceRange: { min: 150, max: 300 },
        level: "advanced",
        features: ["Carbon", "Ultra-light", "Pro design"],
        brands: ["FCS II Accelerator", "Futures Alpha", "Shapers"]
    },

    // ACCESSORIES - ALL LEVELS
    {
        id: "boardbag",
        category: "Accessories",
        name: "Surfboard Bag",
        description: "Protect your board during transport. Day bag or travel bag options.",
        priceRange: { min: 40, max: 200 },
        level: "all",
        features: ["Padded", "UV protection", "Various sizes"],
        brands: ["FCS", "Dakine", "Channel Islands"]
    },
    {
        id: "rashguard",
        category: "Apparel",
        name: "Rash Guard",
        description: "UV protection and anti-chafe. Short or long sleeve options.",
        priceRange: { min: 25, max: 60 },
        level: "all",
        features: ["UPF 50+", "Quick dry", "Comfortable"],
        brands: ["Rip Curl", "O'Neill", "Billabong"]
    },
    {
        id: "booties",
        category: "Accessories",
        name: "Surf Booties",
        description: "Keep feet warm in cold water. Thin sole for board feel.",
        priceRange: { min: 40, max: 100 },
        level: "all",
        features: ["3-5mm", "Split toe", "Grippy sole"],
        brands: ["O'Neill", "Xcel", "Rip Curl"]
    },
    {
        id: "hood",
        category: "Accessories",
        name: "Wetsuit Hood",
        description: "Essential for cold water surfing. Integrated or separate options.",
        priceRange: { min: 30, max: 70 },
        level: "all",
        features: ["3mm", "Sealed seams", "Comfortable"],
        brands: ["O'Neill", "Xcel", "Patagonia"]
    },
    {
        id: "gloves-surf",
        category: "Accessories",
        name: "Surf Gloves",
        description: "Neoprene gloves for cold sessions. Pre-curved fingers for grip.",
        priceRange: { min: 30, max: 60 },
        level: "all",
        features: ["3mm", "Pre-curved", "Grippy palm"],
        brands: ["Xcel", "O'Neill", "Rip Curl"]
    },
    {
        id: "changing-mat",
        category: "Accessories",
        name: "Changing Mat/Bag",
        description: "Keep wetsuit clean and feet dry. Doubles as storage bag.",
        priceRange: { min: 20, max: 50 },
        level: "all",
        features: ["Waterproof", "Portable", "Multi-use"],
        brands: ["FCS", "Creatures", "Northcore"]
    }
];

// Helper functions
function getSurfGearById(id) {
    return surfGear.find(g => g.id === id);
}

function getSurfGearByCategory(category) {
    return surfGear.filter(g => g.category === category);
}

function getSurfGearByLevel(level) {
    return surfGear.filter(g => g.level === level || g.level === 'all');
}
