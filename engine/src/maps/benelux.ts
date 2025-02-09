import { GameMap } from './../maps';

export enum Regions {
    Green = 'green',
    Brown = 'brown',
    Yellow = 'yellow',
    Red = 'red',
    Blue = 'blue',
}

export enum Cities {
    Groningen = 'Groningen',
    Enschede = 'Enschede',
    Apeldoorn = 'Apeldoorn',
    Arnhem = 'Arnhem',
    Leeuwarden = 'Leeuwarden',
    Nijmegen = 'Nijmegen',
    Denhelder = 'Den Helder',
    Zaanstad = 'Zaanstad',
    Amsterdam = 'Amsterdam',
    Utrecht = 'Utrecht',
    Haarlem = 'Haarlem',
    Leiden = 'Leiden',
    Denhaas = 'Den Haas',
    Rotterdam = 'Rotterdam',
    Enbosch = 'En Bosch',
    Venlo = 'Venlo',
    Eindhoven = 'Eindhoven',
    Tilburg = 'Tilburg',
    Breda = 'Breda',
    Middelburg = 'Middelburg',
    Maastricht = 'Maastricht',
    Leuven = 'Leuven',
    Brussel = 'Brussel',
    Antwerpen = 'Antwerpen',
    Gent = 'Gent',
    Kortrijk = 'Kortrijk',
    Brugge = 'Brugge',
    Dostende = 'Dostende',
    Liege = 'Liege',
    Namur = 'Namur',
    Bruxelles = 'Bruxelles',
    Charleroi = 'Charleroi',
    Mons = 'Mons',
    Arlon = 'Arlon',
    Luxembourg = 'Luxembourg',
}

export const map: GameMap = {
    name: 'Benelux',
    cities: [
        { name: Cities.Groningen, region: Regions.Green, x: 654, y: 147 },
        { name: Cities.Enschede, region: Regions.Green, x: 659, y: 369 },
        { name: Cities.Apeldoorn, region: Regions.Green, x: 552, y: 329 },
        { name: Cities.Arnhem, region: Regions.Green, x: 541, y: 386 },
        { name: Cities.Leeuwarden, region: Regions.Green, x: 560, y: 136 },
        { name: Cities.Nijmegen, region: Regions.Green, x: 518, y: 445 },
        { name: Cities.Denhelder, region: Regions.Green, x: 411, y: 169 },
        { name: Cities.Zaanstad, region: Regions.Brown, x: 432, y: 245 },
        { name: Cities.Amsterdam, region: Regions.Brown, x: 437, y: 299 },
        { name: Cities.Utrecht, region: Regions.Brown, x: 429, y: 361 },
        { name: Cities.Haarlem, region: Regions.Brown, x: 373, y: 259 },
        { name: Cities.Leiden, region: Regions.Brown, x: 355, y: 322 },
        { name: Cities.Denhaas, region: Regions.Brown, x: 300, y: 347 },
        { name: Cities.Rotterdam, region: Regions.Brown, x: 338, y: 400 },
        { name: Cities.Enbosch, region: Regions.Yellow, x: 448, y: 447 },
        { name: Cities.Venlo, region: Regions.Yellow, x: 550, y: 526 },
        { name: Cities.Eindhoven, region: Regions.Yellow, x: 463, y: 539 },
        { name: Cities.Tilburg, region: Regions.Yellow, x: 404, y: 497 },
        { name: Cities.Breda, region: Regions.Yellow, x: 349, y: 466 },
        { name: Cities.Middelburg, region: Regions.Yellow, x: 210, y: 453 },
        { name: Cities.Maastricht, region: Regions.Yellow, x: 480, y: 640 },
        { name: Cities.Leuven, region: Regions.Red, x: 352, y: 619 },
        { name: Cities.Brussel, region: Regions.Red, x: 286, y: 595 },
        { name: Cities.Antwerpen, region: Regions.Red, x: 304, y: 526 },
        { name: Cities.Gent, region: Regions.Red, x: 206, y: 562 },
        { name: Cities.Kortrijk, region: Regions.Red, x: 132, y: 589 },
        { name: Cities.Brugge, region: Regions.Red, x: 160, y: 511 },
        { name: Cities.Dostende, region: Regions.Red, x: 94, y: 495 },
        { name: Cities.Liege, region: Regions.Blue, x: 445, y: 705 },
        { name: Cities.Namur, region: Regions.Blue, x: 361, y: 713 },
        { name: Cities.Bruxelles, region: Regions.Blue, x: 283, y: 642 },
        { name: Cities.Charleroi, region: Regions.Blue, x: 278, y: 725 },
        { name: Cities.Mons, region: Regions.Blue, x: 212, y: 686 },
        { name: Cities.Arlon, region: Regions.Blue, x: 431, y: 876 },
        { name: Cities.Luxembourg, region: Regions.Blue, x: 502, y: 918 },
    ],
    connections: [
        { nodes: [Cities.Denhelder, Cities.Leeuwarden], cost: 13 },
        { nodes: [Cities.Leeuwarden, Cities.Groningen], cost: 6 },
        { nodes: [Cities.Groningen, Cities.Enschede], cost: 12 },
        { nodes: [Cities.Enschede, Cities.Apeldoorn], cost: 9 },
        { nodes: [Cities.Apeldoorn, Cities.Arnhem], cost: 3 },
        { nodes: [Cities.Arnhem, Cities.Nijmegen], cost: 2 },
        { nodes: [Cities.Nijmegen, Cities.Enbosch], cost: 6 },
        { nodes: [Cities.Nijmegen, Cities.Venlo], cost: 7 },
        { nodes: [Cities.Nijmegen, Cities.Eindhoven], cost: 7 },
        { nodes: [Cities.Eindhoven, Cities.Enbosch], cost: 4 },
        { nodes: [Cities.Enbosch, Cities.Utrecht], cost: 8 },
        { nodes: [Cities.Apeldoorn, Cities.Leeuwarden], cost: 15 },
        { nodes: [Cities.Leeuwarden, Cities.Enschede], cost: 13 },
        { nodes: [Cities.Enschede, Cities.Arnhem], cost: 7 },
        { nodes: [Cities.Arnhem, Cities.Utrecht], cost: 6 },
        { nodes: [Cities.Utrecht, Cities.Amsterdam], cost: 4 },
        { nodes: [Cities.Amsterdam, Cities.Haarlem], cost: 2 },
        { nodes: [Cities.Haarlem, Cities.Zaanstad], cost: 2 },
        { nodes: [Cities.Zaanstad, Cities.Denhelder], cost: 6 },
        { nodes: [Cities.Denhelder, Cities.Haarlem], cost: 7 },
        { nodes: [Cities.Haarlem, Cities.Leiden], cost: 3 },
        { nodes: [Cities.Leiden, Cities.Denhaas], cost: 2 },
        { nodes: [Cities.Denhaas, Cities.Rotterdam], cost: 3 },
        { nodes: [Cities.Rotterdam, Cities.Leiden], cost: 3 },
        { nodes: [Cities.Leiden, Cities.Amsterdam], cost: 4 },
        { nodes: [Cities.Leiden, Cities.Utrecht], cost: 4 },
        { nodes: [Cities.Utrecht, Cities.Rotterdam], cost: 5 },
        { nodes: [Cities.Rotterdam, Cities.Enbosch], cost: 11 },
        { nodes: [Cities.Breda, Cities.Rotterdam], cost: 8 },
        { nodes: [Cities.Breda, Cities.Middelburg], cost: 9 },
        { nodes: [Cities.Middelburg, Cities.Antwerpen], cost: 8 },
        { nodes: [Cities.Antwerpen, Cities.Brugge], cost: 9 },
        { nodes: [Cities.Brugge, Cities.Dostende], cost: 2 },
        { nodes: [Cities.Amsterdam, Cities.Zaanstad], cost: 1 },
        { nodes: [Cities.Amsterdam, Cities.Apeldoorn], cost: 7 },
        { nodes: [Cities.Apeldoorn, Cities.Utrecht], cost: 6 },
        { nodes: [Cities.Venlo, Cities.Eindhoven], cost: 5 },
        { nodes: [Cities.Eindhoven, Cities.Tilburg], cost: 4 },
        { nodes: [Cities.Tilburg, Cities.Breda], cost: 2 },
        { nodes: [Cities.Breda, Cities.Enbosch], cost: 5 },
        { nodes: [Cities.Breda, Cities.Antwerpen], cost: 5 },
        { nodes: [Cities.Antwerpen, Cities.Tilburg], cost: 6 },
        { nodes: [Cities.Antwerpen, Cities.Eindhoven], cost: 8 },
        { nodes: [Cities.Eindhoven, Cities.Maastricht], cost: 8 },
        { nodes: [Cities.Maastricht, Cities.Venlo], cost: 10 },
        { nodes: [Cities.Maastricht, Cities.Leuven], cost: 7 },
        { nodes: [Cities.Leuven, Cities.Eindhoven], cost: 9 },
        { nodes: [Cities.Leuven, Cities.Brussel], cost: 2 },
        { nodes: [Cities.Brussel, Cities.Bruxelles], cost: 0 },
        { nodes: [Cities.Bruxelles, Cities.Charleroi], cost: 5 },
        { nodes: [Cities.Charleroi, Cities.Namur], cost: 3 },
        { nodes: [Cities.Namur, Cities.Bruxelles], cost: 5 },
        { nodes: [Cities.Leuven, Cities.Namur], cost: 5 },
        { nodes: [Cities.Leuven, Cities.Liege], cost: 7 },
        { nodes: [Cities.Liege, Cities.Namur], cost: 6 },
        { nodes: [Cities.Liege, Cities.Maastricht], cost: 3 },
        { nodes: [Cities.Kortrijk, Cities.Dostende], cost: 5 },
        { nodes: [Cities.Brugge, Cities.Kortrijk], cost: 4 },
        { nodes: [Cities.Kortrijk, Cities.Gent], cost: 4 },
        { nodes: [Cities.Gent, Cities.Brugge], cost: 3 },
        { nodes: [Cities.Kortrijk, Cities.Bruxelles], cost: 10 },
        { nodes: [Cities.Bruxelles, Cities.Mons], cost: 5 },
        { nodes: [Cities.Mons, Cities.Kortrijk], cost: 8 },
        { nodes: [Cities.Gent, Cities.Antwerpen], cost: 5 },
        { nodes: [Cities.Antwerpen, Cities.Brussel], cost: 4 },
        { nodes: [Cities.Brussel, Cities.Gent], cost: 7 },
        { nodes: [Cities.Antwerpen, Cities.Leuven], cost: 4 },
        { nodes: [Cities.Mons, Cities.Charleroi], cost: 4 },
        { nodes: [Cities.Charleroi, Cities.Arlon], cost: 18 },
        { nodes: [Cities.Arlon, Cities.Luxembourg], cost: 5 },
        { nodes: [Cities.Luxembourg, Cities.Liege], cost: 20 },
        { nodes: [Cities.Liege, Cities.Arlon], cost: 18 },
        { nodes: [Cities.Arlon, Cities.Namur], cost: 16 },
        { nodes: [Cities.Tilburg, Cities.Enbosch], cost: 3 },
    ],
    layout: 'Portrait',
    mapPosition: [0, -50],
    adjustRatio: [1.15, 1.15],
};
