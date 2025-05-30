import Section from "../../components/Section";

function KusatsuIntroSection({ className = "" }) {
  return (
    <Section paddingTop="false" paddingBottom="true" className={className}>
      <p className="page-content-text text-center">
        Renowned for centuries as one of Japan’s most powerful therapeutic
        springs, Kusatsu Onsen (草津温泉) is a historic hot spring town nestled
        in the mountains of Gunma Prefecture (群馬県). Its naturally flowing,
        sulfur-rich waters and crisp alpine air have earned it a place among the
        Three Great Hot Springs of Japan (日本三名泉), alongside Arima (有馬)
        and Gero (下呂). More than just a bath, Kusatsu is an immersive cultural
        experience—where traditional performances, scenic nature, and delicious
        regional cuisine combine to create an unforgettable escape.
      </p>
    </Section>
  );
}

export default KusatsuIntroSection;
