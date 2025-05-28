import { Link } from "react-router-dom";

function DropdownMenuItem({ to, label, onClick }) {
	return (
		<li>
			<Link
				to={to}
				className="block px-4 py-2 hover:bg-gray-100"
				onClick={onClick}
			>
				{label}
			</Link>
		</li>
	);
}

export default DropdownMenuItem;