import "/src/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "./pages/Header";
import Main from "./pages/Main";
import WhatIsOnsen from "./pages/WhatIsOnsen";
import HealthBenefit from "./pages/HealthBenefit";
import BeforeYouGo from "./pages/BeforeYouGo";
import Etiquette from "./pages/Etiquette";
import Tattoo from "./pages/Tattoo";
import RyokanHotel from "./pages/RyokanHotel";
import PackingEssensial from "./pages/PackingEssensial";
import Footer from "./components/Footer";
import KusatsuOnsen from "./pages/kusatsu/KusatsuOnsen";


function App() {
  return (
    <>
		<Router basename="/JapanOnsenTour">
			<div className="flex flex-col min-h-screen">
			{/* Header는 Routes 외부에 두는 게 좋아 */}
			<Header />

			{/* Main Content */}
			<main className="flex-grow">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/onsen" element={<WhatIsOnsen />} />
					<Route path="/health" element={<HealthBenefit />} />
					<Route path="/etiquette" element={<Etiquette />} />
					<Route path="/tattoo" element={<Tattoo />} />
					<Route path="/accomodation" element={<RyokanHotel />} />
					<Route path="/packing" element={<PackingEssensial />} />
					<Route path="/kusatsu" element={<KusatsuOnsen />} />
				</Routes>
			</main>

			{/* Footer */}
			<Footer />
			</div>
		</Router>
		{/* <Router basename="/JapanOnsenTour">
			<Header/>

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/onsen" element={<WhatIsOnsen />} />
				<Route path="/health" element={<HealthBenefit />} />

				<Route path="/etiquette" element={<Etiquette />} />
				<Route path="/tattoo" element={<Tattoo />} />
				<Route path="/accomodation" element={<RyokanHotel />} />
				<Route path="/packing" element={<PackingEssensial />} />
			</Routes>
		</Router>
		<Footer/> */}


		{/* <Header/>

		<WhatIsOnsen className="bg-odd"/>
		<HealthBenefit className="bg-even"/>

		<BeforeYouGo className="bg-odd"/>
		<Etiquette className="bg-odd"/>
		<Tattoo className="bg-even"/>
		<RyokanHotel className="bg-odd"/>
		<PackingEssensial className="even"/> */}
    </>
  );
}

export default App;
