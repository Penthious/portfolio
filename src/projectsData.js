import tandc from './assets/images/tandc.png';
import bl from './assets/images/bl.png';
import vv from './assets/images/vv.png';
import pt from './assets/images/pt.png';
import sy from './assets/images/sweetyams.png';
import llweb from './assets/images/legitlocalweb.png';
import llapp from './assets/images/legitlocalapp.png';
import venues from './assets/images/venues.png';
import imbd from './assets/images/imbd.png';
import challenger from './assets/images/challenger.png';
import penthious from './assets/images/penthious.png';

export default [
	{
		name: 'legit local web',
		description: 'is a application used to allow users to manage their review accounts, like' +
		' google, yelp and facebook. It offers a way for users to also send out emails or text ' +
		'messages to people to ask if they would like to review their site.',
		image: llweb,
		tech: ' Laravel, React, ES6, stripe api, nexmo api, facebook api, google api, yelp api, foundation, sass, Redux, webpack, thunk, react router v4',
		link: 'https://legit-local.redolive.us',
		priority: 1,
	},
	{
		name: 'legit local app',
		description: 'is a application used to allow users to manage their review accounts, like' +
		' google, yelp and facebook. It offers a way for users to also send out emails or text ' +
		'messages to people to ask if they would like to review their site.',
		image: llapp,
		tech: ' Laravel, React native, ES6, css modules, Redux ',
		priority: 2,
	},
	{
		name: 'The Venues',
		description: 'is a site that allows for business owners to list their venue so that guest ' +
		'can rent that venue at set intervals and time blocks',
		image: venues,
		tech: ' Laravel, Angular, Observables, ES6, foundation, stripe api, google maps api',
		link: 'https://beta.thevenues.com',
		priority: 3,
	},
	{
		name: 'Challenger School',
		description: 'is a site that was built for the Challenger school district to handle the ' +
		'student registration, school events, student records and a full cms to change up any data ' +
		'you see on the front end.',
		image: challenger,
		tech: ' October CMS, Handlebars, mustache, Angular, ES6, foundation',
		link: 'https://www.challengerschool.com',
		priority: 4,
	},
	{
		name: 'IMBD Clone',
		description: 'is a site that shows off the use of a IMBD api to pull in movies, actors, ' +
		'and directors. The site shows off pagination, filtering and querying data. It is also' +
		' built without the use of redux to show off a core understanding of react, react' +
		' components and how to manage data between those components.',

		image: imbd,
		tech: 'React, ES6, foundation, flexbox, sass',
		link: 'http://imbd.penthious.com/titles',
		priority: 5,
	},
	{
		name: 'penthious.com',
		description: ' is my personal site that I built to display my skills. It is built with' +
		' responsiveness in mind while using react and bulma for the UI. Redux to handle the' +
		' state and laravel to handle the backend layer.',

		image: penthious,
		tech: 'React, ES6, material-ui, flexbox, sass, Redux, thunk',
		link: 'https://github.com/Penthious/portfolio',
		priority: 6,
	},
	{
		name: 'TandC',
		description: ' is a resource site meant to help out new comers with articles and' +
		' videos. My task was the article section, building out the CRUD and styling the front' +
		' end layout.',
		image: tandc,
		tech: ' Laravel, Bulma, Flexbox, jQuery, sass, Disqus',
		link: 'https://github.com/cjsampson/tandc',
		priority: 7,
	},
	{
		name: 'Blueline Screening Source',
		description: ' is a large, enterprise drug testing software. I was tasked with building' +
		' the logic and controls behind making and handling online communications. The' +
		' software had a complex backend with a large amount of sql tables.',
		image: bl,
		tech: ' Laravel, Twitter Bootstrap, AJAX, Datatables, jQuery, NPM,' +
		' Gulp, twillio',
		priority: 8,
	},
	{
		name: 'Volunteer Verify',
		description: ' is a background tester for businesses, my tasks were to handle the and' +
		' set up the background testing API along with making a ticket system so admins can let' +
		' users know when and why the tests came back the way they did.',
		image: vv,
		tech: ' Laravel, Twitter Bootstrap, jQuery, Ajax, NPM, gulp, stripe API',
		priority: 9,
	},
	{
		name: 'Paramount Tax',
		description: ' helps the users keep track of the work they did and the' +
		' payment they were to receive. My main role was to build the backend to allow for the' +
		' correct data to be passed to the front end so we could show the correct info.',
		image: pt,
		tech: ' Laravel, Twitter Bootstrap, jQuery, NPM, gulp, bower, stripe API, behat',
		priority: 10,
	},
	{
		name: 'Sweet Yams',
		description: ' was built for our local organic restaurant, it consisted of a CRUD for' +
		' the owners, a online ordering system, and google map for directions. My part in this' +
		' project was building and setting up the online ordering system with the stripe API,' +
		' and integrating google maps.',
		image: sy,
		tech: ' Laravel, Twitter Bootstrap, jQuery, custom sass, NPM, google API, stripe API',
		link: 'https://github.com/thesweetyams/sweetyams',
		priority: 11,
	},
];
