import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CTABanner from './components/CTABanner/CTABanner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Hero from './components/Hero/Hero';
import ImageBlock from './components/ImageBlock/ImageBlock';
import ImageTextBlock from './components/ImageTextBlock/ImageTextBlock';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <TextBlock />
      <CTABanner />
      <ImageTextBlock />
      <ImageBlock />
      <Footer/>
      <ContactForm/>
    </>
  )
}

export default App