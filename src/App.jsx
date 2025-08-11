import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CTABanner from './components/CTABanner/CTABanner'
import ImageTextBlock from './components/ImageTextBlock/ImageTextBlock';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <CTABanner />
      <ImageTextBlock />
    </>
  )
}

export default App
