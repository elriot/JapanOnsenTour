import OnsenInfoWithTwoTextBoxes from "../../components/OnsenInfoWithTwoTextBoxes";

function LocalToursKusatsu({ className = "" }) {
  return (
    <OnsenInfoWithTwoTextBoxes
      title="Kusatsu Onsen"
      subtitle="Gunma Prefecture"
      description="Where steaming waters meet alpine charm."
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
        Kusatsu Town Walking Tour: Learn the secrets of the Yubatake (hot water
        field) and catch a live yumomi (water-stirring) performance, with a
        local explaining this ancient cooling ritual.
      </li>
      <li>
        ultural Add-Ons: Combine your onsen visit with a yukata rental, a
        soba-making workshop, or a visit to the Netsunoyu theatre.
      </li>
      <li>
        Private Transfers: Hire a guide with a driver for day trips from Tokyo
        or Karuizawa, ensuring a seamless journey.
      </li>
    </ul>

    <h3 className="text-xl font-semibold pt-4">When to Consider a Guide</h3>
    <ul className="list-disc list-inside pl-5 my-2 space-y-1">
      <li>First-timers unsure of onsen etiquette.</li>
      <li>
        Travelers looking for a full-day cultural package, including scenic
        walks and local dining.
      </li>
      <li>Non-Japanese speakers who want help with local menus and history.</li>
    </ul>
  </>
);
export default LocalToursKusatsu;
