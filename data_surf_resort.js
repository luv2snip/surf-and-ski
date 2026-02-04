/* ========================================
   Surf & Ski - Surf Spots Data
   Last updated: February 2026
   ======================================== */

const surfSpots = [
    // ========== FRANCE ==========
    {
        id: "hossegor",
        name: "Hossegor",
        region: "Landes",
        country: "France",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 3.5 },
        waterTemp: { summer: 21, winter: 12 },
        bestSeason: "September - November",
        level: "intermediate",
        crowd: "high",
        popular: true,
        description: "The surf capital of Europe. Powerful beach breaks with hollow waves, hosting WSL events.",
        website: "https://www.hossegor.fr"
    },
    {
        id: "lacanau",
        name: "Lacanau",
        region: "Gironde",
        country: "France",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 20, winter: 11 },
        bestSeason: "August - October",
        level: "beginner",
        crowd: "high",
        popular: true,
        description: "Consistent beach break perfect for all levels. Great surf schools and relaxed atmosphere.",
        website: "https://www.lacanau.com"
    },
    {
        id: "biarritz",
        name: "Biarritz - Grande Plage",
        region: "Pays Basque",
        country: "France",
        waveType: "Beach break",
        waveHeight: { min: 0.3, max: 2.0 },
        waterTemp: { summer: 22, winter: 13 },
        bestSeason: "Year round",
        level: "beginner",
        crowd: "high",
        popular: true,
        description: "Birthplace of European surfing. Gentle waves ideal for beginners with stunning backdrop.",
        website: "https://www.biarritz.fr"
    },
    {
        id: "guethary",
        name: "Guethary",
        region: "Pays Basque",
        country: "France",
        waveType: "Reef break",
        waveHeight: { min: 1.0, max: 4.0 },
        waterTemp: { summer: 22, winter: 13 },
        bestSeason: "October - March",
        level: "advanced",
        crowd: "medium",
        popular: true,
        description: "World-class reef break with powerful right-handers. For experienced surfers only.",
        website: "https://www.guethary-france.com"
    },
    {
        id: "anglet",
        name: "Anglet - La Barre",
        region: "Pays Basque",
        country: "France",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 22, winter: 13 },
        bestSeason: "Year round",
        level: "intermediate",
        crowd: "medium",
        popular: false,
        description: "Multiple peaks along the beach. Less crowded alternative to Biarritz.",
        website: "https://www.anglet-tourisme.com"
    },
    {
        id: "capbreton",
        name: "Capbreton - La Piste",
        region: "Landes",
        country: "France",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 3.0 },
        waterTemp: { summer: 21, winter: 12 },
        bestSeason: "September - November",
        level: "intermediate",
        crowd: "medium",
        popular: false,
        description: "Consistent waves in a beautiful setting. Good alternative to crowded Hossegor.",
        website: "https://www.capbreton-tourisme.com"
    },

    // ========== PORTUGAL ==========
    {
        id: "nazare",
        name: "Nazare",
        region: "Leiria",
        country: "Portugal",
        waveType: "Beach break / Big wave",
        waveHeight: { min: 1.0, max: 30.0 },
        waterTemp: { summer: 19, winter: 14 },
        bestSeason: "October - February",
        level: "advanced",
        crowd: "low",
        popular: true,
        description: "Home of the biggest waves in the world. Praia do Norte holds the world record for largest wave surfed.",
        website: "https://www.nazare.gov.pt"
    },
    {
        id: "peniche",
        name: "Peniche - Supertubos",
        region: "Leiria",
        country: "Portugal",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 3.5 },
        waterTemp: { summer: 18, winter: 14 },
        bestSeason: "September - November",
        level: "intermediate",
        crowd: "high",
        popular: true,
        description: "WSL Championship Tour stop. Powerful barrels on the beach break.",
        website: "https://www.cm-peniche.pt"
    },
    {
        id: "ericeira",
        name: "Ericeira",
        region: "Lisboa",
        country: "Portugal",
        waveType: "Reef/Point break",
        waveHeight: { min: 0.5, max: 3.0 },
        waterTemp: { summer: 18, winter: 14 },
        bestSeason: "Year round",
        level: "intermediate",
        crowd: "high",
        popular: true,
        description: "World Surfing Reserve with multiple quality spots. Ribeira d'Ilhas is the most famous.",
        website: "https://www.ericeira.net"
    },
    {
        id: "sagres",
        name: "Sagres",
        region: "Algarve",
        country: "Portugal",
        waveType: "Beach/Reef break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 20, winter: 16 },
        bestSeason: "Year round",
        level: "intermediate",
        crowd: "low",
        popular: true,
        description: "Multiple spots for all conditions. Tonel and Beliche are the main beaches.",
        website: "https://www.visitalgarve.pt"
    },
    {
        id: "costa-da-caparica",
        name: "Costa da Caparica",
        region: "Setubal",
        country: "Portugal",
        waveType: "Beach break",
        waveHeight: { min: 0.3, max: 2.0 },
        waterTemp: { summer: 18, winter: 14 },
        bestSeason: "Year round",
        level: "beginner",
        crowd: "high",
        popular: false,
        description: "Long stretch of beach breaks near Lisbon. Perfect for beginners and weekday sessions.",
        website: "https://www.costadacaparica.pt"
    },

    // ========== SPAIN ==========
    {
        id: "mundaka",
        name: "Mundaka",
        region: "Basque Country",
        country: "Spain",
        waveType: "River mouth / Left point",
        waveHeight: { min: 0.5, max: 4.0 },
        waterTemp: { summer: 20, winter: 12 },
        bestSeason: "September - December",
        level: "advanced",
        crowd: "high",
        popular: true,
        description: "One of the best left-hand barrels in the world. Needs specific swell and sandbar conditions.",
        website: "https://www.mundaka.org"
    },
    {
        id: "zarautz",
        name: "Zarautz",
        region: "Basque Country",
        country: "Spain",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 20, winter: 12 },
        bestSeason: "September - November",
        level: "beginner",
        crowd: "high",
        popular: true,
        description: "Longest beach in Basque Country with consistent waves. Great for learning.",
        website: "https://www.turismozarautz.eus"
    },
    {
        id: "sopela",
        name: "Sopelana",
        region: "Basque Country",
        country: "Spain",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 20, winter: 12 },
        bestSeason: "Year round",
        level: "intermediate",
        crowd: "high",
        popular: false,
        description: "Popular spot near Bilbao with multiple peaks. Atxabiribil and Arrietara beaches.",
        website: "https://www.sopelana.eus"
    },
    {
        id: "salinas",
        name: "Salinas",
        region: "Asturias",
        country: "Spain",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 19, winter: 12 },
        bestSeason: "Year round",
        level: "beginner",
        crowd: "medium",
        popular: false,
        description: "Consistent beach break with a great surf community. Home of the Spanish surf museum.",
        website: "https://www.turismoasturias.es"
    },

    // ========== CANARY ISLANDS ==========
    {
        id: "fuerteventura",
        name: "Fuerteventura - North Shore",
        region: "Canary Islands",
        country: "Spain",
        waveType: "Reef/Point break",
        waveHeight: { min: 0.5, max: 3.5 },
        waterTemp: { summer: 22, winter: 19 },
        bestSeason: "October - March",
        level: "intermediate",
        crowd: "medium",
        popular: true,
        description: "European Hawaii with warm water year-round. Multiple world-class reef breaks.",
        website: "https://www.visitfuerteventura.es"
    },
    {
        id: "lanzarote",
        name: "Lanzarote - Famara",
        region: "Canary Islands",
        country: "Spain",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 22, winter: 18 },
        bestSeason: "Year round",
        level: "beginner",
        crowd: "medium",
        popular: true,
        description: "Beautiful beach with consistent waves and dramatic cliff backdrop. Great for all levels.",
        website: "https://www.turismolanzarote.com"
    },
    {
        id: "tenerife",
        name: "Tenerife - El Socorro",
        region: "Canary Islands",
        country: "Spain",
        waveType: "Reef break",
        waveHeight: { min: 0.5, max: 3.0 },
        waterTemp: { summer: 23, winter: 19 },
        bestSeason: "October - March",
        level: "intermediate",
        crowd: "low",
        popular: false,
        description: "Volcanic reef breaks on the north shore. Less crowded than other Canary spots.",
        website: "https://www.webtenerife.com"
    },

    // ========== MOROCCO ==========
    {
        id: "taghazout",
        name: "Taghazout",
        region: "Souss-Massa",
        country: "Morocco",
        waveType: "Point break",
        waveHeight: { min: 0.5, max: 3.0 },
        waterTemp: { summer: 21, winter: 17 },
        bestSeason: "October - April",
        level: "intermediate",
        crowd: "high",
        popular: true,
        description: "Famous right-hand point breaks including Anchor Point and Killer Point.",
        website: "https://www.visitmorocco.com"
    },
    {
        id: "imsouane",
        name: "Imsouane",
        region: "Souss-Massa",
        country: "Morocco",
        waveType: "Point break",
        waveHeight: { min: 0.3, max: 2.0 },
        waterTemp: { summer: 20, winter: 17 },
        bestSeason: "October - April",
        level: "beginner",
        crowd: "medium",
        popular: true,
        description: "One of the longest waves in Africa. Perfect mellow right-hander in the bay.",
        website: "https://www.visitmorocco.com"
    },
    {
        id: "sidi-kaouki",
        name: "Sidi Kaouki",
        region: "Marrakech-Safi",
        country: "Morocco",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.0 },
        waterTemp: { summer: 19, winter: 16 },
        bestSeason: "Year round",
        level: "beginner",
        crowd: "low",
        popular: false,
        description: "Chilled beach break near Essaouira. Good for beginners and windy conditions.",
        website: "https://www.visitmorocco.com"
    },

    // ========== UK & IRELAND ==========
    {
        id: "newquay",
        name: "Newquay - Fistral Beach",
        region: "Cornwall",
        country: "UK",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 17, winter: 10 },
        bestSeason: "September - November",
        level: "beginner",
        crowd: "high",
        popular: true,
        description: "The surf capital of the UK. Consistent beach break with great facilities.",
        website: "https://www.visitnewquay.org"
    },
    {
        id: "bundoran",
        name: "Bundoran - The Peak",
        region: "Donegal",
        country: "Ireland",
        waveType: "Reef break",
        waveHeight: { min: 0.5, max: 4.0 },
        waterTemp: { summer: 15, winter: 9 },
        bestSeason: "September - March",
        level: "advanced",
        crowd: "medium",
        popular: true,
        description: "World-class reef break known for powerful hollow waves. Ireland's surf town.",
        website: "https://www.discoverbundoran.com"
    },
    {
        id: "lahinch",
        name: "Lahinch",
        region: "Clare",
        country: "Ireland",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 15, winter: 10 },
        bestSeason: "Year round",
        level: "beginner",
        crowd: "medium",
        popular: true,
        description: "Consistent beach break with views of the Cliffs of Moher. Great surf town vibe.",
        website: "https://www.lahinch.ie"
    },

    // ========== AUSTRALIA ==========
    {
        id: "gold-coast",
        name: "Gold Coast - Snapper Rocks",
        region: "Queensland",
        country: "Australia",
        waveType: "Point break",
        waveHeight: { min: 0.5, max: 3.0 },
        waterTemp: { summer: 26, winter: 20 },
        bestSeason: "February - May",
        level: "intermediate",
        crowd: "high",
        popular: true,
        description: "Start of the Superbank. World-famous right-hand point break.",
        website: "https://www.destinationgoldcoast.com"
    },
    {
        id: "bells-beach",
        name: "Bells Beach",
        region: "Victoria",
        country: "Australia",
        waveType: "Reef break",
        waveHeight: { min: 1.0, max: 4.0 },
        waterTemp: { summer: 18, winter: 12 },
        bestSeason: "March - May",
        level: "advanced",
        crowd: "medium",
        popular: true,
        description: "Iconic Australian surf spot. Home of the longest-running surf contest.",
        website: "https://www.bellsbeach.com.au"
    },
    {
        id: "margaret-river",
        name: "Margaret River",
        region: "Western Australia",
        country: "Australia",
        waveType: "Reef break",
        waveHeight: { min: 1.0, max: 5.0 },
        waterTemp: { summer: 21, winter: 17 },
        bestSeason: "April - October",
        level: "advanced",
        crowd: "medium",
        popular: true,
        description: "Powerful reef breaks in wine country. WSL Championship Tour venue.",
        website: "https://www.margaretriver.com"
    },
    {
        id: "noosa",
        name: "Noosa Heads",
        region: "Queensland",
        country: "Australia",
        waveType: "Point break",
        waveHeight: { min: 0.3, max: 2.0 },
        waterTemp: { summer: 26, winter: 20 },
        bestSeason: "February - May",
        level: "beginner",
        crowd: "high",
        popular: true,
        description: "Long mellow right-hand point breaks. Perfect for longboarding.",
        website: "https://www.visitnoosa.com.au"
    },

    // ========== INDONESIA ==========
    {
        id: "uluwatu",
        name: "Uluwatu",
        region: "Bali",
        country: "Indonesia",
        waveType: "Reef break",
        waveHeight: { min: 1.0, max: 4.0 },
        waterTemp: { summer: 29, winter: 27 },
        bestSeason: "April - October",
        level: "advanced",
        crowd: "high",
        popular: true,
        description: "Iconic left-hand reef break with temple backdrop. Multiple sections.",
        website: "https://www.bali.com"
    },
    {
        id: "padang-padang",
        name: "Padang Padang",
        region: "Bali",
        country: "Indonesia",
        waveType: "Reef break",
        waveHeight: { min: 1.0, max: 3.5 },
        waterTemp: { summer: 29, winter: 27 },
        bestSeason: "June - September",
        level: "advanced",
        crowd: "high",
        popular: true,
        description: "Balinese Pipeline. Heavy barrels over shallow reef. Experts only.",
        website: "https://www.bali.com"
    },
    {
        id: "canggu",
        name: "Canggu",
        region: "Bali",
        country: "Indonesia",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 29, winter: 27 },
        bestSeason: "April - October",
        level: "beginner",
        crowd: "high",
        popular: true,
        description: "Trendy surf area with multiple peaks. Great for all levels.",
        website: "https://www.bali.com"
    },
    {
        id: "mentawai",
        name: "Mentawai Islands",
        region: "West Sumatra",
        country: "Indonesia",
        waveType: "Reef break",
        waveHeight: { min: 1.0, max: 4.0 },
        waterTemp: { summer: 29, winter: 28 },
        bestSeason: "April - October",
        level: "advanced",
        crowd: "low",
        popular: true,
        description: "Remote island chain with world-class waves. Boat trip required.",
        website: "https://www.mentawai.org"
    },

    // ========== HAWAII ==========
    {
        id: "pipeline",
        name: "Pipeline",
        region: "Oahu",
        country: "USA (Hawaii)",
        waveType: "Reef break",
        waveHeight: { min: 1.5, max: 6.0 },
        waterTemp: { summer: 27, winter: 24 },
        bestSeason: "November - February",
        level: "advanced",
        crowd: "high",
        popular: true,
        description: "The most famous wave in the world. Heavy, hollow, and dangerous.",
        website: "https://www.gohawaii.com"
    },
    {
        id: "waimea-bay",
        name: "Waimea Bay",
        region: "Oahu",
        country: "USA (Hawaii)",
        waveType: "Beach break / Big wave",
        waveHeight: { min: 2.0, max: 10.0 },
        waterTemp: { summer: 27, winter: 24 },
        bestSeason: "November - February",
        level: "advanced",
        crowd: "medium",
        popular: true,
        description: "Legendary big wave spot. The Eddie Aikau invitational venue.",
        website: "https://www.gohawaii.com"
    },
    {
        id: "sunset-beach",
        name: "Sunset Beach",
        region: "Oahu",
        country: "USA (Hawaii)",
        waveType: "Reef break",
        waveHeight: { min: 1.5, max: 5.0 },
        waterTemp: { summer: 27, winter: 24 },
        bestSeason: "November - February",
        level: "advanced",
        crowd: "high",
        popular: true,
        description: "Classic Hawaiian power surf. Part of the Triple Crown.",
        website: "https://www.gohawaii.com"
    },

    // ========== CALIFORNIA ==========
    {
        id: "mavericks",
        name: "Mavericks",
        region: "California",
        country: "USA",
        waveType: "Big wave",
        waveHeight: { min: 3.0, max: 15.0 },
        waterTemp: { summer: 14, winter: 11 },
        bestSeason: "November - March",
        level: "advanced",
        crowd: "low",
        popular: true,
        description: "One of the heaviest big waves in the world. Cold water, sharks, rocks.",
        website: "https://www.visithalfmoonbay.org"
    },
    {
        id: "trestles",
        name: "Trestles",
        region: "California",
        country: "USA",
        waveType: "Cobblestone point",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 20, winter: 14 },
        bestSeason: "Year round",
        level: "intermediate",
        crowd: "high",
        popular: true,
        description: "High-performance wave. WSL Championship Tour venue at Lower Trestles.",
        website: "https://www.parks.ca.gov"
    },
    {
        id: "huntington",
        name: "Huntington Beach",
        region: "California",
        country: "USA",
        waveType: "Beach break",
        waveHeight: { min: 0.5, max: 2.5 },
        waterTemp: { summer: 20, winter: 14 },
        bestSeason: "Year round",
        level: "beginner",
        crowd: "high",
        popular: true,
        description: "Surf City USA. US Open of Surfing venue. Consistent beach break.",
        website: "https://www.surfcityusa.com"
    }
];

// Helper function to find spot by ID
function getSpotById(id) {
    return surfSpots.find(s => s.id === id);
}

// Helper function to get spots by country
function getSpotsByCountry(country) {
    return surfSpots.filter(s => s.country === country);
}

// Helper function to get spots by level
function getSpotsByLevel(level) {
    return surfSpots.filter(s => s.level === level);
}

// Helper function to get popular spots
function getPopularSpots() {
    return surfSpots.filter(s => s.popular);
}
