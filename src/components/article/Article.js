
function Article() {
  return(
    <div className="col-4 col-6-medium col-12-small">
      <article className="box style2">
        {/* <a href="https://github.com/cireneirbo/Earth-Observation-System" className="image featured"><img src={picEos} alt="" /></a> */}
        <h3><a href="https://github.com/cireneirbo/Earth-Observation-System">Earth Observation System</a></h3>
        <p>A system for alerting users to local and regional disasters using the NASA EONET API.</p>
        <p>Node.js, React.js, Express.js, REST API</p>
      </article>
    </div>
  );
}

export default Article;