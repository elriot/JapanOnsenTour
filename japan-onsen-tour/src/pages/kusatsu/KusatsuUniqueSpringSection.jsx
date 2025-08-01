import CityInfoWithImageAndText from "../../components/CityInfoWithImageAndTextSection.jsx";
import SubTitle from "../../components/SubTitle.jsx";
import img from "../../images/kusatsu/onsen.jpg";

function KusatsuUniqueSpringSection({ className = "" }) {
  return (
    <CityInfoWithImageAndText
      className={`bg-gray-200 ${className}`}
      title="The Unique Spring of Kusatsu"
      imageSrc={img}
      imageAlt="Kusatsu Onsen"
			sourceText="setsulog.jp/kusatus-onsen-yubatake-sensui"
      textContent={
        <div className="page-content-text">
					<p className="font-semibold text-2xl mb-4">Sulfur-Rich, High-Temperature Waters</p>
          <p className="page-content-text mb-4">
            Located on the slopes of Mount Kusatsu-Shirane (草津白根山), Kusatsu
            Onsen (草津温泉) has long been celebrated for its healing powers.
            Historical figures such as Tokugawa Ieyasu (徳川家康) and Tokugawa
            Yoshimune (徳川吉宗) were known to visit. The town’s most iconic
            landmark is Yubatake (湯畑), a steaming “Hot Water Field” that
            showcases Kusatsu’s famously abundant flow rate of 323,000 liters
            per minute, the highest in Japan.
          </p>
          <p>
            Day and night, the streets are filled with drifting steam, folk
            music, and the rhythmic paddling of the Yumomi (湯もみ)
            performance—a traditional method of cooling hot spring water without
            reducing its therapeutic properties.
          </p>
        </div>
      }
    />
  );
}

export default KusatsuUniqueSpringSection;
