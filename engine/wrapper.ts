import type { GameState } from './index';
import * as engine from './src/engine';
import { playersSortedByScore } from './src/engine';
import { GameOptions } from './src/gamestate';
import type { LogMove } from './src/log';
import { Move, MoveName } from './src/move';
import { asserts } from './src/utils';

export async function init(
    nbPlayers: number,
    expansions: string[],
    options: GameOptions,
    seed?: string
): Promise<GameState> {
    return engine.setup(nbPlayers, options, seed);
}

export function setPlayerMetaData(G: GameState, player: number, metaData: { name: string }): GameState {
    G.players[player].name = metaData.name;

    return G;
}

export async function move(G: GameState, move: Move, player: number): Promise<GameState> {
    G = engine.move(G, move, player);

    return G;
}

export { ended, scores, stripSecret } from './src/engine';

export function rankings(G: GameState): number[] {
    const sortedPlayers = playersSortedByScore(G).map((pl) => pl.id);

    return G.players.map((pl) => sortedPlayers.indexOf(pl.id) + 1);
}

export function factions(G: GameState): string[] {
    return G.players.map((pl) => engine.playerColors[pl.id]);
}

export function replay(G: GameState, { to = Infinity }: { to: number }): GameState {
    const oldPlayers = G.players;

    const oldG = G;

    G = engine.setup(G.players.length, G.options, G.seed);

    for (let i = 0; i < oldPlayers.length && i < G.players.length; i++) {
        G.players[i].name = oldPlayers[i].name;
    }

    for (const move of oldG.log.slice(0, to).filter((event) => event.type === 'move')) {
        asserts<LogMove>(move);

        G = engine.move(G, move.move, move.player);
    }

    return G;
}

export function round(G: GameState): number {
    return G.round;
}

export async function dropPlayer(G: GameState, playerNum: number): Promise<GameState> {
    const player = G.players[playerNum];
    player.isDropped = true;

    G.log.push({
        type: 'event',
        event: `Player ${playerNum} was dropped`,
    });

    if (player.availableMoves![MoveName.Pass]) {
        G = engine.move(G, { name: MoveName.Pass, data: true }, playerNum);
    } else {
        do {
            G = engine.moveAI(G, playerNum);
        } while (G.currentPlayers.includes(playerNum));
    }

    return G;
}

export function currentPlayer(G: GameState): number[] {
    return G.currentPlayers;
}

export function messages(G: GameState) {
    return {
        messages: [],
        data: G,
    };
}

export function logLength(G: GameState, _player?: number): number {
    return G.log.length;
}

export function logSlice(G: GameState, options?: { player?: number; start?: number; end?: number }) {
    const stripped = engine.stripSecret(G, options?.player);
    return {
        log: stripped.log.slice(options?.start, options?.end),
        availableMoves:
            options?.end === undefined
                ? stripped.players.map((pl) => pl.availableMoves)
                : engine
                      .stripSecret(replay(G, { to: options.end }), options!.player)
                      .players.map((pl) => pl.availableMoves),
    };
}
