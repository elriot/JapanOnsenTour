import kusatsuImg from "../../images/kusatsu.jpg";

function KusatsuPageTop({ className = "" }) {
  return (
    <div
      className={`${className} relative h-screen flex justify-center items-center overflow-hidden`}
    >
      <img
        src={kusatsuImg}
        alt="hakone onsen"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="p-5 z-10 text-white flex flex-col items-center text-center space-y-4">
        <p className="text-shadow text-2xl md:text-3xl font-bold">
          A Legendary Healing Spring in the Heart of Gunma
        </p>
        <p className="text-shadow text-4xl md:text-5xl font-semibold">
          Kusatsu Onsen 草津温泉
        </p>
      </div>
    </div>
  );
}

export default KusatsuPageTop;
