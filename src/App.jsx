import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CheckoutPage from './pages/CheckoutPage'
import PaymentPage from './pages/PaymentPage'
import HomePage from './pages/HomePage'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RegisterPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/checkout' element={<CheckoutPage/>} />
      <Route path='/payment' element={<PaymentPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
