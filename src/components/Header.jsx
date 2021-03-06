import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { primary, secondary, white, black } from '../styles/global';
import { Link } from 'react-router-dom';

const styles = {
	container: {
		backgroundColor: secondary,
		boxShadow: '0px 1px 15px black',
	},
	h1: {
		textDecoration: 'none',
		color: black,
	},
};

const Header = props => {
	const { classes: { container, h1 } } = props;
	return (
		<Grid container className={container} justify="space-around">
			<Grid item xs={6}>
				<Grid
					container
					direction="row"
					justify="flex-start"
					align="center"
				>
					<Grid item xs={5}>
						<h1>Tomas Leffew</h1>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Grid
					container
					direction="row"
					justify="flex-end"
					align="center"
				>
					<Grid item>
						<Link to="/" className={h1}>
							<h1>Portfolio</h1>
						</Link>
					</Grid>
					<Grid item>
						<Link to="/resume" className={h1}>
							<h1>Resume</h1>
						</Link>
					</Grid>
					{/*<Grid item><h1>blog</h1></Grid>*/}
				</Grid>
			</Grid>
		</Grid>
	);
};
Header.propTypes = {
	classes: PropTypes.object.isRequired,
};
Header.defaultProps = {};

export default withStyles(styles)(Header);
