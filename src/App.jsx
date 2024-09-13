import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import './App.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}
 
export default App;
