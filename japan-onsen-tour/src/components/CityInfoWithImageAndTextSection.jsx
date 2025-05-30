import ResponsiveRow from "./ResponsiveRow";
import Section from "./Section";

function CityInfoWithImageAndText({
  className = "",
  title = "",
  imageSrc,
  imageAlt = "",
  textContent,
  paddingSize = 10,
	half = "false",
	imageLeft="true"
}) {
  // const mdPaddingClass = `md:pl-${paddingSize} md:pr-${paddingSize}`;
	const contentWidthRatio1 = half === "true" ? "md:w-1/2" : "md:w-2/5";
	const contentWidthRatio2 = half === "true" ? "md:w-1/2" : "md:w-3/5";
  return (
    <Section className={`p-${paddingSize} ${className} `} paddingTop="false" paddingBottom="false">
			{title !== "" &&
			( 
      	<p className={`text-2xl font-semibold pl-${paddingSize} pb-10`}>{title}</p>
			)}
      {/* Responsive Row */}
      <ResponsiveRow className={`items-stretch gap-10`}>
        {/* Image */}
				{ imageLeft === "true" ? (
					<>
						<div className={`${contentWidthRatio1} flex rounded-lg overflow-hidden`}>
							<img
								src={imageSrc}
								alt={imageAlt}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className={contentWidthRatio2}>{textContent}</div>
					</>
				) : (
					<>
						<div className={contentWidthRatio2}>{textContent}</div>
							<div className={`${contentWidthRatio1} flex rounded-lg overflow-hidden`}>
							<img
								src={imageSrc}
								alt={imageAlt}
								className="w-full h-full object-cover"
							/>
						</div>
					</>
				)
				} 

      </ResponsiveRow>
    </Section>
  );
}

export default CityInfoWithImageAndText;
