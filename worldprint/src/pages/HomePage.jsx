import {articlesData} from '../data/articles';
import CategorySection from '../components/CategorySection';

function HomePage() {
  return (
    <div className="wp-home">
      <div className="wp-intro">
        <p className="wp-intro-eyebrow">A reflection system</p>
        <h1 className="wp-intro-title">
          News is not just events.<br />It is a mirror.
        </h1>
        <p className="wp-intro-body">
          Every headline carries a human impulse beneath it — fear, control,
          belonging, avoidance. Read an article. Answer a few questions.
          See what it reveals about you.
        </p>
      </div>
      {articlesData.map((section) => (
        <CategorySection
          key={section.category}
          category={section.category}
          articles={section.articles}
        />
      ))}
    </div>
  );
}

export default HomePage;
