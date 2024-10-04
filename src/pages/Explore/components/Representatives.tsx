import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { enhancedFetch } from "../../../globals";
import "react-loading-skeleton/dist/skeleton.css";

function Representatives() {
  const [data, setData] = useState<any>();

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

        const congressRes = await enhancedFetch(
          "CONGRESS",
          `member/${state}/${district}`,
        );

        setData(congressRes.members);
        console.log(data);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-44 py-16">
      <div className="max-w-xl">
        <h3 className="text-5xl font-semibold text-[#1D3557]">EXPLORE</h3>
        <span className="text-xl">
          Your current and previous hardworking representatives, who constantly
          advocate for you and your family.
        </span>
      </div>

      <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4 px-16">
        {data ? (
          <>
            {data
              .sort(
                (a: any, b: any) =>
                  b.terms.item[0].startYear - a.terms.item[0].startYear,
              )
              .map((member: any, i: number) => (
                <li
                  key={member.name}
                  className="bg-[#F1FAEE] shadow-lg rounded-2xl"
                >
                  <img
                    alt={member.name}
                    src={member.depiction.imageUrl}
                    className="aspect-[14/13] w-full rounded-t-2xl object-cover"
                  />
                  <div className="px-5 pb-3">
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
                      {member.name}
                    </h3>

                    <p
                      className={`text-base leading-7 ${member.partyName === "Democratic" ? "text-[#457B9D]" : "text-[#E63946]"} font-semibold`}
                    >
                      {member.partyName} Party
                    </p>

                    <p className="text-sm leading-6 text-gray-500">
                      {member.terms.item[0].startYear} -{" "}
                      {member.terms.item[0].endYear || "Present"}
                    </p>
                  </div>
                </li>
              ))}
          </>
        ) : (
          <>
            {new Array(8).fill(0).map((_, i) => (
              <Skeleton height={500} key={i} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default Representatives;
