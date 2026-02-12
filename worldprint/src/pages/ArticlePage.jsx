import { useParams } from "react-router-dom";
import { articlesData } from "../data/articles";

function ArticlePage() {
  const { id } = useParams();

  const article = articlesData
    .flatMap((section) => section.articles)
    .find((item) => item.id === Number(id));

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
    </div>
  );
}

export default ArticlePage;
