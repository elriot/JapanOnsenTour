import SectionSeparator from "../../components/SectionSeperator.jsx";
import SectionSeparatorWave from "../../components/SectionSeperatorWave.jsx";
import KusatsuCityOverviewSection from "./KusatsuCityOverviewSection.jsx";
import KusatsuFoodSection from "./KusatsuFoodSection.jsx";
import KusatsuIntroSection from "./KusatsuIntroSection.jsx";
import KusatsuPageTop from "./KusatsuPageTop.jsx";
import KusatsuUniqueSpringSection from "./KusatsuUniqueSpringSection.jsx";

function KusatsuOnsen({ className = "" }) {
  return (
    <div className={className}>
      <KusatsuPageTop/>

      <KusatsuIntroSection />

      <SectionSeparator className="bg-white" fillColorClass="fill-gray-100" />

      <KusatsuCityOverviewSection className="bg-gray-100" />

      <SectionSeparator
        className="bg-gray-100"
        fillColorClass="fill-gray-200"
      />

      <KusatsuUniqueSpringSection className="bg-gray-200" />

      <SectionSeparator
        className="bg-gray-200"
        fillColorClass="fill-gray-300"
      />
      <KusatsuFoodSection className="bg-gray-300" />
      <SectionSeparatorWave
        className="bg-gray-300"
        fillColorClass="fill-gray-500"
      />
    </div>
  );
}

export default KusatsuOnsen;
