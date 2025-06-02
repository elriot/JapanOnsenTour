import TransportationInfoBox from "../../components/TransfortationInfoBox";

function TransportationToArima({ className = "" }) {
  return (
    <TransportationInfoBox
      className={className}
      title="Arima Onsen"
      subtitle="Hyogo Prefecture"
      description="Golden springs in a quiet valley — surprisingly close to the city buzz."
      rightContent={rightContent}
    />
  );
}

const rightContent = (
  <>
    <h3 className="text-lg font-bold">From Osaka (Umeda Station):</h3>
    <ol className="list-decimal list-inside pl-5 my-2 space-y-1">
      <li>
        Take the Hankyu or Hanshin Line to Shinkaichi Station
      </li>
      <li>
        Transfer to the Kobe Electric Railway to Arima Onsen Station (Total ~1
        hr 10 min)
      </li>
    </ol>

    <h3 className="text-lg font-bold">From Kobe (Sannomiya Station):</h3>
    <ol className="list-decimal list-inside pl-5 my-2 space-y-1">
      <li>Take the Kobe Municipal Subway to Tanigami Station</li>
      <li>
        Transfer to the Kobe Electric Railway to Arima Onsen (Total ~35 min)
      </li>
    </ol>

		<h3 className="text-lg font-bold">From Kyoto:</h3>
    <ul className="list-decimal list-inside pl-5 my-2 space-y-1">
      <li>
        Take the JR Tokaido-Sanyo Line to Kobe (Sannomiya), then follow the Kobe route (Total ~1 hr 20 min)
      </li>
    </ul>

    <h3 className="font-bold mt-4">Travel Tip:</h3>
    <ul className="list-disc list-inside pl-5 space-y-1">
      <li>Consider the Kansai Thru Pass for unlimited rides on non-JR trains in the region.</li>
      <li>Many ryokan offer free shuttle buses from Arima Station.</li>
    </ul>

    <h3 className="font-bold mt-4">By Car:</h3>
    <ul className="list-disc list-inside pl-5 space-y-1">
      <li>From Osaka/Kyoto/Kobe: Just 1–1.5 hrs. Ideal for day-trippers or weekenders.</li>
    </ul>
  </>
);

export default TransportationToArima;
