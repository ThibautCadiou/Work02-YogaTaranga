import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Yoga from './pages/Yoga';
import Articles from './pages/Articles';
import Meditation from './pages/Meditation';
import QuiSommesNous from './pages/QuiSommesNous';
import StageEtRetraite from './pages/StageEtRetraite';
import PageError from './pages/PageError';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/meditation' element={<Meditation />} />
          <Route path='/qui-sommes-nous' element={<QuiSommesNous />} />
          <Route path='/stages-et-retraites' element={<StageEtRetraite />} />
          <Route path='*' element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
