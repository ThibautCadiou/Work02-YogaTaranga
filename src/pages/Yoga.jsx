import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Yoga() {
  return (
    <>
      <main className='yoga'>
        <Navigation />

        <Banner src='./img/yoga-01.jpg' classType='banner__image--center' />

        <div className='presentation'>
          <h2 className='presentation__title heading-titre'>Yoga</h2>
          <div className='presentation__icon'>
            <img src='./icons/logo-yoga-01.svg' alt='icone de yoga' />
          </div>
          <p className='presentation__text common-text'>
            Yoga Taranga propose des cours pour tous niveaux et tous âges.
          </p>
          <div className='presentation__icon--line'>
            <img src='./icons/line-1.svg' alt='icone dune ligne de separation' />
          </div>
          <p className='presentation__text common-text'>
            Au delà d'une simple gymnastique, Yoga Taranga propose des cours de yoga à Saint-Lô
            basés sur des postures travaillées en conscience des sensations corporelles et du
            souffle [...].
          </p>
          <button className='presentation__button btn btn--white'>En savoir plus</button>
        </div>

        <div className='creneaux'>
          <h3 className='creneaux__title heading-infos'>
            Réservez dès maintenant votre séance d&apos;essai gratuite!!! !
          </h3>
          <div className='presentation__icon--down-arrow'>
            <img src='./icons/down-arrow.svg' alt='icone dune ligne de separation' />
          </div>
          <div className='container'>
            <div className='seance'>seance a</div>
            <div className='seance'>seance B</div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
