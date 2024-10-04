import { useEffect, useState } from "react";
import Background from "../../components/Background";
import { enhancedFetch } from "../../globals";
import Representatives from "./components/Representatives";
import Title from "./components/Title";

function Explore() {
  const [representatives, setRepresentatives] = useState<any>();
  const [state, setState] = useState("");
  const [district, setDistrict] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      if (position.coords.latitude && position.coords.longitude) {
        const geoRes = await enhancedFetch(
          "GEO",
          `reverse?q=${position.coords.latitude},${position.coords.longitude}&fields=cd`,
        );

        const state = geoRes.results[0].address_components.state;
        const district =
          geoRes.results[0].fields.congressional_districts[0].district_number;

        setState(state);
        setDistrict(district);

        const congressRes = await enhancedFetch(
          "CONGRESS",
          `member/${state}/${district}`,
        );

        setRepresentatives(congressRes.members);
        console.log(representatives);
      }
    });
  }, [state, district]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Background>
      <div className="px-44 py-16 relative">
        <Title state={state} district={district} />
        <Representatives representatives={representatives} />
      </div>
    </Background>
  );
}

export default Explore;
