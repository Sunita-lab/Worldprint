function ArticleCard({ article }) {
  return (
    <div style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ddd" }}>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
    </div>
  );
}

export default ArticleCard;
