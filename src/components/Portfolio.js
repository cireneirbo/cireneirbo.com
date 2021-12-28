import picPasswordMaker from '../images/password-maker-code.png';
import picTMNT from '../images/tmnt-code.png';
import picDiscordBot from '../images/discord-bot-code.png';
import picAirwinfi from '../images/airwinfi-code.png';
import picCireNeirboCom from '../images/cireneirbocom-code.png';
import picEos from '../images/eos-code.png';

import './Portfolio.css';

function Portfolio() {
  return (
    <article id="portfolio" className="wrapper style3">
        <div className="container">
            <header>
                <h2>Here’s some stuff I made recently.</h2>
                <p>Click a title to snoop around in the corresponding GitHub repository.</p>
            </header>
            <div className="row">
                <div className="col-4 col-6-medium col-12-small">
                    <article className="box style2">
                        <a href="https://github.com/cireneirbo/Earth-Observation-System" className="image featured"><img src={picEos} alt="" /></a>
                        <h3><a href="https://github.com/cireneirbo/Earth-Observation-System">Earth Observation System</a></h3>
                        <p>A system for alerting users to local and regional disasters using the NASA EONET API.</p>
                        <p>Node.js, React.js, Express.js, REST API</p>
                    </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                    <article className="box style2">
                        <a href="https://github.com/cireneirbo/turtles-in-a-whole-shell" className="image featured"><img src={picTMNT} alt="" /></a>
                        <h3><a href="https://github.com/cireneirbo/turtles-in-a-whole-shell">Turtles In A Whole Shell</a></h3>
                        <p>An Express/React app that shows information about the Teenage Mutant Ninja Turtles on various web pages.</p>
                        <p>Node.js, Express.js</p>
                    </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                    <article className="box style2">
                        <a href="https://github.com/cireneirbo/discord-bot-of-hacktoberfest-2021" className="image featured"><img src={picDiscordBot} alt="" /></a>
                        <h3><a href="https://github.com/cireneirbo/discord-bot-of-hacktoberfest-2021">discord-bot-of-hacktoberfest-2021</a></h3>
                        <p>A community-driven project for the 2021 Hacktoberfest hackathon.</p>
                        <p>Node.js, Discord.js</p>
                    </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                    <article className="box style2">
                        <a href="https://github.com/cireneirbo/password-maker" className="image featured"><img src={picPasswordMaker} alt="" /></a>
                        <h3><a href="https://github.com/cireneirbo/password-maker">Password-Maker</a></h3>
                        <p>A website that creates a strong password for the user based on several user inputs.</p>
                        <p>ES6+</p>
                    </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                    <article className="box style2">
                        <a href="https://github.com/cireneirbo/airwinfi" className="image featured"><img src={picAirwinfi} alt="" /></a>
                        <h3><a href="https://github.com/cireneirbo/airwinfi">Airwinfi</a></h3>
                        <p>A site that shows you where you can get free internet or internet paired with the cheapest menu item at the business.</p>
                        <p>Node.js, Express.js, REST API</p>
                    </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                    <article className="box style2">
                        <a href="https://github.com/cireneirbo/cireneirbo.com" className="image featured"><img src={picCireNeirboCom} alt="" /></a>
                        <h3><a href="https://github.com/cireneirbo/cireneirbo.com">cireneirbo.com</a></h3>
                        <p>My personal portfolio website, which you happen to be viewing!</p>
                        <p>Node.js, React.js</p>
                        
                    </article>
                </div>
            </div>
            <footer>
                <p>Have something you want to talk about with me?</p>
                <a href="#contact" className="button large scrolly">Get in touch with me</a>
            </footer>
        </div>
    </article>
  );
}

export default Portfolio;