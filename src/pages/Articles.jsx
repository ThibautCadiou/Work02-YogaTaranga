import { Article } from '../components/Article';
import Navigation from '../components/Navigation';
import { articles } from '../data/article1';

export default function Articles() {
  return (
    <div>
      <Navigation />
      <h2 className='presentation__title heading-section u-center-text u-margin-bottom-big u-margin-top-big'>
        Articles
      </h2>

      <div className='articles__container'>
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
}
