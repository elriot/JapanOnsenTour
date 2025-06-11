import CityInfoWithImageAndText from "../../components/CityInfoWithImageAndTextSection.jsx";
import geroImg from "../../images/gero/gero_unique.jpg";

function GeroUniqueSpringSection({ className = "" }) {
  return (
    <div className={`bg-gray-200 pt-10 ${className}`}>
      <CityInfoWithImageAndText
        className={`md:pb-14 pb-10`}
        half="false"
        imageLeft="true"
        title="The Unique Spring of Arima"
        imageSrc={geroImg}
        imageAlt="gero onsen"
				sourceText="www.diamond-s.co.jp"
        paddingSize={0}
        textContent={
          <div className="page-content-text">
            <p className="font-semibold text-xl p-gap">
              The Health Benefits of Alkaline Water
            </p>
            <p className="p-gap">
              Gero Onsen’s waters are clear, odorless, and mildly
              alkaline—classified as alkaline simple thermal spring
              (アルカリ性単純泉). With a source temperature reaching 84°C, it is
              known for its “beauty-enhancing” properties, helping to exfoliate
              and moisturize the skin.
            </p>
            <p className="p-gap">
              Compared to the mineral-rich iron and radium waters of Arima
              Onsen, Gero’s spring is gentler and ideal for people with
              sensitive skin or for those seeking long, relaxing soaks. The
              silky feel and warm temperature offer both cosmetic and
              therapeutic benefits, particularly for neuralgia and muscle pain.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default GeroUniqueSpringSection;
