import {Link} from "react-router-dom"
function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.id}`} className="wp-card">
      <h3 className="wp-card-title">{article.title}</h3>
      <p className="wp-card-summary">{article.summary}</p>
      <span className="wp-card-arrow">→</span>
    </Link>
  );
}

export default ArticleCard;
