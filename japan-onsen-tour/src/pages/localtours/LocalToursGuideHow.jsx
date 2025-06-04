import GuideReasonsSection from "../../components/GuideSeasonsSection";

function LocalToursGuideHow ( { className = "" }){

	return (
		<GuideReasonsSection title="Where to Find Trusted Guides & Tours" items={guideItems} className={className} />
	);
}

const guideItems = [
  {
    heading: "Klook/Viator",
    description:
      "Easy-to-book tours with reviews, often in English.",
  },
  {
    heading: "Local Tourism Offices",
    description:
      "Many onsen towns offer English-speaking guides or cultural hosts.",
  },
  {
    heading: "Japanican (by JTB)",
    description:
      "High-quality packages with cultural depth.",
  },
  {
    heading: "Ryokan Concierge Services",
    description:
      "Upscale inns can arrange private guides, interpreters, or experience hosts on request.",
  },
];

export default LocalToursGuideHow;