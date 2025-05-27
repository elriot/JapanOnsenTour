import Heading2 from "../components/Heading2";

function BeforeYouGo({className=""}){
	return (
		<div className={`p-8 pt-20 pb-20 ${className}`}>
			{/* <h2 className="text-3xl font-bold mt-10 mb-10 text-center">Before You Go</h2> */}
			<Heading2 className="text-center">Before You Go</Heading2>
		</div>
	);
}

export default BeforeYouGo;