

import ComingSoon from './pages/coming.jsx';

import './App.css'
// import Masthead from './components/masthead'
import Banner from './components/banner.jsx';
import Footer from './components/footer.jsx';
import LandingPage from './pages/landingpage.jsx';
import Navbar from './components/navbar.jsx';
import NotFound from './pages/404.jsx';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      {/* <Banner /> */}
      <Navbar />
      {/* <Masthead  toggleColorScheme={toggleColorScheme} colorScheme={colorScheme}/> */}
      {/* <ComingSoon /> */}


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comingsoon" element={<LandingPage />} />
        <Route path="/services" element={< LandingPage />} />
        <Route path="*" element={< NotFound />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
