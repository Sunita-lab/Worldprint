import ArticleCard from "./ArticleCard";


function CategorySection({ category, articles }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>{category}</h2>

      {articles.map((article) => (
        <ArticleCard key={article.id}
        article={article}/>
      )
    )}
        
      </div>
    
  );
}

export default CategorySection;
