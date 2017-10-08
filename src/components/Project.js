import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
const styles = {
	container: {
		marginBottom: 10,
	},
	card: {
		maxWidth: 800,
	},
	media: {
		height: 200,
		marginLeft: 10,
	},
};

const Project = (props) => {
	const { classes: { container, card, media } } = props;
	return (
		<Grid item xs={12} className={container}>
			<Card className={card}>
				<Grid container>
					<Grid item xs={6}>
						<CardMedia
							className={media}
							image="http://lorempixel.com/400/200"
							title="Contemplative Reptile"
						/>
					</Grid>
					<Grid item xs={6}>
						<Grid container direction="column">
							<Grid item>
								<CardContent>
									<Typography type="headline" component="h2">
										Lizard
									</Typography>
									<Typography component="p">
										Lizards are a widespread group of squamate reptiles, with
										over 6,000
										species, ranging
										across all continents except Antarctica
									</Typography>
									<hr/>
									<Typography component="i">
										Lizards are a widespread group of squamate reptiles, with
										over 6,000
										species, ranging
										across all continents except Antarctica
									</Typography>
								</CardContent>
							</Grid>
						</Grid>
					</Grid>
					<CardActions>
						<Button dense color="primary">
							Share
						</Button>
						<Button dense color="primary">
							Learn More
						</Button>
					</CardActions>
				</Grid>
			</Card>
		</Grid>
	);
};

Project.propTypes = {
	classes: PropTypes.object.isRequired,
};
Project.defaultProps = {};

export default withStyles(styles)(Project);
