import React from 'react'
import { CardKategori } from '../components/CardKategori'
import CardType from '../components/CardType'
import { Iklan } from '../components/Iklan'
import { Footer } from '../components/layout/Footer'
import { NavigationBar } from '../components/layout/Navbar'

const HomePage = () => {
  return (
    <>
    <NavigationBar/>
    <Iklan/>
    <CardType/>
    <hr className='p-[10px]  mt-10 mb-4 w-[70rem] mx-auto'/>
    <CardKategori/>
    <Footer/>
    </>
  )
}

export default HomePage