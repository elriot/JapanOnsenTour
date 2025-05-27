function Section({children, className=""}){
	return (
		<section className={`p-8 pt-20 pb-20 ${className}`}>
			{children}
		</section>
	);
}

export default Section;