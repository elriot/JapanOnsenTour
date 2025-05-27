import Heading2 from "../components/Heading2";
import ResponsiveRowImage from "../components/ResoponsiveRowImage";
import ResponsiveRow from "../components/ResponsiveRow";
import Section from "../components/Section";
import ryokanImg from "../images/ryokan2.jpg";
import kaisekiImg from "../images/kaiseki.jpg";

function RyokanHotel({ className = "" }) {
  return (
    <Section className={`${className}`}>
		<Heading2 center="true">Ryokan Vs. Hotel</Heading2>
		<ResponsiveRow>
			<ResponsiveRowImage src={ryokanImg} alt="ryokan room" className="rounded-lg"></ResponsiveRowImage>
			<ResponsiveRowImage src={kaisekiImg} alt="kaiseki dinner" className="rounded-lg"></ResponsiveRowImage>
		</ResponsiveRow>
		<div className="pt-10">
			<p className="mb-4">
				A ryokan is a traditional Japanese inn where guests can immerse themselves in cultural elements such as tatami flooring, yukata robes, and multi-course kaiseki meals. Many ryokan are also connected to onsen, offering a unique opportunity to relax in natural hot springs as part of your stay. The overall atmosphere tends to be serene, personal, and rooted in Japanese hospitality.
			</p>
			<p className="mb-4">
				In contrast, hotels provide a more familiar, Western-style experience, with comfortable beds, private bathrooms, and convenient services. Hotels often offer larger rooms and greater flexibility in location, especially within urban areas.
			</p>
			<p className="mb-4">
				Ultimately, your choice between a ryokan and a hotel depends on your travel goals and personal preferences.
			</p>
		</div>
    </Section>
  );
}

export default RyokanHotel;
