// // src/App.jsx

// import React from 'react';
// import Header from './components/header';
// import Footer from './components/Footer';
// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-white">
//       <Header />
//       <main className="flex-grow">
//         <Home />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import GymPortfolio from "./pages/Gym";
import InstallmentPortfolio from "./pages/Installment";
import RestaurantPortfolio from "./pages/Restaurant";
import ComplaintPortfolio from "./pages/Complaint";
import ElectronicsPortfolio from "./pages/Electronics";
import TermsAndConditionsComponent from "./pages/TermsAndCondition";
import PrivacyPolicyComponent from "./pages/PrivacyPolicy";
import RefundPolicyComponent from "./pages/RefundPolicy";
import CancellationPolicyComponent from "./pages/CancellationPolicy";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/services/gym-management" element={<GymPortfolio />} />
            <Route
              path="/services/installment-software"
              element={<InstallmentPortfolio />}
            />
            <Route
              path="/services/restaurant-management"
              element={<RestaurantPortfolio />}
            />
            <Route
              path="/services/complaint-management"
              element={<ComplaintPortfolio />}
            />
            <Route
              path="/services/electronics-software"
              element={<ElectronicsPortfolio />}
            />

            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsComponent />}
            />

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicyComponent />}
            />
            <Route path="/refund-policy" element={<RefundPolicyComponent />} />
            <Route
              path="/cancellation-policy"
              element={<CancellationPolicyComponent />}
            />
          </Routes>
        </main>

        {/* 👇 Floating Whatsapp yahan hona chahiye */}
        <FloatingWhatsapp />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
