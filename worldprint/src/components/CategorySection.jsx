import ArticleCard from "./ArticleCard";


function CategorySection({ category, articles }) {
  return (
    <div>
      <p className="wp-category-label">{category}</p>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
        
      </div>
    
  );
}

export default CategorySection;
