

import ComingSoon from './pages/coming.jsx';

import './App.css'
import { Routes, Route } from 'react-router-dom';

// import Masthead from './components/masthead'
import Banner from './components/banner.jsx';
import Footer from './components/footer.jsx';
import LandingPage from './pages/landingpage.jsx';
import Navbar from './components/navbar.jsx';
import NotFound from './pages/404.jsx';
import ResourcesLayout from './pages/resources/resourcesLayout.jsx';
import Blogs from './pages/resources/blogs.jsx';
import Features from './pages/resources/features.jsx';
import Guides from './pages/resources/guides.jsx';
import Faq from './pages/resources/faq.jsx';
import Support from './pages/resources/support.jsx';
import Products from './pages/resources/products.jsx';



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

        <Route path="/resources" element={< ResourcesLayout />} >
          <Route index element={< ResourcesLayout />} />
          <Route path='blogs' element={< Blogs />} />
          <Route path='features' element={< Features />} />
          <Route path='guides' element={< Guides />} />
          <Route path='faq' element={< Faq />} />
          <Route path='support' element={< Support />} />
          <Route path='products' element={< Products />} />
        </Route>


        <Route path="*" element={< NotFound />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
