import Section from "../components/Section";
import SubTitle from "../components/SubTitle";
import ResponsiveRow from "../components/ResponsiveRow";
import ResponsiveRowText from "../components/ResponsiveRowText";

function BeforeYouGo({ className = "" }) {
  return (
    <Section paddingBottom="false" className={`${className}`}>
      <ResponsiveRow>
        <ResponsiveRowText>
          <SubTitle>City Overview</SubTitle>
        </ResponsiveRowText>
        <ResponsiveRowText>
          <p className="mb-4">
            Located on the slopes of Mount Kusatsu-Shirane (草津白根山), Kusatsu
            Onsen (草津温泉) has long been celebrated for its healing powers.
            Historical figures such as Tokugawa Ieyasu (徳川家康) and Tokugawa
            Yoshimune (徳川吉宗) were known to visit. The town’s most iconic
            landmark is Yubatake (湯畑), a steaming “Hot Water Field” that
            showcases Kusatsu’s famously abundant flow rate of 323,000 liters
            per minute, the highest in Japan.
          </p>
          <p className="">
            Day and night, the streets are filled with drifting steam, folk
            music, and the rhythmic paddling of the Yumomi (湯もみ)
            performance—a traditional method of cooling hot spring water without
            reducing its therapeutic properties.
          </p>
        </ResponsiveRowText>
      </ResponsiveRow>
    </Section>
  );
}

export default BeforeYouGo;
