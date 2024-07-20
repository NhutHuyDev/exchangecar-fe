import MainLayout from 'layout/MainLayout'
import Hero from './components/Hero'
import HowItWorks from 'components/HowItWorks'
import Reviews from 'components/Reviews'
import FAQ from 'components/FAQ'

function CarSell() {
    return (
        <MainLayout>
            <Hero/>
            <HowItWorks />
            <Reviews />
            <FAQ />
        </MainLayout>
    )
}

export default CarSell