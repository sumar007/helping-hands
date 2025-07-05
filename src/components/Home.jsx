import ImpactSection from './ImpactSection'
import SimpleSpotlight from './FundCards'
import HeroSection from './HeroSection'
import StoriesSection from './Stories'
import OrganizationManagement from './Engagement'
import ContactUs from './ContactUs'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <SimpleSpotlight />
            <StoriesSection />
            <ImpactSection />
            <OrganizationManagement />
            <ContactUs />
        </div>
    )
}

export default Home
