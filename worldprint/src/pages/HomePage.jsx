import {articlesData} from '../data/articles';
import CategorySection from '../components/CategorySection';

function HomePage() {
  return (
    <div>
      <h1>Worldprint</h1>

      {articlesData.map((section) =>(
        <CategorySection
        key = {section.category}
        category = {section.category}
        articles = {section.articles}
        />
      ))}
    </div>
  );
}

export default HomePage;
