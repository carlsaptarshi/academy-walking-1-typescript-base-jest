import {play} from "../main/ticTacToe";
import {Player} from "../main/player";
import {Outcome} from "../main/outcome";

describe('Tic tac toe', () => {
    it("should ensure that X goes first", () => {
        const move = play(Player.X, {x: 0, y: 0});
        expect(move).toBe(Outcome.Played)
    })
})
