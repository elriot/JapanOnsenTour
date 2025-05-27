function ItemCard({title, description, className=""}){

	return (
		<div className={`w-full md:w-1/3 pb-10 ${className}`}>
			<h4 className="text-xl font-semibold mb-2 underline underline-offset-4 decoration-gray-300">{title}</h4>
			<p>{description}</p>
		</div>
	);
}

export default ItemCard;