import Heading2 from "../components/Heading2";
import ResponsiveRowImage from "../components/ResoponsiveRowImage";
import ResponsiveRow from "../components/ResponsiveRow";
import ResponsiveRowText from "../components/ResponsiveRowText";
import Section from "../components/Section";
import noren from "../images/noren.jpg";

function Etiquette({className=""}){

	return (
		<Section className={className}>
			<ResponsiveRow>
				<ResponsiveRowImage src={noren} alt="Noren sign"/>
				<ResponsiveRowText>
					<Section>
						<Heading2 className="text-center">Onsen Etiquette</Heading2>
						<p className="mb-4">
							If you’re familiar with North American hot springs, there are a few important differences to keep in mind when visiting an onsen in Japan.
						</p>
						<p className="mb-4">
							First, while it’s also expected to wash your body thoroughly before entering the bath,  Japanese onsen culture is strictly about bathing, not swimming. Swimsuits and other swim gear are not allowed, even in public baths. You’re also not permitted to bring your bath towel into the water, and activities like swimming or diving are strictly prohibited.
						</p>
						<p className="mb-4">
							In most public onsen, bathing areas are separated by gender, but some facilities alternate the men’s and women’s baths based on time of day, as part of a philosophy related to yin and yang balance. Be sure to check the Noren (暖簾, curtain sign) at the entrance to confirm the current gender designation before entering. Blue noren indicates the men’s bath, while red means the women’s bath.
						</p>
					</Section>
				</ResponsiveRowText>
			</ResponsiveRow>
		</Section>

	);
}

export default Etiquette;