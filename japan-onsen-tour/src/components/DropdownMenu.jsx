import { Link } from "react-router-dom";

function DropdownMenu({ items, onLinkClick }) {
	return (
		<div className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-gray-300 divide-gray-600 absolute mt-1">
			<ul className="py-2 text-sm text-gray-200">

			{items.map((item, index) => (
				<li key={index}>
				<Link 
					to={item.to} 
					className="block px-4 py-2 hover:bg-gray-100" 
					onClick={onLinkClick}
				>
					{item.label}
				</Link>
				</li>
			))}

			</ul>
		</div>
	);
}
export default DropdownMenu;