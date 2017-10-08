import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

const Footer = (props) => {
	const styles = {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		justifyContent: 'space-between',
		alignContent: 'center'
	}
	return (
		<Grid container align="flex-end" justify="space-between">
			<Grid item><h1>test</h1></Grid>
		</Grid>
	);
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
