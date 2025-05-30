import FoodSection from "../../components/FoodSection";
import sobaImg from "../../images/kusatsu/food_soba.jpg";
import puddingImg from "../../images/kusatsu/food_pudding.jpg";
import shabuImg from "../../images/kusatsu/food_shabu.jpg";
import sodaImg from "../../images/kusatsu/food_soda.jpg";
import manjyuImg from "../../images/kusatsu/food_manjyu.jpg";
import nureokakiImg from "../../images/kusatsu/food_nureokaki.jpg";

function KusatsuFoodSection({ className = "" }) {
  const items = [
    {
      image: sobaImg,
      title: "Yubatake Soba (湯畑そば)",
      description:
        "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
    },
    {
      image: puddingImg,
      title: "Kusatsu Pudding (草津温泉プリン)",
      description:
        "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
    },
    {
      image: shabuImg,
      title: "Gunma Pork Shabu-Shabu (しゃぶしゃぶ)",
      description:
        "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
    },
    {
      image: sodaImg,
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
      image: nureokakiImg,
      title: "Nureokaki (ぬれおかき)",
      description:
        "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
    },
  ];

  return (
    <FoodSection
      className={`${className}`}
      title="Must-Try Local Food"
      items={items}
    />
  );
}

export default KusatsuFoodSection;
