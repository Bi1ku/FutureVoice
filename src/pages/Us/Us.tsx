import Title from "./components/Title";

function Us() {
  const people = [
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
    },
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
    },
  ];

  return (
    <div className="xl:px-44 py-16 lg:px-32 md:px-24 px-16 relative ">
      <Title />

      <ul
        role="list"
        className="mx-auto mt-20 max-w-2xl lg:max-w-4xl xl:max-w-none"
      >
        {people.map((person) => (
          <li
            key={person.name}
            className="flex flex-col gap-6 xl:flex-row bg-white shadow-lg mt-8"
          >
            <img
              alt=""
              src={person.imageUrl}
              className="aspect-[4/5] w-2/5 flex-none rounded-2xl object-cover"
            />
            <div className="flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {person.bio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Us;
