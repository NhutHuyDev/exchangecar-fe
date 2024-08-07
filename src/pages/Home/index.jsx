import MainLayout from 'layout/MainLayout'
import HeroCarousel from './components/HeroCarousel'
import HeroFunctions from './components/HeroFunctions'
import CertifiedCars from './components/CertifiedCars'
import Contact from 'components/Contact'
import { useEffect } from 'react'


function Homepage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <MainLayout>
        <HeroCarousel />
        <HeroFunctions />
        <CertifiedCars />
        <Contact />
      </MainLayout>
    </>
  )
}

export default Homepage
