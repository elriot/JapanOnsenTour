import ResponsiveRow from "../../components/ResponsiveRow";
import Section from "../../components/Section";
import SeasonsOnsenCard from "../../components/SeasonsOnsenCard";
import kusatuImg from "../../images/seasonal/seasonal_kusatsu.jpeg";
import arimaImg from "../../images/seasonal/seasonal_arima.jpg";
import geroImg from "../../images/seasonal/seasonal_gero.jpg";

function SeasonsByOnsen({ className = "" }) {
  return (
    <div className={className}>
      <Section>
        <p className="text-center text-2xl font-semibold">Seasons By Onsen</p>
        <ResponsiveRow>
          <SeasonsOnsenCard
            title="Kusatsu"
						img={kusatuImg}
            seasons="Winter/Fall"
            description="Snowy charm, fall colors, highland cool"
						sourceText="visit-gunma.jp"
          />
          <SeasonsOnsenCard
            title="Arima"
						img={arimaImg}
            seasons="Winter/Spring"
            description="Elegant atmosphere, seasonal views"
						sourceText="travel.gaijinpot.com"
          />
          <SeasonsOnsenCard
            title="Gero"
						img={geroImg}
            seasons="Spring/Fall"
            description="Riverside blossoms, foliage reflections"
						sourceText="fun-japan.jp"
          />
        </ResponsiveRow>
      </Section>
    </div>
  );
}

export default SeasonsByOnsen;
