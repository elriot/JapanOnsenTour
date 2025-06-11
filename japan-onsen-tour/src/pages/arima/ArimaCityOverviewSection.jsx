import overviewImg from "../../images/arima/arima_overview.jpg";
import CityInfoWithImageAndText from "../../components/CityInfoWithImageAndTextSection.jsx";

function ArimaCityOverviewSection({ className = "" }) {
  return (
      <CityInfoWithImageAndText
        className={`${className} bg-gray-100`}
        title="City Overview"
        imageSrc={overviewImg}
        imageAlt="Arima Onsen"
				sourceText="mimihan.tw/tag/有馬溫泉"
        textContent={
          <div className="page-content-text">
            <p className="p-gap">
              Arima Onsen sits in Kobe City’s Kita Ward (北区) and is renowned as one of the “Nihon Sanmeisen (日本三名泉)”—Japan’s Three Famous Springs—alongside Kusatsu Onsen (草津温泉) and Gero Onsen (下呂温泉). It is also part of the “Nihon Sankōyu (日本三古湯)”, or Three Ancient Hot Springs of Japan, thanks to over a millennium of recorded history dating back to the 7th century.
            </p>
            <p className="p-gap">
              The town's rustic wooden inns, cobbled lanes, and gentle river views reflect a bygone era. Toyotomi Hideyoshi (豊臣秀吉), one of Japan’s most prominent feudal lords, was so fond of the area that he frequently visited for healing and leisure—his legacy still lingers in the town's architecture, monuments, and festivals.
            </p>
            <p className="p-gap">
              Whether you're seeking wellness, cultural immersion, or a peaceful escape, Arima embodies the slow travel spirit with elegance and warmth.
            </p>
          </div>
        }
        // paddingSize={10}
      />
  );
}
export default ArimaCityOverviewSection;
