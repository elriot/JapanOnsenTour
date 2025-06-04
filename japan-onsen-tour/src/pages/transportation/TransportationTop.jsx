import ResponsiveRow from "../../components/ResponsiveRow";
import ResponsiveRowText from "../../components/ResponsiveRowText";
import Section from "../../components/Section";
import tpImage from "../../images/transportation/tp_top.jpg";

function TransportationTop({className = ""}) {
	return (
		<Section className={className}>
			<ResponsiveRow className="py-10">
				<ResponsiveRowText className="text-2xl font-bold">
					Navigating Japan: Transportation Tips for Travelers
				</ResponsiveRowText>
				<ResponsiveRowText className="page-content-text py-5 md:pt-0">
					In Japan, getting to an Onsen is more than just a commute, it’s part of the ritual. Whether you're gliding through the countryside on a high-speed bullet train or winding up a forested mountain road, the trip sets the stage for the serenity that awaits. Let us walk you through the smart, scenic, and seamless ways to reach Japan’s top hot spring destinations.
				</ResponsiveRowText>
			</ResponsiveRow>
			<img src={tpImage} className="rounded-lg"/>
		</Section>
	);
}

export default TransportationTop;