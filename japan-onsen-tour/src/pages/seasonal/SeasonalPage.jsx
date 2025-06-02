import Section from "../../components/Section";
import SeasonalTop from "./SeasonalTop";
import SeasonalWinder from "./SeasonalWinter";

function SeasonalPage({className = ""}) {
	return (
		<div className={className}>
			<SeasonalTop className="bg-gray-100"/>
			
			<SeasonalWinder/>
		</div>
	);
}

export default SeasonalPage;