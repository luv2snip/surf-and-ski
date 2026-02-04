/* ========================================
   Surf & Ski - Ski News Data
   ======================================== */

const skiNews = [
    {
        id: "heavy-snowfall-alps-2026",
        title: "Heavy Snowfall Blankets the Alps",
        subtitle: "Record-breaking snow depths reported across major resorts",
        date: "2026-02-03",
        author: "Surf & Ski Team",
        category: "Snow Report",
        featured: true,
        image: null,
        summary: "A powerful winter storm has brought exceptional snowfall to the Alps, with many resorts reporting their best conditions of the season. Les 2 Alpes and La Clusaz lead with 50cm of fresh powder.",
        content: `
            <p>Winter has finally arrived in full force across the Alpine regions, with a major storm system delivering substantial snowfall over the past week. Ski resorts from France to Austria are celebrating what many are calling the best snow conditions of the 2025-2026 season.</p>

            <h3>France Leads the Way</h3>
            <p>French resorts have been the primary beneficiaries of this weather system. Les 2 Alpes and La Clusaz both recorded an impressive 50cm of fresh snow, while Alpe d'Huez saw 45cm and Serre Chevalier received 40cm. The 3 Valleys region, including Val Thorens, Meribel, and Les Menuires, all reported between 28-35cm of new snow.</p>

            <h3>Excellent Base Depths</h3>
            <p>Upper slope snow bases are now exceptionally healthy across most major resorts:</p>
            <ul>
                <li>Chamonix: 260cm at summit</li>
                <li>Zermatt: 250cm at summit</li>
                <li>Cervinia: 240cm at summit</li>
                <li>La Clusaz: 235cm at summit</li>
            </ul>

            <h3>What This Means for Skiers</h3>
            <p>With these conditions, all terrain types are now fully open at most resorts. Off-piste skiing is exceptional, though avalanche awareness remains crucial. Local mountain rescue teams remind all skiers to check avalanche forecasts and consider hiring a guide for backcountry adventures.</p>

            <h3>Forecast Ahead</h3>
            <p>Meteorologists predict more snow on the way, with another system expected to arrive mid-week. High-altitude resorts like Val Thorens, Tignes, and Zermatt are expected to see an additional 20-30cm by the weekend.</p>

            <p>For the latest snow conditions at your favorite resort, check our resort listings with real-time snow data.</p>
        `,
        relatedResorts: ["les-2-alpes", "la-clusaz", "alpe-dhuez", "val-thorens", "chamonix"]
    },
    {
        id: "world-cup-kitzbuhel-2026",
        title: "Hahnenkamm World Cup Weekend Preview",
        subtitle: "The world's most challenging downhill returns to Kitzbuhel",
        date: "2026-01-28",
        author: "Surf & Ski Team",
        category: "Events",
        featured: false,
        image: null,
        summary: "The legendary Streif course in Kitzbuhel prepares to host the most prestigious downhill race of the World Cup season. Here's what you need to know.",
        content: `
            <p>The Hahnenkamm races return to Kitzbuhel this weekend, bringing the world's best alpine skiers to tackle the notorious Streif - widely considered the most demanding downhill course in ski racing.</p>

            <h3>The Streif Challenge</h3>
            <p>At 3,312 meters in length with a vertical drop of 860 meters, the Streif tests every aspect of a racer's skill. The course features the terrifying Mausefalle (Mousetrap) with its 85% gradient, the high-speed Steilhang, and the famous Hausberg section where races are often won or lost.</p>

            <h3>Favorites to Watch</h3>
            <p>This year's field includes several contenders for the top step of the podium. Speed specialists from Switzerland, Austria, and Norway are all in strong form this season. The Austrian home crowd will be especially vocal in support of their local heroes.</p>

            <h3>Visiting Kitzbuhel</h3>
            <p>For those lucky enough to attend, Kitzbuhel transforms into a festival atmosphere during race weekend. The medieval town center buzzes with activity, and the finish area provides an electric atmosphere as racers cross the line at over 100 km/h.</p>
        `,
        relatedResorts: ["kitzbuehel"]
    },
    {
        id: "beginner-tips-2026",
        title: "5 Essential Tips for First-Time Skiers",
        subtitle: "Everything you need to know before hitting the slopes",
        date: "2026-01-20",
        author: "Surf & Ski Team",
        category: "Tips & Guides",
        featured: false,
        image: null,
        summary: "Planning your first ski trip? Our guide covers the essential tips that will help you get started on the right foot - and the right ski!",
        content: `
            <p>Taking up skiing can seem daunting, but with the right preparation and mindset, you'll be linking turns in no time. Here are our top five tips for first-time skiers.</p>

            <h3>1. Take a Lesson</h3>
            <p>This is non-negotiable. A professional instructor will teach you proper technique from day one, helping you avoid bad habits that are hard to break later. Most resorts offer beginner packages that include equipment rental, lift pass for beginner areas, and lessons.</p>

            <h3>2. Dress in Layers</h3>
            <p>Mountain weather changes quickly. Wear moisture-wicking base layers, an insulating mid-layer, and a waterproof outer shell. Avoid cotton, which retains moisture and will leave you cold and uncomfortable.</p>

            <h3>3. Rent Quality Equipment</h3>
            <p>Don't buy gear before your first trip. Renting allows you to try properly fitted equipment without a major investment. Make sure boots fit snugly but comfortably - they're the most important piece of equipment for control.</p>

            <h3>4. Start on Gentle Slopes</h3>
            <p>Resist the temptation to follow experienced friends to advanced terrain. Beginner slopes (usually marked green or blue) allow you to practice at a safe speed and build confidence progressively.</p>

            <h3>5. Learn to Fall Safely</h3>
            <p>Falling is part of learning. When you feel yourself losing balance, try to fall to the side and avoid using your hands to break the fall. Get up slowly, making sure your skis are across the slope to prevent sliding.</p>

            <p>Most importantly, be patient with yourself and enjoy the experience. The mountains are a beautiful place to learn a lifelong sport!</p>
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
