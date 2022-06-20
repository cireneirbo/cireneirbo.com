import Button from '../components/button/Button';
import Section from '../components/section/Section';

function About() {

	const skills = [
		{
			title: "Front-end Development",
			overview: "I build custom web sites for clients using ReactJS, JavaScript (ES6+), HTML5, and CSS3.",
			description: "I integrate REST APIs, create interactive and dynamic websites, and optimize for load-times and SEO."
		},
		{
			title: "Back-end Development",
			overview: "I create back-end web server solutions using NodeJS, REST APIs, ExpressJS, MongoDB.",
			description: "I can integrate custom and third-party REST API's, automate processes, and connect with databases."
		},
		{
			title: "Full-stack Development",
			overview: "I create full-stack web applications using a MongoDB, ExpressJS, ReactJS, NodeJS stack.",
			description: "Both front-end and back-end communicate efficiently, and several security measures are put in place."
		},
	];
	
	return (
		<article id="about" className="wrapper style2">
			<div className="container">

				<header>
					<h2>Here's all the stuff I do.</h2>
					<p>JavaScript specialist.</p>
				</header>

				<div className="row aln-center">

					{skills.map(skill => 
						<Section 
							title={skill.title}
							overview={skill.overview}
							description={skill.description}
						/>
					)}
					
				</div>

				<footer>

					<p>Curious what I make with these technologies?</p>
					<Button className="button large scrolly" url="portfolio" text="See some of my recent work" />
					
				</footer>

			</div>
		</article>
	);
}

export default About;