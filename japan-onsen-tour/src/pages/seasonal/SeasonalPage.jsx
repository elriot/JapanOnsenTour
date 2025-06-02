import Section from "../../components/Section";
import SeasonalFall from "./SeasonalFall";
import SeasonalSpring from "./SeasonalSpring";
import SeasonalSummer from "./SeasonalSummer";
import SeasonalTop from "./SeasonalTop";
import SeasonalWinder from "./SeasonalWinter";
import SeasonsByOnsen from "./SeasonsByOnsen";

function SeasonalPage({className = ""}) {
	return (
		<div className={className}>
			<SeasonalTop className="bg-gray-100"/>

			<SeasonalWinder className="pt-25"/>
			<SeasonalSpring/>
			<SeasonalSummer/>
			<SeasonalFall/>

			<SeasonsByOnsen className="bg-gray-100"/>
		</div>
	);
}

export default SeasonalPage;