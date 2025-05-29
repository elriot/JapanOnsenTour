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
    <Section className={`${className} p-${paddingSize}`} >
      <p className={`text-2xl font-semibold pl-${paddingSize} pb-10`}>{title}</p>

      {/* Responsive Row */}
      <ResponsiveRow className={`items-stretch`}>
        {/* Image */}
        <div className="md:w-2/1 flex rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className={`md:w-2/1 ${mdPaddingClass}`}>{textContent}</div>
      </ResponsiveRow>
    </Section>
  );
}

export default CityInfoWithImageAndText;
