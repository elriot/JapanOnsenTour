import Accordion from "../../components/Accordion";
import AttractionsSection from "../../components/AttractionsSection";
import img from "../../images/gero/gero_attractions.jpg";

function GeroAttractions({ className = "" }) {
  const paddingSize = 10;
  const accordionItems = [
    {
      title: "Gassho Village (下呂温泉合掌村)",
      content:
        "This open-air museum recreates the charm of Shirakawa-go (白川郷) with traditional thatched-roof gassho-style houses (合掌造り) relocated to Gero. Explore preserved interiors, folk crafts, and seasonal gardens like Saijiki-no-Mori (歳時記の森) for a peaceful stroll through rural heritage.",
    },
    {
      title: "Onsen-ji Temple (温泉寺)",
      content:
        "Founded in 1671, this historic temple sits halfway up Mount Nakane—nicknamed “Gero’s Mt. Fuji.” Climb 173 steps for panoramic views and autumn foliage. During peak season, visit the Maple Leaf Foot Bath (紅葉足湯) for a relaxing and scenic soak.",
    },
    {
      title: "Gero Onsen Museum (下呂発温泉博物館)",
      content:
        "A rare museum dedicated solely to the science and culture of hot springs. Learn about spring types and properties, and enjoy on-site foot baths and walking baths (足湯・歩行湯) included with your ticket.",
    },
    {
      title: "Yakedake Gorge (巖立峡)",
      content:
        "Formed by ancient lava flows from Mt. Ontake, this 72-meter-high cliff is a natural wonder. Visit Ganritsu Park (巖立公園) nearby for easy access to hiking trails, fall foliage, and photo spots.",
    },
    {
      title: "Zenjo-ji Temple (禪昌寺)",
      content:
        "Just a short train ride away, this temple is famed for its 1200-year-old cedar tree and Chinese Song-style architecture. Its garden “Bansaidō” (萬歳洞) is a nationally designated scenic spot.",
    },
    {
      title: "Kaeru Shrine (加惠瑠神社)",
      content:
        "Named with a pun on the Japanese word for frog (kaeru, カエル), this whimsical shrine is full of frog motifs, bringing good luck, safety, and wealth. A favorite among travelers!",
    },
  ];
  return (
    <AttractionsSection
      className={className}
      title="Other Attractions Around Gero"
      imageSrc={img}
      imageAlt="onsen"
      paddingSize={paddingSize}
			sourceText="www.gero-gassho.jp"
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

export default GeroAttractions;
