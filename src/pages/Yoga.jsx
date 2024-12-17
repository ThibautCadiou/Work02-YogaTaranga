import Banner from '../components/Banner';
import { seances } from '../data/seances';

import Navigation from '../components/Navigation';
import { Seance } from '../components/Seance';
import Footer02 from '../components/Footer02';

export default function Yoga() {
  return (
    <>
      <main className='yoga'>
        <Navigation />

        <Banner src='./img/yoga-01.webp' classType='banner__image--center' />

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
            souffle.
            {/* souffle [...]. */}
          </p>
          {/* <button className='presentation__button btn btn--white'>En savoir plus</button> VERS QUOI VA LE LIEN*/}
        </div>

        <div className='creneaux'>
          <h3 className='creneaux__title heading-infos'>
            Réservez dès maintenant votre séance d&apos;essai gratuite !
          </h3>
          <div className='presentation__icon--down-arrow'>
            <img src='./icons/down-arrow.svg' alt='icone dune ligne de separation' />
          </div>
          <div className='container'>
            <Seance seance={seances[0]} key={seances[0].id} />
            <Seance seance={seances[1]} key={seances[1].id} />
          </div>
        </div>
      </main>

      <Footer02 />
    </>
  );
}
