import ImpactSection from './ImpactSection'
import EngagementSection from './Engagement'
import HeroWithCards from './HeroCards'
import SimpleSpotlight from './FundCards'
import VideoSection from './About'

const Home = () => {
    return (
        <div>
            <HeroWithCards />
            <SimpleSpotlight />
            <VideoSection />
            <ImpactSection />
            <EngagementSection />
        </div>
    )
}

export default Home
