

import ComingSoon from './pages/coming.jsx';

import './App.css'
// import Masthead from './components/masthead'
import Footer from './components/footer.jsx';
import LandingPage from './pages/landingpage.jsx';
import Navbar from './components/navbar.jsx';



function App() {

  return (
    <>
      <Navbar />
      {/* <Masthead  toggleColorScheme={toggleColorScheme} colorScheme={colorScheme}/> */}
      {/* <ComingSoon /> */}
      <LandingPage />

      <Footer />

    </>
  )
}

export default App
