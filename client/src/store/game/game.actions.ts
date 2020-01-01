import { UniqueId } from './../../types/index';
import { AppState } from './../index';
import { Game } from '../../types';
import { GET_GAMES } from './game.types';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { GameApiService } from '../../service/game-api.sercive';

export const getGames = (games: Game[]) => {
	return {
		type: GET_GAMES,
		payload: games,
	};
};

export const fetchGames = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
	const asyncResp = await GameApiService.getGames();
	dispatch(getGames(asyncResp));
};

export const addGames = (id: UniqueId): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
	await GameApiService.addGames(id);
	const asyncResp = await GameApiService.getGames();
	dispatch(getGames(asyncResp));
};
