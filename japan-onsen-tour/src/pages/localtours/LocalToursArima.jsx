import OnsenInfoWithTwoTextBoxes from "../../components/OnsenInfoWithTwoTextBoxes";

function LocalToursArima({ className = "" }) {
  return (
    <OnsenInfoWithTwoTextBoxes
      title="Arima Onsen"
      subtitle="Hyogo Prefecture"
      description="Ancient springs tucked in a tranquil valley near Kobe."
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
        Arima Onsen Gold & Silver Spring Tour: Visit both the legendary golden
        (kin-sen) and silver (gin-sen) springs with a bilingual guide who shares
        their healing properties and legends.
      </li>
      <li>
        Cultural Workshops: Add a ceramic painting or sake tasting session with
        a local artisan.
      </li>
      <li>
        Luxury Chauffeured Tours: Private transport from Osaka or Kyoto with a
        guide who arranges exclusive access to boutique bathhouses.
      </li>
    </ul>

    <h3 className="text-xl font-semibold pt-4">When to Consider a Guide</h3>
    <ul className="list-disc list-inside pl-5 my-2 space-y-1">
      <li>For a luxury day trip from Kyoto, Osaka, or Kobe.</li>
      <li>
        To access exclusive ryokan or arrange private bathhouse experiences.
      </li>
      <li>
        When planning a couple’s retreat with bespoke dining or cultural
        add-ons.
      </li>
    </ul>
  </>
);
export default LocalToursArima;
