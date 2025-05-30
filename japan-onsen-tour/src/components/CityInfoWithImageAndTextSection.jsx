import ResponsiveRow from "./ResponsiveRow";
import Section from "./Section";

function CityInfoWithImageAndText({
  className = "",
  title,
  imageSrc,
  imageAlt = "",
  textContent,
  paddingSize = 10,
}) {
  // const mdPaddingClass = `md:pl-${paddingSize} md:pr-${paddingSize}`;

  return (
    <Section className={`${className} p-${paddingSize}`} >
      <p className={`text-2xl font-semibold pl-${paddingSize} pb-10`}>{title}</p>

      {/* Responsive Row */}
      <ResponsiveRow className={`items-stretch gap-10`}>
        {/* Image */}
        <div className="md:w-2/5 flex rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className={`md:w-3/5`}>{textContent}</div>
      </ResponsiveRow>
    </Section>
  );
}

export default CityInfoWithImageAndText;
