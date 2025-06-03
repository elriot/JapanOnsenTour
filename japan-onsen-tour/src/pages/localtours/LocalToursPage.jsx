import PageTopSectionWithImage from "../../components/PageTopSectionWithImage";
import image from "../../images/localtours/tours_top.jpg";

function LocalToursPage( {className = ""}){
	return(
		<PageTopSectionWithImage
			title="Booking a Private Tour or Local Guides"
			content="Japan’s famous hot spring towns are more than scenic backdrops, they’re a tapestry of tradition, local legends, and age-old rituals. While it’s possible to explore on your own, a knowledgeable local guide can transform a soak into a story. Whether you’re navigating complex Onsen etiquette, discovering hidden bathhouses, or weaving through atmospheric alleys, a guide adds color and context to your journey."
			img={image}
			alt="Japan traditional market image"
			className={`${className} md:max-h-[800px] object-cover object-contain`}
		/>
	);
}
export default LocalToursPage;