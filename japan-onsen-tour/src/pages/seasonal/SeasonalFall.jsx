import SeasonalSectionItem from "../../components/SeasonalSectionItem";
import Section from "../../components/Section";
import summerImg from "../../images/seasonal/seasonal_fall.jpg";

function SeasonalFall({ className = "" }) {
  const seasonalItems = [
    {
      imageSrc: summerImg,
      title: "Fall (September to November)",
      content: "Fall in Japan is famed for the sheer beauty of its foliage. You can see the autumn leaves while taking Onsen. The vibrant autumn leaves provide a stunning backdrop for a relaxing soak.",
      accordionItems: getItems(),
    }
  ];

  return (
    <Section className={className}>
      {seasonalItems.map((item, index) => (
        <SeasonalSectionItem
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          content={item.content}
          accordionItems={item.accordionItems}
					imagePosition="right"
					sourceText="Shutterstock.com/ @Dpongvit"
        />
      ))}
    </Section>
  );
}

function getItems() {
	return [
    {
      title: "Gero Onsen",
      content: (
        <>
          <p>Fiery foliage frames the riverside town, with vivid reds and golds reflecting in the water.</p>
          <ul className="list-disc list-inside mt-4 pl-5 ">
						<li className="font-bold">Highlights:</li>
						<li className="pl-5">Maple viewing from outdoor baths</li>
						<li className="pl-5">Autumn harvest dishes: mushrooms, chestnuts, and wild boar</li>
						<li className="pl-5">Peaceful hikes and riverside meditation</li>
          </ul>
        </>
      ),
    },
    {
      title: "Kusatsu Onsen",
      content: (
        <>
          <p>The mountains around Kusatsu burst into color, making it a favorite time for nature lovers and photographers.
</p>
          <ul className="list-disc list-inside mt-4 pl-5 ">
						<li className="font-bold">Highlights:</li>
						<li className="pl-5">Hikes to autumn viewpoints (e.g., Sainokawara Park)</li>
						<li className="pl-5">Crisp air and steamy baths are perfect pairing</li>
						<li className="pl-5">Less crowded than winter, equally beautiful</li>
          </ul>
        </>
      ),
    },
  ];
}
export default SeasonalFall;
