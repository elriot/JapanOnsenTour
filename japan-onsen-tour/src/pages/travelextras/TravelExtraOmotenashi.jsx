import Section from "../../components/Section";

function TravelExtraOmotenashi ( { className = "" } ) {
	return (
		<Section className={`${className} bg-gray-200 page-content-text`}>
			<p className="text-2xl p-gap">Cultural Insights: Understanding Omotenashi</p>
			<p className="text-xl pb-10">(The Japanese spirit of hospitality)</p>

			<div>
				<p className="p-gap">After staying at an onsen, you might leave feeling amazed and valued like never before. <span className="italic">Why?</span></p>
				<p className="p-gap">Omotenashi is a Japanese philosophy centered on wholehearted hospitality, and describes how patrons are viewed and treated with the utmost respect. It is the reason businesses offer exceptional service without expecting anything in return. This concept is not taught, but ingrained into Japanese culture in a subtle way.</p>
				<p className="p-gap">Omotenashi can present itself as staff seemingly being able to anticipate what guests need, a warm welcome, or even the way dishes are lovingly presented and prepared. It involves putting the business at the customer’s viewpoint, and through empathy, they are able to go beyond merely meeting expectations–and instead exceed them in every possible way. </p>
			</div>

		</Section>
	)
}

export default TravelExtraOmotenashi;