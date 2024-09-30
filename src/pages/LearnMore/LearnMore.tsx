import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import './LearnMore.css';
export default function LearnMore() {
  return (
    <>
      <motion.div
        className='min-h-screen bg-[#F1FAEE]'
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <div className='half-hero'>
          <span className='text'>THE FUTURE IS YOUNG</span>
        </div>
        <div className='info'>
          <div className='text-box'>
            <span style={{ fontSize: '50px', fontWeight: 200, marginRight: 2 }}>
              A
            </span>
            s teenagers are turning 18 it's more important than ever to remind
            them of their right to vote. Not only is it a right, it's an{' '}
            <span style={{ fontWeight: 900 }}>obligation </span>
            to stay informed about how our country is run.
          </div>
        </div>
      </motion.div>
    </>
  );
}
