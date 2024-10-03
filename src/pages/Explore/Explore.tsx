import { useEffect } from "react";
import Background from "../../components/Background";
import { enhancedFetch } from "../../globals";

function Explore() {
  useEffect(() => {
    const test = async () => {
      const res = await enhancedFetch("bill", "GOV");

      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      });
      console.log(res);
    };

    test();
  });

  return (
    <Background>
      <div></div>
    </Background>
  );
}

export default Explore;
