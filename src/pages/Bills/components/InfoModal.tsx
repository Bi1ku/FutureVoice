import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { enhancedFetch } from "../../../globals";

const dehydrate = (html: string) => {
  let result = "";
  let track = false;

  for (let i = 0; i < html.length; i++) {
    if (html[i] === "<") track = true;
    else if (html[i] === ">") {
      track = false;
      result += " ";
    } else if (!track) result += html[i];
  }

  return result;
};

function InfoModal({
  open,
  setOpen,
  modalData,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  modalData: any;
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const baseUrl = modalData.url.split("?")[0];

      const data = await Promise.all([
        enhancedFetch(
          "CUSTOM",
          `${baseUrl}/summaries?api_key=${process.env.REACT_APP_CONGRESS_API_KEY}&format=json`,
        ),
        enhancedFetch(
          "CUSTOM",
          `${baseUrl}/text?api_key=${process.env.REACT_APP_CONGRESS_API_KEY}&format=json`,
        ),
      ]);

      setData(data);
      setLoading(false);
    };

    getData();
  }, [modalData.url]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="bg-gray-300 h-screen fixed top-0 right-0 left-0 opacity-65"
          />

          <motion.div
            className="bg-white max-w-4xl shadow-lg rounded-md fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0 }}
          >
            <div className="px-4 sm:px-6 lg:px-8 py-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                    Bill #{modalData.billNumber}
                  </h1>
                  <p className="mt-2 text-gray-800">{modalData.title}</p>
                  <p className="mt-4 text-sm text-gray-700">
                    {loading ? (
                      <Skeleton count={5} width={832} />
                    ) : data && data[0] && data[0].summaries[0] ? (
                      dehydrate(data[0].summaries[0].text)
                    ) : (
                      <span className="font-bold text-black">
                        [NO SUMMARIES YET]
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {loading ? (
                  <Skeleton width={832} height={200} />
                ) : data && data[1] && data[1].textVersions[0] ? (
                  data[1].textVersions.map((text: any, i: number) => (
                    <div className="flex flex-col" key={i}>
                      <span className="font-semibold text-sm">{text.type}</span>
                      {text.formats.map((format: any, j: number) => (
                        <div className="text-[#457B9D] ml-6">
                          -
                          <a
                            target="_blank"
                            href={format.url}
                            key={j}
                            className="text-[#457B9D] text-sm"
                          >
                            <span className="ml-4 text-">{format.type}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <span className="font-bold text-sm text-black">
                    [NO DOCUMENTS YET]
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default InfoModal;
