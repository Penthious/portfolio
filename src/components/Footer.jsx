import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
const styles = {
	container: {
		marginLeft: 100,
	},
};

const Footer = props => {
	return (
		<Grid
			container
			align="flex-end"
			justify="space-between"
			styles={props.classes.container}
		>
			<Grid item xs={12}>
				<p style={{marginLeft:90}}>Penthious.com</p>
			</Grid>
		</Grid>
	);
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default withStyles(styles)(Footer);
