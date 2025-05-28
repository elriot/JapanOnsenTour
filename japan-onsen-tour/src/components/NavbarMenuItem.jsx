import { Link } from "react-router-dom";

function NavbarMenuItem({ to, label, onLinkClick}) {
	return (
		<Link
			to={to}
			className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
			onClick={onLinkClick}
		>
			{label}
		</Link>
	);
}

export default NavbarMenuItem;