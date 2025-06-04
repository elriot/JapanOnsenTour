import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageWithSourceText from "../components/ImageWithSourceText";
import Section from "../components/Section";
import img from "../images/common/onsen_00.jpg";
import MainImageWithSourceText from "../components/MainImageWithSourceText";

function Main() {
  return (
    <>
      <Section className="relative flex flex-col justify-center items-center min-h-[80vh] h-auto overflow-hidden">
        {/* <img
				src={img}
				alt="img"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/> */}
        <MainImageWithSourceText
          src={img}
          alt="img"
          textColor="white"
          sourceText="unsplash.com /@pafuxu (Kouji Tsuru)"
          sourceInside={true}
          className="absolute inset-0"
          overlay={30}
          relativeParent={false}
        />

        <div className="z-1 text-center p-4">
          <h1 className="text-shadow text-white text-4xl md:text-6xl font-bold mb-8">
            Japan Onsen Tour Guide
          </h1>
          <p className="text-white text-xl pb-10">
            A Journey Through Japan’s Top 3 Hot Springs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <Link
            to="/kusatsu"
            className="z-10 bg-black !text-white !font-bold text-lg rounded-full text-center px-8 py-2"
          >
            KUSATSU
          </Link>

          <Link
            to="/arima"
            className="z-10 bg-black !text-white !font-bold text-lg rounded-full text-center px-8 py-2"
          >
            ARIMA
          </Link>

          <Link
            to="/gero"
            className="z-10 bg-black !text-white !font-bold text-lg rounded-full text-center px-8 py-2"
          >
            GERO
          </Link>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default Main;
