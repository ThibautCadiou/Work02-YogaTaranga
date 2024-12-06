export default function Footer() {
  return (
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
  );
}
