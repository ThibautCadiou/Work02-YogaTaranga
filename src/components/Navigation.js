export default function Navigation() {
  return (
    <nav className='navigation'>
      <img src='/img/Logo.svg' alt='test' className='navigation__icon' />
      <ul className='navigation__list heading-menu-contenu'>
        <li className='navigation__item navigation__item--1'>
          <a href='/home'>Accueil</a>
        </li>
        <li className='navigation__item navigation__item--2'>
          <a href='/yoga'>Yoga</a>
        </li>
        <li className='navigation__item navigation__item--3'>
          <a href='/meditation'>Méditation</a>
        </li>
        <li className='navigation__item navigation__item--4'>
          <a href='stages-and-retreat'>Stages & retraites</a>
        </li>
        <li className='navigation__item navigation__item--5'>
          <a href='/the-association'>Qui sommes-nous?</a>
        </li>
        <li className='navigation__item navigation__item--6'>
          <a href='/articles'>Articles</a>
        </li>
        <li className='navigation__item navigation__item--7'>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
