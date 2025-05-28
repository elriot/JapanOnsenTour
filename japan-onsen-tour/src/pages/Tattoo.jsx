import FullWidthImage from "../components/FullWidthImage";
import Heading2 from "../components/Heading2";
import ResponsiveRow from "../components/ResponsiveRow";
import ResponsiveRowText from "../components/ResponsiveRowText";
import Section from "../components/Section";
import tattooImg from "../images/tattoo.jpg";

function Tattoo({className=""}){
	return (
		<Section className={className}>
			<ResponsiveRow>
				<ResponsiveRowText>
					<Heading2>Things to Know About Tattoos</Heading2>
				</ResponsiveRowText>
				<ResponsiveRowText>
					<p className="mb-4">
						If you’re planning to visit a public onsen, it’s important to check the facility’s tattoo policy in advance.
					</p>
					<p className="mb-4">
						Traditionally, tattoos were associated with anti-social groups like the yakuza, and many public facilities still prohibit them. 
					</p>
					<p className="mb-4">
						Some onsen now allow tattoos or provide tattoo cover patches, but restrictions are still common, so checking ahead is recommended.
					</p>
				</ResponsiveRowText>
			</ResponsiveRow>
			<FullWidthImage src={tattooImg} art="Tattoo warning" className="pt-5" fullWidth="true"/>
			{/* <div className="w-full my-8">
				<img src={tattooImg} alt="Tattoo Warning" className="w-full h-auto" />
			</div> */}
		</Section>
	);
}

export default Tattoo;