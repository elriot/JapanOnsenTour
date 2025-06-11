import GuideReasonsSection from "../../components/GuideSeasonsSection";

function LocalToursGuideWhen ( { className = "" }){

	return (
		<GuideReasonsSection title="When to Hire a Guide" items={guideItems} className={className} />
	);
}

const guideItems = [
  {
    heading: "New to Onsen Culture",
    description:
      "Guides explain etiquette, dress code, and bathing steps so you can relax and enjoy.",
  },
  {
    heading: "Exclusive Access",
    description:
      "Some ryokan or bathhouses are only accessible through local connections.",
  },
  {
    heading: "Language Barrier",
    description:
      "Smooth check-ins, meal orders, and understanding of local customs.",
  },
  {
    heading: "Tailored Experiences",
    description:
      "Ideal for luxury travelers, couples, or wellness seekers wanting curated itineraries.",
  },
  {
    heading: "Cultural Add-ons",
    description:
      "Combine your soak with workshops, food tours, or performances.",
  },
];

export default LocalToursGuideWhen;