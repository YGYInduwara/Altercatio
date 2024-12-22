
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Pointstable from './pages/PointsTable'
import Registration from './pages/Registration'
import Teams from './pages/Teams'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/points-table' element={<Pointstable />}/>
        <Route path='/registration:type' element={<Registration />}/>
        <Route path='/teams' element={<Teams />}/>
        <Route path='/appoinment/:docId' element={<Appoinment />}/>
      </Routes>
      <Footer />
     
    </div>
  )
}

export default App