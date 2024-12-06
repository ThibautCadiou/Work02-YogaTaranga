export default function Actualites() {
  return (
    <section className='actualites u-center-text'>
      <h2 className='heading-section actualites__title'>Actualités</h2>

      <div className='actualites__container'>
        <div className='actualites__items actualites__items--1 actualite'>
          <img src='./img/home-02.jpg' alt='atelier meditation ' className='actualite__img' />
          <p className='actualite__tag tag'>Méditation</p>
          <h3 className='actualite__title'>Nos Prochains Ateliers Méditations</h3>
          <h4 className='actualite__subtitle'>(Saison2024-2025)</h4>
          <button className='btn btn--actualites btn--white actualite__btn'>En savoir plus</button>
        </div>
        <div className='actualites__items actualites__items--2 actualite'>
          <img src='./img/home-03.jpg' alt='atelier meditation ' className='actualite__img' />
          <p className='actualite__tag tag color-2'>Yoga</p>
          <h3 className='actualite__title'>Nos prochaines retraites</h3>
          <h4 className='actualite__subtitle'>(Printemps 2025)</h4>
          <button className='btn btn--actualites btn--white actualite__btn color-2'>
            En savoir plus
          </button>
        </div>
        <div className='actualites__items actualites__items--1 actualite'>
          <img src='./img/home-04.jpg' alt='atelier meditation ' className='actualite__img' />
          <p className='actualite__tag tag'>Articles</p>
          <h3 className='actualite__title'>Nos derniers articles</h3>
          <h4 className='actualite__subtitle'>Chandra Yoga & Traditions Siddhas</h4>
          <button className='btn btn--actualites btn--white actualite__btn'>En savoir plus</button>
        </div>
      </div>
    </section>
  );
}
