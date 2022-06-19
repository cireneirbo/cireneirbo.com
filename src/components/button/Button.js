import { useRef } from 'react';
import './Button.css';

function Button(props) {

  const myRef = useRef(null); // stores the current node (this button) in myRef.current taken from the ref={} below

  // Scrolls the web page down to the next section (smoothly :])
  function handleButton() {
    myRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  return (
    <button className={props.className} ref={myRef} onClick={handleButton}>{props.text}</button>
  );
}

export default Button;
