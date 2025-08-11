import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CTABanner from './components/CTABanner/CTABanner'
import  ImageTextBlock from './components/ImageTextBlock/ImageTextBlock';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <CTABanner/>
      <ImageTextBlock />
      <Footer/>
    </>
  )
}

export default App
