

import ComingSoon from './pages/coming.jsx';

import './App.css'
import Masthead from './components/masthead'
import Footer from './components/footer.jsx';

import { Burger } from '@mantine/core';


function App({toggleColorScheme, colorScheme}) {

  return (
    <>
    
      <Masthead  toggleColorScheme={toggleColorScheme} colorScheme={colorScheme}/>
       {/* <ComingSoon /> */}
      <Footer />
     
    </>
  )
}

export default App
