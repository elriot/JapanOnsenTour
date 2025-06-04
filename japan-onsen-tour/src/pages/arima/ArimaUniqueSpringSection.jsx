import CityInfoWithImageAndText from "../../components/CityInfoWithImageAndTextSection.jsx";
import kinsenImg from "../../images/arima/arima_unique.jpg";
import ginsenImg from "../../images/arima/arima_unique2.jpg";

function ArimaUniqueSpringSection({ className = "" }) {
  return (
    <div className={`bg-gray-200 pt-10 ${className}`}>
      <CityInfoWithImageAndText
        className={`md:pb-14 pb-10`}
        half="false"
        imageLeft="true"
        title="The Unique Spring of Arima"
        imageSrc={kinsenImg}
        imageAlt="Arima Kinsen"
				sourceText="www.hyoe.co.jp/english/gallery/ "
				paddingSize={0}
        textContent={
          <div className="page-content-text">
            <p className="text-xl p-gap">Kinsen (金湯) – “Golden Spring”</p>
            <div>
              <p>
                <strong>Color:</strong> Reddish-brown
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <strong>Minerals:</strong> Rich in iron and sodium chloride
                  (salt)
                </li>
                <li>
                  <strong>Health Benefits:</strong>
                  <ul className="list-inside list-[circle] pl-5 space-y-1">
                    <li>Eases joint pain, back pain, and neuralgia</li>
                    <li>Improves blood circulation</li>
                    <li>Known to promote skin healing and warmth retention</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        }
      />

      <CityInfoWithImageAndText
        className={`bg-gray-200 ${className} md:pt-0`}
				half="false"
        imageLeft="true"
        title=""
        imageSrc={ginsenImg}
        imageAlt="Arima ginsen image"
				sourceText="www.taikounoyu.com"
        textContent={
          <div className="page-content-text">
            <p className="text-xl p-gap">Ginsen (銀湯) – “Silver Spring”</p>
            <div>
              <p>
                <strong>Color:</strong> Cleaer
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <strong>Minerals:</strong> Carbon dioxide and low levels of radium
                </li>
                <li>
                  <strong>Health Benefits:</strong>
                  <ul className="list-inside list-[circle] pl-5 space-y-1">
                    <li>Enhances cardiovascular health</li>
                    <li>Soothes high blood pressure and swelling</li>
                    <li>Has mild sedative effects for stress relief</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        }
      />
			<p className="page-content-text text-center p-10">
				Many local bathhouses, such as Kin no Yu (金の湯) and Gin no Yu (銀の湯), offer day-use access to both spring types, allowing visitors to enjoy a full-body rejuvenation routine.
			</p>
    </div>
  );
}

export default ArimaUniqueSpringSection;
