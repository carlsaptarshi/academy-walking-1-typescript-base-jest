interface Cell {
    x: number;
    y: number;
}
enum CellState {
    On,
    Off
}

const turnCellOn = () => {
    return CellState.On;
}

const turnCellOff = () => {
    return CellState.Off;
}

const createCell = (x: number, y: number): Cell => {
    return {
        x, y,
    };
}

const isCellAdjacentEast = (cell1: Cell, cell2: Cell) => {
    return (cell1.x + 1 === cell2.x && cell1.y === cell2.y);
}

const isCellAdjacentWest = (cell1: Cell, cell2: Cell) => {
    return (cell1.x === cell2.x + 1 && cell1.y === cell2.y);
}

const isCellAdjacentNorth = (cell1: Cell, cell2: Cell) => {
    return (cell1.x === cell2.x && cell1.y + 1 === cell2.y);
}

const isCellAdjacentSouth = (cell1: Cell, cell2: Cell) => {
    return (cell1.x === cell2.x && cell1.y - 1 === cell2.y);
}

describe('game of life test', () => {
    it("should turn cell on", () => {
        let cell = turnCellOn();
        expect(cell).toBe(CellState.On);
    });

    it("should turn cell off", () => {
        let cell = turnCellOff();
        expect(cell).toBe(CellState.Off);
    });

    it("should place cell on grid", () => {
        const cell = createCell(2, 6);
        expect(cell).toEqual({x: 2, y: 6});
    });

    it("should verify cell is east of another cell", () => {
        const cell1 = createCell(2, 6);
        const cell2 = createCell(3, 6);
        expect(isCellAdjacentEast(cell1, cell2)).toBeTruthy();
    });

    it("should verify cell is west of another cell", () => {
        const cell1 = createCell(3, 6);
        const cell2 = createCell(2, 6);
        expect(isCellAdjacentWest(cell1, cell2)).toBeTruthy();
    });

    it("should verify cell is south of another cell", () => {
        const cell1 = createCell(3, 6);
        const cell2 = createCell(3, 7);
        expect(isCellAdjacentSouth(cell1, cell2)).toBeTruthy();
    });

    it("should verify cell is north of another cell", () => {
        const cell1 = createCell(3, 7);
        const cell2 = createCell(3, 8);
        expect(isCellAdjacentNorth(cell1, cell2)).toBeTruthy();
    });
})