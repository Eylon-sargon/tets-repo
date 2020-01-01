import React from 'react';
import clsx from 'clsx';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRightOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterHdrIcon from '@material-ui/icons/FilterHdrOutlined';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswerOutlined';
import TodayIcon from '@material-ui/icons/TodayOutlined';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenterOutlined';
import FlightIcon from '@material-ui/icons/FlightOutlined';
import IdeaIcon from '@material-ui/icons/LineWeightRounded';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		appBar: {
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
			background: theme.palette.primary.main,
			color: '#fff',
			fontSize: 12,
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
			justifyContent: 'flex-end',
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
		},
		contentShift: {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
	}),
);

interface Props extends RouteComponentProps {
	children: JSX.Element;
}

const MainLayout: React.FC<Props> = ({ children, history }) => {
	const classes = useStyles({});
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const redirect = (url: string) => history.push(url);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						uLegend
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon color="secondary" fontSize="small" />}</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button onClick={() => redirect('training-program')}>
						<ListItemIcon>
							<TodayIcon color="secondary" fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="Training Program" />
					</ListItem>
					<ListItem button onClick={() => redirect('exercises')}>
						<ListItemIcon>
							<FitnessCenterIcon color="secondary" fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="Exercises" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button onClick={() => redirect('rpm-planner')}>
						<ListItemIcon>
							<FilterHdrIcon color="secondary" fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="RPM Planner" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button onClick={() => redirect('nlp-module')}>
						<ListItemIcon>
							<QuestionAnswerIcon color="secondary" fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="NLP Moudule" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button onClick={() => redirect('idea-module')}>
						<ListItemIcon>
							<IdeaIcon color="secondary" fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="Ideas" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button onClick={() => redirect('test')}>
						<ListItemIcon>
							<FlightIcon color="secondary" fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="Travels" />
					</ListItem>
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />
				{children}
			</main>
		</div>
	);
};

export default withRouter(MainLayout);
