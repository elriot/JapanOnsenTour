import Section from "../components/Section";
import hakoneImg from "../images/hakone.jpeg";
import Accordion from '../components/Accordion'; // Added import

function Main() {
    // Added sample data for Accordion
    const accordionItems = [
      { title: 'What is an Onsen?', content: 'An Onsen is a Japanese hot spring. The term also extends to bathing facilities and traditional inns around them. As a volcanically active country, Japan has thousands of onsen scattered along its length and breadth.' },
      { title: 'Health Benefits', content: 'Onsen waters are believed to have various health benefits due to their mineral content. Different types of minerals provide different health effects, and many onsen are famous for their specific mineral compositions.' },
      { title: 'Basic Etiquette', content: (<div><h3>Important Rules</h3><p>Before entering the onsen, you must wash your body thoroughly. Towels are not allowed in the bath water. Be quiet and respectful of other bathers.</p></div>) }
    ];

    return (
        <Section className="relative h-screen flex flex-col justify-center items-center overflow-hidden"> {/* Changed to flex-col for layout */}
            <img 
                src={hakoneImg} 
                alt="hakone onsen" 
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="z-10 text-center p-4"> {/* Wrapper for content on top of image */}
                <h1 className="text-shadow text-white text-4xl md:text-6xl font-bold mb-8"> {/* Added margin-bottom */}
                    Japan Onsen Tour Guide
                </h1>

                {/* Added Accordion component */}
                {/* <div style={{ maxWidth: '900px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '8px' }}>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Discover More</h2>
                    <Accordion items={accordionItems} />
                </div> */}
            </div>
        </Section>
    );
}

export default Main;