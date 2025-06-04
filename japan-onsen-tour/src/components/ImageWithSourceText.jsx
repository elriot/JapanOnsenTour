function ImageWithSourceText({
  src,
  alt = "",
  sourceText = "",
  sourceInside = false,
  position = "bottom-right",
  textColor = "white",
  className = "",
  overlay = 0
}) {
  const positionClass = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  }[position];

  const colorClass = textColor === "white" ? "text-white" : "text-black";

  // ✅ 오버레이 방식
  if (sourceInside) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        {overlay > 0 && (
          <div
            className="absolute inset-0 bg-gray-800"
            style={{ opacity: overlay / 100 }}
          ></div>
        )}
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        {sourceText && (
          <div
            className={`absolute ${positionClass} ${colorClass} text-xs md:text-sm bg-black/50 px-2 py-1 rounded`}
          >
            {`Image Source : ${sourceText}`}
          </div>
        )}
      </div>
    );
  }

  // ✅ 일반 수직 배치 방식
  return (
    <div className={`flex flex-col ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
      {sourceText && (
        <p className={`pt-2 mt-2 text-xs md:text-sm text-right ${colorClass}`}>
          {`Image Source : ${sourceText}`}
        </p>
      )}
    </div>
  );
}

export default ImageWithSourceText;