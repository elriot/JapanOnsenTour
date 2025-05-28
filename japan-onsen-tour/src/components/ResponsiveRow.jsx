function ResponsiveRow({ children, className = "" }) {
	return (
		<div className={`flex flex-col md:flex-row gap-4 md:pr-3 mb-4 ${className}`}>
			{children}
		</div>
	);
}

export default ResponsiveRow;