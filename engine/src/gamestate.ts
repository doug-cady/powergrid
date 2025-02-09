import { AvailableMoves } from './available-moves';
import { LogItem } from './log';
import { GameMap } from './maps';
import { Move } from './move';

export type MapName =
    | 'USA'
    | 'Germany'
    | 'Brazil'
    | 'Spain & Portugal'
    | 'France'
    | 'Italy'
    | 'Quebec'
    | 'Middle East'
    | 'India';
// | 'Australia'
// | 'Baden-Württemberg'
// | 'Benelux'
// | 'Central Europe'
// | 'China'
// | 'Japan'
// | 'Korea'
// | 'Northern Europe'
// | 'Russia'
// | 'South Africa'
// | 'UK & Ireland'
export type Variant = 'original' | 'recharged';

export interface GameOptions {
    fastBid?: boolean;
    map?: MapName;
    variant?: Variant;
    showMoney?: boolean;
    useNewRechargedSetup?: boolean;
    trackTotalSpent?: boolean;
}

export enum ResourceType {
    Coal = 'coal',
    Oil = 'oil',
    Garbage = 'garbage',
    Uranium = 'uranium',
}

export enum PowerPlantType {
    Coal,
    Oil,
    Garbage,
    Uranium,
    Hybrid,
    Wind,
    Nuclear,
    Step3,
}

export interface PowerPlant {
    number: number;
    type: PowerPlantType;
    cost: number;
    citiesPowered: number;
    storage?: number;
}

export interface CityPosition {
    name: string;
    position: number;
}

export interface Player {
    id: number;
    name?: string;
    powerPlants: PowerPlant[];
    coalCapacity: number;
    coalLeft: number;
    oilCapacity: number;
    oilLeft: number;
    garbageCapacity: number;
    garbageLeft: number;
    uraniumCapacity: number;
    uraniumLeft: number;
    hybridCapacity: number;
    money: number;
    housesLeft: number;
    cities: CityPosition[];
    powerPlantsNotUsed: number[];
    availableMoves: AvailableMoves | null;
    lastMove: Move | null;
    isDropped: boolean;
    bid: number;
    isAI: boolean;
    passed: boolean;
    skipAuction: boolean;
    citiesPowered: number;
    targetCitiesPowered?: number;
    resourcesUsed: ResourceType[];
    totalIncome: number;
    totalSpentCities: number;
    totalSpentConnections: number;
    totalSpentPlants: number;
    totalSpentResources: number;
}

export enum Phase {
    Order = 'Order',
    Auction = 'Auction',
    Resources = 'Resources',
    Building = 'Building',
    Bureaucracy = 'Bureaucracy',
    GameEnd = 'Game End',
}

export interface GameState {
    map: GameMap;
    players: Player[];
    playerOrder: number[];
    currentPlayers: number[];
    powerPlantsDeck: PowerPlant[];
    coalSupply: number;
    oilSupply: number;
    garbageSupply: number;
    uraniumSupply: number;
    coalMarket: number;
    oilMarket: number;
    garbageMarket: number;
    uraniumMarket: number;
    coalResupply?: number[][];
    oilResupply?: number[][];
    garbageResupply?: number[][];
    uraniumResupply?: number[][];
    coalPrices?: number[];
    oilPrices?: number[];
    garbagePrices?: number[];
    uraniumPrices?: number[];
    actualMarket: PowerPlant[];
    futureMarket: PowerPlant[];
    chosenPowerPlant: PowerPlant | undefined;
    chosenResource?: ResourceType | undefined; // Used for India map, where only one resource can be bought at a time.
    currentBid: number | undefined;
    auctioningPlayer: number | undefined;
    step: number;
    phase: Phase;
    options: GameOptions;
    log: LogItem[];
    hiddenLog: LogItem[];
    seed: string;
    round: number;
    auctionSkips: number;
    citiesToStep2: number;
    citiesToEndGame: number;
    citiesBuiltInCurrentRound?: number; // In India, if the players build too many cities in a single round, a power outage will occur.
    resourceResupply: string[];
    paymentTable: number[];
    minimunBid: number;
    plantDiscountActive: boolean;
    nextCardWeak: boolean;
    cardsLeft: number;
    card39Bought: boolean;
    knownPowerPlantDeck: PowerPlant[];
    knownPowerPlantDeckStep3: PowerPlant[];
    powerPlantDeckAfterStep3: PowerPlant[] | undefined;
}
