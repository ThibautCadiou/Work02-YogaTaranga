import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='header'>
      <Navigation />
      <div className='titles'>
        <h1 className='header__main-title'>Yoga Taranga</h1>
        <h2 className='header__main-subtitle'>Cours de Yoga & méditation à Saint-Lô</h2>
      </div>

      <img src='./img/clip-path-and-wave.svg' alt='vague de décoration' className='wave' />
    </header>
  );
}
