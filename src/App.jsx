import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CartPage from './pages/cart/CartPage'
const Home = React.lazy(() => import('./pages/home/Home'))
const MenuPage = React.lazy(() => import('./pages/menu/MenuPage'))

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App