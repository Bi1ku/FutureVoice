import { motion } from "framer-motion";

function NavLink({ text, href }: { text: string; href: string }) {
  return (
    <motion.li className="hover:transform hover:-translate-y-0.5 duration-150 hover:cursor-pointer">
      <a
        href={href}
        className="hover:text-gray-300 duration-150 font-semibold tracking-wider text-sm"
      >
        {text}
      </a>
    </motion.li>
  );
}

function Navbar() {
  return (
    <nav className="bg-[#457B9D] text-white py-4 fixed right-0 left-0 z-20 bg-opacity-75 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">
            <img
              src="/logo/small.png"
              alt="Logo"
              className="w-18 h-10 inline-block mr-2"
            />
          </a>
        </div>

        <ul className="flex space-x-6">
          <NavLink text="Home" href="/" />
          <NavLink text="About" href="/about" />
          <NavLink text="Purpose" href="/purpose" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
