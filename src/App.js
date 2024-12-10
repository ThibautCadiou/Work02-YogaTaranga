import Footer from './components/Footer';
import Header from './components/Header';
import Activites from './components/Activites';
import Actualites from './components/Actualites';
import Decouvrir from './components/Decouvrir';
import { articles } from './data/article1';
import { Article } from './components/Article';

export default function App() {
  return (
    <div className='App'>
      <Header />

      <main className='main'>
        <Activites />
        <Actualites />
        <Decouvrir />

        <section className='articles'>
          <div className='articles__top'>
            <h2 className='articles__title heading-section u-center-text'>Articles</h2>

            <a className='articles__link' href='/test'>
              Voir plus !!! &rarr;
            </a>
          </div>

          <div className='articles__container'>
            {articles.map((article) => (
              <Article article={article} key={article.id} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
