import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RepInfoModal from "./RepInfoModal";

function Representatives({ representatives }: { representatives: any }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul
        className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4 px-16"
        onClick={() => setOpen(true)}
      >
        {representatives ? (
          <>
            {representatives
              .sort(
                (a: any, b: any) =>
                  b.terms.item[0].startYear - a.terms.item[0].startYear,
              )
              .map((member: any, i: number) => (
                <li
                  key={member.name}
                  className="bg-[#F1FAEE] shadow-lg rounded-2xl hover:cursor-pointer hover:-translate-y-2 duration-200"
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
              <Skeleton height={428} key={i} className="rounded-2xl" />
            ))}
          </>
        )}
      </ul>
      <RepInfoModal open={open} setOpen={setOpen} />
    </>
  );
}

export default Representatives;
