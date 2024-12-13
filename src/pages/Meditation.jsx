import Banner from '../components/Banner';
import Footer02 from '../components/Footer02';
import Navigation from '../components/Navigation';

export default function Meditation() {
  return (
    <div>
      <Navigation />
      <Banner src='./img/meditation-01.jpg' classType='banner__image--top' />

      <div className='presentation'>
        <h2 className='presentation__title heading-titre'>Méditation</h2>
        <div className='presentation__icon'>
          <img src='./icons/logo-yoga-02.svg' alt='icone de yoga' />
        </div>
        <h3 className='heading-sous-sous-titre'>Atelier méditation Shamatha</h3>
        <p className='presentation__text common-text'>Calme mental par le corps conscient </p>
      </div>

      <div className='objectif'>
        <div className='objectif__objectif'>
          <h3 className='objectif__objectif--title heading-sous-titre'>Objectif</h3>
          <p className='objectif__objectif--text common-text'>
            Pacifier le mental et les émotions perturbatrices, développer la concentration et le
            silence intérieur par la méditation dit « Shamatha » (ou calme mental), le corps
            conscient et la relaxation.
          </p>
        </div>
        <div className='objectif__objectif'>
          <h3 className='objectif__objectif--title heading-sous-titre'>Le format</h3>
          <p className='objectif__objectif--text common-text'>5 séances de 3h15</p>
        </div>
        <div className='objectif__objectif'>
          <h3 className='objectif__objectif--title heading-sous-titre'>Tarif</h3>
          <p className='objectif__objectif--text common-text'>
            1 séance 30€ // 20€ adhérant <br /> 5 séances 120€ // 80€ adhérant
          </p>
        </div>
      </div>

      <div className='creneaux meditation'>
        <h3 className='creneaux__title heading-infos meditation__title'>
          Voir nos prochaines dates
        </h3>
        <div className='presentation__icon--down-arrow  meditation__down-arrow'>
          <img src='./icons/down-arrow.svg' alt='icone dune ligne de separation' />
        </div>
      </div>

      <div className='ateliers heading-section heading-section--upercase'>
        <h2 className='ateliers__title'>Les ateliers</h2>
        <div className='ateliers__container'>
          <div className='ateliers__item ateliers__item--1'></div>
          <div className='ateliers__item ateliers__item--2'></div>
          <div className='ateliers__item ateliers__item--3'></div>
          <div className='ateliers__item ateliers__item--4'></div>
        </div>
      </div>

      <Footer02 />
    </div>
  );
}
