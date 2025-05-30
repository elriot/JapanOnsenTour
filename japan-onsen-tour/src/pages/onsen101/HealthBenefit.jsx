import Heading2 from "../../components/Heading2";
import ResponsiveRow from "../../components/ResponsiveRow";
import Section from "../../components/Section";
import img from "../../images/onsen101/onsen_water.jpg";

function HealthBenefit({ className = "" }) {
  return (
    <Section className={`${className} md:px-40`}>
      <Heading2 className="md:w-1/2">Health Benefit Of Onsen</Heading2>
			<div className="pb-10 md:pb-20 flex justify-center">
				<img src={img} alt="onsen water" className="rounded-lg w-full max-w-xl md:max-w-4xl"/>
			</div>
      <div className="page-content-text md:pb-20">
        <p className="p-gap">
          Onsen have been enjoyed in Japan for centuries as a way to relax and
          heal.
        </p>
        <p className="p-gap">
          If you’re feeling tired physically or mentally, a warm soak in an
          onsen might be just what you need.
        </p>
        <p className="p-gap">
          Being surrounded by quiet nature also helps calm your mind. After
          bathing, your body cools down naturally, which can lead to better,
          deeper sleep.
        </p>
        <p>
          Some onsen are also known for their beauty benefits. For example,
          silica can soften rough or dry skin, and sulfur-rich baths are often
          recommended for people with eczema or skin irritation.
        </p>
      </div>
    </Section>
  );
}

export default HealthBenefit;
