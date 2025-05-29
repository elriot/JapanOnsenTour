import SubTitle from "./SubTitle";
import Section from "./Section";
import ItemGrid from "./ItemGrid";

function FoodSection({
  className = "",
  title = "Must-Try Local Food",
  items = [],
  paddingSize = 10,
}) {
  return (
    <Section className={`${className} p-${paddingSize}`} >
      <p className={`text-2xl font-semibold pb-10`}>{title}</p>
      <ItemGrid items={items} className={`p-${paddingSize}`}/>
    </Section>
  );
}

export default FoodSection;
