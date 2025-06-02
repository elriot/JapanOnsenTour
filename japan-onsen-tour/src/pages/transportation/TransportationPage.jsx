import Section from "../../components/Section";
import TransportationToKusatus from "./TransportationToKusatsu";
import TransportationTop from "./TransportationTop";

function TransportationPage({ className = "" }) {
  return (
    <div className={className}>
      <TransportationTop />
			<TransportationToKusatus/>
    </div>
  );
}

export default TransportationPage;
