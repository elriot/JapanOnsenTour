import ResponsiveRow from "./ResponsiveRow";
import ResponsiveRowImage from "./ResponsiveRowImage";
import ResponsiveRowText from "./ResponsiveRowText";
import AccordionArrow from "./AccordionArrow";

function SeasonalSectionItem({ imageSrc, title, content, accordionItems }) {
  return (
    <ResponsiveRow>
      <ResponsiveRowImage src={imageSrc} rounded="true" />
      <ResponsiveRowText>
        <p className="text-2xl p-gap">{title}</p>
        <p className="page-content-text py-10">{content}</p>
        <div className="page-content-text pb-10 md:pb-20">
          <AccordionArrow items={accordionItems} />
        </div>
      </ResponsiveRowText>
    </ResponsiveRow>
  );
}

export default SeasonalSectionItem;