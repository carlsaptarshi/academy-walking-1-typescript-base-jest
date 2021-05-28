import {play} from "../main/ticTacToe";
import {Player} from "../main/player";
import {Outcome} from "../main/outcome";

describe('Tic tac toe', () => {
    // it("should return played when X plays", () => {
    //     const move = play(Player.X, {x: 0, y: 0});
    //     expect(move).toBe(Outcome.Played)
    // })

    it("should alternate players between X and O", () => {
        const game = play({previousPlayer: Player.O,});

        expect(game).toEqual({previousPlayer: Player.X,})
    })
})
