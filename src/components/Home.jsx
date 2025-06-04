import React from 'react'
import HeroCarousel from './HeroSection'
import FundraiserSpotlights from './FundCards'
import AboutSection from './About'
import ImpactSection from './ImpactSection'
import EngagementSection from './Engagement'

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <FundraiserSpotlights />
            <AboutSection />
            <ImpactSection />
            <EngagementSection />
        </div>
    )
}

export default Home
