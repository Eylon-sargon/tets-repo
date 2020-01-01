import { UniqueId, Game, GameStatus } from './../types/index';
import axios, { Method } from 'axios';

const alerter = {
	message: (msg: string) => console.log(msg),
	error: (err: any) => console.log(err),
};

class gameApiService {
	private gamesEndpoint: string;

	constructor() {
		this.gamesEndpoint = '/api/games';
	}

	private async fetch(url: string = '', method: Method = 'GET', body?: object, config?: object) {
		try {
			let result = await axios({
				url: this.gamesEndpoint + '/' + url,
				headers: config,
				data: body,
				method,
			});

			if (!process.env.NODE_ENV) {
				console.log(result);
			}

			return result.data;
		} catch (error) {
			alerter.error(error);
		}
	}

	async addGames(appId: UniqueId): Promise<void> {
		await this.fetch(appId, 'post');
		alerter.message('Added game to data');
	}

	async getGames(): Promise<Game[]> {
		const data = await this.fetch();
		return data;
	}

	async getGame(id: UniqueId): Promise<Game> {
		const data = await this.fetch(id, 'post');
		return data;
	}

	async updateGame(id: UniqueId, status: GameStatus): Promise<void> {
		await this.fetch('update/' + id, 'post', {
			status,
		});

		alerter.message('Game status updated');
	}

	async deleteGame(id: UniqueId): Promise<void> {
		await this.fetch(id, 'delete');
		alerter.message('Game deleted');
	}
}

export const GameApiService = new gameApiService();
