import Heading2 from "../components/Heading2";
import Section from "../components/Section";

function BeforeYouGo({className=""}){
	return (
		<Section className={className} paddingBottom="false">
			<Heading2 center="true">Before You Go</Heading2>
		</Section>
	);
}

export default BeforeYouGo;