function ItemCard({title, description, className=""}){

	return (
		<div className={`w-full md:w-1/3 pb-7 ${className}`}>
			<h4 className="text-l pt-2 font-semibold underline underline-offset-5 decoration-white decoration-3">{title}</h4>
			<p className="pt-2">{description}</p>
		</div>
	);
}

export default ItemCard;