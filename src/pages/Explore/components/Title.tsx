import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Title({ district, state }: { state: string; district: number }) {
  return (
    <>
      <div className="max-w-2xl">
        <h3 className="text-5xl font-semibold text-[#1D3557]">EXPLORE</h3>
        <p className="md:text-xl text-md py-2">
          Your current and previous hardworking representatives, who constantly
          advocate for you and your family, and the legislation they work on.
        </p>
        {state || district ? (
          <span className="font-semibold text-[#457B9D]">
            Your congressional district:{" "}
            <span className="text-[#E63946] font-bold underline">
              {state}#{district < 10 ? "0" + district : district}
            </span>
          </span>
        ) : (
          <Skeleton width="40%" />
        )}
      </div>
    </>
  );
}

export default Title;
