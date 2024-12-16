export function Atelier({ atelier }) {
  return (
    <div className={`ateliers__item ateliers__item--${atelier.id}`}>
      <p className='atelier__month '>{atelier.mois}</p>
      <p className='atelier__date'>{atelier.date}</p>
      <p className='atelier__horaire'>{atelier.heure}</p>
      <div className='seance__bottom--localisation localisation atelier__localisation'>
        <div className='localisation__logo'>
          <img
            src='./icons/location.svg '
            alt='logo de localisation'
            className='localisation__logo1'
          />
        </div>
        <div className='localisation__text'>{atelier.lieu}</div>
      </div>
      <p className='atelier__tarif'>{atelier.prix}</p>
    </div>
  );
}
