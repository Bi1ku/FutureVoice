import { useEffect } from "react";
import Background from "../../components/Background";
import { enhancedFetch } from "../../globals";

function Explore() {
  useEffect(() => {
    const test = async () => {
      const res = await enhancedFetch("bill", "GOV");

      console.log(res);
    };

    test();
  });

  return (
    <Background>
      <input />
    </Background>
  );
}

export default Explore;
