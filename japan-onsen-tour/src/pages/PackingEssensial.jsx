import Heading2 from "../components/Heading2";
import SubTitle from "../components/SubTitle";
import ItemCard from "../components/ItemCard";
import ResponsiveRow from "../components/ResponsiveRow";
import Section from "../components/Section";


function PackingEssensial({className= ""}){
	return (
		<Section className={className}>
			<Heading2 center="true">Packing Essentials for Your Onsen Trip</Heading2>
			<p className="pb-15">
				Preparing for an onsen trip is simple, but a few thoughtful choices can enhance your experience.
			</p>

			<SubTitle>What To Bring</SubTitle>
			<ResponsiveRow className="pb-15">
				<ItemCard title="Small Towel" description="For modesty and for washing before entering the bath. (Note: This towel should not be taken into the water.)" />
				<ItemCard title="Comfortable Clothing" description="Loose-fitting clothing or loungewear is ideal for relaxing after your soak." />
  				<ItemCard title="Toiletries (Optional)" description="Most onsen provide shampoo, soap, and conditioner, but you can bring your own if you prefer specific brands." />
			</ResponsiveRow>

			<SubTitle>What to Leave Behind</SubTitle>
			<ResponsiveRow>
				<ItemCard title="Swimsuits & Clothing" description="Nude bathing is standard. All clothing must be left in the locker or changing area." />
				<ItemCard title="Valuables" description="It’s best to keep jewelry and electronics in your hotel room or a secure locker." />
  				<ItemCard title="Phones & Camera (in the onsen)" description="Photography is generally not allowed in bathing areas to ensure the privacy of all guests." />
			</ResponsiveRow>			
		</Section>
	);
}

export default PackingEssensial;