import ImageWithSourceText from "../../components/ImageWithSourceText";
import gero from "../../images/gero/gero_top.jpg";
function GeroTopImage({ className = "" }) {
  return (
    <div
      className={`relative w-full h-[40vh] flex justify-center items-center overflow-hidden ${className}`}
    >
			<ImageWithSourceText
				src={gero}
				alt="gero onsen"
				sourceText="japanculturalexpo.bunka.go.jp"
				sourceInside={true}
				position="bottom-right"
				textColor="white"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>
      {/* <img
        src={gero}
        alt="gero onsen"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}
    </div>
  );
}

export default GeroTopImage;
