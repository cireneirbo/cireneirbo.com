import picPasswordMaker from '../assets/password-maker.png';
import picTMNT from '../assets/tmnt-code.png';
import picDiscordBot from '../assets/discord-bot-of-hacktoberfest-2021.png';
import picAirwinfi from '../assets/airwinfi-code.png';
import picCireNeirboCom from '../assets/cireneirbocom-code.png';
import picEos from '../assets/eos-code.png';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Article from '../components/article/Article';

function Portfolio() {
  return (
    <article id="portfolio" className="wrapper style3">
			<div className="container">

				<Header />

				<div className="row">
					<Article 
						aHref="https://github.com/cireneirbo/Earth-Observation-System"
						aHrefDemo="https://cireneirbo.github.io/password-maker/"
						aImage={picEos}
						aAlt="Earth Observation System code example."
						title="Earth Observation System"
						description="A system for alerting users to local and regional disasters using the NASA EONET API."
						technologies="Node.js, React.js, Express.js, REST API"
					/>
					<Article 
						aHref="https://github.com/cireneirbo/turtles-in-a-whole-shell"
						aHrefDemo="https://cireneirbo.github.io/password-maker/"
						aImage={picTMNT}
						aAlt="Turtles In A Whole Shell code example."
						title="Turtles In A Whole Shell"
						description="An Express/React app that shows information about the Teenage Mutant Ninja Turtles on various web pages."
						technologies="Node.js, Express.js"
					/>
					<Article 
						aHrefRepo="https://github.com/cireneirbo/discord-bot-of-hacktoberfest-2021"
						aHrefDemo="https://cireneirbo.github.io/password-maker/"
						aImage={picDiscordBot}
						aAlt="discord-bot-of-hacktoberfest-2021 project example."
						title="discord-bot-of-hacktoberfest-2021"
						description="A community-driven project for the 2021 Hacktoberfest hackathon."
						technologies="Node.js, Discord.js"
					/>
					<Article 
						aHrefRepo="https://github.com/cireneirbo/password-maker"
						aHrefDemo="https://cireneirbo.github.io/password-maker/"
						aImage={picPasswordMaker}
						aAlt="Password-Maker code example."
						title="Password-Maker"
						description="A website that creates a strong password for the user based on several user inputs."
						technologies="ES6+"
					/>
					<Article 
						aHref="https://github.com/cireneirbo/airwinfi"
						aHrefDemo="https://cireneirbo.github.io/password-maker/"
						aImage={picAirwinfi}
						aAlt="Airwinfi code example."
						title="Airwinfi"
						description="A site that shows you where you can get free internet or internet paired with the cheapest menu item at the business."
						technologies="Node.js, Express.js, REST API"
					/>
					<Article 
						aHref="https://github.com/cireneirbo/cireneirbo.com"
						aHrefDemo="https://cireneirbo.github.io/password-maker/"
						aImage={picCireNeirboCom}
						aAlt="cireneirbo.com code example."
						title="cireneirbo.com"
						description="My personal portfolio website, which you happen to be viewing!"
						technologies="Node.js, React.js"
					/>
				</div>

				<Footer/>

			</div>
    </article>
  );
}

export default Portfolio;
