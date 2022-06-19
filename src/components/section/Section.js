import './Section.css';

function Section(props) {

  return (
    <div className="col-4 col-6-medium col-12-small">
      <section className="box style1">
        <span className="icon featured"></span>
        <h3>{props.title}</h3>
        <p>{props.overview}</p>
        <p>{props.description}</p>
      </section>
    </div>
  )
}

export default Section;