function MainImageWithSourceText({
  src,
  alt = "",
  sourceText = "",
  sourceInside = false,
  position = "bottom-right",
  textColor = "white",
  className = "",
  overlay = 0,
  relativeParent = true, 
}) {
  const positionClass = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  }[position];

  const colorClass = textColor === "white" ? "text-white" : "text-black";

  return (
    <div className={`${relativeParent ? "relative" : ""} flex object-cover overflow-hidden  ${className}`}>
      {overlay > 0 && (
        <div
          className="absolute inset-0 bg-gray-800"
          style={{ opacity: overlay / 100 }}
        ></div>
      )}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {sourceInside ? (
        <div
          className={`source-text-inside ${positionClass} ${colorClass}`}
        >
          {`Image Source : ${sourceText}`}
        </div>
      ) : (
				<div
          className={`self-end ${positionClass} ${colorClass} text-xs md:text-sm bg-black/50 px-2 py-1 rounded`}
        >
        <p className={` mt-2 ${colorClass}`}>{sourceText}</p>
				</div>
      )}
    </div>
  );
}

export default MainImageWithSourceText;