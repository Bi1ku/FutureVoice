import Navbar from '../../components/Navbar.jsx';
import { motion } from 'framer-motion';
import Hero from './components/Hero';

function Landing() {
  return (
    <>
      <motion.div
        className='min-h-screen bg-[#F1FAEE]'
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero />

        <section id='features' className='py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold text-center text-[#1D3557] mb-12'>
              Our Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center bg-[#E63946] text-white p-6 shadow-lg'>
                <h3 className='text-2xl font-semibold mb-4'>
                  Find Voting Locations
                </h3>
                <p className='text-lg'>
                  Easily locate your nearest voting place.
                </p>
              </div>
              <div className='text-center bg-[#457B9D] text-white p-6 shadow-lg'>
                <h3 className='text-2xl font-semibold mb-4'>
                  Discover Youth-Oriented Bills
                </h3>
                <p className='text-lg'>
                  Stay updated on bills that affect youth and communities.
                </p>
              </div>
              <div className='text-center bg-[#A8DADC] text-white p-6 shadow-lg'>
                <h3 className='text-2xl font-semibold mb-4'>
                  Civic Engagement Resources
                </h3>
                <p className='text-lg'>
                  Learn how you can get involved and make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>{' '}
    </>
  );
}

export default Landing;
