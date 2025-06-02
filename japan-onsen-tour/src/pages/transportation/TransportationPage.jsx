import Section from "../../components/Section";
import TransportationToArima from "./TransportationToArima";
import TransportationToGero from "./TransportationToGero";
import TransportationToKusatus from "./TransportationToKusatsu";
import TransportationTop from "./TransportationTop";

function TransportationPage({ className = "" }) {
  return (
    <div className={className}>
      <TransportationTop />
			<TransportationToKusatus className="pb-10"/>
			<TransportationToArima className="pb-10"/>
			<TransportationToGero/>
    </div>
  );
}

export default TransportationPage;
