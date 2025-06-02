import Section from "./Section";

function TransportationInfoBox( {title, subtitle, description, rightContent, className = ""}) {

	return (
    <Section className={`${className}`} paddingBottom="false" paddingTop="false">
      <div className="flex flex-col bg-gray-50 border-3 border-gray-200 rounded-lg w-full md:flex-row ">
        {/* left section (1/3) */}
        <div className="md:w-1/3 p-10 page-content-text space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{subtitle}</p>
          <p>
            {description}
          </p>
        </div>

        {/* right section (2/4) */}
        <div className="md:w-2/3 px-10 md:py-10 pb-10 page-content-text space-y-2">
          {rightContent}
        </div>
      </div>
    </Section>
	);
}

export default TransportationInfoBox;