import onsenImg from "../../images/onsen_01.jpg";
import onsenImg2 from "../../images/onsen_02.jpg";
import Heading2 from "../../components/Heading2";
import Section from "../../components/Section";
import ResponsiveRow from "../../components/ResponsiveRow";
import ResponsiveRowImage from "../../components/ResoponsiveRowImage";

function WhatIsOnsen({className = ""}) {
	
  return (
		<Section className={className}>
			<Heading2 className="page-top-content">What is Onsen?</Heading2>
			<div className="page-content-text mb-10">
				<p className="mb-3">
					Onsen is a cherished part of traditional Japanese culture that blends
					geothermal bathing with rituals of relaxation and wellness.
				</p>
				<p className="mb-3">
					While Japan has approximately 25,000 hot spring sources, only around
					3,000 meet the official onsen criteria—naturally heated, mineral-rich
					water from deep geothermal springs.
				</p>
				<p className="mb-3">
					Onsen experiences vary widely, ranging from open-air baths
					(roten-buro, 露天風呂) with scenic views to indoor baths (uchiyu,
					内湯) offering privacy and comfort.
				</p>
				<p className="mb-3">
					Traditionally, most onsen were set outdoors, but today, many refined
					inns offer elegant indoor options as well.
				</p>
				<p>
					Depending on your preferences, you can choose between public baths for
					cultural immersion, or private onsen for a more intimate and
					personalized experience.
				</p>
			</div>

			<ResponsiveRow>
				<ResponsiveRowImage src={onsenImg} alt="Outside Onsen"/>
				<ResponsiveRowImage src={onsenImg2} alt="Public inside Onsen"/>
			</ResponsiveRow>
		</Section>
	);
}

export default WhatIsOnsen;
