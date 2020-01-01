export interface Game {
	status: GameStatus;
	updatedTs: number;
	appId: string;
	url: string;
	headerImage?: string;
	title: string;
	description: string;
	minInstalls?: number;
	score: number;
	ratings: number;
	reviews: number;
	free?: boolean;
	developerEmail?: string;
	developerWebsite?: string;
	genre: string;
	genreId: string;
	released: string;
	updated: string;
}

export type GameStatus = 'Pending' | 'Sent' | 'Replied';

export type UniqueId = string;
