import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Info from './components/Info/Info'
import './App.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home />
          } />  
          <Route path='/info/:id' element={
            <Info />
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
