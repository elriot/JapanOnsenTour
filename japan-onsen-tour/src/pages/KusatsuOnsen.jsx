import ResponsiveRow from "../components/ResponsiveRow";
import ResponsiveRowText from "../components/ResponsiveRowText";
import Section from "../components/Section";
import SectionSeparator from "../components/SectionSeperator.jsx";
import SubTitle from "../components/SubTitle";
import kusatsuImg from "../images/kusatsu.jpg";

function KusatsuOnsen({ className = "" }) {
  return (
    <div>
      <div
        className={`${className} relative h-screen flex justify-center items-center overflow-hidden`}
      >
        <img
          src={kusatsuImg}
          alt="hakone onsen"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="p-5 z-10 text-white flex flex-col items-center text-center space-y-4">
          <p className="text-shadow text-2xl md:text-3xl font-bold">
            A Legendary Healing Spring in the Heart of Gunma
          </p>
          <p className="text-shadow text-4xl md:text-5xl font-semibold">
            Kusatsu Onsen 草津温泉
          </p>
        </div>
      </div>
      <Section paddingBottom="false">
        <p className="text-center">
          Renowned for centuries as one of Japan’s most powerful therapeutic
          springs, Kusatsu Onsen (草津温泉) is a historic hot spring town
          nestled in the mountains of Gunma Prefecture (群馬県). Its naturally
          flowing, sulfur-rich waters and crisp alpine air have earned it a
          place among the Three Great Hot Springs of Japan (日本三名泉),
          alongside Arima (有馬) and Gero (下呂). More than just a bath, Kusatsu
          is an immersive cultural experience—where traditional performances,
          scenic nature, and delicious regional cuisine combine to create an
          unforgettable escape.
        </p>
      </Section>

	  <SectionSeparator className="bg-white" fillColorClass="fill-gray-100" />
	  <Section paddingBottom="false" className="bg-gray-100">
        <ResponsiveRow>
          <ResponsiveRowText>
            <SubTitle>City Overview</SubTitle>
          </ResponsiveRowText>
          <ResponsiveRowText>
            <p className="mb-4">
              Located on the slopes of Mount Kusatsu-Shirane (草津白根山),
              Kusatsu Onsen (草津温泉) has long been celebrated for its healing
              powers. Historical figures such as Tokugawa Ieyasu (徳川家康) and
              Tokugawa Yoshimune (徳川吉宗) were known to visit. The town’s most
              iconic landmark is Yubatake (湯畑), a steaming “Hot Water Field”
              that showcases Kusatsu’s famously abundant flow rate of 323,000
              liters per minute, the highest in Japan.
            </p>
            <p className="">
              Day and night, the streets are filled with drifting steam, folk
              music, and the rhythmic paddling of the Yumomi (湯もみ)
              performance—a traditional method of cooling hot spring water
              without reducing its therapeutic properties.
            </p>
          </ResponsiveRowText>
        </ResponsiveRow>
      </Section>
      <SectionSeparator className="bg-gray-100" fillColorClass="fill-gray-200" />

      <Section className="bg-gray-200">
        <ResponsiveRow className="">
          <ResponsiveRowText>
            <SubTitle>The Unique Spring of Kusatsu</SubTitle>
          </ResponsiveRowText>
          <ResponsiveRowText>
            <p className="mb-4">
              The waters here are nearly 50°C, enriched with sulfur (硫黄) and
              other minerals. The strong acidity and high temperature are said
              to be effective against a wide range of ailments—leading to the
              local saying that Kusatsu can "cure every illness except
              lovesickness (恋の病以外は治る)."
            </p>
            <p className="mb-4">
              Unlike other onsen towns, the sheer volume and purity of its
              waters mean that Kusatsu rarely needs to reheat or circulate its
              baths. From public bathhouses like Gozanoyu (御座之湯) to open-air
              retreats in Sai-no-Kawara Park (西の河原公園), every soak is a
              deep dive into centuries-old wellness.
            </p>
          </ResponsiveRowText>
        </ResponsiveRow>
      </Section>
    </div>
  );
}

export default KusatsuOnsen;
