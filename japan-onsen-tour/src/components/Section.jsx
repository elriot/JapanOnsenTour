function Section({children, className="", paddingTop = "true", paddingBottom = "true"}){
	// const topPadding = paddingTop === "true" ? "pt-20" : "";
	const topPadding = paddingTop === "true" ? "pt-20" : "";
	const bottomPadding = paddingBottom === "true" ? "pb-20" : "";
	return (
		<section className={`${className} p-4 ${bottomPadding} ${topPadding}`}>
			{children}
		</section>
	);
}

export default Section;