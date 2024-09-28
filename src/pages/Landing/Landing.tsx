import Navbar from "../../components/Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Landing() {
  return (
    <>
      <motion.div
        className="min-h-screen bg-[#F1FAEE]"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />

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
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-yellow-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <Typewriter
                  options={{
                    strings: ["PARTICIPATE.", "IMPACT.", "VOTE."],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 25,
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

            <motion.a
              href="#features"
              className="bg-[#E63946] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#A8DADC] transition duration-300"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.15,
                type: "spring",
                bounce: 0.4,
                duration: 1.3,
              }}
            >
              Get Started
            </motion.a>
          </div>

          <div className="bg-[#1D3557] h-screen w-full absolute opacity-70" />
        </section>

        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#1D3557] mb-12">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-[#E63946] text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Find Voting Locations
                </h3>
                <p className="text-lg">
                  Easily locate your nearest voting place.
                </p>
              </div>
              <div className="text-center bg-[#457B9D] text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Discover Youth-Oriented Bills
                </h3>
                <p className="text-lg">
                  Stay updated on bills that affect youth and communities.
                </p>
              </div>
              <div className="text-center bg-[#A8DADC] text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Civic Engagement Resources
                </h3>
                <p className="text-lg">
                  Learn how you can get involved and make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>{" "}
    </>
  );
}

export default Landing;
