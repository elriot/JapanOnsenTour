import Accordion from "../../components/Accordion";
import AttractionsSection from "../../components/AttractionsSection";
import img from "../../images/arima/arima_attractions.jpg";

function ArimaAttractions({ className = "" }) {
  const paddingSize = 10;
  const accordionItems = [
    {
      title: "Mount Kusatsu-Shirane (草津白根山) & Lake Yugama (湯釜)",
      content:
        "A dramatic active volcano featuring an acid-blue crater lake. Popular among hikers and photographers in summer and early fall.",
    },
    {
      title: "Sai-no-Kawara Park (西の河原公園)",
      content:
        "A scenic park filled with hot spring streams and strange rock formations. Stroll through steam-filled paths or soak in the large open-air rotenburo.",
    },
    {
      title: "Kusatsu Tropical Wonderland (草津熱帯圏)",
      content:
        "Japan’s highest-altitude zoo. Tropical reptiles, monkeys, and birds live in a greenhouse—great for families year-round.",
    },
    {
      title: "Kosenji Temple (光泉寺)",
      content:
        "Perched just above Yubatake, this quiet temple offers peaceful views and seasonal beauty, especially during cherry blossom season.",
    },
    {
      title: "Onioshidashi Volcanic Park (鬼押出し園)",
      content:
        "A rugged lava park near Mount Asama, with panoramic mountain views and a small volcano museum on-site.",
    },
    {
      title: "Yubatake Shopping Streets (湯畑の温泉街)",
      content:
        "Charming alleys lined with local snack stalls, onsen manju shops, handmade bath goods, and souvenir stands.",
    },
  ];
  return (
    <AttractionsSection
      className={className}
      title="Other Attractions Around Arima"
      imageSrc={img}
      imageAlt="onsen"
      paddingSize={paddingSize}
      content={
        <>
          <div
            style={{
              maxWidth: "900px",
              borderRadius: "8px",
            }}
          >
            {/* <h2 className="text-2xl font-semibold mb-4">
              Other Attractions Around Kusatsu
            </h2> */}
            <Accordion items={accordionItems} />
          </div>
        </>
      }
    ></AttractionsSection>
  );
}

export default ArimaAttractions;
