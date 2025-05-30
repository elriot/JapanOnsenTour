function ResponsiveRowImage({ src, alt, className = "", rounded = "false" }) {
  return (
    <div className={`w-full md:w-1/2 ${rounded === "true" ? "rounded-lg overflow-hidden" : ""} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover" // object-cover는 fill 유지
      />
    </div>
  );
}
export default ResponsiveRowImage;
