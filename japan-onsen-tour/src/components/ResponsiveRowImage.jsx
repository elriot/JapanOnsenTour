import ImageWithSourceText from "./ImageWithSourceText";

function ResponsiveRowImage({ src, alt, className = "", rounded = "false", sourceText="" }) {
  return (
    <div className={`w-full md:w-1/2 ${rounded === "true" ? "rounded-lg overflow-hidden" : ""} ${className}`}>
			<ImageWithSourceText
				src={src} 
        alt={alt} 
        className="w-full h-full object-cover" // object-cover는 fill 유지
				sourceText={sourceText}
				sourceInside={true}
			/>

      {/* <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover" // object-cover는 fill 유지
				sourceText={sourceText}
      /> */}
    </div>
  );
}
export default ResponsiveRowImage;
