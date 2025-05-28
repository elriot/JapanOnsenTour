function ResponsiveRowText({ children, className = "" }) {
  return (
    <div className={`w-full md:w-1/2 ${className}`}>
      {children}
    </div>
  );
}

export default ResponsiveRowText;