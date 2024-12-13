export function Seance({ seance }) {
  return (
    <div className='seance'>
      <div className='seance__top'>
        <img src={seance.src} alt='atelier dud mardi soir' className='seance__top--img' />
        <p className='seance__top--periode heading-sous-titre'>{seance.periode}</p>
      </div>
      <div className='seance__bottom'>
        <h2 className='seance__bottom--title '>{seance.titre}</h2>
        {seance.sousTitre && <h3 className='seance__bottom--subtitle'>{seance.sousTitre}</h3>}
        <div className='seance__bottom--tags'>
          {seance.horaires.map((horaire, index) => (
            <Horaire horaire={horaire} key={index} />
          ))}
        </div>
        <div className='seance__bottom__localisation-and-price'>
          <div className='seance__bottom--localisation localisation'>
            <div className='localisation__logo'>
              <img
                src='./icons/location.svg '
                alt='logo de localisation'
                className='localisation__logo1'
              />
            </div>
            <div className='localisation__text'>{seance.localisation}</div>
          </div>
          <p className='seance__bottom--tarifs'>{seance.tarifs}</p>
        </div>
      </div>
    </div>
  );
}

function Horaire({ horaire }) {
  return <p className='horaire seance__bottom--tags-tag'>{horaire}</p>;
}
