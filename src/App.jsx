import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import OurTeam from "./pages/OurTeam";
import ContactForm from "./pages/ContactForm";
import DonationForm from "./pages/Donation";
import EmployerMatch from "./pages/CorporateMatch";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
import Spotlight from "./pages/SpotLight";
import DetailPage from "./components/DetailsPage";
import EngagementDetail from "./components/ActivityDetails";
import ContactUs from "./pages/ContactForm";
import FloatingContactForm from "./components/FloatingForm";
import LegalStatus from "./pages/LegalStatus";
import PhotoGallery from "./pages/PhotoGallery";

function App() {

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/portfolio/:id" element={<EngagementDetail />} />
          <Route path="/about-us/our-team" element={<OurTeam />} />
          <Route path="/about-us/legal-status" element={<LegalStatus />} />
          <Route path="/about-us/photo-gallery" element={<PhotoGallery />} />

          <Route path="/corporate-match" element={<EmployerMatch />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donate" element={<DonationForm />} />
        </Routes>
      </main>
      <FloatingContactForm />
      <Footer />
    </>
  )
}

export default App
