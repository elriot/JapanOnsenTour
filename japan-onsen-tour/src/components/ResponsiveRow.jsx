function ResponsiveRow({ children, className = "" }) {
	return (
		<div className={`${className} flex flex-col md:flex-row gap-4 md:gap-10`}>
			{children}
		</div>
	);
}

export default ResponsiveRow;