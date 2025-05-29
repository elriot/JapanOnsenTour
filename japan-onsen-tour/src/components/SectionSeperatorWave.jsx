function SectionSeperatorWave({ className = "", fillColorClass = "fill-pink-200"}) {
  return (
    <svg
      className={`w-full ${className}`} // 배경색 및 Tailwind 클래스 적용 가능
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
    >
      <path
        className={fillColorClass} // Tailwind 색상 클래스 적용
        d="M0,30 
          C 240,0 480,60 720,30 
          S 1200,60 1440,30 
          L1440,320 L0,320 Z"
      />
    </svg>
  );
}

export default SectionSeperatorWave;
