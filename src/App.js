import Footer from './components/Footer';
import Header from './components/Header';
import Activites from './components/Activites';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Activites />
        <section className='actualites u-center-text'>
          <h2 className='heading-section'>Actualités</h2>
          <div className='actualites__container'>
            <div className='actualites__items actualites__items--1'></div>
            <div className='actualites__items actualites__items--2'></div>
            <div className='actualites__items actualites__items--3'></div>
          </div>
        </section>
        <section className='decouvrir u-center-text'>
          <h2 className='heading-section'>Découvrir l'association</h2>
        </section>
        <section className='articles'>
          <h2 className='heading-section u-center-text'>Articles</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}
