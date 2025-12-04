import { Routes, Route } from 'react-router'
import './App.css'
import AddContact from './components/addcontact/AddContact'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-contact' element={<AddContact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
