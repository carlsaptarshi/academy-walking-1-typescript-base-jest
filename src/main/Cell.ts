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

export const numberOfAdjacentCells = (cell: Cell, otherCells: Cell[]) => {
    let numAdjCells = 0;
    otherCells.forEach(item => {
        const v = [
            isAdjacentNorth(cell, item),
            isAdjacentNorthEast(cell, item),
            isAdjacentEast(cell, item),
            isAdjacentSouthEast(cell, item),
            isAdjacentSouth(cell, item),
            isAdjacentSouthWest(cell, item),
            isAdjacentWest(cell, item),
            isAdjacentNorthWest(cell, item)
        ].filter(item => item).length;

        if(v ===1 ){
            numAdjCells+=1
        }
    })

    return numAdjCells;

}
