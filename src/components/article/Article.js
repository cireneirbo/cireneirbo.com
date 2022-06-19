import './Article.css';

function Article(props) {
  return(
    <div className="col-4 col-6-medium col-12-small">
      <article className="box style2">
        <a href={props.aHrefDemo} className="image featured"><img src={props.aImage} alt={props.aAlt} /></a>
        <h3><a href={props.aHrefRepo}>{props.title}</a></h3>
        <h5>{props.developmentType}</h5>
        <p>{props.description}</p>
        <p>{props.technologies}</p>
      </article>
    </div>
  );
}

export default Article;
