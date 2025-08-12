import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero';
import CTABanner from './components/CTABanner/CTABanner'
import ImageTextBlock from './components/ImageTextBlock/ImageTextBlock';

function App() {
  return (
    <>
      <Hero title="Benvenuti nella nostra azienda" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nesciunt iusto consequatur amet recusandae voluptas nulla qui sed quisquam? Sit enim repellendus tenetur omnis praesentium quia, ratione nihil? Ullam, voluptatibus!" />
      <CTABanner />
      <ImageTextBlock />
    </>
  )
}

export default App
