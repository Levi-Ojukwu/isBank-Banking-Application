import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./pages/home/components/Header";
import Hero from "./pages/home/components/Hero";
import Exchange from "./pages/home/components/Exchange"
import Footer from "./pages/home/components/Footer"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import "./output.css";
import Home from './pages/home';
import About from './pages/about/About';
import Online from './pages/online';
import Customer from './pages/customer';
import Dashboard from './pages/dashboard';
import Transfer from './pages/transfer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/banking' element={<Online />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/transfer' element={<Transfer />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
