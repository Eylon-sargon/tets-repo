import { GamesState, GameActionTypes, GET_GAMES } from './game.types';

const initialState: GamesState = [];

export function gameReducer(games = initialState, action: GameActionTypes): GamesState {
	switch (action.type) {
		case GET_GAMES:
			return action.payload;

		default:
			return games;
	}
}
