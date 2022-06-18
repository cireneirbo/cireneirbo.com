import useRef from 'react';
import './Button.css';

function Button(props) {

  // const myRef = useRef(null); // onto something with this!
  // const element = document.getElementById(props.url);

  // Scrolls the web page down to the next section (smoothly :])
  function handleButton() {
    // alert(ref);
    // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  return (
    <button className={props.className} onClick={handleButton}>{props.text}</button>
  );
}

export default Button;
