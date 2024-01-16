import Image from 'next/image'
import Navbar from './navbar'
import HeroSection from './heroSection'

export default function Home() {
  return (
    <>
    <Navbar params = "Home"/>
    
    <HeroSection/>
    </>
  )
}
