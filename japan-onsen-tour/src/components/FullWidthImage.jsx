import ImageWithSourceText from "./ImageWithSourceText";

function FullWidthImage({
  src,
  alt = "",
  className = "",
  fullWidth = "false",
  sourceText = "",
  sourceInside = false,
  textColor = "black",
  overlay = 0,
  position = "bottom-right"
}) {
  const extraSetting = fullWidth === "true" ? "w-full h-auto" : "lg:max-w-xl";

  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <ImageWithSourceText
        src={src}
        alt={alt}
        className={`object-contain ${extraSetting}`}
        sourceText={sourceText}
        sourceInside={sourceInside}
        textColor={textColor}
        overlay={overlay}
        position={position}
      />
    </div>
  );
}

export default FullWidthImage;