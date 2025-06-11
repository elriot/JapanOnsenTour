import SeasonalSectionItem from "../../components/SeasonalSectionItem";
import Section from "../../components/Section";
import summerImg from "../../images/seasonal/seasonal_summer.jpg";

function SeasonalSummer({ className = "" }) {
  const seasonalItems = [
    {
      imageSrc: summerImg,
      title: "Summer (June to August)",
      content: "Dipping into hot springs may not seem like the greatest idea during the warmer months, but it’s surprisingly relaxing. Summer is a good time for refreshing outdoor Onsen soaks, especially those with amenities like foot baths or riverside soaking areas.",
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
					imagePosition="left"
					sourceText="tokomori.com"
        />
      ))}
    </Section>
  );
}

function getItems() {
	return [
    {
      title: "Kusatsu Onsen",
      content: (
        <>
          <p>Situated at over 1,200 meters, Kusatsu offers a cooler alpine climate, ideal for escaping Japan’s humid cities.</p>
          <ul className="list-disc list-inside mt-4 pl-5 ">
						<li className="font-bold">Highlights:</li>
						<li className="pl-5">Lush forest hikes around Mt. Shirane</li>
						<li className="pl-5">Firefly watching at dusk</li>
						<li className="pl-5">Local summer festivals with yukata and lanterns</li>
          </ul>
        </>
      ),
    },
    {
      title: "Gero Onsen",
      content: (
        <>
          <p>Gero’s setting in a river valley becomes lush and green, with flowing waterfalls and mountain views.
</p>
          <ul className="list-disc list-inside mt-4 pl-5 ">
						<li className="font-bold">Highlights:</li>
						<li className="pl-5">Outdoor river baths and public foot spas</li>
						<li className="pl-5">Evening walks in yukata with fans and shaved ice</li>
						<li className="pl-5">Train ride through scenic Gifu countryside</li>
          </ul>
        </>
      ),
    },
  ];
}
export default SeasonalSummer;
