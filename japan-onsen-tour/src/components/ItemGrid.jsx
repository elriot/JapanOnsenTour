import ImageWithSourceText from "./ImageWithSourceText";

function ItemGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
					<ImageWithSourceText
						src={item.image}
            alt={item.title}
            className="w-full h-90 md:h-60 object-cover"
						sourceText={item.source}
						sourceInside={true}
					/>
          {/* <img
            src={item.image}
            alt={item.title}
            className="w-full h-90 md:h-60 object-cover"
          /> */}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-lg text-gray-600">{item.subtitle}</p>
            <p className="text-base text-gray-500 mt-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemGrid;
