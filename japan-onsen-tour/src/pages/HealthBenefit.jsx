import Heading2 from "../components/Heading2";
import Section from "../components/Section";

function HealthBenefit({className=""}) {
  return (
		<Section className={className}>
			<div className="flex flex-col md:flex-row gap-8 items-start">
				<Heading2 className="text-3xl font-bold md:w-1/2">Health Benefit Of Onsen</Heading2>
				<div className="md:w-1/2">
					<p className="mb-4">
					Onsen have been enjoyed in Japan for centuries as a way to relax and
					heal.
					</p>
					<p className="mb-4">
					If you’re feeling tired physically or mentally, a warm soak in an
					onsen might be just what you need.
					</p>
					<p className="mb-4">
					Being surrounded by quiet nature also helps calm your mind. After
					bathing, your body cools down naturally, which can lead to better,
					deeper sleep.
					</p>
					<p>
					Some onsen are also known for their beauty benefits. For example,
					silica can soften rough or dry skin, and sulfur-rich baths are often
					recommended for people with eczema or skin irritation.
					</p>
				</div>
			</div>
		</Section>
	);
}

export default HealthBenefit;
