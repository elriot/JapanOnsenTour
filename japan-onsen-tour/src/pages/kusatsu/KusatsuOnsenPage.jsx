import SectionSeparator from "../../components/SectionSeperator.jsx";
import SectionSeparatorWave from "../../components/SectionSeperatorWave.jsx";
import KusatsuAttractions from "./KusatsuAttractions.jsx";
import KusatsuCityOverviewSection from "./KusatsuCityOverviewSection.jsx";
import KusatsuFoodSection from "./KusatsuFoodSection.jsx";
import KusatsuIntroSection from "./KusatsuIntroSection.jsx";
import KusatsuTopImage from "./KusatsuTopImage.jsx";
import KusatsuUniqueSpringSection from "./KusatsuUniqueSpringSection.jsx";

function KusatsuOnsenPage({ className = "" }) {
  return (
    <div className={className}>
      <KusatsuTopImage />

      <KusatsuIntroSection />

      <SectionSeparator className="bg-white" fillColorClass="fill-slate-100" />

      <KusatsuCityOverviewSection className="bg-slate-100" />

      <SectionSeparator
        className="bg-slate-100"
        fillColorClass="fill-slate-200"
      />

      <KusatsuUniqueSpringSection className="bg-slate-200" />

      <SectionSeparator
        className="bg-slate-200"
        fillColorClass="fill-slate-300"
      />
      <KusatsuFoodSection className="bg-slate-300" />

      <SectionSeparatorWave
        className="bg-slate-300"
        fillColorClass="fill-slate-700"
      />

      <KusatsuAttractions className="bg-slate-700" />
    </div>
  );
}

export default KusatsuOnsenPage;
