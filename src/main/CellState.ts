export enum CellState {
    On,
    Off
}

export const turnCellOn = () => {
    return CellState.On;
}

export const turnCellOff = () => {
    return CellState.Off;
}