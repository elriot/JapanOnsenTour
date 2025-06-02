import TransportationInfoBox from "../../components/TransfortationInfoBox";

function TransportationToGero({ className = "" }) {
	return (
		<TransportationInfoBox
			className={className} 
			title="Gero Onsen"
			subtitle="Gifu Prefecture"
			description="Gentle rivers, open-air footbaths, and soft alkaline waters await."
			rightContent={rightContent}
		/>
  );
}

const rightContent = (
	<>
		<h3 className="text-lg font-bold">From Nagoya Station:</h3>
		<ul className="list-decimal list-inside pl-5 my-2 space-y-1">
			<li>
				Take the JR Hida Limited Express on the Takayama Line to Gero Station (~1 hr 45 min)
			</li>
		</ul>

		<h3 className="font-bold mt-4">Travel Tip:</h3>
		<ul className="list-disc list-inside pl-5 space-y-1">
			<li>The JR Hida train offers panoramic windows — grab a window seat!</li>
			<li>Use the JR Pass or JR Central Pass to cover the trip.</li>
		</ul>

		<h3 className="font-bold mt-4">From Tokyo or Osaka:</h3>
		<ul className="list-disc list-inside pl-5 space-y-1">
			<li>Reach Nagoya Station by Shinkansen, then transfer to the Hida Express</li>
		</ul>

		<h3 className="font-bold mt-4">By Car:</h3>
		<ul className="list-disc list-inside pl-5 space-y-1">
			<li>From Nagoya: ~2 hrs via Chuo Expressway</li>
			<li>From Takayama: ~1 hr — perfect for adding Gero to a Hida road trip.</li>
		</ul>
	</>
);

export default TransportationToGero;
