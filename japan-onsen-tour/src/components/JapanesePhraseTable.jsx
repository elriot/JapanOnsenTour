import Section from "./Section";

function JapanesePhraseTable({ className="", intro,  phrases = [] }) {
  return (
		<Section className={`${className} w-full mx-auto lg:w-4/5 page-content-text space-y-5`} paddingBottom="false">
			<p className="page-content-text">{intro}</p>
			<table className="w-full mx-auto table-auto border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2">English meaning</th>
          <th className="border border-gray-300 px-4 py-2">Japanese pronunciation</th>
          <th className="border border-gray-300 px-4 py-2">Written language</th>
        </tr>
      </thead>
      <tbody>
        {phrases.map((row, idx) => (
          <tr key={idx} className="">
            <td className="border border-gray-300 px-4 py-2">{row.english}</td>
            <td className="border border-gray-300 px-4 py-2">{row.romaji}</td>
            <td className="border border-gray-300 px-4 py-2">{row.japanese}</td>
          </tr>
        ))}
      </tbody>
    </table>
		</Section>
  );
}

export default JapanesePhraseTable;