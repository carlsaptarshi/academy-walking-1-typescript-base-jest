export interface Cell {
    x: number;
    y: number;
}

export const createCell = (x: number, y: number): Cell => {
    return {
        x, y,
    };
}


export const isAdjacentEast = (cell1: Cell, cell2: Cell) => cell1.x + 1 === cell2.x && cell1.y === cell2.y;

export const isAdjacentWest = (cell1: Cell, cell2: Cell) => cell1.x === cell2.x + 1 && cell1.y === cell2.y;

export const isAdjacentNorth = (cell1: Cell, cell2: Cell) => cell1.x === cell2.x && cell1.y + 1 === cell2.y;

export const isAdjacentSouth = (cell1: Cell, cell2: Cell) => cell1.x === cell2.x && cell1.y - 1 === cell2.y;

export const isAdjacentNorthEast = (cell1: Cell, cell2: Cell) => cell1.x + 1 === cell2.x && cell1.y + 1 === cell2.y;

export const isAdjacentSouthEast = (cell1: Cell, cell2: Cell) => cell1.x + 1 === cell2.x && cell1.y - 1 === cell2.y;

export const isAdjacentSouthWest = (cell1: Cell, cell2: Cell) => cell1.x - 1 === cell2.x && cell1.y - 1 === cell2.y;

export const isAdjacentNorthWest = (cell1: Cell, cell2: Cell) => cell1.x - 1 === cell2.x && cell1.y + 1 === cell2.y;

const hasAdjacentCells = (cell: Cell, otherCell: Cell): boolean =>
    isAdjacentNorth(cell, otherCell)
    || isAdjacentNorthEast(cell, otherCell)
    || isAdjacentEast(cell, otherCell)
    || isAdjacentSouthEast(cell, otherCell)
    || isAdjacentSouth(cell, otherCell)
    || isAdjacentSouthWest(cell, otherCell)
    || isAdjacentWest(cell, otherCell)
    || isAdjacentNorthWest(cell, otherCell);

export const numberOfAdjacentCells = (cell: Cell, otherCells: Cell[]) => {
    return otherCells.reduce((acc, otherCell) => hasAdjacentCells(cell, otherCell) ? acc + 1 : acc, 0);
}
