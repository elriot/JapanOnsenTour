function ItemCard({title, description, className=""}){

	return (
		<div className={`w-full md:w-1/3 p-2 pb-7 ${className}`}>
			<h4 className="text-l font-semibold mb-2 underline underline-offset-4 decoration-gray-300">{title}</h4>
			<p className="p-1">{description}</p>
		</div>
	);
}

export default ItemCard;