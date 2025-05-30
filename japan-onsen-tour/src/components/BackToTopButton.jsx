import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // FontAwesome 아이콘 사용 (설치 필요)

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-gradient-to-br from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white`}
    >
      <FaArrowUp className="text-3xl" />
    </button>
  );
}

export default BackToTopButton;
