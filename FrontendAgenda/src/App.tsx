import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import Contactos from './components/Contactos'
import Perfil from './components/Perfil'
import Agenda from './components/Agenda'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/contacts' element={<ProtectedRoute><Contactos/></ProtectedRoute>}/>
          <Route path='/profile' element={<ProtectedRoute><Perfil/></ProtectedRoute>}/>
          <Route path='/agenda' element={<ProtectedRoute><Agenda/></ProtectedRoute>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
