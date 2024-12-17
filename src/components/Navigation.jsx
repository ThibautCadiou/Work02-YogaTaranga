import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
      <nav className='navigation'>
        <img src='/img/Logo.svg' alt='test' className='navigation__icon' />
        <ul className='navigation__list heading-menu-contenu'>
          <li className='navigation__item navigation__item--1' id='head'>
            <NavLink to='/'>Accueil</NavLink>
          </li>
          <li className='navigation__item navigation__item--2'>
            <NavLink to='/yoga'>Yoga</NavLink>
          </li>
          <li className='navigation__item navigation__item--3'>
            <NavLink to='/meditation'>Méditation</NavLink>
          </li>
          <li className='navigation__item navigation__item--4'>
            <NavLink to='/stages-et-retraites'>Stages & retraites</NavLink>
          </li>
          <li className='navigation__item navigation__item--5'>
            <NavLink to='/qui-sommes-nous'>Qui sommes-nous?</NavLink>
          </li>
          <li className='navigation__item navigation__item--6'>
            <NavLink to='/articles'>Articles</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
