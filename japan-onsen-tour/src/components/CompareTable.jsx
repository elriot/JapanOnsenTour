function CompareTable({ data, className = "" }) {
	return (
		<table className={`table-auto w-full border-collapse ${className}`}>
			<thead>
			<tr className="bg-gray-300">
				<th className="p-2 border">Category</th>
				<th className="p-2 border">Ryokan</th>
				<th className="p-2 border">Hotel</th>
			</tr>
			</thead>
			<tbody>
				{data.map((row, idx) => (
					<tr key={idx} className={row.highlight ? "bg-gray-100" : ""}>
					<td className="p-2 border font-bold">{row.category}</td>
					<td className="p-2 border">{row.ryokan}</td>
					<td className="p-2 border">{row.hotel}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
export default CompareTable;
