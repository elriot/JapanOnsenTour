import ResponsiveRow from "../../components/ResponsiveRow.jsx";
import ResponsiveRowText from "../../components/ResponsiveRowText.jsx";
import ResponsiveRowImage from "../../components/ResponsiveRowImage.jsx";
import Section from "../../components/Section.jsx";
import SubTitle from "../../components/SubTitle.jsx";
import overviewImg from "../../images/kusatsu/overview.jpg";
import CityInfoWithImageAndText from "../../components/CityInfoWithImageAndTextSection.jsx";

function KusatsuCityOverviewSection({ className = "" }) {
  return (
      <CityInfoWithImageAndText
        className={`${className} bg-gray-100`}
        title="City Overview"
        imageSrc={overviewImg}
        imageAlt="Kusatsu Onsen"
        textContent={
          <div className="page-content-text">
            <p className="mb-4">
              Located on the slopes of Mount Kusatsu-Shirane (草津白根山),
              Kusatsu Onsen (草津温泉) has long been celebrated for its healing
              powers. Historical figures such as Tokugawa Ieyasu (徳川家康) and
              Tokugawa Yoshimune (徳川吉宗) were known to visit. The town’s most
              iconic landmark is Yubatake (湯畑), a steaming “Hot Water Field”
              that showcases Kusatsu’s famously abundant flow rate of 323,000
              liters per minute, the highest in Japan.
            </p>
            <p>
              Day and night, the streets are filled with drifting steam, folk
              music, and the rhythmic paddling of the Yumomi (湯もみ)
              performance—a traditional method of cooling hot spring water
              without reducing its therapeutic properties.
            </p>
          </div>
        }
        // paddingSize={10}
      />
  );
}
export default KusatsuCityOverviewSection;
