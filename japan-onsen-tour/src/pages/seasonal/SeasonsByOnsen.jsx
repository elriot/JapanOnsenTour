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
          />
          <SeasonsOnsenCard
            title="Arima"
						img={arimaImg}
            seasons="Winter/Spring"
            description="Elegant atmosphere, seasonal views"
          />
          <SeasonsOnsenCard
            title="Gero"
						img={geroImg}
            seasons="Spring/Fall"
            description="Riverside blossoms, foliage reflections"
          />
        </ResponsiveRow>
      </Section>
    </div>
  );
}

export default SeasonsByOnsen;
