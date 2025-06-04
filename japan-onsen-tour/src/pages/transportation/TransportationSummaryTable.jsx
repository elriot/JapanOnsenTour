import Heading2 from "../../components/Heading2";
import Section from "../../components/Section";

function TransportationSummaryTable({className = ""}) {

	return (
		<Section className={`${className} pb-50`} paddingBottom="false">
			<p className="text-2xl font-semibold text-center py-10">Summary Table</p>
			<table className="w-full md:w-4s/5 mx-auto table-auto border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Onsen</th>
          <th className="border border-gray-300 px-4 py-2">Closest Major City</th>
          <th className="border border-gray-300 px-4 py-2">Best Train Route</th>
          <th className="border border-gray-300 px-4 py-2">Travel Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="">
            <td className="border border-gray-300 px-4 py-2">{row.onsen}</td>
            <td className="border border-gray-300 px-4 py-2">{row.city}</td>
            <td className="border border-gray-300 px-4 py-2">{row.route}</td>
            <td className="border border-gray-300 px-4 py-2">{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
		</Section>
	);
}
const data = [
  { onsen: "Kusatsu", city: "Tokyo", route: "Shinkansen & Bus or Express Train & Bus", time: "2.5 - 3.5 hrs" },
  { onsen: "Arima", city: "Osaka/Kobe/Kyoto", route: "Hankyu/Kobe Electric Railway", time: "1 - 1.5 hrs" },
  { onsen: "Gero", city: "Nagoya", route: "JR Hida Limited Express", time: "1.5 - 2 hrs" },
];

export default TransportationSummaryTable;