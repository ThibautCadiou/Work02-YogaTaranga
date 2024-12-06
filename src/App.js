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
          {/* <h2 className='heading-section u-center-text'>Activités</h2> */}
          <div className='activites-left'>
            <div className='activites-left__top'>
              <div className='activites__icon'>
                <img src='./icons/logo-yoga-01.svg' alt='icone de yoga' />
              </div>
              <p className='activites-left__top-text activities-title'>yoga</p>
            </div>
            <div className='activites-left__middle-text common-text'>
              Nous vous proposons de découvrir la pratique du <span>Yoga tibétain</span> au travers
              de nos <span>cours hebdomadaires</span> ou bien de nos <span>retraites</span>.
            </div>
            <button className='btn btn--yoga btn--white'>Plus d'infos par ici !</button>
          </div>
          <div className='activites-left'>
            <div className='activites-left__top'>
              <div className='activites__icon'>
                <img src='./icons/logo-yoga-02.svg' alt='icone de yoga' />
              </div>
              <p className='activites-left__top-text activities-title'>meditation</p>
            </div>
            <div className='activites-left__middle-text common-text'>
              Venez découvrir la pratique de la <span>méditation Chamatha</span> et retrouver le
              calme mental, au travers de 5 <span>ateliers</span> dans l&apos;année.
            </div>
            <button className='btn btn--yoga btn--white'>Plus d'infos par ici !</button>
          </div>
        </section>
        <section className='actualites u-center-text'>
          <h2 className='heading-section'>Actualités</h2>
          <div className='actualites__container'>
            <div className='actualites__items actualites__items--1'></div>
            <div className='actualites__items actualites__items--2'></div>
            <div className='actualites__items actualites__items--3'></div>
          </div>
        </section>
        <section className='decouvrir u-center-text'>
          <h2 className='heading-section'>Découvrir l'association</h2>
        </section>
        <section className='articles'>
          <h2 className='heading-section u-center-text'>Articles</h2>
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

        <div className='contact__mail'>
          <div className='footer__icon'>
            <img src='./icons/mail.svg' alt='icône de lenvoi d un mail' />
          </div>
          <p className='footer-text'>yoga.taranga@wanadoo.fr</p>
        </div>

        {/* <button className='footer__btn btn'>
          <img
            src='./icons/mail.svg'
            alt='icône pour indiquer le mail de lassociation yoga taranga'
            className='footer__btn--logo'
          />
          <p className='footer-text'>E-mail</p>
        </button> */}
      </footer>
    </div>
  );
}
