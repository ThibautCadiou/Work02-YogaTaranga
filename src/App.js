export default function App() {
  return (
    <div className='App'>
      <header className='header'>
        <nav className='navigation'>
          {/* <svg className='navigation__icon'>
          <use xlink:href='img/Logo.svg'></use>
        </svg> */}
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
        <div className='titles'>
          <h1 className='header__main-title'>Yoga Taranga</h1>
          <h2 className='header__main-subtitle'>Cours de Yoga & méditation à Saint-Lô</h2>
        </div>

        <img src='./img/clip-path-and-wave.svg' alt='vague de décoration' className='wave' />
      </header>
      <main className='main'>
        <section className='activites'>
          {' '}
          <h2 className='heading-section'>Activités</h2>{' '}
        </section>
        <section className='actualites'>
          <h2 className='heading-section'>Actualités</h2>
        </section>
        <section className='decouvrir'>
          <h2 className='heading-section'>Découvrir l'association</h2>
        </section>
        <section className='articles'>
          <h2 className='heading-section'>Articles</h2>
        </section>
      </main>

      <footer className='footer'>
        <h3 className='footer__title heading-infos'>Nous contacter</h3>

        <div className='contact__location'>
          <div className='footer__icon'>
            <img src='./icons/location.svg' alt='icône de localisation' />
          </div>
          <p className='footer-text'>Maison de la vie associative</p>
          <p className='footer-text'>Rue des charmilles</p>
          <p className='footer-text'>50 000 Saint-Lô</p>
        </div>

        <div className='contact__phone'>
          <div className='footer__icon'>
            <img src='./icons/phone.svg' alt='icône de localisation' />
          </div>
          <p className='footer-text'>06 50 92 59 32</p>
        </div>

        <button className='footer__btn btn'>
          <img
            src='./icons/mail.svg'
            alt='icône pour indiquer le mail de lassociation yoga taranga'
            className='footer__btn--logo'
          />
          <p className='footer-text'>E-mail</p>
        </button>
      </footer>
    </div>
  );
}
