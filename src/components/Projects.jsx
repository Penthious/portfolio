import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Project from './Project';

const styles = {
	container: {
		marginTop: 20,
	},
};

const Projects = (props) => {
	const { classes: { container } } = props;
	return (
		<Grid container justify="center" direction="column" align="center" className={container}>
			<Project />
			<Project />
			<Project />
			<Project />
		</Grid>
	);
};

Projects.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);