export interface Location {
  id: number
  name: string
  lat: number
  long: number,
  acceptableDistanceMetres: number
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
    clues: [
      "Chicken on a roof",
      "Happy Mother's Day!",
      "Our first date when you showed me the finest dessert ever crafted"
    ]
  },
  {
    id: 2,
    name: 'Mesa Rim Mission Valley',
    lat: 32.759756,
    long: -117.161414,
    acceptableDistanceMetres: 200,
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
    clues: [
      "'No, trust me, you're not gonna get towed'",
      "Marriage proposal interruption",
      "Our third date, cute wine picnic on the cliffs :)"
    ]
  },
  {
    id: 4,
    name: 'Into The Horizon Festival',
    lat: 32.722246,
    long: -117.172767,
    acceptableDistanceMetres: 200,
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
    acceptableDistanceMetres: 800,
    clues: [
      "When we saw some flying fish",
      "Haw old is ur home",
      "Our first hike together up the world's shortest slot canyon"
    ]
  },
  {
    id: 6,
    name: 'Borrego Springs',
    lat: 33.256064,
    long: -116.398081,
    acceptableDistanceMetres: 800,
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
    acceptableDistanceMetres: 1000,
    clues: [
      "First breath underwater",
    ]
  },
  {
    id: 8,
    name: 'La Jolla Shores Marine Room',
    lat: 32.852915, 
    long: -117.261856,
    acceptableDistanceMetres: 1000,
    clues: []
  },
  {
    id: 9,
    name: 'Catalina Island',
    lat: 33.349178,
    long: -118.324987,
    acceptableDistanceMetres: 800,
    clues: []
  },
  {
    id: 10,
    name: 'Hotel Del Coronado',
    lat: 32.680360,
    long: -117.178963,
    acceptableDistanceMetres: 200,
    clues: []
  },
  {
    id: 11,
    name: 'Woods Cove - Laguna Beach',
    lat: 33.526980,
    long: -117.771850,
    acceptableDistanceMetres: 500,
    clues: []
  }
]
