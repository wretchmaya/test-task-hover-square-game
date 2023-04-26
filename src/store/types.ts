interface IGameMode {
    name: string;
    field: number;
    id: number;
}

export interface IInitialState {
    modes: IGameMode[];
    isLoading: boolean;
    board: boolean[][];
    errors: string;
}
