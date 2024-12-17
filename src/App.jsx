import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Yoga from './pages/Yoga';
import Articles from './pages/Articles';
import Meditation from './pages/Meditation';
import QuiSommesNous from './pages/QuiSommesNous';
import StageEtRetraite from './pages/StageEtRetraite';
import PageError from './pages/PageError';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/meditation' element={<Meditation />} />
          <Route path='/qui-sommes-nous' element={<QuiSommesNous />} />
          <Route path='/stages-et-retraites' element={<StageEtRetraite />} />
          {/* <Route path='/stages-et-retraites/stage-001' element={<StageEtRetraite />} /> */}
          <Route path='*' element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
