function ResponsiveRowImageNotStretch({ src, alt, className = "", rounded = false }) {
  return (
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-contain ${rounded ? "rounded-lg" : ""} ${className}`}
      />
    </div>
  );
}

export default ResponsiveRowImageNotStretch;