import ImageWithSourceText from "../../components/ImageWithSourceText";
import kusatsuImg from "../../images/kusatsu/kusatsu.jpg";

function KusatsuTopImage({ className = "" }) {
  return (
    <div>
      <div
        className={`relative w-full h-[40vh] flex justify-center items-center overflow-hidden ${className}`}
      >
        <ImageWithSourceText
          src={kusatsuImg}
          alt="Kusatsu Onsen"
          sourceText="unsplash.com/@phonghai649"
          sourceInside={true}
          position="bottom-right"
          textColor="white"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
    </div>
  );
}

export default KusatsuTopImage;