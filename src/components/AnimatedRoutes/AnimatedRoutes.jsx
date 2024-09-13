import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './../Home/Home';
import Info from './../Info/Info'

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation()

    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />  
          <Route path='/info/:id' element={<Info />} />
        </Routes>
      </AnimatePresence>
    );
}
 
export default AnimatedRoutes;