import { useEffect, useState } from "react";
import Background from "../../components/Background";
import { enhancedFetch, _ } from "../../globals";

function Explore() {
  const [data, setData] = useState();

  const getData = async () =>
    navigator.geolocation.getCurrentPosition(async (position) => {
      if (position.coords.latitude && position.coords.longitude) {
        const geoRes = await enhancedFetch(
          "GEO",
          `reverse?q=${position.coords.latitude},${position.coords.longitude}&fields=cd`,
        );

        console.log(geoRes);

        const state = geoRes.results[0].address_components.state;
        const district =
          geoRes.results[0].fields.congressional_districts[0].district_number;

        const congressRes = await enhancedFetch(
          "CONGRESS",
          `member/${state}/${district}`,
        );

        setData(congressRes.members);
      }
    });

  useEffect(() => {
    getData();
  }, []);

  return (
    <Background>
      <div></div>
    </Background>
  );
}

export default Explore;
