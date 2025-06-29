import Logina from './pages/login';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Home from './pages/Home';
import PrivateRoute from './routes/PrivateRoutes';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Logina />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>}></Route>
    </Routes>
  )
}

export default App
