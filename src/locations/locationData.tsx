export interface Location {
  id: number
  name: string
  lat: number
  long: number,
  acceptableDistanceMetres: number
  markerIcon: string
  description?: string
  clues?: string[]
  photos?: string[]
}

export const locationData: Location[] = [
  {
    id: 1,
    name: 'Stella Jeans',
    lat: 32.7217111,
    long: -117.130071,
    acceptableDistanceMetres: 200,
    markerIcon: '/markers/ice-cream.svg',
    clues: [
      "Happy Mother's Day!",
      "Chicken on a roof",
      "Our first date when you showed me your taste for the finest desserts"
    ],
    photos: [
      '/images/locations/1/IMG_3476.PNG',
      '/images/locations/1/IMG_4316.JPG',
    ]
  },
  {
    id: 2,
    name: 'Mesa Rim Mission Valley',
    lat: 32.759756,
    long: -117.161414,
    acceptableDistanceMetres: 200,
    markerIcon: '/markers/carabiner.svg',
    clues: [
      "First time you flexed on me",
      "Thank you for inviting me into this safe space of yours",
      "Our second date when I realized seeing someone climb could be a turn on"
    ],
    photos: [
      '/images/locations/2/IMG_3436.jpeg',
      '/images/locations/2/IMG_3440.jpeg',
      '/images/locations/2/IMG_3726.jpeg',
      '/images/locations/2/IMG_9999.jpeg',
    ]
  },
  {
    id: 3,
    name: 'Point Loma Nazarene Cliffs',
    lat: 32.713905,
    long: -117.256092,
    acceptableDistanceMetres: 500,
    markerIcon: '/markers/wine-glasses.svg',
    clues: [
      "'No, trust me, I promise, you're not gonna get towed'",
      "When we were rudely interrupted by a marriage proposal",
      "Our third date, cute wine picnic on the cliffs :)"
    ],
    photos: [
      '/images/locations/3/IMG_1.png',
      '/images/locations/3/IMG_2.png',
    ]
  },
  {
    id: 4,
    name: 'Into The Horizon Festival',
    lat: 32.722246,
    long: -117.172767,
    acceptableDistanceMetres: 200,
    markerIcon: '/markers/lollipop.svg',
    clues: [
      "First time chainsmoking with you",
      "First time someone ever applied hand sanitizer to my neck",
      "First time I saw myself being with you for a long time to come :)"
    ],
    photos: [
      '/images/locations/4/IMG_0813.png',
      '/images/locations/4/IMG_3895.png',
      '/images/locations/4/IMG_3903.png',
      '/images/locations/4/IMG_3908.png',
      '/images/locations/4/IMG_7134.png',
    ]
  },
  {
    id: 5,
    name: 'Annie\'s Canyon',
    lat: 33.004795,
    long: -117.263757,
    acceptableDistanceMetres: 1000,
    markerIcon: '/markers/bottle.svg',
    clues: [
      "First time seeing a flying fish",
      "Haw old is ur home",
      "Our first hike together up the world's shortest slot canyon"
    ],
    photos: [
      '/images/locations/5/IMG_1108.png',
      '/images/locations/5/IMG_1122.png',
      '/images/locations/5/IMG_1123.jpeg',
      '/images/locations/5/IMG_1131.jpeg',
      '/images/locations/5/IMG_1135.jpeg',
      '/images/locations/5/IMG_1137.jpeg',
      '/images/locations/5/IMG_1139.jpeg',
      '/images/locations/5/IMG_4425.png',
    ]
  },
  {
    id: 6,
    name: 'Borrego Springs',
    lat: 33.256064,
    long: -116.398081,
    acceptableDistanceMetres: 2000,
    markerIcon: '/markers/cactus-stars.svg',
    clues: [
      "When we thought we stumbled upon a mafia murder burial (at least I did)",
      "Pillows stacked in a questionable formation",
      "Our first mini trip together, stargazing in the desert :)"
    ],
    photos: [
      '/images/locations/6/IMG_1181.jpeg',
      '/images/locations/6/IMG_1185.jpeg',
      '/images/locations/6/IMG_1187.jpeg',
      '/images/locations/6/IMG_1188.jpeg',
    ]
  },
  {
    id: 7,
    name: 'West Hills High School',
    lat: 32.847081,
    long: -117.016338,
    acceptableDistanceMetres: 2000,
    markerIcon: '/markers/scuba-mask.svg',
    clues: [
      "First time encountering Spiderman's most menacing adversary - Doc Oc",
      "Our first breath underwater",
    ],
    photos: [
      '/images/locations/7/IMG_3250.jpeg',
      '/images/locations/7/IMG_3342.JPG',
      '/images/locations/7/IMG_3346.JPG',
      '/images/locations/7/IMG_3347.JPG',
      '/images/locations/7/IMG_3348.JPG',
    ]
  },
  {
    id: 8,
    name: 'La Jolla Shores Marine Room',
    lat: 32.852915,
    long: -117.261856,
    acceptableDistanceMetres: 1000,
    markerIcon: '/markers/garibaldi.svg',
    clues: [
      "Solified my love for Spindrift, in more ways than one",
      "Where you lost my most precious possession (which you remembered and bought again for my birthday)",
      "So many firsts together here - snorkeling, kayaking, seeing sharks and turtles and Gary Baldys :)"
    ],
    photos: [
      '/images/locations/8/IMG_20260.JPG',
      '/images/locations/8/IMG_3274.jpeg',
      '/images/locations/8/IMG_3282.JPG',
      '/images/locations/8/IMG_3293.JPG',
      '/images/locations/8/IMG_3308.JPG',
      '/images/locations/8/IMG_3312.JPG',
      '/images/locations/8/IMG_3938.jpeg',
    ]
  },
  {
    id: 9,
    name: 'Catalina Island',
    lat: 33.349178,
    long: -118.324987,
    acceptableDistanceMetres: 800,
    markerIcon: '/markers/boat.svg',
    clues: [
      "Our first scuba trip!"
    ],
    photos: [
      '/images/locations/9/IMG_3511.jpeg',
      '/images/locations/9/IMG_3514.jpeg',
      '/images/locations/9/IMG_3528.jpeg',
      '/images/locations/9/IMG_3535.jpeg',
      '/images/locations/9/IMG_3545.jpeg',
      '/images/locations/9/IMG_3557.jpeg',
      '/images/locations/9/IMG_3593.jpeg',
      '/images/locations/9/IMG_3597.jpeg',
      '/images/locations/9/IMG_3603.jpeg',
      '/images/locations/9/IMG_3893.jpg',
      '/images/locations/9/IMG_9998.JPG',
    ]
  },
  {
    id: 10,
    name: 'Joshua Tree',
    lat: 34.024931,
    long: -116.141452,
    acceptableDistanceMetres: 15000,
    markerIcon: '/markers/joshua-tree.svg',
    clues: [
      "When you first showed me your favorite yoga pose",
      "When we froze our asses off sleeping in my trunk so we could cuddle instead of using our own sleeping bags",
      "Our first time outdoor climbing together"
    ],
    photos: [
      '/images/locations/10/IMG_1497.JPG',
      '/images/locations/10/IMG_3623.jpeg',
      '/images/locations/10/IMG_3632.jpeg',
      '/images/locations/10/IMG_3645.jpeg',
      '/images/locations/10/IMG_3647.jpeg',
      '/images/locations/10/IMG_3657.jpeg',
      '/images/locations/10/IMG_3672.JPG',
      '/images/locations/10/IMG_3676.JPG',
      '/images/locations/10/IMG_3678.JPG',
      '/images/locations/10/IMG_5555.jpg',
    ]
  },
  {
    id: 11,
    name: 'Hotel Del Coronado',
    lat: 32.680360,
    long: -117.178963,
    acceptableDistanceMetres: 500,
    markerIcon: '/markers/ice-skate.svg',
    clues: [
      "First time seeing you on ice"
    ],
    photos: [
      '/images/locations/11/IMG_3861.jpeg',
      '/images/locations/11/IMG_3862.jpeg',
      '/images/locations/11/IMG_3869.jpeg',
      '/images/locations/11/IMG_3878.jpeg',
    ]
  },
  {
    id: 12,
    name: 'Woods Cove - Laguna Beach',
    lat: 33.526980,
    long: -117.771850,
    acceptableDistanceMetres: 500,
    markerIcon: '/markers/heart.svg',
    clues: [
      "First place I ever took a photo of you underwater",
      "Where I asked you an important question that was probably a lot later than it should have been",
    ],
    photos: [
      '/images/locations/12/IMG_3359.jpeg',
      '/images/locations/12/IMG_3364.jpeg',
      '/images/locations/12/IMG_3405.jpeg',
      '/images/locations/12/IMG_3417.jpeg',
      '/images/locations/12/IMG_3419.jpeg',
      '/images/locations/12/IMG_3909.JPG',
      '/images/locations/12/IMG_3915.JPG',
      '/images/locations/12/IMG_8999.jpeg',
    ]
  }
]
