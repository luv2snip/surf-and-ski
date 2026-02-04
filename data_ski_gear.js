/* ========================================
   Surf & Ski - Ski & Snowboard Gear Data
   ======================================== */

const skiGear = [
    // BEGINNER SKI GEAR
    {
        id: "skis-beginner",
        category: "Skis",
        name: "All-Mountain Beginner Skis",
        description: "Forgiving skis with soft flex, perfect for learning. Easy to turn and control at low speeds.",
        priceRange: { min: 250, max: 450 },
        level: "beginner",
        features: ["Soft flex", "Easy turn", "Lightweight"],
        brands: ["Rossignol Experience", "Salomon QST Lux", "Head Joy"]
    },
    {
        id: "boots-beginner",
        category: "Boots",
        name: "Comfort Ski Boots",
        description: "Soft flex boots with easy entry. Warm liner and comfortable fit for all-day skiing.",
        priceRange: { min: 150, max: 300 },
        level: "beginner",
        features: ["Soft flex (60-80)", "Easy entry", "Warm liner"],
        brands: ["Salomon X Access", "Rossignol Evo", "Nordica Sportmachine"]
    },
    {
        id: "poles-beginner",
        category: "Poles",
        name: "Basic Aluminum Poles",
        description: "Durable aluminum poles with comfortable grips. Standard length for learning proper technique.",
        priceRange: { min: 25, max: 50 },
        level: "beginner",
        features: ["Aluminum", "Durable", "Ergonomic grip"],
        brands: ["Leki", "Scott", "Black Diamond"]
    },

    // INTERMEDIATE SKI GEAR
    {
        id: "skis-intermediate",
        category: "Skis",
        name: "All-Mountain Performance Skis",
        description: "Versatile skis for groomed runs and light off-piste. Good edge grip and stability at higher speeds.",
        priceRange: { min: 400, max: 700 },
        level: "intermediate",
        features: ["Medium flex", "Versatile", "Edge grip"],
        brands: ["Atomic Maverick", "Volkl Deacon", "Nordica Enforcer"]
    },
    {
        id: "boots-intermediate",
        category: "Boots",
        name: "Performance Ski Boots",
        description: "Medium flex boots with better power transmission. Customizable fit with heat-moldable liner.",
        priceRange: { min: 280, max: 450 },
        level: "intermediate",
        features: ["Medium flex (90-100)", "Heat-moldable", "Power strap"],
        brands: ["Tecnica Mach Sport", "Lange RX", "Salomon S/Pro"]
    },
    {
        id: "poles-intermediate",
        category: "Poles",
        name: "Lightweight Composite Poles",
        description: "Lighter than aluminum with better swing weight. Comfortable for longer ski days.",
        priceRange: { min: 50, max: 100 },
        level: "intermediate",
        features: ["Composite", "Lightweight", "Durable"],
        brands: ["Leki", "Black Crows", "Scott"]
    },

    // ADVANCED SKI GEAR
    {
        id: "skis-advanced",
        category: "Skis",
        name: "Expert All-Mountain Skis",
        description: "High-performance skis for aggressive skiing. Excellent edge hold and stability at speed.",
        priceRange: { min: 600, max: 1000 },
        level: "advanced",
        features: ["Stiff flex", "Race construction", "Titanal layers"],
        brands: ["Blizzard Brahma", "Head Supershape", "Fischer RC4"]
    },
    {
        id: "skis-freeride",
        category: "Skis",
        name: "Freeride Powder Skis",
        description: "Wide skis (100mm+) for deep powder and off-piste adventures. Rocker profile for flotation.",
        priceRange: { min: 550, max: 950 },
        level: "advanced",
        features: ["Wide waist", "Rocker", "Powder float"],
        brands: ["Black Crows Atris", "DPS Pagoda", "Moment Wildcat"]
    },
    {
        id: "boots-advanced",
        category: "Boots",
        name: "Race/Expert Ski Boots",
        description: "Stiff boots for maximum control and precision. Narrow last for performance fit.",
        priceRange: { min: 400, max: 700 },
        level: "advanced",
        features: ["Stiff flex (110-130)", "Narrow fit", "Race liner"],
        brands: ["Tecnica Cochise", "Atomic Hawx Ultra", "Salomon S/Max"]
    },
    {
        id: "poles-advanced",
        category: "Poles",
        name: "Carbon Race Poles",
        description: "Ultra-lightweight carbon poles for racing and aggressive skiing. Maximum energy transfer.",
        priceRange: { min: 100, max: 200 },
        level: "advanced",
        features: ["Full carbon", "Ultra-light", "Aero grips"],
        brands: ["Leki WC", "Komperdell Carbon", "Swix Triac"]
    },

    // PROTECTION - ALL LEVELS
    {
        id: "helmet",
        category: "Protection",
        name: "Ski Helmet",
        description: "Essential head protection with ventilation and audio compatibility. MIPS available for extra safety.",
        priceRange: { min: 60, max: 250 },
        level: "all",
        features: ["MIPS option", "Ventilation", "Audio ready"],
        brands: ["Smith Vantage", "Giro Range", "POC Obex"]
    },
    {
        id: "goggles",
        category: "Protection",
        name: "Ski Goggles",
        description: "Anti-fog lenses with UV protection. Interchangeable lenses for different light conditions.",
        priceRange: { min: 80, max: 300 },
        level: "all",
        features: ["Anti-fog", "UV protection", "Photochromic option"],
        brands: ["Oakley Flight Deck", "Smith I/O Mag", "Dragon X2"]
    },
    {
        id: "back-protector",
        category: "Protection",
        name: "Back Protector",
        description: "Spine protection for aggressive skiing. CE certified with flexible construction.",
        priceRange: { min: 80, max: 180 },
        level: "all",
        features: ["CE certified", "Flexible", "Breathable"],
        brands: ["POC Spine VPD", "Dainese Flexagon", "Scott Airflex"]
    },

    // ACCESSORIES - ALL LEVELS
    {
        id: "gloves",
        category: "Accessories",
        name: "Ski Gloves",
        description: "Insulated waterproof gloves with touchscreen compatibility. Warm and dexterous.",
        priceRange: { min: 40, max: 150 },
        level: "all",
        features: ["Waterproof", "Insulated", "Touchscreen"],
        brands: ["Hestra", "Black Diamond", "Dakine"]
    },
    {
        id: "jacket",
        category: "Apparel",
        name: "Ski Jacket",
        description: "Waterproof breathable jacket with powder skirt and pit zips. 10K-20K waterproofing.",
        priceRange: { min: 150, max: 500 },
        level: "all",
        features: ["Waterproof", "Breathable", "Powder skirt"],
        brands: ["Arc'teryx", "Patagonia", "The North Face"]
    },
    {
        id: "pants",
        category: "Apparel",
        name: "Ski Pants",
        description: "Insulated waterproof pants with reinforced cuffs. Thigh vents for temperature control.",
        priceRange: { min: 100, max: 400 },
        level: "all",
        features: ["Waterproof", "Insulated", "Vented"],
        brands: ["Arc'teryx", "Helly Hansen", "Obermeyer"]
    }
];

const snowboardGear = [
    // BEGINNER SNOWBOARD GEAR
    {
        id: "board-beginner",
        category: "Snowboard",
        name: "All-Mountain Beginner Board",
        description: "Soft flex board with rocker profile. Easy to turn and forgiving of mistakes.",
        priceRange: { min: 200, max: 350 },
        level: "beginner",
        features: ["Soft flex", "Rocker profile", "Catch-free"],
        brands: ["Burton Ripcord", "Ride Agenda", "K2 Standard"]
    },
    {
        id: "bindings-beginner",
        category: "Bindings",
        name: "Entry-Level Bindings",
        description: "Soft flex bindings with easy entry. Comfortable straps and responsive padding.",
        priceRange: { min: 100, max: 200 },
        level: "beginner",
        features: ["Soft flex", "Comfort padding", "Easy buckles"],
        brands: ["Burton Freestyle", "Union Contact", "Ride LX"]
    },
    {
        id: "boots-snowboard-beginner",
        category: "Boots",
        name: "Comfort Snowboard Boots",
        description: "Soft flex boots with BOA or traditional lacing. Warm and easy to get in/out.",
        priceRange: { min: 120, max: 220 },
        level: "beginner",
        features: ["Soft flex", "BOA option", "Warm liner"],
        brands: ["Burton Moto", "DC Phase", "Ride Anthem"]
    },

    // INTERMEDIATE SNOWBOARD GEAR
    {
        id: "board-intermediate",
        category: "Snowboard",
        name: "All-Mountain Performance Board",
        description: "Medium flex board for all conditions. Directional twin shape for versatility.",
        priceRange: { min: 350, max: 550 },
        level: "intermediate",
        features: ["Medium flex", "Directional twin", "Sintered base"],
        brands: ["Burton Process", "Jones Mountain Twin", "Lib Tech Box Knife"]
    },
    {
        id: "bindings-intermediate",
        category: "Bindings",
        name: "Mid-Flex Response Bindings",
        description: "Medium flex with better response. Canted footbeds for comfort.",
        priceRange: { min: 200, max: 350 },
        level: "intermediate",
        features: ["Medium flex", "Canted footbed", "Tool-free adjust"],
        brands: ["Union Force", "Burton Cartel", "Bent Metal Joint"]
    },
    {
        id: "boots-snowboard-intermediate",
        category: "Boots",
        name: "Performance Snowboard Boots",
        description: "Medium flex with dual BOA for precise fit. Heat-moldable liner.",
        priceRange: { min: 220, max: 380 },
        level: "intermediate",
        features: ["Medium flex", "Dual BOA", "Heat-moldable"],
        brands: ["Burton Ruler", "Ride Lasso", "ThirtyTwo TM-2"]
    },

    // ADVANCED SNOWBOARD GEAR
    {
        id: "board-advanced",
        category: "Snowboard",
        name: "High-Performance Freeride Board",
        description: "Stiff directional board for charging. Carbon stringers for pop and response.",
        priceRange: { min: 500, max: 850 },
        level: "advanced",
        features: ["Stiff flex", "Carbon", "Sintered base"],
        brands: ["Jones Flagship", "Burton Flight Attendant", "Lib Tech Orca"]
    },
    {
        id: "board-freestyle",
        category: "Snowboard",
        name: "Pro Freestyle Board",
        description: "True twin for park and pipe. Poppy flex with durable construction.",
        priceRange: { min: 450, max: 700 },
        level: "advanced",
        features: ["True twin", "Medium-stiff", "Park optimized"],
        brands: ["Burton Custom", "Capita DOA", "Ride Warpig"]
    },
    {
        id: "bindings-advanced",
        category: "Bindings",
        name: "High-Response Pro Bindings",
        description: "Stiff bindings for maximum control. Lightweight with zero dead spots.",
        priceRange: { min: 300, max: 500 },
        level: "advanced",
        features: ["Stiff response", "Lightweight", "Precision"],
        brands: ["Union Ultra", "Burton Genesis", "Now Drive"]
    },
    {
        id: "boots-snowboard-advanced",
        category: "Boots",
        name: "Pro Performance Boots",
        description: "Stiff response with lightweight construction. Articulating cuff for mobility.",
        priceRange: { min: 350, max: 550 },
        level: "advanced",
        features: ["Stiff flex", "Lightweight", "Response"],
        brands: ["Burton Ion", "DC Judge", "ThirtyTwo TM-3"]
    },

    // PROTECTION - ALL LEVELS
    {
        id: "helmet-snowboard",
        category: "Protection",
        name: "Snowboard Helmet",
        description: "Low-profile helmet with audio compatibility. MIPS for rotational impact protection.",
        priceRange: { min: 60, max: 220 },
        level: "all",
        features: ["MIPS", "Audio compatible", "Adjustable fit"],
        brands: ["Smith Maze", "Anon Raider", "Sandbox Classic"]
    },
    {
        id: "impact-shorts",
        category: "Protection",
        name: "Impact Shorts",
        description: "Padded shorts for hip and tailbone protection. Essential for learning.",
        priceRange: { min: 50, max: 120 },
        level: "all",
        features: ["Hip padding", "Tailbone protection", "Breathable"],
        brands: ["Demon Flex-Force", "Burton Total Impact", "POC Hip VPD"]
    },
    {
        id: "wrist-guards",
        category: "Protection",
        name: "Wrist Guards",
        description: "Prevent wrist injuries from falls. Low-profile design fits under gloves.",
        priceRange: { min: 25, max: 60 },
        level: "all",
        features: ["Wrist support", "Low-profile", "Breathable"],
        brands: ["Dakine", "Burton", "Level"]
    }
];

// Helper functions
function getGearById(id) {
    return skiGear.find(g => g.id === id) || snowboardGear.find(g => g.id === id);
}

function getGearByCategory(category) {
    return [...skiGear, ...snowboardGear].filter(g => g.category === category);
}

function getGearByLevel(level) {
    return [...skiGear, ...snowboardGear].filter(g => g.level === level || g.level === 'all');
}
