import "/src/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import WhatIsOnsen from "./pages/onsen101/WhatIsOnsen";
import HealthBenefit from "./pages/onsen101/HealthBenefit";
import Etiquette from "./pages/beforeyougo/Etiquette";
import Tattoo from "./pages/beforeyougo/Tattoo";
import RyokanHotel from "./pages/beforeyougo/RyokanHotel";
import PackingEssensial from "./pages/beforeyougo/PackingEssensial";
import Footer from "./components/Footer";
import KusatsuOnsenPage from "./pages/kusatsu/KusatsuOnsenPage";
import BackToTopButton from "./components/BackToTopButton";
import ArimaOnsenPage from "./pages/arima/ArimaOnsenPage";
import GeroOnsenPage from "./pages/gero/GeroOnsenPage";

function App() {
  return (
    <>
      <Router basename="/JapanOnsenTour">
        <div className="flex flex-col min-h-screen">
          {/* Header는 Routes 외부에 두는 게 좋아 */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/onsen" element={<WhatIsOnsen />} />
              <Route path="/health" element={<HealthBenefit />} />
              <Route path="/etiquette" element={<Etiquette />} />
              <Route path="/tattoo" element={<Tattoo />} />
              <Route path="/accomodation" element={<RyokanHotel />} />
              <Route path="/packing" element={<PackingEssensial />} />
              <Route path="/kusatsu" element={<KusatsuOnsenPage />} />
							<Route path="/arima" element={<ArimaOnsenPage />} />
							<Route path="/gero" element={<GeroOnsenPage />} />
            </Routes>
          </main>

					<BackToTopButton />
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
