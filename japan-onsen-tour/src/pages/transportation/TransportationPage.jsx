import Section from "../../components/Section";
import TransportationSummaryTable from "./TransportationSummaryTable";
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
			<TransportationSummaryTable/>
    </div>
  );
}

export default TransportationPage;
