import {Link} from "react-router-dom"
function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.id}`} style={{textDecoration:"none",color:"inherit"}}>
    <div style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ddd" }}>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
    </div>
    </Link>
  );
}

export default ArticleCard;
