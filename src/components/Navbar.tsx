function Navbar() {
  return (
    <nav className="bg-[#457B9D] text-white py-4 fixed right-0 left-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img
            src="/logo/transparent_small.png"
            alt="Logo"
            className="w-14 h-10 inline-block mr-2"
          />
        </div>

        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#purpose" className="hover:text-gray-300">
              Purpose
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
