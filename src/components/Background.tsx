import { ReactNode, useEffect, useState } from "react";

function Background({ children }: { children: ReactNode }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <img
        className="absolute max-w-none -right-full sm:top-0 sm:right-0 sm:left-0 sm:mx-auto"
        src="/spray.jpg"
        style={{ transform: `translateY(${offsetY * 0.65}px)` }}
        alt=""
      />
      {children}
    </div>
  );
}

export default Background;
