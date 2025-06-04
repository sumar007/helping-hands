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

function App() {

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/corporate-match" element={<EmployerMatch />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/donate" element={<DonationForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
