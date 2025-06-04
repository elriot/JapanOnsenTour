import SubTitle from "./SubTitle";
import Section from "./Section";
import ItemGrid from "./ItemGrid";

function FoodSection({
  className = "",
  title = "Must-Try Local Food",
  items = [],
	description="",
  paddingSize = 10,
}) {
  return (
    <Section className={`${className} p-${paddingSize}`} >
      <p className={`text-2xl font-semibold`}>{title}</p>
			<p className="page-content-text py-5">{description}</p>
      <ItemGrid items={items} className={`p-${paddingSize}`}/>
    </Section>
  );
}

export default FoodSection;
