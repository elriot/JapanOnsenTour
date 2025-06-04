function Heading2({children, className = "", center="false"}){
	const extraClass = center === "true" ? "text-center" : "";
	
	return (
		<h2 className={`${className} ${extraClass} text-3xl font-bold pb-15 `}>
			{children}
		</h2>
	);
}

export default Heading2;