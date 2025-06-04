import FoodSection from "../../components/FoodSection";
import yuamiya from "../../images/gero/gero_food_icecream.jpg";
import yushimian from "../../images/gero/gero_food_yushimaan.jpg";
import nakasa from "../../images/gero/gero_food_nakasa.jpg";

function GeroFoodSection({ className = "" }) {
  const items = [
    {
      image: yuamiya,
      title: "Yuamiya (ゆあみ屋)",
			source: "tabelog.com",
      description:
        "Located near Shirasagi Bridge, this cafe and souvenir shop offers a free foot bath (足湯) and innovative sweets like the Onsen Egg Soft Serve (温玉ソフト)—a creamy blend of soft serve, onsen egg, and crispy rice. Also try the “Warm-Hearted Pudding (暖在心プリン),” steamed gently in onsen heat for a rich, silky texture.",
    },
    {
      image: yushimian,
      title: "Yushima-an (湯島庵)",
			source: "geroonsengo-app.com/store/id2627",
      description:
        "A popular street-side vendor run by a local butcher with over 70 years of history. Grab a few bites of premium Hida Beef (飛騨牛) sushi, especially the grilled selection served on crispy shrimp crackers—perfect for snacking during your stroll.",
    },
    {
      image: nakasa,
      title: "Nakasa (仲佐)",
			source: "tabelog.com",
      description:
        "A Michelin-star soba restaurant just five minutes from the onsen town center. Their delicate soba noodles (蕎麦) and limited-quantity soba dough dumplings (そばがき) are made fresh daily, offering deep nutty aromas and a traditional dining atmosphere.",
    },
  ];

  return (
    <FoodSection
      className={`${className}`}
      title="Must-Try Local Foods"
			description="Gero isn’t just about soaking—it's a destination for indulgent local cuisine as well. Here are a few can't-miss spots:"
      items={items}
    />
  );
}

export default GeroFoodSection;
