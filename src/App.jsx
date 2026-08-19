import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Login from './pages/Login'
import About from './pages/About'
import Order from './pages/Order'
import MyOrder from './pages/MyOrder'
import Admin from './pages/Admin'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        {/* <Route path="/reservation" element={<Reservation />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Layout>
  )
}
