const resources = [
  {
    url: "https://www.whitehouse.gov/about-the-white-house/our-government/the-legislative-branch/",
    title: "White House",
  },

  {
    url: "https://www.thepolicycircle.org/brief/makes-u-s-exceptional-u-s-house-representatives-explained/",
    title: "Policy Circle",
  },

  {
    url: "https://www.congressfoundation.org/revitalizing-congress/life-in-congress/973-aligning-work-life-in-house-senate",
    title: "Congress Foundation",
  },

  {
    url: "https://www.visitthecapitol.gov/explore/about-congress",
    title: "U.S Capital Visitor Center",
  },
];

export default function Guides() {
  return (
    <>
      <div className="xl:px-44 pt-16 lg:px-32 md:px-24 px-16 relative">
        <div className="max-w-2xl">
          <h3 className="text-5xl font-semibold text-[#1D3557]">LEARN</h3>
          <p className="text-xl py-2">
            Want to learn more about American politics? Here are extra, trusted
            resources to aid your hunger for knowledge!
          </p>
        </div>

        <div className="px-4 sm:px-6 xl:px-16 lg:px-6 pt-6">
          <span>
            The future is young. As teenagers are turning 18 it's more important
            than ever to remind them of their right to vote. Not only is it a
            right, it's obligation to stay informed about how our country is
            run. This issue becomes more and more pressing considering the
            current state of disinformation. Our future lies in young hands.
          </span>

          <br />
          <br />

          <span>Some excellent organizations to learn more from include:</span>
          {resources.map((resource, i) => (
            <div key={i} className="ml-8">
              -
              <a
                href={resource.url}
                className="ml-4 text-[#457B9D] text-xl text-semibold"
              >
                {resource.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
