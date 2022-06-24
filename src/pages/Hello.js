/* Compnents*/
import Button from '../components/button/Button';
/* Assets */
import headshot from '../assets/eric-headshot.jpg';

function Hello() {

  const aboutMeArr = [
    "Software Developer with a passion for learning and competing in hackathons.", 
    "Believer in the importance of open-source software.", 
    "Skilled in Node.js, REST APIs, React.js, Express.js, and MongoDB.", 
    "Has strong communication skills, leadership experience, and is a graduate of LaunchCode."
  ];

  return (
    <div className="Hello">
      <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div id="headshot-div" className="col-4 col-5-large col-12-medium">
                <span className="image fit"><img id="image-headshot" src={headshot} alt="" /></span>
            </div>
            <div className="col-8 col-7-large col-12-medium">
              
              <header>
                <h1 id="helloHeadline">Hi. I'm <strong>Eric O'Brien</strong>.</h1>
              </header> 

              <ul>
                {aboutMeArr.length > 0 &&
                  aboutMeArr.map(line => (
                    <li className="helloText">{line}</li>
                  ))
                }
              </ul>
              
              <Button className="button large scrolly" url="about" text="Learn about what I do" />
              
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Hello;
