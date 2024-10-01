import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://media.them.us/photos/5fa465ecfd7a2bab06d4a0cc/16:9/w_2560%2Cc_limit/GettyImages-83526818.jpg')",
      }}
    >
      <div className="text-center p-10 z-10">
        <motion.h1
          className="text-8xl font-bold text-white mb-4 leading-normal tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 2.5,
          }}
        >
          Empowering Youth to
          <span className="relative text-yellow-400">
            <Typewriter
              options={{
                strings: ["PARTICIPATE.", "IMPACT.", "VOTE."],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />
          </span>{" "}
        </motion.h1>

        <motion.p
          className="text-xl text-white mb-6 font-semibold tracking-wide"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.15,
            type: "spring",
            bounce: 0.4,
            duration: 1.3,
          }}
        >
          Discover bills, voting places, and civic actions near you.
        </motion.p>
      </div>

      <div className="bg-[#1D3557] h-screen w-full absolute opacity-70" />
    </section>
  );
}

export default Hero;
