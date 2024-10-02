import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

function Background({ children }: { children: ReactNode }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        className="absolute max-w-none -right-full sm:top-0 sm:right-0 sm:left-0 sm:mx-auto -z-10"
        src="/spray.jpg"
        style={{ transform: `translateY(${offsetY * 0.65}px)` }}
        alt=""
      />
      {children}
    </motion.div>
  );
}

export default Background;
