import { NavLink } from 'react-router-dom';

export default function Decouvrir() {
  return (
    <section className='decouvrir  '>
      <h2 className='heading-section u-margin-bottom-big u-center-text'>Découvrir l'association</h2>
      <div className='decouvrir__container common-text'>
        <div className='decouvrir__etiquette'>
          <p>
            <span>Yoga Taranga</span> est une association de Yoga située dans la Manche.
          </p>

          <p>
            Nous proposons des cours de Yoga hebdomadaires dans la Manche (Saint -Lô) et des stages
            de Yoga et méditations dans l'Orne.
          </p>

          <p>Venez vite découvrir l’association !</p>

          <NavLink to='/qui-sommes-nous' className='btn decouvrir__etiquette--btn '>
            Plus d'infos
          </NavLink>
        </div>
      </div>
    </section>
  );
}
