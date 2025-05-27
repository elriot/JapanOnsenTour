import onsenImg from "../images/onsen_01.jpg";
import onsenImg2 from "../images/onsen_02.jpg";
import Heading2 from "../components/Heading2";

function WhatIsOnsen({className = ""}) {
	
  return (
    <div className={`p-8 pt-20 pb-20 ${className}`}>
		<Heading2>What is Onsen?</Heading2>
		<div className="mb-10">
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

		<div className="flex flex-col md:flex-row gap-4 mb-4">
			<img src={onsenImg} alt="Onsen" className="w-full md:w-1/2 h-auto" />
			<img src={onsenImg2} alt="Onsen" className="w-full md:w-1/2 h-auto" />
		</div>
    </div>
  );
}

export default WhatIsOnsen;
