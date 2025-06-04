import ImageWithSourceText from "./ImageWithSourceText";

function ItemGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden "
        >
          <div className="relative w-full h-90 md:h-70">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <p className="source-text-inside">
              {`Image Source : ${item.source}`}
            </p>
          </div>
          {/* </div> */}

          {/* 잘 돌아가는 코드 */}
          {/* <img
            src={item.image}
            alt={item.title}
            className="w-full h-90 md:h-60 object-cover"
          /> */}
          {/* <p className="text-xs text-right text-gray-400 px-4 pt-1">
            Image Source: {item.source}
          </p> */}

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
