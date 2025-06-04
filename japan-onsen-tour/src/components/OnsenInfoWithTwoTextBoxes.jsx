import Section from "./Section";

function OnsenInfoWithTwoTextBoxes({ title, subtitle, description, rightContent, className = "", background = "false"}) {

  const useSection = background === "true";
  const containerClass = useSection ? "bg-gray-50 border-3 border-gray-200 rounded-lg": className;

  const content = (
    <div className={`flex flex-col ${containerClass} w-full md:flex-row`}>
      {/* left section (1/3) */}
      <div className="md:w-1/3 p-5 md:p-10 page-content-text space-y-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>

      {/* right section (2/3) */}
      <div className="md:w-2/3 p-5 md:p-10 md:py-10 pb-10 page-content-text space-y-2">
        {rightContent}
      </div>
    </div>
  );

  return useSection ? (
    <Section className={`${className}`} paddingBottom="false" paddingTop="false">
      {content}
    </Section>
  ) : (
    content
  );
}

export default OnsenInfoWithTwoTextBoxes;