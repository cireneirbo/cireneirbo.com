/* Components*/
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Article from '../components/article/Article';
/* Assets */
import picPasswordMaker from '../assets/password-maker.png';
import picTMNT from '../assets/tmnt-code.png';
import picDiscordBot from '../assets/discord-bot-of-hacktoberfest-2021.png';
import picAirwinfi from '../assets/airwinfi-code.png';
import picCireNeirboCom from '../assets/cireneirbocom-code.png';
import picEos from '../assets/eos-code.png';
import picUncommonGroundsCafe from '../assets/uncommon-grounds-cafe.png';

function Portfolio() {

	const projects = [
		{
			title: "Earth Observation System",
			aHrefRepo: "https://github.com/cireneirbo/Earth-Observation-System",
			aHrefDemo: "https://cireneirbo.github.io/password-maker/",
			aImage: picEos,
			description: "A system for alerting users to local and regional disasters using the NASA EONET API.",
			technologies: "Node.js, React.js, Express.js, REST API",
			developmentType: "Full-stack Website",
		},
		{
			title: "Turtles In A Whole Shell",
			aHrefRepo: "https://github.com/cireneirbo/turtles-in-a-whole-shell",
			aHrefDemo: "https://cireneirbo.github.io/password-maker/",
			aImage: picTMNT,
			description: "An Express/React app that shows information about the Teenage Mutant Ninja Turtles on various web pages.",
			technologies: "Node.js, Express.js",
			developmentType: "Full-stack Website",
		},
		{
			title: "discord-bot-of-hacktoberfest-2021",
			aHrefRepo: "https://github.com/cireneirbo/discord-bot-of-hacktoberfest-2021",
			aHrefDemo: "https://cireneirbo.github.io/password-maker/",
			aImage: picDiscordBot,
			description: "A community-driven project for the 2021 Hacktoberfest hackathon.",
			technologies: "Node.js, Discord.js",
			developmentType: "Discord Server Bot",
		},
		{
			title: "Password-Maker",
			aHrefRepo: "https://github.com/cireneirbo/password-maker",
			aHrefDemo: "https://cireneirbo.github.io/password-maker/",
			aImage: picPasswordMaker,
			description: "A website that creates a strong password for the user based on several user inputs.",
			technologies: "ES6+, HTML5, CSS3",
			developmentType: "Front-end Website",
		},
		{
			title: "Airwinfi",
			aHrefRepo: "https://github.com/cireneirbo/airwinfi",
			aHrefDemo: "https://cireneirbo.github.io/password-maker/",
			aImage: picAirwinfi,
			description: "A site that shows you where you can get free internet or internet paired with the cheapest menu item at the business.",
			technologies: "Node.js, Express.js, REST API",
			developmentType: "Back-end Website",
		},
		{
			title: "Uncommon Grounds Cafe",
			aHrefRepo: "https://github.com/cireneirbo/uncommon-grounds-cafe",
			aHrefDemo: "https://cireneirbo.github.io/uncommon-grounds-cafe/",
			aImage: picUncommonGroundsCafe,
			description: "A local coffee shop's mobile-friendly website.",
			technologies: "Node.js, React.js, React-router",
			developmentType: "Front-end Website",
		},
		{
			title: "cireneirbo.com",
			aHrefRepo: "https://github.com/cireneirbo/cireneirbo.com",
			aHrefDemo: "https://www.cireneirbo.com/",
			aImage: picCireNeirboCom,
			description: "My personal portfolio website, which you happen to be viewing!",
			technologies: "Node.js, React.js",
			developmentType: "Front-end Website",
		},
	];

  return (
    <article id="portfolio" className="wrapper style3">
			<div className="container">

				<Header />

				<div className="row">

					{projects.map(project => 
						<Article 
						aHrefRepo={project.aHrefRepo}
						aHrefDemo={project.aHrefDemo}
						aImage={project.aImage}
						aAlt={project.title + " demo."}
						title={project.title}
						description={project.description}
						technologies={project.technologies}
						developmentType={project.developmentType}
						/>
					)}

				</div>

				<Footer />

			</div>
    </article>
  );
}

export default Portfolio;
