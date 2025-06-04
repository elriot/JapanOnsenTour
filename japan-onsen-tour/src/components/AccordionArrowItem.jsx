import { FiChevronDown } from "react-icons/fi"

function AccordionArrowItem({ title, content, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-300">
      <div
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer py-5 bg-white transition"
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <FiChevronDown className="text-2xl"/>
        </span>
      </div>
      <div className={` overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        <div className="pb-10 bg-white text-gray-700">
          {content}
        </div>
      </div>
    </div>
  );
}

export default AccordionArrowItem;