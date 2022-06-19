import Button from '../components/button/Button';

function About() {
	return (
		<article id="work" className="wrapper style2">
			<div className="container">
				<header>
					<h2>Here's all the stuff I do.</h2>
					<p>JavaScript specialist.</p>
				</header>
				<div className="row aln-center">
					<div className="col-4 col-6-medium col-12-small">
						<section className="box style1">
							<span className="icon featured"></span>
							<h3>Back-end Development</h3>
							<p>I create back-end web server solutions using NodeJS, REST APIs, ExpressJS, MongoDB.</p>
							<p>I can integrate REST API's, automate processes, and connect with databases.</p>
						</section>
					</div>
					<div className="col-4 col-6-medium col-12-small">
						<section className="box style1">
							<span className="icon featured"></span>
							<h3>Full-stack Development</h3>
							<p>I create full-stack web applications using a MongoDB, ExpressJS, ReactJS, NodeJS stack.</p>
							<p>Both front-end and back-end communicate securely, and several security measures are put in place.</p>
						</section>
					</div>
					<div className="col-4 col-6-medium col-12-small">
						<section className="box style1">
							<span className="icon featured"></span>
							<h3>Front-end Development</h3>
							<p>I build custom web sites for clients using ReactJS, JavaScript (ES6+), HTML5, and CSS3.</p>
							<p>I integrate REST APIs, create interactive and dynamic websites, and optimize for load-times and SEO.</p>
						</section>
					</div>
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