import { NavLink } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Stage01() {
  return (
    <div>
      <Navigation />

      <Banner src='/img/stage-01.jpg' classType='banner__image--other-01' />

      <main className='stage01'>
        <NavLink to='/stages-et-retraites' className='retour'>
          <div className='retour__icon--down-arrow'>
            <img src='/icons/left-arrow.svg' alt='icone dun chevron' />
          </div>
          <p className='retour__text'>Retour à la liste</p>
        </NavLink>

        <h2 className='presentation__title heading-section color-black'>
          Chandra Yoga : Sérénité et puissance
        </h2>

        <div className='infos u-margin-bottom-big'>
          <h3 className='infos__dates'>Du 22 au 24 Août 2025</h3>
          <div className='infos__duree-et-prix'>3 jours / 2 nuits à partir de 370€</div>
          <div className='seance__bottom--localisation localisation stage__localisation'>
            <div className='localisation__logo'>
              <img
                src='/icons/location.svg '
                alt='logo de localisation'
                className='localisation__logo1'
              />
            </div>
            <div className='localisation__lieu'>
              La Chevairie , 61330 Juvigny Val d&apos;Andaine
            </div>
          </div>
        </div>

        <section className='bienfaits u-margin-bottom-big'>
          <h3 className='heading-sous-titre u-margin-bottom-small'>Bienfaits</h3>
          <ul className='bienfaits__list common-text'>
            <li bienfaits__list--element>
              Souplesse, tonus physique, profonde détente, amélioration du bien-être, positivité
            </li>
            <li>Réduction du stress, gestion de la douleur, effet régénérant sur le corps</li>
            <li>Libération progressive des tensions psychophysiques</li>
            <li>Pacification des émotions perturbatrices et stabilisation de l’être présent</li>
            <li>Maitrise de techniques utilisables au quotidien</li>
          </ul>
        </section>

        <section className='programme '>
          <h3 className='heading-sous-titre u-margin-bottom-medium'>Programme</h3>
          <h4 className='common-text '>Mercredi 1er mai 11h-15h </h4>
          <p className='common-text u-margin-bottom-medium  '>
            👋 Accueil et installation des participants
          </p>

          <h4 className='common-text'>Du Mercredi 15h au Dimanche 5 mai à midi : </h4>
          <p className='common-text u-margin-bottom-medium '>
            🧘‍♂️ Les demi-journées sont consacrées à la pratique du Chandra Yoga suivi d&apos;une
            méditation et d&apos;une relaxation. Dans la soirée, un temps d&apos;échange permet de
            faire le bilan. La journée se termine par la récitation des mantras du Chandra Yoga.
            <br /> <br />
            🍽️ Les repas* sont suivis d&apos;un temps de pause.
            <br />
          </p>

          <h4 className='common-text'>Dimanche 5 mai 14h :</h4>
          <p className='common-text u-margin-bottom-medium '>💡Bilan du stage</p>

          <h4 className='common-text'>Dimanche 5 mai 15h : </h4>
          <p className='common-text u-margin-bottom-medium '>🙋‍♀️ Fin du stage</p>
        </section>

        <p className='common-text u-margin-bottom-big remarque'>
          *Les repas à tendances bio, végétariens et locaux et adaptés à la pratique sont compris
          dans le prix du stage.
        </p>

        <section className='tarifs-et-inscription u-margin-bottom-big'>
          <h2 className='presentation__title heading-section u-center-text color-black u-margin-bottom-big'>
            Tarifs & inscriptions
          </h2>
          <div className='tarifs-et-inscription__container'>
            <div className='tarifs-et-inscription__element'>
              <div className='tarifs-et-inscription__element--head'>
                <h3 className='heading-sous-sous-titre'>Séjour collectif</h3>
                <p className='tarifs-et-inscription__element--head-price'>370€</p>
              </div>

              <div className='tarifs-et-inscription__element--middle'>
                🛌 Lit simple dans dortoir de 5 personnes maximum avec salle de bain partagée
                <br />
                ☀️ Hébergement 3 jours
                <br />
                🍽️ Repas inclus (tendance végétarien, bio, local, adaptée à la pratique du yoga et
                de la méditation)
              </div>

              <div className='tarifs-et-inscription__element--bottom'>
                Contacter nous pour réserver
              </div>
            </div>

            <div className='tarifs-et-inscription__element'>
              <div className='tarifs-et-inscription__element--head'>
                <h3 className='heading-sous-sous-titre'>Séjour comfort</h3>
                <p className='tarifs-et-inscription__element--head-price'>370€</p>
              </div>

              <div className='tarifs-et-inscription__element--middle'>
                🛌 Chambre individuelle avec salle de bain partagée ou Chambre double avec salle de
                bain dans la chambre
                <br />
                ☀️ Hébergement 3 jours
                <br />
                🍽️ Repas inclus (tendance végétarien, bio, local, adaptée à la pratique du yoga et
                de la méditation)
              </div>

              <div className='tarifs-et-inscription__element--bottom'>
                Contacter nous pour réserver
              </div>
            </div>
          </div>
        </section>

        <section className='le-lieu u-margin-bottom-big'>
          <h2 className='presentation__title heading-titre'>Le lieu</h2>
          <p>Un lien emprunt d’histoire, chaleureux et accueillant pour nos groupes.</p>

          <div className='caroussel_container'>
            <img src='' alt='' />
            <div className='barre_bubulle'></div>
          </div>
        </section>

        <section className='banner-en-savoir-plus u-margin-bottom-big'>
          <p>
            Envie d’en savoir plus sur les disciplines proposées lors de cette retraite? Découvrez
            nos articles
          </p>
          <div className='banner-en-savoir-plus__container'>
            <button>AAAA</button>
            <button>BBBB</button>
          </div>
        </section>

        <section className='formateur u-margin-bottom-big'>
          <h2 className='presentation__title heading-titre'>Votre formateur</h2>
          <img src='/img/stage-06.webp' alt='Formateur Antoine' />
          <h3>Antoine</h3>
          <p>Fondateur & Enseignant certifié à l’enseignement du Yoga</p>
          <button>En savoir plus</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
