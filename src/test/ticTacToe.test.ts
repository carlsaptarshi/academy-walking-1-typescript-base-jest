import {TicTacToe} from "../main/ticTacToe";

describe('TicTacToe', () => {
    let ticTacToe: TicTacToe;

    beforeEach(() => {
        ticTacToe = new TicTacToe();
    })

    it("should ensure that player X starts", () => {
        expect(ticTacToe.play("X", 0, 0)).toBe("played");
    })

    it("should ensure that player O does not start", () => {
        expect(ticTacToe.play("O", 0, 0)).toBe("invalid");
    })

    it("should ensure that players take turns", () => {
        expect(ticTacToe.play("X", 0, 0)).toBe("played");
        expect(ticTacToe.play("X", 0, 0)).toBe("invalid");
    });

    it("should ensure that players can not play the same position", () => {
        expect(ticTacToe.play("X", 0, 0)).toBe("played");
        expect(ticTacToe.play("O", 0, 0)).toBe("invalid");
    });

    it("should ensure that players can play the different position", () => {
        expect(ticTacToe.play("X", 0, 1)).toBe("played");
        expect(ticTacToe.play("O", 0, 0)).toBe("played");
    });

    it("should declare a winner if 3 of the same symbols in column 1", () => {
        expect(ticTacToe.play("X", 0, 0)).toBe("played");
        expect(ticTacToe.play("O", 0, 1)).toBe("played");
        expect(ticTacToe.play("X", 1, 0)).toBe("played");
        expect(ticTacToe.play("O", 0, 2)).toBe("played");
        expect(ticTacToe.play("X", 2, 0)).toBe("won");
    })

    it("should declare a winner if 3 of the same symbols in column 2", () => {
        expect(ticTacToe.play("X", 0, 1)).toBe("played");
        expect(ticTacToe.play("O", 0, 0)).toBe("played");
        expect(ticTacToe.play("X", 1, 1)).toBe("played");
        expect(ticTacToe.play("O", 0, 2)).toBe("played");
        expect(ticTacToe.play("X", 2, 1)).toBe("won");
    })

    it("should declare a winner if 3 of the same symbols in column 3", () => {
        expect(ticTacToe.play("X", 0, 2)).toBe("played");
        expect(ticTacToe.play("O", 0, 0)).toBe("played");
        expect(ticTacToe.play("X", 1, 2)).toBe("played");
        expect(ticTacToe.play("O", 0, 1)).toBe("played");
        expect(ticTacToe.play("X", 2, 2)).toBe("won");
    })

    it("should declare a winner if 3 of the same symbols in row 1", () => {
        expect(ticTacToe.play("X", 0, 0)).toBe("played");
        expect(ticTacToe.play("O", 1, 0)).toBe("played");
        expect(ticTacToe.play("X", 0, 1)).toBe("played");
        expect(ticTacToe.play("O", 2, 0)).toBe("played");
        expect(ticTacToe.play("X", 0, 2)).toBe("won");
    })

    it("should declare a winner if 3 of the same symbols in a diagonal from left", () => {
        expect(ticTacToe.play("X", 0, 0)).toBe("played");
        expect(ticTacToe.play("O", 0, 1)).toBe("played");
        expect(ticTacToe.play("X", 1, 1)).toBe("played");
        expect(ticTacToe.play("O", 0, 2)).toBe("played");
        expect(ticTacToe.play("X", 2, 2)).toBe("won");
    })

    it("should declare a winner if 3 of the same symbols in a diagonal from right", () => {
        expect(ticTacToe.play("X", 0, 2)).toBe("played");
        expect(ticTacToe.play("O", 0, 1)).toBe("played");
        expect(ticTacToe.play("X", 1, 1)).toBe("played");
        expect(ticTacToe.play("O", 0, 0)).toBe("played");
        expect(ticTacToe.play("X", 2, 0)).toBe("won");
    })

    it("should declare a draw if there are not 3 or more symbols in a row", () => {
        expect(ticTacToe.play("X", 0, 0)).toBe("played");
        expect(ticTacToe.play("O", 0, 1)).toBe("played");
        expect(ticTacToe.play("X", 0, 2)).toBe("played");
        expect(ticTacToe.play("O", 1, 0)).toBe("played");
        expect(ticTacToe.play("X", 1, 2)).toBe("played");
        expect(ticTacToe.play("O", 1, 1)).toBe("played");
        expect(ticTacToe.play("X", 2, 0)).toBe("played");
        expect(ticTacToe.play("0", 2, 2)).toBe("played");
        expect(ticTacToe.play("X", 2, 1)).toBe("draw");
    })
})
