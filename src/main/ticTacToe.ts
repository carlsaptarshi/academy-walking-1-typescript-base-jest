import {Player} from "./player";

interface Game {
    previousPlayer: Player;
}

export const play = (game: Game): Game => {
    const previousPlayer = game.previousPlayer=== Player.X? Player.O:  Player.X;
    return {...game, previousPlayer}
}
