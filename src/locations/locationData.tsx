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
      "Is that a chicken on a roof??",
      "Our first date, when you showed me your taste for the finest desserts"
    ],
    photos: [
      '/images/locations/1/IMG_3476.PNG',
      '/images/locations/1/IMG_4316.JPG',
    ],
    description: "It all started with the Hinge algorithm, who are we to argue? We decided waking up in a new city was a little too much for a first date so we settled on your favorite dessert in the world... \n\n Who knew a cute Mother's Day Ice Cream date would turn into my favorite person :) \n\n Stella Jeans Ube Ice Cream remains undefeated. "
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
    ],
    description: "Forever grateful that you invited me into this safe space of yours. \n\nI genuinely LOVE watching you climb. Your passion for the things you do is so infectious to me, and climbing was the first time I got to watch you do your thing!! \n\nWhat started as a second date turned into one of my favorite activities to do with you. Always down to come to Mesa Rim and watch you flex on me :)"
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
    ],
    description: "This was such a cute one! One of my favorite dates of ours. \n\nIt took me a while to convince you that parking here was fine and that you wouldn't get towed, but our little sunset wine picnic ended up being perfect. \n\n We still need to go back here!!"
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
    ],
    description: "This was a special one for me. I had so much fun being with you and all your friends, seeing how much your friends loved you. \n\n Maybe it was the drugs lmao, but I remember feeling such a shift in my feelings and you suddenly became someone I saw myself being with for a long time to come. \n\n10/10 experience having you layer hand sanitizer on my neck and blowing on me 🤣"
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
    ],
    description: "Our first hike together! You had been talking about this one for a while and I think slot canyons are cool so I was excited we were finally doing it. \n\nIt did end up being the shortest slot canyon in the world, but I remember this day very fondly :) \n\nEven if I didn't remember the message in the bottle word for word like you did, I loved this little side quest, bat hanging out of the tree. \n\nThis was also the day we went to Rip Curl to try on wetsuits and explored the USD campus!"
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
    ],
    description: "Our first mini trip together! Not quite waking up in a new city, but it was very cute to get away with you for a night. \n\n The sky was so clear, this was my first time seeing the Milky Way! Even if we were interrupted by some trucks looking like they were doing a desert murder burial, this was special :) \n\n 10/10 would stay in a creepy western saloon motel with weird pillows again."
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
    ],
    description: "Our first time breathing underwater! \n\nLiterally not a single person in the world I would have rather been with me to do this. This was the beginning of all of our underwater adventures to come... \n\n "
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
    ],
    description: "So many firsts here! Our first time kayaking and snorkeling, kicking off the ocean craze that was to come. \n\n Our first Open Water dives together! My first time becoming an ocean murderer - poor baby Sand Dollar :( \n\n Being in the water with you has become one of my favorite places to be in the world, and I'm so lucky and grateful that you let me share this energy with you."
  },
  {
    id: 9,
    name: 'Catalina Island',
    lat: 33.349178,
    long: -118.324987,
    acceptableDistanceMetres: 800,
    markerIcon: '/markers/boat.svg',
    clues: [
      "Go Dodgers...",
      "Fish love... frozen peas...?",
      "First time diving in a kelp aquarium"
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
    ],
    description: "My favorite weekend with you honestly."
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
    ],
    description: "My first time outdoor climbing and so glad I got to do it with you! \n\nI love how many amazing memories we've made together already, and this definitely felt like a highlight. \n\nThank you for letting me tag along and for being the most cozy car camping partner :)"
  },
  {
    id: 11,
    name: 'Hotel Del Coronado',
    lat: 32.680360,
    long: -117.178963,
    acceptableDistanceMetres: 500,
    markerIcon: '/markers/ice-skate.svg',
    clues: [
      "Definitely a balancing act...",
      "Found out we have different tastes in alcoholic hot drinks",
      "First time seeing you on ice"
    ],
    photos: [
      '/images/locations/11/IMG_3861.jpeg',
      '/images/locations/11/IMG_3862.jpeg',
      '/images/locations/11/IMG_3869.jpeg',
      '/images/locations/11/IMG_3878.jpeg',
    ],
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
