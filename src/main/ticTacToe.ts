export class TicTacToe {
    private grid: string[][];
    private lastPlayer: string;

    constructor() {
        this.grid = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        this.lastPlayer = "";
    }

    play(player: string, x: number, y: number) {
        if (this.canPlay(player, x, y)) {
            this.grid[x][y] = player;
            this.lastPlayer = player;

            if (this.hasWon(player)) {
                return "won";
            } else if (this.isDraw()) {
                return "draw"
            }
            return "played";
        }
        return "invalid";
    }

    private canPlay(player: string, x: number, y: number): boolean {
        if (this.grid[x][y]) {
            return false;
        }

        return (this.lastPlayer === "" && player === "X") ||
            (this.lastPlayer !== "" && player !== this.lastPlayer);

    }

    private hasWon(player: string): boolean {
        return this.hasWonDirection(player, "horizontal") ||
            this.hasWonDirection(player, "vertical") ||
            this.hasWonDirection(player, "diagonal");
    }

    private hasWonDirection(player: string, direction: string) {
        if (direction === "diagonal") {
            return (this.grid[0][0] === player && this.grid[1][1] === player && this.grid[2][2] === player) ||
                (this.grid[0][2] === player && this.grid[1][1] === player && this.grid[2][0] === player)
        }

        for (let i = 0; i < 3; i++) {
            const lastPlay = [];
            for (let j = 0; j < this.grid[i].length; j++) {
                if (direction === "horizontal") {
                    lastPlay.push(this.grid[i][j]);
                } else {
                    lastPlay.push(this.grid[j][i]);
                }
            }
            if (lastPlay[0] === player && lastPlay[1] === player && lastPlay[2] === player) {
                return true;
            }
        }

        return false;
    }

    private isDraw(): boolean {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.grid[i][j] === "") {
                    return false
                }
            }
        }

        return true
    }
}
