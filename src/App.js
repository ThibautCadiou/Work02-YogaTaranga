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
function Tag({ tag }) {
  return <li className='article__tag--item common-text'>{tag}</li>;
}

function Article({ article }) {
  return (
    <div className='article'>
      <div className='article__top'>
        <img src={article.src} alt='article 1' className='article__img' />
        <div className='article__top-tag'>
          <img
            src='./icons/book.svg'
            alt='livre au format svg'
            className='article__top-tag--logo'
          />
          <p className='article__top-tag--text'>{article.readingTime} Min</p>
        </div>
      </div>

      <div className='article__details'>
        <h3 className='article__title heading-sous-titre'>{article.name}</h3>
        <h4 className='article__subtitle common-text'>{article.text}</h4>
        <ul className='article__tag-list'>
          <Tag tag={article.tags[0]} />
        </ul>
      </div>
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
            <Article article={article1} />
            <Article article={article1} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
