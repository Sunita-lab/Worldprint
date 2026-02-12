function CategorySection({ category, articles }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>{category}</h2>

      <div>
        {articles.map((article) => (
          <div key={article.id} style={{ marginBottom: "1rem" }}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
