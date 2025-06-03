import LocalToursArima from "./LocalToursArima";
import LocalToursGero from "./LocalToursGero";
import LocalToursGuide from "./LocalToursGuide";
import LocalToursKusatsu from "./LocalToursKusatsu";
import LocalToursTop from "./LocatlToursTop";

function LocalToursPage( {className = ""}){
	return(
		<div className={className}>
			<LocalToursTop className=""/>
			<LocalToursKusatsu className="pt-15 md:pt-25 pb-5 md:py-5"/>
			<LocalToursArima className="py-5 md:py-5"/>
			<LocalToursGero className="pt-5 md:pt-5 pb-20"/>
			<LocalToursGuide className="bg-gray-100 pb-20"/>
		</div>
	);
}
export default LocalToursPage;