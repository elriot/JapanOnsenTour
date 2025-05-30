import gero from "../../images/gero/gero_top.jpg";
function GeroTopImage({ className = "" }) {
  return (
    <div
      className={`relative w-full h-[40vh] flex justify-center items-center overflow-hidden ${className}`}
    >
      <img
        src={gero}
        alt="gero onsen"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
}

export default GeroTopImage;
