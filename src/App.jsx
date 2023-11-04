import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TwitterHome from './components/TwitterHome';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import TwitterProfile from './components/TwitterProfile';

function App() {

  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/twitter"  element={<TwitterHome /> }/>
            <Route path="/profile"  element={<TwitterProfile /> }/>
            <Route path="/"  element={<Register /> }/>
            <Route path="/login"  element={<Login /> }/>
          </Routes>     
        </div>
      </BrowserRouter>  
  )
}

export default App
