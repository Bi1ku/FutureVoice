import Marquee from "react-fast-marquee";

function Features() {
  return (
    <section id="features" className="py-16">
      <h2 className="text-4xl font-bold text-center text-[#1D3557] mb-12">
        Our Features
      </h2>
      <Marquee direction="right" speed={75} autoFill={true} className="h-44">
        <div className="text-center bg-[#E63946] text-white p-6 shadow-lg rounded-md mr-12 rotate-6">
          <h3 className="text-2xl font-semibold mb-4">Explore</h3>
          <p className="text-lg">
            Explore local representatives and their policies.
          </p>
        </div>

        <div className="text-center bg-[#457B9D] text-white p-6 shadow-lg rounded-md mr-12">
          <h3 className="text-2xl font-semibold mb-4">Discover Bills</h3>
          <p className="text-lg">
            Stay updated on congressional bills that affect society.
          </p>
        </div>

        <div className="text-center bg-[#A8DADC] text-white p-6 shadow-lg rounded-md mr-12 -rotate-6">
          <h3 className="text-2xl font-semibold mb-4">
            Civic Engagement Resources
          </h3>
          <p className="text-lg">
            Learn how you can get involved and make a difference.
          </p>
        </div>

        <div className="text-center bg-[#457B9D] text-white p-6 shadow-lg rounded-md mr-12">
          <h3 className="text-2xl font-semibold mb-4">Learn the Importance</h3>
          <p className="text-lg">
            Learn the importance of participation in politics.
          </p>
        </div>
      </Marquee>
    </section>
  );
}

export default Features;
