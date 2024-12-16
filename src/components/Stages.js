import { NavLink } from 'react-router-dom';

export function Stage({ stage }) {
  return (
    <div className={`stages__item stages__item--${stage.id}`}>
      <p className='stage__month '>{stage.mois}</p>
      <p className='stage__titre'>{stage.titre}</p>
      <p className='stage__dates'>{stage.dates}</p>
      <div className='seance__bottom--localisation localisation stage__localisation'>
        <div className='localisation__logo'>
          <img
            src='./icons/location.svg '
            alt='logo de localisation'
            className='localisation__logo1'
          />
        </div>
        <div className='localisation__lieu'>{stage.lieu}</div>
      </div>
      <p className='stage__duree'>{stage.duree}</p>
      <NavLink href='/stage-001' className='btn btn--white stage__btn'>
        Infos / Inscription
      </NavLink>
    </div>
  );
}
