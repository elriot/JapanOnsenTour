import Heading2 from "../components/Heading2";
import ResponsiveRowImage from "../components/ResoponsiveRowImage";
import ResponsiveRow from "../components/ResponsiveRow";
import Section from "../components/Section";
import CompareTable from "../components/CompareTable";
import ryokanImg from "../images/ryokan2.jpg";
import kaisekiImg from "../images/kaiseki.jpg";

function RyokanHotel({ className = "" }) {
	const compareData = [
		{ category: "Atmosphere", ryokan: "Traditional, Japanese-style, tranquil", hotel: "Modern, Western-style, comfortable" },
		{ category: "Room Type", ryokan: "Tatami room", hotel: "Western-style bed" },
		{ category: "Meals", ryokan: "Kaiseki dinner, traditional breakfast", hotel: "Variety of restaurants" },
		{ category: "Service Style", ryokan: "Personalized hospitality", hotel: "Standardized service" },
		{ category: "Included Amenities", ryokan: "All-inclusive", hotel: "Pay-per-use amenities" },
		{ category: "Advantages", ryokan: "Unique cultural experience", hotel: "Convenient, more facilities" },
		{ category: "Disadvantages", ryokan: "Smaller space, limited service", hotel: "Less cultural immersion"}
	];

<CompareTable data={compareData} />
	return (
		<Section className={`${className}`}>
			<Heading2 className="">Ryokan Vs. Hotel</Heading2>
			<ResponsiveRow>
				<ResponsiveRowImage src={ryokanImg} alt="ryokan room" className="rounded-lg"></ResponsiveRowImage>
				<ResponsiveRowImage src={kaisekiImg} alt="kaiseki dinner" className="rounded-lg"></ResponsiveRowImage>
			</ResponsiveRow>
			<div className="pt-10 pb-10">
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
			<CompareTable data={compareData}/>
		</Section>
	);
}

export default RyokanHotel;
