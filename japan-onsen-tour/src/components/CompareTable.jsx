function CompareTable({ data, className = "" }) {
	return (
		<table className={`table-auto w-full border-collapse border border-gray-300 ${className}`}>
			<thead>
			<tr className="bg-gray-100">
				<th className="border border-gray-300 px-4 py-2">Category</th>
				<th className="border border-gray-300 px-4 py-2">Ryokan</th>
				<th className="border border-gray-300 px-4 py-2">Hotel</th>
			</tr>
			</thead>
			<tbody>
				{data.map((row, idx) => (
					<tr key={idx} className={row.highlight ? "bg-gray-100" : ""}>
					<td className="border border-gray-300 px-4 py-2 font-bold">{row.category}</td>
					<td className="border border-gray-300 px-4 py-2">{row.ryokan}</td>
					<td className="border border-gray-300 px-4 py-2">{row.hotel}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
export default CompareTable;
