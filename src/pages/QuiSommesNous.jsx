import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function QuiSommesNous() {
  return (
    <div>
      <Navigation />
      <Banner src='./img/stage-05.jpg' classType='banner__image--center' />

      <div className='association  u-margin-bottom-big'>
        <h2 className='presentation__title heading-section u-center-text u-margin-bottom-big'>
          L&apos;association
        </h2>
        <div className='association__container common-text'>
          <div className='association__text'>
            <div className='association__text--1'>
              Yoga Taranga est une association de Yoga située dans la Manche.
            </div>
            <div className='association__text--2 '>
              Yoga Taranga (= vague en Sanskrit) vous propose de découvrir les bienfaits
              qu&apos;offre cette science millénaire:
            </div>
            <ul className='association__text--3'>
              <li className='association__text--31'>Réduction du stress</li>
              <li className='association__text--32'>Relaxation</li>
              <li className='association__text--33'>Regain de vitalité</li>
              <li className='association__text--34'>
                Développement de la souplesse et de la concentration.
              </li>
            </ul>
            <div className='association__text--4'>
              Nous proposons des cours hebdomadaires dans la Manche (Saint -Lô) et des stages dans
              l'Orne.
            </div>
          </div>
          <div className='association__img'>
            <img src='./img/stage-07.jpg' alt='' />
          </div>
        </div>
      </div>

      <div className='intervenants u-margin-bottom-big'>
        <h2 className='presentation__title heading-section u-margin-bottom-big  u-center-text'>
          Nos intervenants
        </h2>
        <div className='intervenants__container'>
          <div className='intervenants__img'>
            <img src='./img/stage-06.jpg' alt='' />
          </div>
          <div className='intervenants__text'>
            <h3 className='intervenants__subtitle'>Antoine</h3>
            <p className='intervenants__text--1'>Fondateur de l&apos;association Yoga Taranga</p>
            <div className='presentation__icon--line'>
              <img src='./icons/line-1.svg' alt='icone dune ligne de separation' />
            </div>
            <p className='intervenants__text--2'>
              Enseignant certifié à l&apos;enseignement du Yoga Antoine pratique le yoga, en
              particulier les thrulkhors, et la méditation depuis 13 ans Anime des cours de yoga
              depuis 6 ans
            </p>
            <div className='presentation__icon--line'>
              <img src='./icons/line-1.svg' alt='icone dune ligne de separation' />
            </div>
            <p className='intervenants__text--3'>
              Formation aux thrulkhors de santé par Lama Rigdzin Dorjé, disciple de Tsewong Sitar
              Rinpoché, reconnu comme une incarnation de Nubchen Sangye Yeshe (un disciple de cœur
              de Padmasambhava), par sa Sainteté Dilgo Khyentse. Tsewong Sitar Rinpoché est le chef
              du Monastère historique Sangye Teng dans l&apos;est du Bhoutan. Il est le principal
              détenteur de la lignée du Tertön Pegyal Lingpa et un maître du Longchen Nyingting,
              particulièrement connu pour ses enseignements profonds sur le Dzogchen.
            </p>

            <p className='intervenants__text--4'>
              Il a également été initié en Inde au Chandra yoga auprès du Siddha Tamoul Sivayogi
              Sivarajan. Le chandra yoga appartient à la tradition des Siddhas dont les
              enseignements ne prêchent aucune doctrine, mais suggèrent une direction pour
              actualiser une perception directe, intuitive, personnelle et profonde de la réalité.
              Une des spécificités des Siddhas, parmi l&apos;ensemble des spiritualités de
              l&apos;Inde, est de donner une importance capitale au corps. Le corps est à
              l&apos;image du microcosme et du macrocosme, de l&apos;homme et de l&apos;univers.
              C&apos;est un temple, une frontière permettant d&apos;actualiser la transcendance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
