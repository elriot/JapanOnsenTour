function ResponsiveRowImage({ src, alt, className = "", rounded = "false" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full md:w-1/2 h-auto object-cover ${rounded === "true" ? "rounded-lg" : ""} ${className}`}
    />
  );
}

export default ResponsiveRowImage;