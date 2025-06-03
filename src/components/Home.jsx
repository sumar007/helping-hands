import React from 'react'
import Header from './Header'
import HeroCarousel from './HeroSection'
import FundraiserSpotlights from './FundCards'
import AboutSection from './About'

const Home = () => {
    return (
        <div>
            <Header />
            <HeroCarousel />
            <FundraiserSpotlights />
            <AboutSection />
        </div>
    )
}

export default Home
