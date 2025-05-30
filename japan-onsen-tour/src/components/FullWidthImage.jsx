function FullWidthImage({src, alt="", className="", fullWidth = "false"}){
	const extraSettting = fullWidth === "true" ? "w-full h-auto" : "lg:max-w-xl";

	return(
		<div className={`w-full flex justify-center items-center ${className}`}>
			{/* <img src={src} alt={alt} className="w-full h-auto max-h-[80vh] object-contain"/> */}
			<img src={src} alt={alt} className={`object-contain ${extraSettting}`}/>
			{/* <img 
				src={src} 
				alt={alt} 
				className="w-2/3 h-auto max-h-[100vh] object-contain"
			/> */}
		</div>
	);
}

export default FullWidthImage;