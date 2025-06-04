import ImageWithSourceText from "./ImageWithSourceText";

function ResponsiveRowImageNotStretch({
  src,
  alt,
  className = "",
  rounded = false,
  sourceText = "",
  sourceInside = true,
  textColor = "white",
  overlay = 0,
  position = "bottom-right",
}) {
  return (
    <div className={`w-full md:w-1/2 flex justify-center ${className}`}>
      <ImageWithSourceText
        src={src}
        alt={alt}
        sourceText={sourceText}
        sourceInside={sourceInside}
        textColor={textColor}
        overlay={overlay}
        position={position}
        className={`${rounded ? "rounded-lg" : ""} w-full h-auto object-contain`}
      />
    </div>
  );
}

export default ResponsiveRowImageNotStretch;