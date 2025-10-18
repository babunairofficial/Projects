const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage with stunning ocean views. Perfect for a romantic getaway or family vacation.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 2500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Luxurious Mountain Chalet",
    description: "Experience alpine luxury in this spacious chalet with panoramic mountain views, hot tub, and fireplace.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    price: 4200,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Modern Downtown Loft",
    description: "Stylish industrial loft in the heart of the city. Walking distance to restaurants, shops, and entertainment.",
    image: "https://images.unsplash.com/photo-1502672260066-6bc35f0a1ff1",
    price: 1800,
    location: "New York",
    country: "United States"
  },
  {
    title: "Rustic Countryside Villa",
    description: "Peaceful retreat surrounded by vineyards and olive groves. Features a pool and authentic Italian architecture.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 3500,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Tropical Paradise Bungalow",
    description: "Wake up to the sound of waves in this overwater bungalow with direct ocean access and private deck.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    price: 5500,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Historic City Center Apartment",
    description: "Beautifully restored apartment in a 19th-century building. Perfect location to explore the city's landmarks.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 2200,
    location: "Paris",
    country: "France"
  },
  {
    title: "Lakeside Cabin Retreat",
    description: "Secluded cabin nestled among pine trees with private lake access. Ideal for fishing and kayaking.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    price: 1600,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Contemporary Beach House",
    description: "Stunning modern architecture with floor-to-ceiling windows overlooking pristine white sand beaches.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 6800,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Charming Garden Cottage",
    description: "Quaint cottage surrounded by English gardens. Features exposed beams and a cozy fireplace.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 1400,
    location: "Cotswolds",
    country: "United Kingdom"
  },
  {
    title: "Desert Oasis Villa",
    description: "Luxurious villa with infinity pool overlooking dramatic desert landscapes. Modern amenities in a serene setting.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    price: 3800,
    location: "Scottsdale",
    country: "United States"
  },
  {
    title: "Seaside Greek Villa",
    description: "Traditional whitewashed villa with blue domes and breathtaking Aegean Sea views. Private terrace included.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    price: 4500,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Urban Penthouse Suite",
    description: "Spectacular penthouse with 360-degree city views, rooftop terrace, and designer furnishings.",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e",
    price: 7200,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Rainforest Treehouse",
    description: "Unique eco-friendly treehouse immersed in lush rainforest. Experience wildlife and nature up close.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
    price: 2800,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Ski-In Ski-Out Condo",
    description: "Convenient slope-side condo with fireplace and mountain views. Perfect for winter sports enthusiasts.",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
    price: 3200,
    location: "Whistler",
    country: "Canada"
  },
  {
    title: "Beachfront Surf Shack",
    description: "Laid-back beach house perfect for surfers. Steps from world-class waves and local surf culture.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    price: 1900,
    location: "Byron Bay",
    country: "Australia"
  },
  {
    title: "Historic Castle Suite",
    description: "Stay in a real medieval castle with modern comforts. Experience history while enjoying luxury amenities.",
    image: "https://images.unsplash.com/photo-1585009165253-e85cf7d4c49b",
    price: 8500,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Minimalist Tokyo Studio",
    description: "Compact yet perfectly designed studio in trendy Shibuya. Experience authentic Tokyo living.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    price: 1200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Coastal Cliff House",
    description: "Dramatic cliffside home with panoramic ocean views. Features infinity pool and outdoor entertainment area.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    price: 5200,
    location: "Big Sur",
    country: "United States"
  },
  {
    title: "Provencal Farmhouse",
    description: "Authentic stone farmhouse surrounded by lavender fields. Includes outdoor kitchen and wine cellar.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 3100,
    location: "Provence",
    country: "France"
  },
  {
    title: "Arctic Aurora Cabin",
    description: "Remote cabin perfectly positioned for Northern Lights viewing. Features glass ceiling and cozy interiors.",
    image: "https://images.unsplash.com/photo-1570737891111-1f5b9b6e8b1f",
    price: 4800,
    location: "Lapland",
    country: "Finland"
  },
  {
    title: "Riverside Amsterdam Houseboat",
    description: "Unique floating home on Amsterdam's picturesque canals. Experience Dutch culture from the water.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    price: 2600,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Safari Lodge Suite",
    description: "Luxury tented suite overlooking the savanna. Wake up to wildlife and enjoy guided safari experiences.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    price: 6500,
    location: "Serengeti",
    country: "Tanzania"
  },
  {
    title: "Bohemian Artist Loft",
    description: "Creative space in historic art district. High ceilings, natural light, and eclectic vintage decor.",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
    price: 1700,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Geothermal Spa Retreat",
    description: "Modern retreat with private geothermal hot spring. Minimalist Scandinavian design meets natural beauty.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    price: 5800,
    location: "Reykjavik",
    country: "Iceland"
  },
  {
    title: "Colonial Heritage Home",
    description: "Restored colonial mansion with tropical gardens. Blend of historical charm and modern conveniences.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    price: 2400,
    location: "Cartagena",
    country: "Colombia"
  },
  {
    title: "Wine Country Estate",
    description: "Elegant estate in premium wine region. Private vineyard tours and tasting room included.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 7500,
    location: "Napa Valley",
    country: "United States"
  },
  {
    title: "Jungle Eco Lodge",
    description: "Sustainable luxury lodge in pristine jungle. Spot monkeys and exotic birds from your private balcony.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    price: 3300,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Harbourfront Fisherman's Cottage",
    description: "Authentic fishing village cottage with harbor views. Fresh seafood restaurants at your doorstep.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1",
    price: 1500,
    location: "Cornwall",
    country: "United Kingdom"
  },
  {
    title: "Alpine Meadow Chalet",
    description: "Traditional wooden chalet surrounded by wildflower meadows. Perfect for hiking and mountain biking.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
    price: 2900,
    location: "Swiss Alps",
    country: "Switzerland"
  },
  {
    title: "Modernist Architectural Gem",
    description: "Award-winning contemporary home with innovative design. Features smart home technology throughout.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: 4900,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "Tranquil Tea Plantation House",
    description: "Colonial-era bungalow on working tea estate. Misty mountain views and guided plantation tours.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    price: 1800,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Island Beach Villa",
    description: "Private villa on secluded island. Includes boat access, chef service, and water sports equipment.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
    price: 9200,
    location: "Seychelles",
    country: "Seychelles"
  },
  {
    title: "Vintage Airstream Glamping",
    description: "Restored classic Airstream in scenic desert location. Glamping with style under starry skies.",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d",
    price: 800,
    location: "Joshua Tree",
    country: "United States"
  },
  {
    title: "Waterfront Boathouse",
    description: "Charming boathouse with private dock and kayaks. Watch sunset over the water from your deck.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 2100,
    location: "Seattle",
    country: "United States"
  },
  {
    title: "Moroccan Riad",
    description: "Traditional riad with interior courtyard and rooftop terrace. Intricate tilework and authentic decor.",
    image: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8",
    price: 2000,
    location: "Marrakech",
    country: "Morocco"
  },
  {
    title: "Glass Igloo Under Stars",
    description: "Thermal glass igloo perfect for aurora viewing. Heated floors and luxurious bedding for comfort.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    price: 4200,
    location: "Finnish Lapland",
    country: "Finland"
  },
  {
    title: "Converted Lighthouse",
    description: "Unique lighthouse conversion with 360-degree ocean views. Spiral staircase leads to observation deck.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: 3700,
    location: "Maine Coast",
    country: "United States"
  },
  {
    title: "Zen Garden Retreat",
    description: "Peaceful sanctuary with traditional Japanese garden. Includes meditation room and tea ceremony area.",
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e",
    price: 2700,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Cliffside Cave House",
    description: "Carved into volcanic cliffs with stunning caldera views. Unique architecture with modern luxuries.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 4400,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Ranch Homestead",
    description: "Working ranch experience with horseback riding. Authentic western hospitality and home-cooked meals.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: 1600,
    location: "Montana",
    country: "United States"
  },
  {
    title: "Art Deco Miami Apartment",
    description: "Stylish Art Deco building in South Beach. Walking distance to beach, restaurants, and nightlife.",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324",
    price: 2300,
    location: "Miami Beach",
    country: "United States"
  },
  {
    title: "Secluded Forest Dome",
    description: "Geodesic dome hidden in ancient forest. Eco-friendly with solar power and composting toilet.",
    image: "https://images.unsplash.com/photo-1504903633489-5e3e00d7b0c8",
    price: 1300,
    location: "Oregon",
    country: "United States"
  },
  {
    title: "Riverside Medieval Tower",
    description: "Authentic medieval tower with modern restoration. River views and historical ambiance.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    price: 3600,
    location: "Loire Valley",
    country: "France"
  },
  {
    title: "Beachside Tiki Hut",
    description: "Open-air tiki style accommodation right on the beach. Experience island living at its most authentic.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 1100,
    location: "Tulum",
    country: "Mexico"
  },
  {
    title: "High-Rise City View Apartment",
    description: "Sleek high-rise apartment with floor-to-ceiling windows. Modern kitchen and building amenities.",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
    price: 2800,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Victorian Townhouse",
    description: "Elegantly restored Victorian with original features. Bay windows, ornate moldings, and garden.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    price: 3400,
    location: "San Francisco",
    country: "United States"
  },
  {
    title: "Overwater Spa Bungalow",
    description: "Luxury overwater bungalow with glass floor panels and private infinity pool. Resort spa access included.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    price: 8800,
    location: "Fiji",
    country: "Fiji"
  },
  {
    title: "Mountain Yurt Experience",
    description: "Traditional Mongolian yurt in alpine setting. Wood-burning stove and stunning mountain panoramas.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    price: 950,
    location: "Colorado Rockies",
    country: "United States"
  },
  {
    title: "Boutique Vineyard Cottage",
    description: "Romantic cottage among grapevines. Complimentary wine tastings and gourmet breakfast included.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    price: 2500,
    location: "Stellenbosch",
    country: "South Africa"
  },
  {
    title: "Luxury Safari Tent",
    description: "Five-star tented camp with all amenities. Private game drives and authentic bush dining experiences.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    price: 7200,
    location: "Kruger National Park",
    country: "South Africa"
  }
];

module.exports = { data: sampleListings };