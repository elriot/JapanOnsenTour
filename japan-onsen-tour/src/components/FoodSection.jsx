import SubTitle from "./SubTitle"
import Section from "./Section";
import ItemGrid from "./ItemGrid";

function FoodSection({ className = "", title = "Must-Try Local Food", items = [] }) {
  return (
    <Section paddingBottom="true" className={`${className} p-15`}>
      <SubTitle>{title}</SubTitle>
      <ItemGrid items={items} />
    </Section>
  );
}

export default FoodSection;