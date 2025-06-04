function ImageWithSourceText({
  src,
  alt = "",
  sourceText = "",
  sourceInside = true,
  position = "bottom-right",
  textColor = "white",
  className = "",
  overlay = 0,
  rounded = false,
}) {
  const positionClass = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  }[position];

  const colorClass = textColor === "white" ? "text-white" : "text-black";
  const imgClass = `w-full h-full object-cover ${rounded ? "rounded-lg" : ""}`;

  return sourceInside ? (
    <div className={`relative w-full h-full ${className}`}>
      {overlay > 0 && (
        <div
          className="absolute inset-0 bg-gray-800"
          style={{ opacity: overlay / 100 }}
        />
      )}
      <img src={src} alt={alt} className={imgClass} />
      <div
        className={`absolute ${positionClass} ${colorClass} text-xs md:text-sm bg-black/40 px-2 py-1 rounded`}
      >
        {`Image Source : ${sourceText}`}
      </div>
    </div>
  ) : (
    <div className={`flex flex-col ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-contain ${rounded ? "rounded-lg" : ""}`}
      />
      {sourceText && (
        <p className={`mt-2 text-sm self-end ${colorClass}`}>
          {`Image Source : ${sourceText}`}
        </p>
      )}
    </div>
  );
}
export default ImageWithSourceText;