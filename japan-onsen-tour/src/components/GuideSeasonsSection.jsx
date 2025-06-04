import Section from "./Section";

function GuideReasonsSection({ title, items = [], className = "" }) {
  return (
    <Section className={`${className} page-content-text`}>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left title section (1/3) */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-semibold">{title}</h2>
        </div>

        {/* Right grid section (2/3) */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {items.map(({ heading, description }, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-1">{heading}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default GuideReasonsSection;
