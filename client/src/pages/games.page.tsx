import React, { useEffect } from 'react';
import GameTable from '../components/GameTable';
import GamePageTitle from '../components/GameTitle';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { fetchGames } from '../store/game/game.actions';
import { GamesState } from '../store/game/game.types';

interface Props {
	games: GamesState;
}

const GamesPage: React.FC<Props> = ({ games }) => {
	useEffect(() => {
		fetchGames();
	}, []);

	return (
		<div>
			<GamePageTitle />
			<GameTable games={games} />
		</div>
	);
};

const mapStateToProps = (state: AppState) => ({
	games: state.games,
});

export default connect(mapStateToProps)(GamesPage);
