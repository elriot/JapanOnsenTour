function ResponsiveRow({ children, className = "" }) {
	return (
		<div className={`flex flex-col md:flex-row gap-4 md:gap-10 ${className}`}>
			{children}
		</div>
	);
}

export default ResponsiveRow;