import { Link, useLocation } from "react-router-dom";

function DropdownMenuItem({ to, label, onClick, className="" }) {
		const location = useLocation();
  const currentPath = location.pathname;
	
	return (
		<li>
			<Link
				to={to}
				className={`${className} block px-4 py-2 hover:bg-gray-100`}
				onClick={onClick}
			>
				<p className={`page-content-text ${currentPath.includes(to) ? "currentpage-underline" : ""}`}>{label}</p>
			</Link>
		</li>
	);
}

export default DropdownMenuItem;