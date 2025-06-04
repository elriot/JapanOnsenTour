import TravelExtrasJapanese from "./TravelExtraJapanese";
import TravelExtraOmotenashi from "./TravelExtraOmotenashi";
import TravelExtrasTop from "./TravelExtrasTop";

function TravelExtrasPage({ className = ""}) {
	return (
		<div className={className}>
			<TravelExtrasTop/>
			<TravelExtrasJapanese className="pb-10"/>
			<TravelExtraOmotenashi/>
		</div>
	);
}

export default TravelExtrasPage;