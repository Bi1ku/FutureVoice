import { useEffect, useState } from "react";
import { enhancedFetch } from "../../../globals";

const reformatName = (name: string) => name.split(",").reverse().join(" ");

function RepInfoModal({
  open,
  setOpen,
  id,
  name,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
  name: string;
}) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await Promise.all([
        enhancedFetch("CONGRESS", `member/${id}/sponsored-legislation`),
        enhancedFetch("CONGRESS", `member/${id}/cosponsored-legislation`),
      ]);

      setData(data);
      setLoading(false);
      console.log(data);
    };

    id && getData();
  }, [id]);

  if (open) {
    return (
      <>
        <div
          onClick={() => {
            setOpen(false);
            setPage(1);
          }}
          className="bg-gray-300 h-screen opacity-65 fixed top-0 right-0 left-0"
        />

        <div className="bg-white max-w-4xl shadow-lg rounded-md fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                  {reformatName(name)}'s Legislation
                </h1>
                <p className="mt-3 text-sm text-gray-700">
                  View the twenty most recent legislation and acts supported by{" "}
                  {reformatName(name)}.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add user
                </button>
              </div>
            </div>

            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Introduced Date
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200 bg-white">
                        {data &&
                          data[0].sponsoredLegislation
                            .slice((page - 1) * 5, page * 5)
                            .map((legislation: any, i: number) => (
                              <tr key={i}>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate max-w-xl">
                                  {legislation.title}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {legislation.introducedDate}
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>

                    <div
                      aria-label="Pagination"
                      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                    >
                      <div className="hidden sm:block">
                        <p className="text-sm text-gray-700">
                          Showing{" "}
                          <span className="font-medium">
                            {(page - 1) * 5 + 1}
                          </span>{" "}
                          to <span className="font-medium">{page * 5}</span> of{" "}
                          <span className="font-medium">
                            {data && data[0].sponsoredLegislation.length}
                          </span>{" "}
                          results
                        </p>
                      </div>
                      <div className="flex flex-1 justify-between sm:justify-end">
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                          onClick={() => setPage(page - 1)}
                        >
                          Previous
                        </a>
                        <a
                          href="#"
                          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                          onClick={() => setPage(page + 1)}
                        >
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </>
    );
  } else return <></>;
}

export default RepInfoModal;
