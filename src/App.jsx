import Logina from './pages/login';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Home from './pages/Home';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logina />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
