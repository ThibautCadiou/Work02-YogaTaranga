import Footer from './components/Footer';
import Header from './components/Header';
import Activites from './components/Activites';
import Actualites from './components/Actualites';
import Decouvrir from './components/Decouvrir';

const article1 = {
  readingTime: 10,
  name: 'Chandra Yoga',
  text: 'Le voyage à la lumière de la lune',
  tags: ['Yoga', 'Bienfaits'],
  src: './img/home-07.jpg',
};

function Article({ article }) {
  return (
    <div className='article'>
      <img src={article.src} alt='article 1' className='article__img' />
      <p className='article__top-tag tag'>Méditation</p>
      <h3 className='article__title'>{article.name}</h3>
      <h4 className='article__subtitle'>{article.text}</h4>
      <ul>
        <li>Tag 1</li>
        <li>Tag 1</li>
        <li>Tag 1</li>
      </ul>
    </div>
  );
}

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
            <Article article={article1} />
          </div>
          <div className='articles-container'>
            <div className='article'></div>
            <div className='article'></div>
            <div className='article'></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
