import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickExplore from "./components/QuickExplore";
import WhyPlany from "./components/WhyPlany";
import EditorsPicks from "./components/EditorsPicks";
import Discover from "./pages/Discover";
import PlanningSession from "./pages/PlanningSession";
import CreatePlan from "./pages/CreatePlan";
import ExperienceDetails from "./pages/ExperienceDetails";
import FinalItinerary from "./pages/FinalItinerary";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickExplore />
      <WhyPlany />
      <EditorsPicks />
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="bg-[#F8F6F2] min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/planning" element={<PlanningSession />} />
          <Route path="/planning/:id" element={<PlanningSession />} />
          <Route path="/create-plan" element={<CreatePlan />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} />
          <Route path="/final-itinerary" element={<FinalItinerary />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;