import { Game } from '../../types';

export const GET_GAMES = 'GET_GAMES';

export type GamesState = Game[];

export interface GetGames {
	type: typeof GET_GAMES;
	payload: Game[];
}

export type GameActionTypes = GetGames;
