import onsenImg from "../../images/onsen101/onsen_03.webp";
import Heading2 from "../../components/Heading2";
import Section from "../../components/Section";
import ResponsiveRow from "../../components/ResponsiveRow";
import ResponsiveRowImage from "../../components/ResponsiveRowImage";
import ResponsiveRowText from "../../components/ResponsiveRowText";

function WhatIsOnsen({ className = "" }) {
  return (
    <Section className={`${className}`}>
      <Heading2 className="page-top-content">What is Onsen?</Heading2>

      <ResponsiveRow>
        <ResponsiveRowImage 
					src={onsenImg} 
					alt="onsen" 
					rounded="true" 
					sourceText="travel.rakuten.com"
				/>

        <ResponsiveRowText className="pt-10 md:pt-0">
          <div className="page-content-text mb-10">
            <p className="p-gap">
              Onsen is a cherished part of traditional Japanese culture that
              blends geothermal bathing with rituals of relaxation and wellness.
            </p>
            <p className="p-gap">
              While Japan has approximately 25,000 hot spring sources, only
              around 3,000 meet the official onsen criteria—naturally heated,
              mineral-rich water from deep geothermal springs.
            </p>
            <p className="p-gap">
              Onsen experiences vary widely, ranging from open-air baths
              (roten-buro, 露天風呂) with scenic views to indoor baths (uchiyu,
              内湯) offering privacy and comfort.
            </p>
            <p className="p-gap">
              Traditionally, most onsen were set outdoors, but today, many
              refined inns offer elegant indoor options as well.
            </p>
            <p>
              Depending on your preferences, you can choose between public baths
              for cultural immersion, or private onsen for a more intimate and
              personalized experience.
            </p>
          </div>
        </ResponsiveRowText>
      </ResponsiveRow>
    </Section>
  );
}

export default WhatIsOnsen;
