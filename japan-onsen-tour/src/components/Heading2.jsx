function Heading2({children, className = ""}){

	return (
		<h2 className={`text-3xl font-bold mb-10 ${className}`}>
			{children}
		</h2>
	);
}

export default Heading2;