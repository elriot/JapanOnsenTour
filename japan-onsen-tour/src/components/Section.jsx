function Section({children, className="", paddingTop = "true", paddingBottom = "true"}){
	// const topPadding = paddingTop === "true" ? "pt-20" : "";
	const topPadding = paddingTop === "true" ? "pt-15" : "";
	const bottomPadding = paddingBottom === "true" ? "pb-20" : "";
	
	return (
		<section className={`px-5 md:px-10 ${bottomPadding} ${topPadding} ${className}`}>
			{children}
		</section>
	);
}

export default Section;