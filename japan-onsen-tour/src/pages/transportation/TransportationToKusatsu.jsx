import TransportationInfoBox from "../../components/TransfortationInfoBox";

function TransportationToKusatus({ className = "" }) {
	return (
		<TransportationInfoBox
			className={className} 
			title="Kusatsu Onsen"
			subtitle="Gunma Prefecture"
			description="Volcanic waters in the Japanese Alps, just a few hours from Tokyo."
			rightContent={rightContent}
		/>
  );
}

const rightContent = (
	<>
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
	</>
);

export default TransportationToKusatus;
