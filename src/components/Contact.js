import './Contact.css';

function Contact() {
    return (
        <article id="contact" className="wrapper style4">
				<div className="container medium">
					<header>
						<h2>Have me make stuff for you.</h2>
						<p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
					</header>
					<div className="row">
						<div className="col-12">
							<form method="post" action="#">
								<div className="row">
									<div className="col-6 col-12-small">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div className="col-6 col-12-small">
										<input type="text" name="email" id="email" placeholder="Email" />
									</div>
									<div className="col-12">
										<input type="text" name="subject" id="subject" placeholder="Subject" />
									</div>
									<div className="col-12">
										<textarea name="message" id="message" placeholder="Message"></textarea>
									</div>
									<div className="col-12">
										<ul className="actions">
											<li><input type="submit" value="Send Message" /></li>
											<li><input type="reset" value="Clear Form" className="alt" /></li>
										</ul>
									</div>
								</div>
							</form>
						</div>
						<div className="col-12">
							<hr />
							<h3>Find me on ...</h3>
							<ul className="social">
								<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
								<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
							</ul>
							<hr />
						</div>
					</div>
				</div>
			</article>
    );
}

export default Contact;