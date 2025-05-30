import overviewImg from "../../images/gero/gero_overview.jpg";
import CityInfoWithImageAndText from "../../components/CityInfoWithImageAndTextSection.jsx";

function GeroCityOverviewSection({ className = "" }) {
  return (
      <CityInfoWithImageAndText
        className={`${className}`}
        title="City Overview"
        imageSrc={overviewImg}
        imageAlt="Gero Onsen"
        textContent={
          <div className="page-content-text">
            <p className="p-gap">
              Nestled in the mountains of Gifu Prefecture (岐阜県), Gero Onsen (下呂温泉) is one of Japan’s most renowned hot spring towns. It ranks among the “Three Famous Springs of Japan (日本三名泉),” alongside Arima Onsen (有馬温泉) and Kusatsu Onsen (草津温泉). With a history dating back to the Heian period, this quiet town exudes charm, tradition, and rejuvenation. Gero Onsen’s soft, alkaline hot springs, historic alleys, foot baths, and scenic river views make it a tranquil escape for both relaxation and cultural exploration.
            </p>
          </div>
        }
        // paddingSize={10}
      />
  );
}
export default GeroCityOverviewSection;
