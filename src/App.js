import Kontakt from './pages/Kontakt';
import './App.css';
import Navbar from './components/Navbar';
import Pocetna from './pages/Pocetna';
import Poruci from './pages/Poruci';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path="/*" element={<Pocetna/>}/>
        <Route path="/kontakt" element={<Kontakt />}/>
        <Route path="/poruci" element={<Poruci />}/>
       </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

