import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import { Stage } from '../components/Stages';
import { stages } from '../data/stages';

export default function StageEtRetraite() {
  return (
    <div>
      <Navigation />
      <Banner src='./img/stage-01.jpg' classType='banner__image--other-01' />
      <div className='presentation'>
        <h2 className='presentation__title heading-titre'>Stages & retraites</h2>

        <p className='presentation__text common-text'>
          Venez profiter d’une pause bien-être, ressourçante, et de beaux moments de convivialités
          lors de nos stages & retraites.
        </p>
        <div className='presentation__icon--line'>
          <img src='./icons/line-1.svg' alt='icone dune ligne de separation' />
        </div>
        <p className='presentation__text common-text'>
          Nous vous ouvrons les portes de 2 lieux chaleureux et calmes, entourés de nature et
          propices à la pratique du Yoga et de la méditation.
        </p>

        <h3 className='creneaux__title heading-infos'>
          Découvrez vite nos prochaines dates ci-dessous
        </h3>
        <div className='presentation__icon--down-arrow'>
          <img src='./icons/down-arrow.svg' alt='icone dune ligne de separation' />
        </div>
      </div>
      <div className='stages'>
        <div className='stages__container'>
          <Stage stage={stages[0]} />
        </div>
      </div>

      <h3 className='footer-03 creneaux__title heading-infos'>
        De prochaines dates arrivent très vite !
      </h3>
    </div>
  );
}
