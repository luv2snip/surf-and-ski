/* ========================================
   Surf & Ski - Surf News Data
   ======================================== */

const surfNews = [
    {
        id: "landes-surf-fever-2026",
        title: "In Les Landes, Surf Fever",
        subtitle: "The entire Landes coastline sits at the epicentre of a wave of enthusiasm",
        date: "2026-03-17",
        author: "Hélier",
        category: "News",
        featured: true,
        image: null,
        summary: "Since the Covid-19 pandemic, a massive influx of new surfers has transformed the Landes coastline into full-fledged surf destinations, fuelling an economic resurgence but also generating new conflicts.",
        content: `
            <p>On Santocha beach in Capbreton, on a late July morning, the water looks like a gridlocked boulevard. Over 200 surfers are waiting for the next wave. Raymond Deroo, 32, who has worked the Terramar beach cabin for five years, watches the scene without surprise: this year, he's never seen so many people in the water. Out there, waves get snaked, shoulders get bumped. Accidents happen regularly. The locals grumble and retreat to less accessible breaks. But those same tourists are what keeps the place alive.</p>

            <p>Capbreton, Hossegor, Seignosse, Soustons, Moliets-et-Maâ — the entire Landes coastline sits at the epicentre of this wave of enthusiasm. Since the Covid-19 pandemic, a massive influx of new surfers has transformed these seaside towns into full-fledged surf destinations, driven by a craze that has spread well beyond the usual crowd. The French Surf Federation issued 65,000 surf passports through its accredited schools in 2024 — up 20% compared to 2014. And those figures only tell part of the story: licensed surfers remain a small fraction of the people actually in the water.</p>

            <p>The boom is drawing a higher-income demographic, attracted as much by the lifestyle as by the sport itself. It is fuelling an economic resurgence across the region. But it is also generating new conflicts — in the water, on the beaches, in the towns themselves — with regulation still struggling to keep pace.</p>
        `,
        relatedSpots: ["capbreton", "hossegor", "seignosse"]
    },
    {
        id: "adrena-red-sea-wave-pool-2026",
        title: "At the Edge of the World, a Wave of a New Kind",
        subtitle: "Matt Etxebarne and crew test the Endless Surf wave pool in Saudi Arabia",
        date: "2026-03-17",
        author: "Hélier",
        category: "News",
        featured: true,
        image: null,
        summary: "For this session unlike any other, Matt Etxebarne flew out with a carefully chosen crew to Adrena, an ambitious artificial wave installation in Saudi Arabia powered by Endless Surf technology.",
        content: `
            <p>For this session unlike any other, Matt Etxebarne flew out with a carefully chosen crew: Louis Marchiset on longboard, Cam Richards and Victor Bernardo on surfboards. Their destination: Adrena, an installation as unexpected as it is ambitious, nestled at the heart of the Red Sea Global project, just a few kilometres from the Red Sea, in Saudi Arabia. On paper, the place looks nothing like a traditional surf spot. In reality, it might just be where the future of riding is taking shape.</p>

            <p>The technology behind it all belongs to Endless Surf — a new generation of artificial waves, designed not as a simple aquatic attraction, but as a genuine performance platform for high-level surfers. For several days, the team had full freedom to explore, test, and push every parameter — wave height, frequency, bottom configuration — with the kind of consistency the ocean only rarely delivers.</p>

            <h3>Surfing Mode</h3>
            <p>In surfing mode, Cam and Victor went after raw sensation: walls, sections, and aerial opportunities that the system generates with an almost unsettling regularity. No waiting, no unpredictable swell, no wind gusts — just the wave, on repeat, on demand. The kind of setup that lets you refine your surfing to the point of obsession.</p>

            <h3>Longboard Mode</h3>
            <p>Louis approached the experience differently. On a longboard, every wave becomes a conversation. And this machine, it turns out, has a lot to say: long, open shoulders, a pace that invites noseriding, hang tens, and the kind of smooth transitions usually reserved for the world's most coveted point breaks. The pool format changes the rules of the game, but not what matters most — the feeling is unmistakably real.</p>

            <h3>Pushing the Limits</h3>
            <p>The stated goal of the trip was simple in its wording, demanding in its execution: push the limits of each discipline. Understand what an artificial wave can offer beyond the general public's experience. And the answer, it seems, exceeds all expectations.</p>

            <p>The boom is drawing a higher-income demographic, attracted as much by the lifestyle as by the sport itself. It is fuelling an economic resurgence across the region. But it is also generating new conflicts — in the water, on the beaches, in the towns themselves — with regulation still struggling to keep pace.</p>
        `,
        relatedSpots: ["adrena", "red-sea"]
    },
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
    id: "surfers-rescue-santa-cruz-2026",
    title: "Surfers Save 6 People Including 4 Children in Santa Cruz",
    subtitle: "Steamer Lane: When surfers become lifesavers",
    date: "2026-02-06",
    author: "Surf & Ski Team",
    category: "News",
    featured: true,
    image: null,
    summary: "On February 6, 2026, near the famous Steamer Lane break in Santa Cruz, California, surfers including professional Darryl 'Flea' Virostko rescued 6 people after their motorboat capsized in large waves.",
    content: `
        <p>On February 6, 2026, the rough waters off Santa Cruz, California, became the scene of a heroic rescue. A small motorboat carrying 6 people — 2 adults and 4 children — capsized in large waves near the iconic surf spot of Steamer Lane.</p>
        <h3>The Capsize</h3>
        <p>The boat was moving at speed when it was overturned by a wave, throwing all passengers into the Pacific Ocean. The situation immediately turned critical: some of the victims were not wearing life jackets, making their survival particularly precarious in the challenging swell conditions.</p>
        <h3>Surfers to the Rescue</h3>
        <p>Fortunately, several surfers were in the water at the time of the incident. Among them was California big wave legend Darryl "Flea" Virostko, along with several teenage surfers. Without hesitation, they paddled toward the victims, using their surfboards as makeshift flotation devices to keep the passengers above water until emergency services could arrive.</p>
        <h3>Emergency Response and Outcome</h3>
        <p>Firefighters, lifeguards, and harbor patrol units responded within minutes of the alert. All six victims were treated on scene and transported to the hospital. Everyone is reported to be recovering.</p>
        <h3>Tribute to the Surfers</h3>
        <p>Local authorities publicly praised the courage and quick thinking of the surfers, emphasizing that their swift response most likely prevented a tragedy. A powerful reminder of the solidarity that defines the surfing community.</p>
    `,
    relatedSpots: ["santa-cruz", "steamer-lane"]
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
