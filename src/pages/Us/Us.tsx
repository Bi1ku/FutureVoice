function Us() {
  const people = [
    {
      name: 'Leo Ling',
      role: 'programmer',
      imageUrl: 'https://i.ibb.co/yNYfw6G/Y8-K8be-RNZ5-QC.png',
      bio: 'i am a programmer',
    },
    {
      name: 'Owen Shi',
      role: 'Senior Designer',
      imageUrl: 'notdisgustingperson',
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
  ];

  return (
    <div className='xl:px-44 py-16 lg:px-32 md:px-24 px-16 relative '>
      <div className='max-w-2xl'>
        <h3 className='text-5xl font-semibold text-[#1D3557]'>US</h3>
        <p className='text-xl py-2'>
          Who are the creators of this wonderful app? What are our backgrounds?
          Read on to find out!
        </p>
      </div>
      <ul className='mx-auto mt-20 max-w-2xl lg:max-w-4xl xl:max-w-none'>
        {people.map((person) => (
          <li
            key={person.name}
            className='flex flex-col gap-6 xl:flex-row bg-white shadow-lg mt-8'
          >
            <img
              alt=''
              src={person.imageUrl}
              className='aspect-[4/5] w-2/5 flex-none rounded-2xl object-contain'
            />
            <div className='flex-auto'>
              <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                {person.name}
              </h3>
              <p className='text-base leading-7 text-gray-600'>{person.role}</p>
              <p className='mt-6 text-base leading-7 text-gray-600'>
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
