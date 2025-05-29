import Section from "../../components/Section";
import kusatsuImg from "../../images/kusatsu/kusatsu.jpg";
import Heading2 from "../../components/Heading2";
import SubTitle from "../../components/SubTitle";
// import kusatsuImg from "../../images/"

function KusatsuPageTop({ className = "" }) {
  return (
    <div>
      <div
        className={`relative w-full h-[40vh] flex justify-center items-center overflow-hidden ${className}`}
      >
        <img
          src={kusatsuImg}
          alt="hakone onsen"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* <div className="p-5 z-10 text-white flex flex-col items-center text-center space-y-4">
        <p className="text-shadow text-2xl md:text-3xl font-bold">
          A Legendary Healing Spring in the Heart of Gunma
        </p>
        <p className="text-shadow text-4xl md:text-5xl font-semibold">
          
        </p>
      </div> */}
      </div>
      <Section paddingBottom="false">
        <SubTitle className="text-center">
          A Legendary Healing Spring in the Heart of Gunma
        </SubTitle>
        <Heading2 className="text-4xl text-center pb-">
          Kusatsu Onsen 草津温泉
        </Heading2>
      </Section>
    </div>
  );
}

export default KusatsuPageTop;
