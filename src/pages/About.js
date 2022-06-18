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
                            <span className="icon featured fa-comments"></span>
                            <h3>Node.js</h3>
                            {/* <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p> */}
                        </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <section className="box style1">
                            <span className="icon solid featured fa-camera-retro"></span>
                            <h3>React.js</h3>
                            {/* <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p> */}
                        </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <section className="box style1">
                            <span className="icon featured fa-thumbs-up"></span>
                            <h3>Express.js</h3>
                            {/* <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p> */}
                        </section>
                    </div>
                </div>
                <footer>
                    <p>Curious what I make with these technologies?</p>
                    {/* <a href="#portfolio" className="button large scrolly">See some of my recent work</a> */}
                    <Button className="button large scrolly" url="portfolio" text="See some of my recent work" />
										{/* // ref={portfolio} */}
                </footer>
            </div>
        </article>
    );
}

export default About;