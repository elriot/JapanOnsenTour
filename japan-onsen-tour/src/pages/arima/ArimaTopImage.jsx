import ImageWithSourceText from "../../components/ImageWithSourceText";
import arimaImg from "../../images/arima/arima_top.jpeg";
function ArimaTopImage({ className = "" }) {
  return (
    <div
      className={`relative w-full h-[40vh] flex justify-center items-center overflow-hidden ${className}`}
    >
			<ImageWithSourceText
				src={arimaImg}
				alt="arima onsen"
				sourceText="haveagood.holiday"
				sourceInside={true}
				position="bottom-right"
				textColor="white"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>
      {/* <img
        src={arimaImg}
        alt="arima onsen"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}
    </div>
  );
}

export default ArimaTopImage;
