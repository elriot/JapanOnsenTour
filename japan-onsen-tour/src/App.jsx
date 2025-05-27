import "/src/App.css";
import Header from "./pages/Header";
import WhatIsOnsen from "./pages/WhatIsOnsen";
import HealthBenefit from "./pages/HealthBenefit";
import BeforeYouGo from "./pages/BeforeYouGo";
import Etiquette from "./pages/Etiquette";
import Tattoo from "./pages/Tattoo";
import RyokanHotel from "./pages/RyokanHotel";

function App() {
  return (
    <>
		<Header/>

		<WhatIsOnsen className="bg-odd"/>
		<HealthBenefit className="bg-even"/>

		<BeforeYouGo className="bg-odd"/>
		<Etiquette className="bg-odd"/>
		<Tattoo className="bg-even"/>
		<RyokanHotel className="bg-odd"/>
    </>
  );
}

export default App;
