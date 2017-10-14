import React from 'react';
import Grid from 'material-ui/Grid';
import ResumeSection from './ResumeSection';

const Resume = props => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<h1>Tomas Leffew</h1>
			</Grid>
			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={6}>
						<p>
							Github:{' '}
							<a href="https://github.com/Penthious">
								https://github.com/Penthious
							</a>
						</p>
					</Grid>
					<Grid item xs={6}>
						<p>
							Site:{' '}
							<a href="http://penthious.com">
								http://penthious.com
							</a>
						</p>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={3}>
						<p>Phone: 210-290-4890</p>
					</Grid>
					<Grid item xs={3}>
						<p>Email: tleffew1994@gmail.com</p>
					</Grid>
					<Grid item xs={3}>
						<p>4128 South 570 East, Salt Lake City Utah</p>
					</Grid>
				</Grid>
			</Grid>

			<ResumeSection
				title="Summary"
				list={[
					{
						items: [
							`Full stack web developer leveraging diverse background in
						   customer service and a passion for problem solving, pursuing a career in
						   an organization that promotes growth, teamwork, and mentorship.`,
						],
					},
				]}
			/>
			<ResumeSection
				title="Skills"
				list={[
					{
						items: [
							`Angular | Bash | Blade | CSS | ES7 | Flexbox | Git | HTML | JSON | JavaScript | jQuery | Laravel | MySQL | PHP | PHP Storm | React | Redux | React Native | Sass | Vim`,
						],
					},
				]}
			/>
			<ResumeSection
				title="Programming Projects"
				list={[
					{
						items: [
							`Legit Local - Lead Developer on a internal SAAS project, Custom built the back end with Laravel and front end built with react and redux`,
							`Legit Local App - Lead Developer on building out the Android and IOS app using React native with Redux.`,
							`The Venues - Assisted with building out the backend in Laravel and the front end views with Angular.`,
						],
					},
				]}
			/>
			<ResumeSection
				title="Experience"
				list={[
					{
						name: `FULL STACK DEVELOPER, RED OLIVE — 2016-2017`,
						items: [
							`Build and maintain current/new projects using Laravel, Angular, React and React Native`,
							`Worked in a Agile environment with a Scrum methodology`,
						],
					},
					{
						name: `FULL STACK DEVELOPER, SLC DEVSHOP — 2016-2016`,
						items: [
							`Build and maintain current projects using laravel, jQuery and bootstrap`,
							`Over see work that was being done by our overseas developers`,
						],
					},
				]}
			/>

			<ResumeSection
				title="Education"
				list={[
					{
						name: `SALT LAKE COMMUNITY COLLEGE - 2017`,
						info: `Working towards getting my Associates degree in computer science. Roughly one more semester left.`,
					},
					{
						name: `FREECODECAMP - 2016`,
						info: `Acquired a front end certificate by completed over 400 hours on FreeCodeCamp. Throughout the course I was solving algorithm’s and building in depth projects.`,
					},
					{
						name: `CODEUP, SAN ANTONIO TEXAS — 2016`,
						info: `Attended immersive 16-week course with 480 hours in class and 500 hours out of class building websites and web applications at a rapid pace, gaining the necessary skills to become a software engineer.`,
					},
				]}
			/>
		</Grid>
	);
};

Resume.propTypes = {};
Resume.defaultProps = {};

export default Resume;
