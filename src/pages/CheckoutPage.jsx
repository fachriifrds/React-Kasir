import React from 'react'
import { NavigationBar } from '../components/layout/Navbar'
import { Cards } from '../components/Card'
import { Button } from "@material-tailwind/react";
import { CardOrder } from '../components/detailPesanan';
import { Footer } from '../components/layout/Footer';

const CheckoutPage = () => {
  return (
    <>
    <NavigationBar/>
    <div className='flex justify-between px-[11em] mt-14'>
    <h1 className='bg-white border-solid border-2 px-4 rounded-xl pt-2  border-black text-xs'>Keranjang</h1>
    <a href="#buttons-with-link">
        <Button variant="gradient" color='red'>Delete All</Button>
      </a>
    </div>
    <hr className='w-9/12 mt-[2em] mx-auto p-[1px] bg-blue-gray-100'/>
    <div className='flex justify-evenly pe-12'>
    <Cards/>
    <CardOrder/>
    </div>
    <Footer/>
    </>
  )
}

export default CheckoutPage