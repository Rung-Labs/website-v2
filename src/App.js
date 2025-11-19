import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import FeatureSpotlight from "./components/FeatureSpotlight";
import CTASection from "./components/CTASection";
import PlatformSection from "./components/PlatformSection";
import ROICalculator from "./components/ROICalculator";
import FAQSection from "./components/FAQSection";
import GetStartedSection from "./components/GetStartedSection";
import ScheduleSection from "./components/ScheduleSection";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <>
      <section id="top">
        <Hero />
      </section>
      <section id="features">
        <FeatureSpotlight />
      </section>
      <section id="how-it-works">
        <CTASection />
      </section>
      <section id="platforms">
        <PlatformSection />
      </section>
      <section id="roi">
        <ROICalculator />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <GetStartedSection />
      <Footer />
    </>
  );
}

function SchedulePage() {
  return (
    <>
      {/* reuse header inside schedule section via Header component it imports */}
      <ScheduleSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <main className="App min-h-screen w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </main>
  );
}

export default App;
