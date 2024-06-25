"use client"
import React from 'react'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import Features from './components/Features'
import Pricing from './components/Pricing'
import useStore from './store/store'

const Home = () => {
  const websiteName = useStore((state) => state.websiteName);
  return (
    <div>
      <h1>{websiteName || "My Website"}</h1>
      <Hero />
      <Features />
      <Pricing />
      <Newsletter />
    </div>
  )
}

export default Home