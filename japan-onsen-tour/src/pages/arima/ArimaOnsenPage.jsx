import SectionSeparator from "../../components/SectionSeperator";
import SectionSeperatorWave from "../../components/SectionSeperatorWave";
import ArimaAttractions from "./ArimaAttractions";
import ArimaCityOverviewSection from "./ArimaCityOverviewSection";
import ArimaFoodSection from "./ArimaFoodSection";
import ArimaIntroSection from "./ArimaIntroSection";
import ArimaTopImage from "./ArimaTopImage";
import ArimaUniqueSpringSection from "./ArimaUniqueSpringSection";

function ArimaOnsenPage({ className = "" }) {
  return (
    <div className={className}>
			<ArimaTopImage/>
			<ArimaIntroSection/>

			<SectionSeparator className="bg-white" fillColorClass="fill-stone-100" />
			<ArimaCityOverviewSection className="bg-stone-100"/>

			<SectionSeparator className="bg-stone-100" fillColorClass="fill-stone-200" />
			<ArimaUniqueSpringSection className="bg-stone-200"/>

			<SectionSeparator className="bg-stone-200" fillColorClass="fill-stone-300" />
			<ArimaFoodSection className="bg-stone-300"/>

			<SectionSeperatorWave className="bg-stone-300" fillColorClass="fill-stone-700" />
			<ArimaAttractions className="bg-stone-700"/>
    </div>
  );
}

export default ArimaOnsenPage;
