import Header from "./pages/Header";
import WhatIsOnsen from "./pages/WhatIsOnsen";
import HealthBenefit from "./pages/HealthBenefit";
import BeforeYouGo from "./pages/BeforeYouGo";
import "/src/App.css";

function App() {
  return (
    <>
		<Header/>
		<WhatIsOnsen className="bg-odd"/>
		<HealthBenefit className="bg-even"/>
		<BeforeYouGo className="bg-odd"/>
    </>
  );
}

export default App;
