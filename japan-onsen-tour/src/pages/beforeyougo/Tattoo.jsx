import FullWidthImage from "../../components/FullWidthImage";
import Heading2 from "../../components/Heading2";
import ResponsiveRow from "../../components/ResponsiveRow";
import ResponsiveRowText from "../../components/ResponsiveRowText";
import Section from "../../components/Section";
import tattooImg from "../../images/beforeyougo/tattoo.png";

function Tattoo({ className = "" }) {
  return (
    <Section className={className}>
      <ResponsiveRow className="page-content-text page-top-content">
        <ResponsiveRowText>
          <Heading2>Things to Know About Tattoos</Heading2>
        </ResponsiveRowText>
        <ResponsiveRowText>
          <p className="p-gap">
            If you’re planning to visit a public onsen, it’s important to check
            the facility’s tattoo policy in advance.
          </p>
          <p className="p-gap">
            Traditionally, tattoos were associated with anti-social groups like
            the yakuza, and many public facilities still prohibit them.
          </p>
          <p className="p-gap">
            Some onsen now allow tattoos or provide tattoo cover patches, but
            restrictions are still common, so checking ahead is recommended.
          </p>
        </ResponsiveRowText>
      </ResponsiveRow>
      <FullWidthImage
        src={tattooImg}
        art="Tattoo warning"
        className="pt-5 md:pt-20"
        fullWidth="false"
        sourceText="nagashima-onsen.co.jp"
      />
    </Section>
  );
}

export default Tattoo;
