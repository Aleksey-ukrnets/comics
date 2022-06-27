import './App.css';


import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './pages/main_page';
import Seasons from './components/seasons';
import ComingSoon from './components/comingsoon';
import Comics from './components/comics';
import ComicsPosts from './components/ComicsList/Comicsposts';
import Roadmap from './components/Roadmap';


function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <Main />} >
            <Route path='/comics' element={<Seasons />} />
            <Route index path='/comics' element={<Comics />} />
            <Route path='*' element={<ComingSoon />} />
            <Route path='/:id' element={<ComicsPosts />} />
            {/* <Route path='/Roadmap' element={<Roadmap />} /> */}
          </Route>  
        </Routes>
    </div>
  );
}

export default App;
