import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { enhancedFetch } from "../../../globals";
import InfoModal from "./InfoModal";

const pageSize = 10;

const stateCodes = [
  { code: "", name: "---" },
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

function Others() {
  const [data, setData] = useState<any>();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [filter, setFilter] = useState({
    congress: 0,
    state: "",
    district: 0,
  });

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      let res;
      if (filter.congress)
        res = await enhancedFetch(
          "CUSTOM",
          `https://api.congress.gov/v3/member/congress/${filter.congress}${filter.state ? `/${filter.state}` : ""}${filter.state && filter.district ? `/${filter.district}` : ""}?offset=${(page - 1) * pageSize}&limit=${pageSize}&format=json&api_key=${process.env.REACT_APP_CONGRESS_API_KEY}`,
        );
      else if (filter.state)
        res = await enhancedFetch(
          "CUSTOM",
          `https://api.congress.gov/v3/member${filter.state ? `/${filter.state}` : ""}${filter.state && filter.district ? `/${filter.district}` : ""}?offset=${(page - 1) * pageSize}&limit=${pageSize}&format=json&api_key=${process.env.REACT_APP_CONGRESS_API_KEY}`,
        );
      else
        res = await enhancedFetch(
          "CUSTOM",
          `https://api.congress.gov/v3/member?offset=${(page - 1) * pageSize}&limit=${pageSize}&format=json&api_key=${process.env.REACT_APP_CONGRESS_API_KEY}`,
        );

      setData(res);
      setLoading(false);
    };

    getData();
  }, [page, filter]);

  return (
    <>
      <div className="xl:px-16 lg:px-6 mt-16">
        <div className="flex max-w-lg mt-2">
          <div className="mr-4 w-1/5">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Congress
            </label>
            <input
              type="number"
              onBlur={(e) => {
                setFilter({ ...filter, congress: +e.target.value });
                setPage(1);
              }}
              placeholder="118"
              className="w-full block rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:focus-blue-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mr-4 w-2/5">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              State
            </label>
            <select
              className="w-full block rounded-md border-0 py-2.5 pr-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
              onChange={(e) => {
                setFilter({ ...filter, state: e.target.value });
                setPage(1);
              }}
            >
              {stateCodes.map((state, i) => (
                <option key={i} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mr-4 w-1/5">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              District
            </label>
            <input
              type="number"
              onBlur={(e) => {
                setFilter({ ...filter, district: +e.target.value });
                setPage(1);
              }}
              placeholder="6"
              className="w-full block rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:focus-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="px-4 sm:px-6 xl:px-16 lg:px-6">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                {loading ? (
                  <Skeleton width={1425} height={50.5} count={pageSize + 1} />
                ) : (
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-0"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-semibold text-gray-900"
                        >
                          District
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-semibold text-gray-900"
                        >
                          Party
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-semibold text-gray-900"
                        >
                          State
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-semibold text-gray-900"
                        >
                          Chamber
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">View Legislation</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {data &&
                        data.members.map((member: any, i: number) => (
                          <tr key={i}>
                            <td className="whitespace-nowrap py-4 pl-4 text-sm font-medium text-gray-900 sm:pl-0 max-w-2xl pr-4 truncate">
                              {member.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {member.district || "-"}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {member.partyName}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {member.state}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {member.terms.item[0].chamber}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <button
                                className="text-[#457B9D] hover:text-[#E63946] duration-200"
                                onClick={() => {
                                  setId(member.bioguideId);
                                  setName(member.name);
                                  setOpen(true);
                                }}
                              >
                                View Legislation
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
                <div className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
                  <div className="-mt-px flex w-0 flex-1">
                    <button
                      onClick={() => setPage(page - 1)}
                      className={`inline-flex items-center pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${
                        page - 1 <= 0 && "cursor-not-allowed"
                      }`}
                      disabled={page - 1 <= 0}
                    >
                      <ArrowLongLeftIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400"
                      />
                      Previous
                    </button>
                  </div>
                  <div className="hidden md:-mt-px md:flex">
                    <button
                      onClick={() => setPage(1)}
                      className={`inline-flex items-center ${
                        page === 1 ? "text-[#457B9D]" : "text-gray-500"
                      } px-4 pt-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700`}
                    >
                      1
                    </button>
                    <button
                      onClick={() => setPage(2)}
                      className={`inline-flex items-center   ${
                        page === 2 ? "text-[#457B9D]" : "text-gray-500"
                      } px-4 pt-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700`}
                    >
                      2
                    </button>
                    <button
                      onClick={() => setPage(3)}
                      className={`inline-flex items-center   ${
                        page === 3 ? "text-[#457B9D]" : "text-gray-500"
                      } px-4 pt-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700`}
                    >
                      3
                    </button>{" "}
                    <span className="inline-flex items-center   px-4 pt-4 text-sm font-medium text-gray-500">
                      ...
                    </span>
                    <input
                      type="number"
                      placeholder="10"
                      className="w-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-4 px-2 text-center"
                      onBlur={(e) => setPage(+e.target.value)}
                    />
                  </div>
                  <div className="-mt-px flex w-0 flex-1 justify-end">
                    <button
                      onClick={() => setPage(page + 1)}
                      className="inline-flex items-center pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Next
                      <ArrowLongRightIcon
                        aria-hidden="true"
                        className="ml-3 h-5 w-5 text-gray-400"
                      />
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      <InfoModal open={open} setOpen={setOpen} id={id} name={name} />
    </>
  );
}

export default Others;