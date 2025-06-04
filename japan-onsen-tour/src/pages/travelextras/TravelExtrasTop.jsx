import Heading2 from "../../components/Heading2";
import Section from "../../components/Section";

function TravelExtrasTop( { className = ""}) {
	return (
		<Section className={`${className} text-center`} paddingTop="true" paddingBottom="false">
			<Heading2 className="page-top-content">Adding the Little Touches: Small Extras to Enhance Your Trip</Heading2>
			<p className="text-2xl text-center">Helpful Japanese Phrases for Onsen Travelers</p>
		</Section>
	);
}
export default TravelExtrasTop;