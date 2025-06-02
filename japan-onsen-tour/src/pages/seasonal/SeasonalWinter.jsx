import Section from "../../components/Section";
import winterImg from "../../images/seasonal/seasonal_winter.jpeg";

function SeasonalWinter({ className = "" }) {
  const seasonalItems = [
    {
      imageSrc: winterImg,
      title: "Winter (December to February)",
      content: "Heavy snowfall makes winter onsen particularly memorable, especially when contrasted with the hot spring waters. There’s nothing quite like slipping into a steaming open-air bath as snowflakes drift from the sky.",
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
          <p>One of Japan’s most famous and highest-altitude Onsen towns, Kusatsu becomes a snowy wonderland, perfect for winter bathing. The sulfuric waters remain steaming hot even as snow blankets the town.</p>
          <ul className="list-disc list-inside mt-4 pl-5 ">
						<li className="font-bold">Highlights:</li>
						<li className="pl-5">Yubatake glowing in mist and lights</li>
						<li className="pl-5">Skiing nearby + evening soaks</li>
						<li className="pl-5">Traditional yumomi (water stirring) performances</li>
          </ul>
        </>
      ),
    },
    {
      title: "Arima Onsen",
      content: (
        <>
          <p>Easily accessible from Osaka or Kobe, Arima feels like a hidden retreat. Snow occasionally dusts the rooftops of its elegant ryokan.</p>
          <ul className="list-disc list-inside mt-4 pl-5 ">
						<li className="font-bold">Highlights:</li>
						<li className="pl-5">Soak in the rare golden and silver waters</li>
						<li className="pl-5">Winter kaiseki feasts with local crab and root vegetables</li>
						<li className="pl-5">Peaceful strolls through quiet streets</li>
          </ul>
        </>
      ),
    },
  ];
}
export default SeasonalWinter;
