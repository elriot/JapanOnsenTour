import Section from "./Section";
import ResponsiveRow from "./ResponsiveRow";
import ImageWithSourceText from "./ImageWithSourceText";

function AttractionsSection({
  className = "",
  title,
  imageSrc,
  imageAlt = "",
  content,
  paddingSize = 5,
	sourceText=""
}) {
  const mdPaddingClass = `md:pl-${paddingSize} md:pr-${paddingSize}`;

  return (
    <Section className={`${className} p-${paddingSize}`}>
      <ResponsiveRow className={`items-stretch gap-4 md:gap-8`}>
        {/* Image (세로 높이 텍스트에 맞춤) */}
        <div className="md:w-2/5 flex rounded-lg overflow-hidden">
				<ImageWithSourceText
					src={imageSrc}
					alt={imageAlt}
					className="w-full h-full object-cover"
					style={{ objectFit: "cover" }} 
					sourceText={sourceText}
				/>
          {/* <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }} // 추가로 CSS 조정 가능
          /> */}
        </div>

        {/* Text */}
        <div className={`md:w-3/5 ${mdPaddingClass}`}>
          {title && (
            <p className={`text-2xl font-semibold pl-${paddingSize} pb-10 text-white`}>
              {title}
            </p>
          )}

          {content}
        </div>
      </ResponsiveRow>
    </Section>
  );
}

export default AttractionsSection;
