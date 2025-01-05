
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Footer from './Components/Footer'
import Pnf from './pages/Pnf'
import Cart from './pages/Cart'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/wishlist' element={<Wishlist/>} />
    {/* dynamic url routing using : whixh means changing */}
    <Route path='/:id/view' element={<View/>} /> 
    <Route path='/cart' element={<Cart/>} />
    {/* page not found using * which is error pages */}
    <Route path='/*' element={<Pnf/>} />

    </Routes>



    {/* footer */}
    <Footer/>
    </>
  )
}

export default App
