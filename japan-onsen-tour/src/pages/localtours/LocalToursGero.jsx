import OnsenInfoWithTwoTextBoxes from "../../components/OnsenInfoWithTwoTextBoxes";

function LocalToursGero({ className = "" }) {
  return (
    <OnsenInfoWithTwoTextBoxes
      title="Gero Onsen"
      subtitle="Gifu Prefecture"
      description="River views, open-air baths, and laid-back vibes."
      rightContent={rightContent}
      className={`${className}`}
			background="true"
    />
  );
}

const rightContent = (
  <>
    <h3 className="text-xl font-semibold">Guided Experiences</h3>
    <ul className="list-disc list-inside pl-5 my-2 space-y-1">
      <li>
        Town Heritage & Footbath Walk: A local guide takes you through Gero’s
        historic town center, pointing out footbaths, hidden alleyways, and
        artisan shops.
      </li>
      <li>
        Hands-On Craft Workshops: Combine your soak with a pottery or wood
        carving class guided by a master craftsman.
      </li>
      <li>
        Panoramic Hida Express Tour: Board the JR Hida train with a guide who
        narrates the scenic journey from Nagoya or Takayama.
      </li>
    </ul>

    <h3 className="text-xl font-semibold pt-4">When to Consider a Guide</h3>
    <ul className="list-disc list-inside pl-5 my-2 space-y-1">
      <li>For a custom day trip from Nagoya or Takayama.</li>
      <li>
        If you’re interested in local crafts and traditions beyond just the
        baths.
      </li>
      <li>
        Families or groups wanting a private, easy-paced introduction to Gero’s
        charms.
      </li>
    </ul>
  </>
);
export default LocalToursGero;
