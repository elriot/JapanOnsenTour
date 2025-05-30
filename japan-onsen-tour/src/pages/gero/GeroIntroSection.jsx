import Section from "../../components/Section";
import Heading2 from "../../components/Heading2";

function GeroIntroSection({ className = "" }) {
  return (
    <Section paddingTop="true" paddingBottom="true" className={className}>
      <p className="text-center text-2xl mb-4 font-semibold">
        A Timeless Hot Spring Haven in the Heart of Gifu
      </p>
      <Heading2 className="text-5xl text-center pb-">
        Gero Onsen 下呂温泉
      </Heading2>
      <p className="page-content-text text-center">
        If you're looking for a relaxing escape steeped in tradition, Gero Onsen (下呂温泉) offers one of Japan’s most rejuvenating hot spring experiences. Located in the scenic heart of Gifu Prefecture (岐阜県), this charming town has been celebrated for centuries as one of the “Three Famous Springs of Japan (日本三名泉),” alongside Arima and Kusatsu. Gero combines soothing alkaline waters with cultural richness, picturesque streets, and access to natural wonders—making it a perfect destination for solo travelers, couples, and onsen first-timers alike. Whether you’re here to soak in its famous hot springs or explore the rustic beauty of the surrounding area, Gero Onsen promises a revitalizing journey.
      </p>
    </Section>
  );
}

export default GeroIntroSection;
