import { NavLink } from 'react-router-dom';

export default function Activites() {
  return (
    <section className='activites'>
      {/* <h2 className='heading-section u-center-text'>Activités</h2> */}
      <div className='activites-left'>
        <div className='activites-left__top'>
          <div className='activites__icon'>
            <img src='./icons/logo-yoga-01.svg' alt='icone de yoga' />
          </div>
          <p className='activites-left__top-text activities-title'>yoga</p>
        </div>
        <div className='activites-left__middle-text common-text'>
          Nous vous proposons de découvrir la pratique du <span>Yoga tibétain</span> au travers de
          nos <span>cours hebdomadaires</span> ou bien de nos <span>retraites</span>.
        </div>
        <NavLink to='/yoga' className='btn btn--yoga btn--white'>
          Plus d'infos par ici !
        </NavLink>
      </div>
      <div className='activites-left'>
        <div className='activites-left__top'>
          <div className='activites__icon'>
            <img src='./icons/logo-yoga-02.svg' alt='icone de yoga' />
          </div>
          <p className='activites-left__top-text activities-title'>meditation</p>
        </div>
        <div className='activites-left__middle-text common-text'>
          Venez découvrir la pratique de la <span>méditation Chamatha</span> et retrouver le calme
          mental, au travers de 5 <span>ateliers</span> dans l&apos;année.
        </div>
        <NavLink to='/meditation' className='btn btn--yoga btn--white'>
          Plus d'infos par ici !
        </NavLink>
      </div>
    </section>
  );
}
