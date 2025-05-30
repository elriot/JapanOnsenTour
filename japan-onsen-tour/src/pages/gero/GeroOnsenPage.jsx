import GeroIntroSection from "./GeroIntroSection";
import GeroTopImage from "./GeroTopImage";
import SectionSeparator from "../../components/SectionSeperator";
import SectionSeperatorWave from "../../components/SectionSeperatorWave";
import GeroCityOverviewSection from "./GeroCityOverviewSection";
import GeroUniqueSpringSection from "./GeroUniqueSpringSection";
import GeroFoodSection from "./GeroFoodSection";
import GeroAttractions from "./GeroAttractions";

function GeroOnsenPage({ className = "" }) {
  return (
    <div className={className}>

			<GeroTopImage/>
			<GeroIntroSection/>

			<SectionSeparator className="bg-white" fillColorClass="fill-zinc-100" />
			<GeroCityOverviewSection className="bg-zinc-100"/>

			<SectionSeparator className="bg-zinc-100" fillColorClass="fill-zinc-200" />
			<GeroUniqueSpringSection className="bg-zinc-200"/>

			<SectionSeparator className="bg-zinc-200" fillColorClass="fill-zinc-300" />
			<GeroFoodSection className="bg-zinc-300"/>

			<SectionSeperatorWave className="bg-zinc-300" fillColorClass="fill-zinc-500" />
			<GeroAttractions className="bg-zinc-500"/>
    </div>
  );
}

export default GeroOnsenPage;
