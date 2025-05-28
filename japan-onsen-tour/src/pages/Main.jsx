import Section from "../components/Section";
import hakoneImg from "../images/hakone.jpeg";

function Main() {
    return (
        <Section className="relative h-screen flex justify-center items-center overflow-hidden">
            <img 
                src={hakoneImg} 
                alt="hakone onsen" 
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <h1 className="text-shadow text-white text-4xl md:text-6xl font-bold z-10 text-center">
                Japan Onsen Tour Guide
            </h1>
        </Section>
    );
}

export default Main;