import {CellState, turnCellOff, turnCellOn} from "../main/CellState";
import {
    createCell,
    isAdjacentEast,
    isAdjacentNorth,
    isAdjacentNorthEast,
    isAdjacentNorthWest,
    isAdjacentSouth,
    isAdjacentSouthEast,
    isAdjacentSouthWest,
    isAdjacentWest, numberOfAdjacentCells
} from "../main/Cell";

describe('game of life test', () => {
    describe('Cell state', () => {
        it("should turn cell on", () => {
            let cell = turnCellOn();
            expect(cell).toBe(CellState.On);
        });

        it('should turn cell off', () => {
            let cell = turnCellOff();
            expect(cell).toBe(CellState.Off);
        });
    })

    describe('placing cell onto grid', () => {
        it("should place cell on grid", () => {
            const cell = createCell(2, 6);
            expect(cell).toEqual({x: 2, y: 6});
        });
    })

    describe("adjacent cells", () => {
        it("should have adjacent cell to the east", () => {
            const cell1 = createCell(2, 6);
            const cell2 = createCell(3, 6);
            expect(isAdjacentEast(cell1, cell2)).toBeTruthy();
        });

        it("should have adjacent cell to the west", () => {
            const cell1 = createCell(3, 6);
            const cell2 = createCell(2, 6);
            expect(isAdjacentWest(cell1, cell2)).toBeTruthy();
        });

        it("should have adjacent cell to the south", () => {
            const cell1 = createCell(3, 6);
            const cell2 = createCell(3, 5);
            expect(isAdjacentSouth(cell1, cell2)).toBeTruthy();
        });

        it("should have adjacent cell to the north", () => {
            const cell1 = createCell(3, 7);
            const cell2 = createCell(3, 8);
            expect(isAdjacentNorth(cell1, cell2)).toBeTruthy();
        });

        it("should have adjacent cell to the north east", () => {
            const cell1 = createCell(3, 7);
            const cell2 = createCell(4, 8);
            expect(isAdjacentNorthEast(cell1, cell2)).toBeTruthy();
        });

        it("should have adjacent cell to the south east", () => {
            const cell1 = createCell(3, 7);
            const cell2 = createCell(4, 6);
            expect(isAdjacentSouthEast(cell1, cell2)).toBeTruthy();
        });

        it("should have adjacent cell to the south west", () => {
            const cell1 = createCell(3, 7);
            const cell2 = createCell(2, 6);
            expect(isAdjacentSouthWest(cell1, cell2)).toBeTruthy();
        });

        it("should have adjacent cell to the north west", () => {
            const cell1 = createCell(3, 7);
            const cell2 = createCell(2, 8);
            expect(isAdjacentNorthWest(cell1, cell2)).toBeTruthy();
        });

        it("should have not adjacent cell", () => {
            const cell1 = createCell(3, 7);
            const cell2 = createCell(5, 8);
            expect(isAdjacentNorthWest(cell1, cell2)).toBeFalsy();
        });
    })

    describe('the number of adjacent cells for a given cell',  () => {
        it("should count the number of adjacent cells for a given cell", () =>{
            const cell1 = createCell(5,5);
            const cell2N = createCell(5,6);
            const cell3W = createCell(4,5);
            const cell4E = createCell(6,5);

            const result = numberOfAdjacentCells(cell1, [cell2N, cell3W, cell4E]);
            let expectedNumberOfAdjacentCells = 3;
            expect(result).toBe(expectedNumberOfAdjacentCells);
        });

        it("should count the number of adjacent cells for a given cell", () =>{
            const cell1 = createCell(5,5);
            const cell2N = createCell(5,6);
            const cell3W = createCell(14,15);
            const cell4E = createCell(16,15);

            const result = numberOfAdjacentCells(cell1, [cell2N, cell3W, cell4E]);
            let expectedNumberOfAdjacentCells = 1;
            expect(result).toBe(expectedNumberOfAdjacentCells);
        });
    });

})