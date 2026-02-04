/* ========================================
   Surf & Ski - Surf News Data
   ======================================== */

const surfNews = [
    {
        id: "epic-swell-portugal-2026",
        title: "Epic Swell Hits Portugal's Coast",
        subtitle: "Nazare and Peniche light up with perfect conditions",
        date: "2026-02-02",
        author: "Surf & Ski Team",
        category: "Swell Report",
        featured: true,
        image: null,
        summary: "A powerful North Atlantic storm has sent massive swells to the Portuguese coastline, with Nazare seeing 20-meter faces and Peniche offering world-class barrels.",
        content: `
            <p>The Atlantic has delivered once again. A deep low-pressure system tracking across the North Atlantic has generated one of the most significant swells of the 2025-2026 winter season, lighting up Portugal's famous coastline.</p>

            <h3>Nazare: Giants Awaken</h3>
            <p>Praia do Norte in Nazare has been the epicenter of the action, with wave faces reaching 20+ meters. Big wave specialists from around the world have descended on the fishing village to tackle some of the largest waves seen this season. Tow-in sessions have been running since dawn, with jet ski teams working in rotation to keep surfers in the lineup.</p>

            <h3>Peniche: Supertubos Delivers</h3>
            <p>Further south, Supertubos has been living up to its name with perfect hollow barrels. The swell, combined with light offshore winds, has created textbook conditions for tube riding. Local surfers and visiting pros have been scoring some of the best waves of the year.</p>

            <h3>Ericeira: World Surfing Reserve Shines</h3>
            <p>The World Surfing Reserve of Ericeira has also been firing, with multiple spots breaking at optimal size. Ribeira d'Ilhas, Coxos, and Cave have all offered excellent waves for different skill levels.</p>

            <h3>Forecast</h3>
            <p>Conditions are expected to remain solid through the week, with the swell slowly decreasing from the current XXL size to more manageable 2-3 meter faces by the weekend. Winds look favorable with continued offshore flow predicted.</p>
        `,
        relatedSpots: ["nazare", "peniche", "ericeira"]
    },
    {
        id: "wsl-2026-season-preview",
        title: "WSL 2026 Championship Tour Preview",
        subtitle: "New stops, new format, and the contenders to watch",
        date: "2026-01-28",
        author: "Surf & Ski Team",
        category: "Events",
        featured: false,
        image: null,
        summary: "The World Surf League Championship Tour kicks off next month. Here's everything you need to know about the 2026 season.",
        content: `
            <p>The 2026 WSL Championship Tour is shaping up to be one of the most exciting seasons in recent memory. With format changes, new venues, and a stacked field of competitors, here's your complete preview.</p>

            <h3>Calendar Highlights</h3>
            <p>The tour kicks off at Pipeline in Hawaii, as tradition dictates, before heading to Australian stops at Snapper Rocks and Bells Beach. The European leg includes Peniche, Portugal, while the mid-season sees action in Bali and the Mentawai Islands.</p>

            <h3>Format Changes</h3>
            <p>The WSL has introduced a new mid-season cut format, where the top 24 surfers after the first five events advance to the back half of the season. This adds pressure to every heat and ensures maximum intensity from the first event.</p>

            <h3>Contenders to Watch</h3>
            <p>On the men's side, the defending champion will face stiff competition from a new generation of aerial specialists. The women's tour features an equally competitive field, with several former champions looking to reclaim their titles.</p>

            <h3>How to Watch</h3>
            <p>All events will be streamed live on the WSL app and website. Check local listings for broadcast times in your region.</p>
        `,
        relatedSpots: ["pipeline", "gold-coast", "bells-beach", "peniche"]
    },
    {
        id: "beginner-surf-tips-2026",
        title: "Essential Tips for Your First Surf Trip",
        subtitle: "Everything beginners need to know before hitting the waves",
        date: "2026-01-20",
        author: "Surf & Ski Team",
        category: "Tips & Guides",
        featured: false,
        image: null,
        summary: "Planning your first surf adventure? Our comprehensive guide covers choosing the right destination, gear essentials, and etiquette in the water.",
        content: `
            <p>There's nothing quite like the feeling of catching your first wave. If you're planning your first surf trip, proper preparation will make all the difference. Here's everything you need to know.</p>

            <h3>1. Choose the Right Destination</h3>
            <p>As a beginner, you want gentle, forgiving waves. Look for beach breaks with a sandy bottom and small, rolling waves. Great beginner spots include:</p>
            <ul>
                <li>Biarritz, France - Gentle waves, great schools</li>
                <li>Zarautz, Spain - Long beach with mellow waves</li>
                <li>Lacanau, France - Consistent and beginner-friendly</li>
                <li>Canggu, Bali - Warm water and easy waves</li>
                <li>Huntington Beach, California - Classic California vibes</li>
            </ul>

            <h3>2. Take Lessons</h3>
            <p>Always start with professional instruction. A good surf school will teach you safety, ocean awareness, proper technique, and surf etiquette. Even a few lessons will accelerate your progress dramatically.</p>

            <h3>3. Gear Essentials</h3>
            <p>For your first sessions, rent equipment from a reputable shop. You'll want:</p>
            <ul>
                <li>A soft-top foam board (8-9 feet for stability)</li>
                <li>A wetsuit appropriate for water temperature</li>
                <li>Surf wax (applied properly!)</li>
                <li>A leash that matches your board length</li>
                <li>Sunscreen designed for water sports</li>
            </ul>

            <h3>4. Understand Ocean Safety</h3>
            <p>Before entering the water, always check conditions. Understand rip currents, know how to identify channels, and never surf alone as a beginner. If in doubt, ask locals or lifeguards.</p>

            <h3>5. Learn Surf Etiquette</h3>
            <p>The surfer closest to the peak has priority. Don't drop in on someone already on a wave. Be respectful, wait your turn, and always apologize if you make a mistake.</p>

            <p>Most importantly, have patience with yourself. Surfing takes time to learn, but the journey is half the fun!</p>
        `,
        relatedSpots: ["biarritz", "zarautz", "lacanau", "canggu", "huntington"]
    },
    {
        id: "hossegor-winter-report",
        title: "Hossegor: Winter Season in Full Swing",
        subtitle: "Europe's surf capital delivers consistent waves",
        date: "2026-01-15",
        author: "Surf & Ski Team",
        category: "Swell Report",
        featured: false,
        image: null,
        summary: "Hossegor has been pumping all winter with regular swells from the North Atlantic. Here's the current situation and forecast.",
        content: `
            <p>The stretch of beach breaks between Hossegor, Capbreton, and Seignosse continues to deliver world-class waves as we move through the heart of winter.</p>

            <h3>Current Conditions</h3>
            <p>Recent weeks have seen consistent 1.5 to 2.5 meter swells arriving from the northwest. The famous sandbars are in excellent shape, creating the hollow, powerful waves that put this region on the map. Water temperature is around 12°C, requiring a good 4/3mm wetsuit with boots.</p>

            <h3>Best Spots Right Now</h3>
            <p>La Graviere has been the standout spot, offering classic Hossegor barrels. La Nord in Hossegor and Les Estagnots in Seignosse have also been consistent. For smaller days, Capbreton's La Piste offers more shelter.</p>

            <h3>Crowd Factor</h3>
            <p>Winter means significantly smaller crowds compared to the busy summer months. Weekday sessions have been particularly quiet, allowing for plenty of waves. Weekends see more action, especially when the forecast looks good.</p>

            <h3>Looking Ahead</h3>
            <p>The forecast models show continued swell activity through February. A series of low-pressure systems tracking across the Atlantic should keep waves pumping for the foreseeable future.</p>
        `,
        relatedSpots: ["hossegor", "capbreton"]
    }
];

// Helper function to find news by ID
function getSurfNewsById(id) {
    return surfNews.find(n => n.id === id);
}

// Helper function to get featured surf news
function getFeaturedSurfNews() {
    return surfNews.filter(n => n.featured);
}

// Helper function to get news by category
function getSurfNewsByCategory(category) {
    return surfNews.filter(n => n.category === category);
}
