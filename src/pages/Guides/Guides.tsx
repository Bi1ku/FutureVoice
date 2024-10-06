import { motion } from "framer-motion";
import "./Guides.css";

export default function Guides() {
  return (
    <>
      <motion.div
        className="min-h-screen bg-[#F1FAEE]"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="half-hero">
          <span className="text">THE FUTURE IS YOUNG</span>
        </div>
        <div className="info">
          <div className="text-box">
            <span
              style={{
                fontSize: "50px",
                fontWeight: 200,
                marginRight: 2,
                lineHeight: 0,
              }}
            >
              A
            </span>
            <span>
              s teenagers are turning 18 it's more important than ever to remind
              them of their right to vote. Not only is it a right, it's an{" "}
            </span>
            <span style={{ fontWeight: 900 }}>obligation </span>
            <span>
              to stay informed about how our country is run. This issue becomes
              more and more pressing considering the current state of
              disinformation. Our future lies in young hands.
            </span>
            <br />

            <br />
            <span>
              Some excellent organizations to learn more from include:
            </span>
            <ul className="resources">
              <li>
                <a href="https://www.whitehouse.gov/about-the-white-house/our-government/the-legislative-branch/">
                  White House
                </a>
              </li>
              <li>
                <a href="https://www.thepolicycircle.org/brief/makes-u-s-exceptional-u-s-house-representatives-explained/">
                  Policy Circle
                </a>
              </li>
              <li>
                <a href="https://www.congressfoundation.org/revitalizing-congress/life-in-congress/973-aligning-work-life-in-house-senate">
                  Congress Foundation
                </a>
              </li>
              <li>
                <a href="https://www.visitthecapitol.gov/explore/about-congress">
                  US Capitol Visitor Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
