import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Info from './components/Info/Info'
import Schedules from './components/Schedules/Schedules'
import CreditCardPay from './components/CreditCardPay/CreditCardPay';
import Ticket from './components/Ticket/Ticket';
import './App.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/movie/:id' element={<Info />} />
          <Route path='/schedules/:id' element={<Schedules />} />
          <Route path='/schedules/:id/pay' element={<CreditCardPay />} />
          <Route path='/schedules/:id/ticket' element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
