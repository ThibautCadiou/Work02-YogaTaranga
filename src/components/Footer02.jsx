export default function Footer02() {
  return (
    <footer className='footer-alt'>
      <h3 className='footer-alt__title heading-infos'>S'inscrire par téléphone</h3>

      <div className='contact__phone'>
        <div className='footer-alt__icon'>
          <img src='./icons/phone.svg' alt='icône de localisation' />
        </div>
        <p className='footer-alt-text '>06 50 92 59 32</p>
      </div>
      <h3 className='footer-alt__title heading-infos'>Ou par mail</h3>
      <div className='contact__mail'>
        <div className='footer-alt__icon'>
          <img src='./icons/mail.svg' alt='icône de lenvoi d un mail' />
        </div>
        <p className='footer-alt-text'>yoga.taranga@wanadoo.fr</p>
      </div>
    </footer>
  );
}
