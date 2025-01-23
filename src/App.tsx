import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookPage from './pages/BookPage'
import Register from './pages/Register'
import Login from './pages/Login'
import BlogPage from './pages/BlogPage'
function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='*' element={<Error />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/book' element={<BookPage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/blog/:id' element={<BlogPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
