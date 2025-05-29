import Heading2 from "../../components/Heading2";
import ResponsiveRowImage from "../../components/ResoponsiveRowImage";
import ResponsiveRow from "../../components/ResponsiveRow";
import ResponsiveRowText from "../../components/ResponsiveRowText";
import Section from "../../components/Section";
import img from "../../images/kusatsu/attractions.jpg";

function KusatsuAttractions({ className = "" }) {
  const paddingSize = 10;
  const title = "Other Attractions Around Kusatsu";
  return (
    <Section className={`${className} p-${paddingSize}`}>
      <ResponsiveRow>
        <ResponsiveRowImage src={img} art="onsen" />
      </ResponsiveRow>
      <ResponsiveRowText></ResponsiveRowText>
      <p className={`text-2xl font-semibold pb-10`}>{title}</p>
    </Section>
  );
}

export default KusatsuAttractions;
