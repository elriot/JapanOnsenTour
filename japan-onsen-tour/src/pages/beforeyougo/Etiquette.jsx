import Heading2 from "../../components/Heading2";
import ResponsiveRowImage from "../../components/ResponsiveRowImage";
import ResponsiveRow from "../../components/ResponsiveRow";
import ResponsiveRowText from "../../components/ResponsiveRowText";
import Section from "../../components/Section";
import mannerImg from "../../images/beforeyougo/manner.jpg";
import ResponsiveRowImageNotStretch from "../../components/ResponsiveRowImage\bNotStretch";

function Etiquette({ className = "" }) {
  return (
    <Section className={` ${className}`} paddingTop="false">
      <ResponsiveRow className="page-top-content">
        <ResponsiveRowText>
          <div className="page-content-text pt-12">
            <Heading2 className="text-center pb-10">Onsen Etiquette</Heading2>
            <p className="p-gap">
              If you’re familiar with North American hot springs, there are a
              few important differences to keep in mind when visiting an onsen
              in Japan.
            </p>
            <p className="p-gap">
              First, while it’s also expected to wash your body thoroughly
              before entering the bath, Japanese onsen culture is strictly about
              bathing, not swimming. Swimsuits and other swim gear are not
              allowed, even in public baths. You’re also not permitted to bring
              your bath towel into the water, and activities like swimming or
              diving are strictly prohibited.
            </p>
            <p className="p-gap">
              In most public onsen, bathing areas are separated by gender, but
              some facilities alternate the men’s and women’s baths based on
              time of day, as part of a philosophy related to yin and yang
              balance. Be sure to check the Noren (暖簾, curtain sign) at the
              entrance to confirm the current gender designation before
              entering. Blue noren indicates the men’s bath, while red means the
              women’s bath.
            </p>
          </div>
        </ResponsiveRowText>
        <ResponsiveRowImageNotStretch
          className="page-top-content"
          src={mannerImg}
          alt="onsen manner image"
					sourceText="Kashiwaya Magazine (kashiwaya.org)"
					sourceInside={false}
					textColor="true"
        />
      </ResponsiveRow>
    </Section>
  );
}

export default Etiquette;
