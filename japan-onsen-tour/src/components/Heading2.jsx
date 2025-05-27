function Heading2({children, className = "", center="false"}){
	const extraClass = center === "true" ? "text-center" : ""
	return (
		<h2 className={`text-3xl font-bold mb-10 ${className} ${extraClass}`}>
			{children}
		</h2>
	);
}

export default Heading2;