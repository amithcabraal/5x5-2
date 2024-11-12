export interface WordSet {
  id: string;
  theme: string;
  words: string[];
}

export const wordSets: WordSet[] = [
  // Existing sets remain unchanged
  {
    id: 'fruits',
    theme: 'Fruits',
    words: ['APPLE', 'MANGO', 'PEACH', 'GRAPE', 'LEMON']
  },
  {
    id: 'space',
    theme: 'Space',
    words: ['EARTH', 'VENUS', 'PLUTO', 'COMET', 'ORBIT']
  },
  {
    id: 'ocean',
    theme: 'Ocean Life',
    words: ['SHARK', 'WHALE', 'CORAL', 'CLAMS', 'SQUID']
  },
  {
    id: 'birds',
    theme: 'Birds',
    words: ['EAGLE', 'HAWKS', 'CRANE', 'ROBIN', 'OWLET']
  },
  {
    id: 'colors',
    theme: 'Colors',
    words: ['GREEN', 'BLACK', 'WHITE', 'BROWN', 'PEACH']
  },
  {
    id: 'sports',
    theme: 'Sports',
    words: ['CHESS', 'RUGBY', 'POKER', 'SKATE', 'CLIMB']
  },
  {
    id: 'music',
    theme: 'Musical Terms',
    words: ['TEMPO', 'SCALE', 'CHORD', 'NOTES', 'SHARP']
  },
  {
    id: 'weather',
    theme: 'Weather',
    words: ['STORM', 'CLOUD', 'SUNNY', 'WINDY', 'FROST']
  },
  {
    id: 'garden',
    theme: 'Garden',
    words: ['PLANT', 'SEEDS', 'BLOOM', 'GRASS', 'TREES']
  },
  {
    id: 'kitchen',
    theme: 'Kitchen Items',
    words: ['PLATE', 'SPOON', 'KNIFE', 'GLASS', 'BOWLS']
  },
  {
    id: 'science',
    theme: 'Science Terms',
    words: ['ATOMS', 'CELLS', 'FORCE', 'LIGHT', 'WAVES']
  },
  {
    id: 'emotions',
    theme: 'Emotions',
    words: ['HAPPY', 'ANGRY', 'SMILE', 'LAUGH', 'PROUD']
  },
  {
    id: 'clothes',
    theme: 'Clothing',
    words: ['SHIRT', 'PANTS', 'SHOES', 'SOCKS', 'DRESS']
  },
  {
    id: 'animals',
    theme: 'Farm Animals',
    words: ['HORSE', 'SHEEP', 'GOATS', 'GEESE', 'DUCKS']
  },
  {
    id: 'school',
    theme: 'School Classroom Items',
    words: ['BOOKS', 'BOARD', 'RULER', 'CHALK', 'PAPER']
  },
  {
    id: 'travel',
    theme: 'Travel',
    words: ['PLANE', 'TRAIN', 'SHIPS', 'HOTEL', 'BEACH']
  },
  {
    id: 'dessert',
    theme: 'Desserts',
    words: ['CAKES', 'CANDY', 'SWEET', 'FUDGE', 'CREAM']
  },
  {
    id: 'tools',
    theme: 'Tools',
    words: ['DRILL', 'SCREW', 'PLIER', 'WRECK', 'GRIND']
  },
  {
    id: 'nature',
    theme: 'Nature',
    words: ['RIVER', 'LAKES', 'HILLS', 'BEACH', 'WOODS']
  },
  {
    id: 'time',
    theme: 'Time Related',
    words: ['CLOCK', 'HOURS', 'WEEKS', 'MONTH', 'YEARS']
  },
  {
    id: 'metals',
    theme: 'Metal related words',
    words: ['STEEL', 'BRASS', 'SILVER','ALLOY', 'METAL']
  },
  {
    id: 'jobs',
    theme: 'Professions',
    words: ['NURSE', 'PILOT', 'TEACH', 'GUARD', 'CLERK']
  },
  {
    id: 'house',
    theme: 'House Parts',
    words: ['WALLS', 'DOORS', 'FLOOR', 'STEPS', 'ROOMS']
  },
  {
    id: 'space2',
    theme: 'More Space',
    words: ['STARS', 'MOONS', 'SOLAR', 'SPACE', 'LIGHT']
  },
  {
    id: 'computer',
    theme: 'Computing',
    words: ['MOUSE', 'CLICK', 'PRINT', 'DRIVE', 'BYTES']
  },
  {
    id: 'dance',
    theme: 'Dance Styles',
    words: ['WALTZ', 'SWING', 'SALSA', 'TANGO', 'SAMBA']
  },
  
  // New sets (all words verified to be exactly 5 letters)
  {
    id: 'herbs',
    theme: 'Herbs & Spices',
    words: ['BASIL', 'THYME', 'CUMIN', 'CLOVE', 'CHIVE']
  },
  {
    id: 'cards',
    theme: 'Card Games',
    words: ['POKER', 'BRIDGE', 'HEARTS', 'SPADE', 'TRUMP']
  },
  {
    id: 'greek',
    theme: 'Greek Letters',
    words: ['ALPHA', 'DELTA', 'SIGMA', 'OMEGA', 'THETA']
  },
  {
    id: 'bones',
    theme: 'Human Bones',
    words: ['SKULL', 'SPINE', 'FEMUR', 'TIBIA', 'ULNAR']
  },
  {
    id: 'chess',
    theme: 'Chess Terms',
    words: ['CHECK', 'QUEEN', 'BOARD', 'STALE', 'PIECE']
  },
  {
    id: 'pizza',
    theme: 'Pizza Toppings',
    words: ['OLIVE', 'ONION', 'BACON', 'SAUCE', 'CRUST']
  },
  {
    id: 'money',
    theme: 'Finance',
    words: ['STOCK', 'TRADE', 'PRICE', 'MONEY', 'SHARE']
  },
  {
    id: 'solar',
    theme: 'Solar System',
    words: ['EARTH', 'COMET', 'VENUS', 'TITAN', 'SOLAR']
  },
  {
    id: 'beach',
    theme: 'Beach Items',
    words: ['TOWEL', 'SHELL', 'WAVES', 'OCEAN', 'SHORE']
  },
  {
    id: 'japan',
    theme: 'Japan',
    words: ['SUSHI', 'MOCHI', 'BENTO', 'TOKYO', 'MANGA']
  },
  {
    id: 'paint',
    theme: 'Art Supplies',
    words: ['PAINT', 'BRUSH', 'EASEL', 'COLOR', 'PAPER']
  },
  {
    id: 'magic',
    theme: 'Magic & Spells',
    words: ['SPELL', 'WANDS', 'CHARM', 'MAGIC', 'POTION']
  },
  {
    id: 'bread',
    theme: 'Bread Types',
    words: ['WHEAT', 'BAGEL', 'TOAST', 'SCONE', 'CRUST']
  },
  {
    id: 'movie',
    theme: 'Movie Terms',
    words: ['SCENE', 'ACTOR', 'STAGE', 'DRAMA', 'SCORE']
  },
  {
    id: 'sleep',
    theme: 'Sleep Related',
    words: ['DREAM', 'SNORE', 'WAKES', 'SLEEP', 'NIGHT']
  },
  {
    id: 'sport2',
    theme: 'Sports Gear',
    words: ['SHOES', 'SOCKS', 'GLOVE', 'BOOTS', 'GUARD']
  },
  {
    id: 'music2',
    theme: 'Music Terms',
    words: ['PIANO', 'DRUMS', 'FLUTE', 'BRASS', 'SOUND']
  },
  {
    id: 'candy',
    theme: 'Candy Types',
    words: ['SWEET', 'TAFFY', 'FUDGE', 'SUGAR', 'CANDY']
  },
  {
    id: 'drink',
    theme: 'Beverages',
    words: ['WATER', 'JUICE', 'CIDER', 'SHAKE', 'DRINK']
  },
  {
    id: 'trees',
    theme: 'Tree Types',
    words: ['MAPLE', 'BIRCH', 'CEDAR', 'EBONY', 'BEECH']
  }
];