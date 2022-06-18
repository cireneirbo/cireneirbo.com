import './Article.css'
function Article(props) {
  return(
    <div className="col-4 col-6-medium col-12-small">
      <article className="box style2">
        <a href={props.aHref} className="image featured"><img src={props.aImage} alt={props.aAlt} /></a>
        <h3><a href={props.aHref}>{props.title}</a></h3>
        <p>{props.description}</p>
        <p>{props.technologies}</p>
      </article>
    </div>
  );
}

export default Article;
