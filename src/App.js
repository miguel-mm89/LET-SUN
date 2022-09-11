import { Route, Routes, Navigate, HashRouter, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Rooms from './components/Rooms';
import Navbar from './components/navbar';
import Location from './components/location';
import './styles.css'
import Galery from './components/tools/Galery';
import Footer from './components/footer';
import Contact from './components/contact';



function App() {
  return (
    <>
    <HashRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/services' element={<Galery />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path='/rooms' element={<Navigate to='/#/rooms'/>}/>
        <Route path='/services' element={<Navigate to='/#/services'/>}/>
        <Route path='/location' element={<Navigate to='/#/location'/>}/>
        <Route path='/contact' element={<Navigate to='/#/contact'/>}/>
        <Route path='*' element={<h1>404 NO FOUND</h1>} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}


export default App;
