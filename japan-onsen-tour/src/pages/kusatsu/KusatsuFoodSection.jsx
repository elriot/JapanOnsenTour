import SubTitle from "../../components/SubTitle";
import Section from "../../components/Section";
import ItemGrid from "../../components/ItemGrid";
import manjyuImg from "../../images/manjyu.jpg";

function KusatsuFoodSection({ className = "" }) {
  return (
    <Section paddingBottom="true" className={`${className}`}>
      <SubTitle>Must-Try Local Food</SubTitle>
      <ItemGrid
        items={[
          {
            image: manjyuImg,
            title: "Yubatake Soba (湯畑そば)",
            //   subtitle: 'Delicious soba with onsen flavor',
            description:
              "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
          },
          {
            image: manjyuImg,
            title: "Kusatsu Pudding (草津温泉プリン)",
            description:
              "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
          },
          {
            image: manjyuImg,
            title: "Gunma Pork Shabu-Shabu (しゃぶしゃぶ)",
            description:
              "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
          },
          {
            image: manjyuImg,
            title: "Yunokemuri Soda (湯けむりサイダー)",
            description:
              "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
          },
          {
            image: manjyuImg,
            title: "Onsen Manju (温泉饅頭)",
            description:
              "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
          },
          {
            image: manjyuImg,
            title: "Nureokaki (ぬれおかき)",
            description:
              "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
          },
        ]}
      />
    </Section>
  );
}
export default KusatsuFoodSection;
