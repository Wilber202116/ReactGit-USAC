import Logina from './pages/login';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Home from './pages/Home';
import PrivateRoute from './routes/PrivateRoutes';
import Applayout from './layouts/appLayout';
import Search from './pages/Search';
import Messages from './pages/Messages';
import Create from './pages/Create';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Logina />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/app' element={<PrivateRoute><Applayout /></PrivateRoute>}>
        <Route path='home' element={<Home />}></Route>
        <Route path='search' element={<Search />}></Route>
        <Route path='inbox' element={<Messages />}></Route>
        <Route path='create' element={<Create />}></Route>
      </Route>
    </Routes>
  )
}

export default App
