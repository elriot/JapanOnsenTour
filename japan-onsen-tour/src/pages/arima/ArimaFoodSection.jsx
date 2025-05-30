import FoodSection from "../../components/FoodSection";

import kobebeef from "../../images/arima/arima_food_kobebeef.jpg";
import manjyu from "../../images/arima/arima_food_manjyu.jpg";
import kinsenyaki from "../../images/arima/arima_food_kinsenyaki.jpg";
import senbei from "../../images/arima/arima_food_senbei.jpg";
import cafe from "../../images/arima/arima_food_cafe.jpg";
import coffee from "../../images/arima/arima_food_coffee.jpg";

function ArimaFoodSection({ className = "" }) {
  const items = [
    {
      image: kobebeef,
      title: "Yubatake Soba (湯畑そば)",
      description:
        "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
    },
    {
      image: manjyu,
      title: "Onsen Manju (湯沖餅)",
      description:
        "Soft buns filled with red bean paste and steamed using hot spring steam. Lightly sweet and perfect for a quick snack while strolling.",
    },
    {
      image: kinsenyaki,
      title: "Kin-sen Yaki (金湯焼き)",
      description:
        "A sponge cake inspired by the golden Kinsen waters. It has a unique salt-sweet balance and is often shaped in traditional motifs.",
    },
    {
      image: senbei,
      title: "Sake and Carbonated Spring Sweets",
      description:
        "Arima is known for its 炭酸煮餅 (tansan senbei), a light and crispy rice cracker made using carbonated spring water.",
    },
    {
      image: cafe,
      title: "Geisha Café Bar Ichii (一系)",
      description:
        "A truly one-of-a-kind dining spot where current geisha (芸者) serve wagashi and matcha in an elegant setting. With live performances on select days, it’s an unforgettable way to engage with Japan’s living arts.",
    },
		{
      image: coffee,
      title: "Café De Beau",
      description:
        "This chic café near Kin no Yu serves gold-spring salted desserts like the “Arima Roll Cake” and 丁波黒豆 (Tanba black bean) tarts. Styled like a European salon with Japanese touches, it’s ideal for afternoon tea.",
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

export default ArimaFoodSection;
