import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import GamesPage from './pages/games.page';

const Routes = () => {
	return (
		<Fragment>
			<Route exact path="/" component={GamesPage} />
		</Fragment>
	);
};

export default Routes;
