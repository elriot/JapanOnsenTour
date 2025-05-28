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


function App() {
  return (
    <>
		<Router basename="/JapanOnsenTour">
			<header className="p-4 bg-gray-100 flex gap-4">
				<Link to="/">Home</Link>
				<Link to="/onsen">What is Onsen</Link>
				<Link to="/health">Health Benefits</Link>
			</header>

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/onsen" element={<WhatIsOnsen />} />
				<Route path="/health" element={<HealthBenefit />} />
			</Routes>
		</Router>
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
