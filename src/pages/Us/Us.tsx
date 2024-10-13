function Us() {
  const people = [
    {
      name: 'Leo Ling',
      role: 'Programmer',
      imageUrl: '/images/avatars/leo.png',
      bio: `My name is Leo Ling and I'm a junior at State College Area High School. I started coding in 6th grade and mostly worked on small projects before turning to web development. `,
      bioTwo: `I like to travel and eating different foods. I also love to read and to learn new things! I think my favorite book is "Flowers of Algernon" by Daniel Keyes.`,
      bioThree: `I met own through a few mutual experiences and hope to work on more projects like this in the future! Check out my LinkedIn as well :)`,
      linkedin: 'https://www.linkedin.com/in/leo-ling-852945287/',
    },
    {
      name: 'Owen Shi',
      role: 'Programmer',
      imageUrl: '/images/avatars/owen.jpg',
      bio: "Heya! I'm Owen, a junior at Stuyvesant High School with a passion for programming! I started coding at around 7th grade, learning the basics of computer science. I then began learning full-stack web development and met Leo through some online forums. Currently, I'm the Head of Software at my school's robotics team, Stuy Fusion, and hope to continue my journey of software development in my future careers.",
      bioTwo:
        'Some of my hobbies outside of programming include playing basketball, 3D printing, and video games (e.g., Minecraft). Once I make it through high school, I want to change the world--to be remembered--in some way.',
      bioThree: 'Thank ya for reading!',
    },
  ];

  return (
    <div className='xl:px-44 pt-16 lg:px-24 md:px-16 px-16 relative'>
      <div className='max-w-2xl'>
        <h3 className='text-5xl font-semibold text-[#1D3557]'>US</h3>
        <p className='text-xl py-2'>
          Who are the creators of this wonderful app? What are our backgrounds?
          Read on to find out!
        </p>
      </div>

      <div className='px-4 sm:px-6 xl:px-16 lg:px-6 mt-8'>
        <ul role='list' className='-mt-12 space-y-12 divide-y divide-gray-200'>
          {people.map((person) => (
            <li
              key={person.name}
              className='flex flex-col gap-10 pt-12 sm:flex-row'
            >
              <img
                alt={person.name}
                src={person.imageUrl}
                className='aspect-[4/5] w-96 flex-none rounded-2xl object-cover'
              />
              <div className='max-w-xl flex-auto'>
                <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-base leading-7 text-gray-600'>
                  {person.role}
                </p>
                <p className='mt-6 text-base leading-7 text-gray-600'>
                  {person.bio}
                </p>
                <p className='mt-6 text-base leading-7 text-gray-600'>
                  {person.bioTwo}
                </p>
                <p className='mt-6 text-base leading-7 text-gray-600'>
                  {person.bioThree}
                </p>{' '}
                <ul role='list' className='mt-6 flex gap-x-6'>
                  <li>
                    <a
                      href={person.linkedin}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>LinkedIn</span>
                      <svg
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        aria-hidden='true'
                        className='h-5 w-5'
                      >
                        <path
                          d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                          clipRule='evenodd'
                          fillRule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Us;
