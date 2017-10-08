import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Projects from './Projects';
import Resume from './Resume';
import Header from './Header';
import { primary } from '../styles/global'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Footer from './Footer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
const styles = {
	container: {
		backgroundColor: primary,
	},
	switchContainer: {
	}
}

class App extends React.Component {
	render() {
		const { classes: { container, switchContainer } } = this.props;
		return (
			<Grid container direction="column" className={container}>
				<Header />
				<Grid item className={switchContainer}>
					<Switch>
						<Route exact path="/" component={Projects} />
						<Route path="/resume" component={Resume} />
						<Route component={NotFoundPage} />
					</Switch>
				</Grid>

				<Footer />

			</Grid>
		);
	}
}

App.propTypes = {
	children: PropTypes.element,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
