import ResponsiveRow from "./ResponsiveRow";
import Section from "./Section";

function CityInfoWithImageAndText({
  className = "",
  title,
  imageSrc,
  imageAlt = "",
  textContent,
  paddingSize = 5,
}) {
  const mdPaddingClass = `md:pl-${paddingSize} md:pr-${paddingSize}`;

  return (
    <Section className={className} paddingTop="true" paddingBottom="false">
      <p className={`pl-${paddingSize} text-2xl font-semibold`}>{title}</p>

      {/* Responsive Row */}
      <ResponsiveRow className={`items-stretch p-${paddingSize}`}>
        {/* Image */}
        <div className="md:w-2/5 flex rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className={`md:w-3/5 ${mdPaddingClass}`}>{textContent}</div>
      </ResponsiveRow>
    </Section>
  );
}

export default CityInfoWithImageAndText;
