import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { lightGrey } from '../styles/global';
const styles = {
	container: {
		marginBottom: 10,
	},
	card: {
		maxWidth: 800,
		backgroundColor: lightGrey,
		borderRadius: 5,
	},
	media: {
		height: 200,
		marginLeft: 10,
	},
	links: {
		textTransform: 'none',
	},
};

const Project = (props) => {
	const { classes: { container, card, media, links }, project } = props;
	return (
		<Grid item xs={12} className={container}>
			<Card className={card}>
				<Grid container>
					<Grid item xs={6}>
						<CardMedia
							className={media}
							image={project.image}
							title={project.name}
						/>
					</Grid>
					<Grid item xs={6}>
						<Grid container direction="column">
							<Grid item>
								<CardContent>
									<Typography type="headline" component="h2">
										{project.name}
									</Typography>
									<Typography component="p">
										{project.description}
									</Typography>
									<hr/>
									<Typography component="i">
										{project.tech}
									</Typography>
								</CardContent>
							</Grid>
						</Grid>
					</Grid>
					<CardActions>
						{project.link ?
							<Button dense color="primary">
								<a href={project.link} target="_blank" className={links}>{project.link}</a>
							</Button>
							: null
						}
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
