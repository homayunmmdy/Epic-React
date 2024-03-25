import React from 'react'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import Features from './components/Features'
import Pricing from './components/Pricing'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Newsletter />
    </div>
  )
}

export default Home