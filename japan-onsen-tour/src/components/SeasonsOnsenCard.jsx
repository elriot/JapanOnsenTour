function SeasonsOnsenCard({
  title,
  seasons,
  img,
  description,
  className = "",
  sourceText = "",
}) {
  return (
    <div className={`w-full md:w-1/3 pt-20 py-15 text-center ${className}`}>
			
      <div className="relative w-full h-90 md:h-70">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <p className="source-text-inside">{`Image Source : ${sourceText}`}</p>
      </div>

      <p className="text-2xl font-medium pt-10">{title}</p>
      <p className="page-content-text pt-5">{seasons}</p>
      <p className="page-content-text pt-5">{description} </p>
    </div>
  );
}

export default SeasonsOnsenCard;
