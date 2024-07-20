import MainLayout from 'layout/MainLayout'
import HeroCarousel from './components/HeroCarousel'
import HeroFunctions from './components/HeroFunctions'
import CertifiedCars from './components/CertifiedCars'
import Contact from 'components/Contact'

function Homepage() {
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
