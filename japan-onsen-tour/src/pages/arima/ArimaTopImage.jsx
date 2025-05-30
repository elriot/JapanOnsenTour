import arimaImg from "../../images/arima/arima_top.jpeg";
function ArimaTopImage({ className = "" }) {
  return (
    <div
      className={`relative w-full h-[40vh] flex justify-center items-center overflow-hidden ${className}`}
    >
      <img
        src={arimaImg}
        alt="arima onsen"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
}

export default ArimaTopImage;
