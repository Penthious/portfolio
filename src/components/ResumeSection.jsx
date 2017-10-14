import React from 'react';
import Grid from 'material-ui/Grid';

const ResumeSection = props => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<h1>{props.title}</h1>
			</Grid>
			<Grid item xs={12}>
				{props.list.map((item, i) => (
					<Grid container key={i}>
						{item.name ? (
							<Grid item xs={12}>
								<h3>{item.name}</h3>
							</Grid>
						) : null}
						{item.items
							? item.items.map((bullet, i) => (
									<Grid item xs={7} key={i}>
										<ul>
											<li style={{ marginTop: -15 }}>
												{bullet}
											</li>
										</ul>
									</Grid>
								))
							: null}
						{item.info ? (
							<Grid item xs={7}>
								<p style={{ marginTop: -20 }}>{item.info}</p>
							</Grid>
						) : null}
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

ResumeSection.propTypes = {};
ResumeSection.defaultProps = {};

export default ResumeSection;
