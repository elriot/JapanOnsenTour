import Footer from "../components/Footer";
import Section from "../components/Section";
import img from "../images/common/onsen_00.jpg";

function Main() {

	return (
		<>
		<Section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
			<img
				src={img}
				alt="img"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>

			<div className="absolute inset-0 bg-gray-800 opacity-50 z-10"></div>

			<div className="z-10 text-center p-4">
				<h1 className="text-shadow text-white text-4xl md:text-6xl font-bold mb-8">
					Japan Onsen Tour Guide
				</h1>
			</div>
		</Section>
		<Footer/>
		</>
	);
}

export default Main;
