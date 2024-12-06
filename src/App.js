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
          <h2 className='heading-section u-center-text'>Articles</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}
