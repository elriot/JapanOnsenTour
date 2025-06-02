import Heading2 from "../../components/Heading2";
import ResponsiveRow from "../../components/ResponsiveRow";
import ResponsiveRowImage from "../../components/ResponsiveRowImage";
import ResponsiveRowImageNotStretch from "../../components/ResponsiveRowImage\bNotStretch";
import ResponsiveRowText from "../../components/ResponsiveRowText";
import Section from "../../components/Section";
import topImage from "../../images/seasonal/seasonal_top.jpg";

function SeasonalTop({ className = "" }) {
  return (
    <div className={className}>
      <ResponsiveRow>
        <ResponsiveRowText className="p-4 py-20 md:px-10 md:py-60">
          <Heading2>Seasonal Highlights Across Japan’s Onsen Towns</Heading2>
          <p className="page-content-text">
            Japan’s Onsen are not just places to relax but also a way to
            reconnect with nature in changing seasons. Each season offers a
            unique experience, with winter creating a dramatic contrast against
            snow and spring and fall providing picturesque backdrops.
          </p>
        </ResponsiveRowText>
				<ResponsiveRowImage src={topImage} alt="hot onsen image"/>
      </ResponsiveRow>
    </div>
  );
}

export default SeasonalTop;
