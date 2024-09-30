
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Products from './Products'
import Categories from './Categories'
import Cart from './Cart'
import Account from './Account'
import NotFound from './NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav/>} >
          <Route index element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/account" element={<Account/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
