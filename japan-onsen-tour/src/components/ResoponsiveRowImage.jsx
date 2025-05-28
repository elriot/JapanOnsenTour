function ResponsiveRowImage({ src, alt, className = "" }) {
	return (
		<img src={src} alt={alt} className={`w-full md:w-1/2 h-auto ${className} p-`} />
	);
}

export default ResponsiveRowImage;