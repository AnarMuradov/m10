import React from 'react'
import Header from './HomePageSections/HeaderSection'
import Rating from './HomePageSections/RatingSection'
import Transfer from './HomePageSections/TransferSection'
import MillionS from './HomePageSections/MillionSection'
import PayFromPhone from './HomePageSections/PayFromPhoneSection'
import Slider2 from './HomePageSections/Slider2'

const Home = () => {
  return (
    <>
    <Header/>
    <Rating/>
    <Transfer/>
    <MillionS/>
    <PayFromPhone/>
    <Slider2/>
    
    </>
  )
}

export default Home