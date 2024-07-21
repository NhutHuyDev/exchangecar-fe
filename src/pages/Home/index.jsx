import MainLayout from 'layout/MainLayout'
import HeroCarousel from './components/HeroCarousel'
import HeroFunctions from './components/HeroFunctions'
import CertifiedCars from './components/CertifiedCars'
import Contact from 'components/Contact'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getQueryTable } from 'redux/reducers/carsSlice'

function Homepage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQueryTable())
  }, [dispatch])

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
