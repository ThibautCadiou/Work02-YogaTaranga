import Footer from './components/Footer';
import Header from './components/Header';
import Activites from './components/Activites';
import Actualites from './components/Actualites';
import Decouvrir from './components/Decouvrir';

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
            <h2 className='heading-section u-center-text u-margin-top-big u-margin-bottom-big'>
              Articles
            </h2>

            <a className='articles__link' href='/test' class>
              Voir plus &rarr;
            </a>
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
