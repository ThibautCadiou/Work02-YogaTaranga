import Banner from '../components/Banner';
import Navigation from '../components/Navigation';

export default function QuiSommesNous() {
  return (
    <div>
      <Navigation />
      <Banner src='./img/stage-05.jpg' classType='banner__image--center' />
      Qui sommes nous ?
    </div>
  );
}
