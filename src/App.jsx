import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CTABanner from './components/CTABanner/CTABanner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ContactForm from './components/ContactForm/ContactForm';
import Hero from './components/Hero/Hero';
import ImageTextBlock from './components/ImageTextBlock/ImageTextBlock';
import TextBlock from './components/TextBlock/TextBlock';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <TextBlock />
      <CTABanner />
      <ImageTextBlock />
      <Footer/>
      <ContactForm/>
    </>
  )
}

export default App