import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './../Home/Home';
import Info from './../Info/Info'
import Schedules from './../Schedules/Schedules'

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation()

    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />  
          <Route path='/movie/:id' element={<Info />} />
          <Route path='/schedules/:id' element={<Schedules />} />
        </Routes>
      </AnimatePresence>
    );
}
 
export default AnimatedRoutes;