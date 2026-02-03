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
    ]
  }
]
