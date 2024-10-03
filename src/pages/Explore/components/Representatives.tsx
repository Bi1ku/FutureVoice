import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { enhancedFetch } from "../../../globals";
import "react-loading-skeleton/dist/skeleton.css";

function Representatives() {
  const [data, setData] = useState<any>();

  const getData = async () =>
    navigator.geolocation.getCurrentPosition(async (position) => {
      if (position.coords.latitude && position.coords.longitude) {
        const geoRes = await enhancedFetch(
          "GEO",
          `reverse?q=${position.coords.latitude},${position.coords.longitude}&fields=cd`,
        );

        const state = geoRes.results[0].address_components.state;
        const district =
          geoRes.results[0].fields.congressional_districts[0].district_number;

        const congressRes = await enhancedFetch(
          "CONGRESS",
          `member/${state}/${district}`,
        );

        setData(congressRes.members);
        console.log(data);
      }
    });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-10 px-40 py-16">
        {data ? (
          <>
            {data.map((member: any) => (
              <div className="h-[500px] bg-white shadow-lg">{member.name}</div>
            ))}
          </>
        ) : (
          <>
            {new Array(8).fill(0).map((_, i) => (
              <Skeleton height={500} key={i} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Representatives;
