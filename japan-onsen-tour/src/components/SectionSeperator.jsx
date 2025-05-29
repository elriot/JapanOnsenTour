function SectionSeparator({ className = '', fillColorClass = 'fill-pink-200' }) {
  return (
    <svg
      className={`w-full ${className}`}   // 배경색 및 Tailwind 클래스 적용 가능
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
    >
      <path
        className={fillColorClass}         // Tailwind 색상 클래스 적용
        d="M0,0 C480,80 960,80 1440,0 L1440,320 L0,320 Z"
      />
    </svg>
  );
}

export default SectionSeparator;