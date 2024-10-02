import { motion } from "framer-motion";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar/Navbar";
import Features from "./components/Features";
import Find from "./components/Find";
import Hero from "./components/Hero";

function Landing() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <Features />
      <Find />
    </Background>
  );
}

export default Landing;
