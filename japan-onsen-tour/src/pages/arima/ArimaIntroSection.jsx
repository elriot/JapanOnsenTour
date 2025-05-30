import Section from "../../components/Section";
import Heading2 from "../../components/Heading2";

function ArimaIntroSection({ className = "" }) {
  return (
    <Section paddingTop="true" paddingBottom="true" className={className}>
      <p className="text-center text-2xl mb-4 font-semibold">
        A Historic Hot Spring Retreat Near Kobe
      </p>
      <Heading2 className="text-5xl text-center pb-">
        Arima Onsen 有馬温泉
      </Heading2>
      <p className="page-content-text text-center">
        Tucked into the forested mountains just north of Kobe, Arima Onsen (有馬温泉) is one of Japan’s oldest and most culturally significant hot spring towns. Celebrated for both its therapeutic waters and elegant charm, Arima offers a rare blend of historic atmosphere, refined cuisine, and traditional arts—all within an hour’s reach of the Kansai region's major cities.
      </p>
    </Section>
  );
}

export default ArimaIntroSection;
