function SubTitle({children, className = "", center="false"}){
	const extraClass = center === "true" ? "text-center" : "";
	
	return (
		<p className={`text-2xl font-bold mb-5 ${className} ${extraClass}`}>
			{children}
		</p>
	);
}

export default SubTitle;