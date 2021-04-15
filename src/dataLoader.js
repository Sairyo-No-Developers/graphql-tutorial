import Book from './models/Book';
import Author from './models/Author';
import Publisher from './models/Publisher';

const chuckNorrisJokes = [
    "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
    "Time waits for no man. Unless that man is Chuck Norris.",
    "If you spell Chuck Norris in Scrabble, you win. Forever.",
    "Chuck Norris breathes air ... five times a day.",
    "In the Beginning there was nothing … then Chuck Norris roundhouse kicked nothing and told it to get a job.",
    "When God said, 'Let there be light!' Chuck said, 'Say Please.'",
    "Chuck Norris has a mug of nails instead of coffee in the morning.",
    "If Chuck Norris were to travel to an alternate dimension in which there was another Chuck Norris and they both fought, they would both win.",
    "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
    "Chuck Norris' tears cure cancer. Too bad he has never cried.",
    "Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light",
    "If you ask Chuck Norris what time it is, he always says, 'Two seconds till.' After you ask, 'Two seconds to what?' he roundhouse kicks you in the face.",
    "Chuck Norris appeared in the 'Street Fighter II' video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked bout this 'glitch', Chuck Norris replied, 'That's no glitch.'",
    "Since 1940, the year Chuck Norris was born, roundhouse kick related deaths have increased 13,000 percent.",
    "Chuck Norris does not own a stove, oven, or microwave , because revenge is a dish best served cold.",
    "Chuck Norris does not sleep. He waits.",
    "There is no chin behind Chuck Norris' beard. There is only another fist.",
    "The chief export of Chuck Norris is pain.",
    "Chuck Norris recently had the idea to sell his pee as a canned beverage. It's now called Red Bull.",
    "If paper beats rock, rock beats scissors, and scissors beats paper, what beats all 3 at the same time? Chuck Norris.",
    "On the 7th day, God rested ... Chuck Norris took over.",
    "Chuck Norris can dribble a bowling ball.",
    "Chuck Norris drinks napalm to fight his heartburn.",
    "Chuck Norris' roundhouse kick is so powerful, it can be seen from outer space by the naked eye.",
    "If you want a list of Chuck Norris' enemies, just check the extinct species list.",
    "Chuck Norris has never blinked in his entire life. Never.",
    "Chuck Norris once shot an enemy plane down with his finger, by yelling, 'Bang!'",
    "Chuck Norris does not use spell check. If he happens to misspell a word, Oxford will change the spelling.",
    "Some kids pee their name in the snow. Chuck Norris can pee his name into concrete.",
    "Chuck Norris' calendar goes straight from March 31st to April 2nd, because no one fools Chuck Norris.",
    "Chuck Norris counted to infinity… twice.",
    "Chuck Norris can speak Braille.",
    "Chuck Norris can have both feet on the ground and kick butt at the same time.",
    "Chuck Norris can do a wheelie on a unicycle.",
    "Chuck Norris stands faster than anyone can run.",
    "Once a cobra bit Chuck Norris' leg. After five days of excruciating pain, the cobra died.",
    "Chuck Norris once won a game of Connect Four in three moves.",
    "Champions are the breakfast of Chuck Norris.",
    "When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris.",
    "Chuck Norris can slam revolving doors.",
    "Chuck Norris does not hunt because the word hunting implies the possibility of failure. Chuck Norris goes killing.",
    "The dark is afraid of Chuck Norris.",
    "Chuck Norris can kill two stones with one bird.",
    "Chuck Norris can play the violin with a piano.",
    "Chuck Norris makes onions cry.",
    "Death once had a near-Chuck-Norris experience.",
    "When Chuck Norris writes, he makes paper bleed.",
    "Chuck Norris can strangle you with a cordless phone.",
    "Chuck Norris never retreats; He just attacks in the opposite direction.",
    "Chuck Norris can build a snowman out of rain.",
    "Chuck Norris once punched a man in the soul.",
    "Chuck Norris can drown a fish.",
    "Chuck Norris once had a heart attack. His heart lost.",
    "When Chuck Norris looks in a mirror, the mirror shatters. Because not even glass is dumb enough to get in between Chuck Norris and Chuck Norris.",
    "When Chuck Norris enters a room, he doesn't turn the lights on, he turns the dark off.",
    "The only time Chuck Norris was ever wrong was when he thought he had made a mistake.",
    "Chuck Norris can tie his shoes with his feet.",
    "The quickest way to a man's heart is with Chuck Norris's fist.",
    "Chuck Norris is the only person that can punch a cyclops between the eye.",
    "Chuck Norris used to beat up his shadow because it was following to close. It now stands 15 feet behind him.",
];

const publishers = {
    1: new Publisher(1, "Pearson", []),
    2: new Publisher(2, "O'Reilly", [])
}

const books = {
    1: new Book(1, "Learn ECMA The Easy Way", [], 1),
    2: new Book(2, "Asynchronous Programming for Babies", [], 2),
    3: new Book(3, "ECMA: Best Practices", [], 1),
    4: new Book(4, "GraphQL: What the heck is it?", [], 2)
}

const authors = {
    1: new Author(1, "Cheems", []),
    2: new Author(2, "Doge", []),
    3: new Author(3, "Kermit", []),
    4: new Author(4, "Big Floppa", [])
}

publishers[1].addBook(1);
publishers[1].addBook(3);
publishers[2].addBook(2);
publishers[2].addBook(4);

authors[1].addBook(1); books[1].addAuthor(1);
authors[2].addBook(1); books[1].addAuthor(2);
authors[2].addBook(2); books[2].addAuthor(2);
authors[3].addBook(4); books[4].addAuthor(3);
authors[3].addBook(1); books[1].addAuthor(3);
authors[4].addBook(4); books[4].addAuthor(4);
authors[4].addBook(3); books[3].addAuthor(4);

export { books, authors, publishers, chuckNorrisJokes };