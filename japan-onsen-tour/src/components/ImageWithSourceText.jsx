function ImageWithSourceText({
  src,
  alt = "",
  text = "",
  sourceInside = false, // true: 이미지 위에 오버레이, false: 이미지 아래 텍스트
  position = "bottom-right", // overlay가 true일 경우 위치: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  textColor = "white", // "white" or "black"
  className = "",
  overlay = 0,
}) {
  const positionClass = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  }[position];

  const colorClass = textColor === "white" ? "text-white" : "text-black";
  return (
    <div className={`flex object-cover ${className}`}>
      {overlay > 0 && (
        <div
          className="absolute inset-0 bg-gray-800"
          style={{ opacity: overlay / 100 }}
        ></div>
      )}
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {sourceInside ? (
        <div
          className={`absolute ${positionClass} ${colorClass} text-sm bg-black/50 px-2 py-1 rounded`}
        >
          {text}
        </div>
      ) : (
        <p className={`mt-2 ${colorClass}`}>{text}</p>
      )}
    </div>
  );
}

export default ImageWithSourceText;
