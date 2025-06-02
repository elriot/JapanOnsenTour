import Section from "../../components/Section";

function TransportationToKusatus({ className = "" }) {

	return (
    <Section className={`${className}`}>
      <div className="flex flex-col bg-gray-50 border-3 border-gray-200 rounded-lg w-full md:flex-row ">
        {/* left section (1/3) */}
        <div className="md:w-1/3 p-10 page-content-text space-y-2">
          <h2 className="text-xl font-bold">Kusatsu Onsen</h2>
          <p>Gunma Prefecture</p>
          <p>
            Volcanic waters in the Japanese Alps, just a few hours from Tokyo.
          </p>
        </div>

        {/* right section (2/4) */}
        <div className="md:w-2/3 px-10 md:py-10 pb-10 page-content-text space-y-2">
          <h3 className="text-lg font-bold">From Tokyo:</h3>
          <ol className="list-decimal list-inside pl-5 my-2 space-y-1">
            <li className="">
              Take the JR Hokuriku Shinkansen to Karuizawa (~1 hr 10 min)
            </li>
            <li>Transfer to a local bus to Kusatsu Onsen (~1 hr 20 min)</li>
          </ol>
          <p className="my-2">OR</p>
          <ol className="list-decimal list-inside pl-5 space-y-1">
            <li>
              Take the JR Limited Express Kusatsu from Ueno (~2 hr 30 min)
            </li>
            <li>Transfer to a JR Bus to Kusatsu Onsen (~25 min)</li>
          </ol>
          <h3 className="font-bold mt-4">Travel Tip:</h3>
          <ul className="list-disc list-inside pl-5 space-y-1">
            <li>Use the JR East Pass (Nagano/Niigata) for savings.</li>
            <li>Buses are well-coordinated with train arrivals.</li>
          </ul>
          <h3 className="font-bold mt-4">By Car:</h3>
          <ul className="list-disc list-inside pl-5 space-y-1">
            <li>From Tokyo: ~3.5 hrs. Scenic drive through the mountains!</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default TransportationToKusatus;
