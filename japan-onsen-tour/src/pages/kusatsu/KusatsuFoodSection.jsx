import FoodSection from "../../components/FoodSection";
import sobaImg from "../../images/kusatsu/food_soba.jpg";
import puddingImg from "../../images/kusatsu/food_pudding.jpg";
import shabuImg from "../../images/kusatsu/food_shabu.jpg";
import sodaImg from "../../images/kusatsu/food_soda.jpg";
import manjyuImg from "../../images/kusatsu/food_manjyu.jpg";
import nureokakiImg from "../../images/kusatsu/food_nureokaki.jpg";

function KusatsuFoodSection({ className = "" }) {
  return (
    <FoodSection
      className={`${className}`}
      title="Must-Try Local Foods"
			description="Beyond its healing waters, Kusatsu Onsen (草津温泉) offers an impressive variety of local dishes and snacks that reflect the charm and flavor of the Gunma region."
      items={items}
    />
  );
}
const items = [
    {
      image: sobaImg,
      title: "Yubatake Soba (湯畑そば)",
      description:
        "Handmade soba noodles made with mineral-rich onsen water, offering a silky yet firm texture. Best enjoyed with local maitake mushroom tempura (舞茸天ぷら), which adds a crispy and earthy flavor. Many soba shops near Yubatake (湯畑) serve this regional staple.",
			source: "hotpepper.jp"
    },
    {
      image: shabuImg,
      title: "Gunma Pork Shabu-Shabu (しゃぶしゃぶ)",
			source: "yamaki.co.jp/recipe",
      description:
        "This popular hot pot dish features thin slices of high-quality Gunma pork, swished in broth and dipped in tangy sauces. Some restaurants use soba-yu (蕎麦湯)—the milky broth left from cooking soba—as a flavorful base, creating a rich and nourishing combination found only in Kusatsu.",
    },
		{
      image: manjyuImg,
      title: "Onsen Manju (温泉饅頭)",
			source: "chateraise.co.jp",
      description:
        "A beloved hot spring treat, these soft buns are filled with sweet red bean paste. Each shop has its own signature version, including unique options like karinto manju (かりんとう饅頭) with a crispy, sugar-glazed coating, or age-manju (揚げまんじゅう), which is deep-fried for a crunchy exterior.",
    },
		{
      image: puddingImg,
      title: "Kusatsu Pudding (草津温泉プリン)",
			source: "sgs109.com",
      description:
        "This melt-in-your-mouth custard pudding is often steamed using natural onsen heat. It’s luxuriously creamy and packaged in elegant glass jars—making it a popular gift or snack after a soak."
    },
    {
      image: sodaImg,
      title: "Yunokemuri Soda (湯けむりサイダー)",
			source: "tabiiro.jp/otoriyose", 
      description:
        "Translating to “hot spring steam soda,” this fizzy, retro-style drink is refreshing and fun. Sold at many gift shops and vending machines, it’s a quirky way to cool down while exploring town.",
    },
    {
      image: nureokakiImg,
      title: "Nureokaki (ぬれおかき)",
			source: "terakoyahonpo.jp",
      description:
        "A chewy grilled rice cracker served on a stick, often flavored with soy sauce, black pepper, or sweet mayo. Sold at local snack stands, it’s ideal for nibbling on while walking around the onsen street (温泉街).",
    },
  ];
export default KusatsuFoodSection;
