import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FundingGrants from "./pages/FundingGrants";
// import UpcomingConferences from "./pages/UpcomingConferences";
// import RecentConferences from "./pages/RecentConferences";
// import Proceedings from "./pages/Proceedings";
// import PastSpeakers from "./pages/PastSpeakers";
// import AdvisorySpeakers from "./pages/AdvisorySpeakers";
import Registrations from "./pages/Registrations";
import Mentorship from "./pages/Mentorship";
import TechInnovation from "./pages/TechInnovation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
// import ICDMS26 from "./pages/conferences/ICDMS26";
import Careers from "./pages/Careers";
import Developers from "./pages/Developers";
import Documentation from "./pages/Documentation";
// import Events from "./pages/Events";
import GASS from "./pages/conferences/GASS";
import ICCSD from "./pages/conferences/ICCSD";
import GSAI from "./pages/conferences/GSAI";
import WCCC from "./pages/conferences/WCCC";
import ICBT from "./pages/conferences/ICBT";
import IDSS from "./pages/conferences/IDSS";
// import AdvisoryBoard from "./pages/AdvisoryBoard";
import VideoConferenceView from "./pages/VideoConferenceView";
import { ScrollToTop } from "./components/ScrollToTop";
import NewMexicoBackground from "./components/NewMexicoBackground";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <NewMexicoBackground />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/funding-grants" element={<FundingGrants />} />
          {/* <Route path="/upcoming-conferences" element={<UpcomingConferences />} /> */}
          {/* <Route path="/recent-conferences" element={<RecentConferences />} /> */}
          {/* <Route path="/proceedings" element={<Proceedings />} /> */}
          {/* <Route path="/past-speakers" element={<PastSpeakers />} /> */}
          {/* <Route path="/advisory-speakers" element={<AdvisorySpeakers />} /> */}
          <Route path="/registrations" element={<Registrations />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/tech-innovation" element={<TechInnovation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/conferences/icdms-26" element={<ICDMS26 />} /> */}
          {/* <Route path="/events" element={<Events />} />
          <Route path="/events/gass" element={<GASS />} />
          <Route path="/events/iccsd" element={<ICCSD />} />
          <Route path="/events/gsai" element={<GSAI />} />
          <Route path="/events/wccc" element={<WCCC />} />
          <Route path="/events/icbt" element={<ICBT />} />
          <Route path="/events/idss" element={<IDSS />} /> */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/documentation" element={<Documentation />} />
          {/* <Route path="/advisory-board" element={<AdvisoryBoard />} /> */}
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* <Route path="/proceedings/:id" element={<VideoConferenceView />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
