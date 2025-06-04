import SeasonalSectionItem from "../../components/SeasonalSectionItem";
import Section from "../../components/Section";
import springImg from "../../images/seasonal/seasonal_spring.jpg";

function SeasonalSpring({ className = "" }) {
  const seasonalItems = [
    {
      imageSrc: springImg,
      title: "Spring (March to May)",
      content: "Onsen towns come alive with pink petals and fresh air. Cherry blossoms add beauty to outdoor Onsen baths. The weather is not cold, but not hot either. It is just balanced, which makes it perfect to enjoy the scenery while soaking in an Onsen.",
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
					sourceText="kobe.travel.coocan.jp"
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
          <p>Known for its soft, silky alkaline waters, Gero Onsen comes alive with cherry blossoms along the Hida River.</p>
          <ul className="list-disc list-inside mt-4 pl-5 ">
						<li className="font-bold">Highlights:</li>
						<li className="pl-5">Sakura reflections along the riverside footbath trail</li>
						<li className="pl-5">Visit nearby historic towns like Takayama</li>
						<li className="pl-5">Light spring cuisine with local mountain vegetables</li>
          </ul>
        </>
      ),
    },
    {
      title: "Arima Onsen",
      content: (
        <>
          <p>Arima’s riverside parks and gentle hills are scattered with blooming cherry trees, offering a peaceful contrast to the lively cities nearby.
</p>
          <ul className="list-disc list-inside mt-4 pl-5 ">
						<li className="font-bold">Highlights:</li>
						<li className="pl-5">Day trips from Kobe or Osaka</li>
						<li className="pl-5">Cherry blossom views from private Rotenburo baths</li>
						<li className="pl-5">Local sweets and green tea in traditional cafés</li>
          </ul>
        </>
      ),
    },
  ];
}
export default SeasonalSpring;
