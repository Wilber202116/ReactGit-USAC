import Logina from './pages/login';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logina />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
