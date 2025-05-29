import Section from "../components/Section";
import hakoneImg from "../images/hakone.jpeg";
import Accordion from "../components/Accordion"; // Added import

function Main() {

	return (
		<Section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
			{" "}
			{/* Changed to flex-col for layout */}
			<img
				src={hakoneImg}
				alt="hakone onsen"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>
			<div className="z-10 text-center p-4">
				{" "}
				{/* Wrapper for content on top of image */}
				<h1 className="text-shadow text-white text-4xl md:text-6xl font-bold mb-8">
					{" "}
					{/* Added margin-bottom */}
					Japan Onsen Tour Guide
				</h1>
			</div>
		</Section>
	);
}

export default Main;
