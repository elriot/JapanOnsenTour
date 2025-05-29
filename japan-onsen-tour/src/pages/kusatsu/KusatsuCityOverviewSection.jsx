import ResponsiveRow from "../../components/ResponsiveRow.jsx";
import ResponsiveRowText from "../../components/ResponsiveRowText.jsx";
import ResponsiveRowImage from "../../components/ResoponsiveRowImage.jsx";
import Section from "../../components/Section.jsx";
import SubTitle from "../../components/SubTitle.jsx";
import overviewImg from "../../images/kusatsu/overview.jpg";
import CityInfoWithImageAndText from "../../components/CityInfoWithImageAndText.jsx";

function KusatsuCityOverviewSection({ className = "" }) {
  return (
    <Section paddingBottom="false" className={className}>
      <CityInfoWithImageAndText
        className="bg-gray-100"
        title="City Overview"
        imageSrc={overviewImg}
        imageAlt="Kusatsu Onsen"
        textContent={
          <>
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
          </>
        }
        paddingSize={10}
      />
      {/* <SubTitle className={`pl-${paddingSize}`}>City Overview</SubTitle>
      <ResponsiveRow className={`items-stretch pl-${paddingSize} pr-${paddingSize}`}>
        <div className="md:w-2/5 flex rounded-lg overflow-hidden">
          <img
            src={overviewImg}
            alt="onsen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`md:w-3/5 md:pl-${paddingSize}`}>
          <p className="mb-4" >
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
      </ResponsiveRow> */}
    </Section>
  );
}
export default KusatsuCityOverviewSection;
