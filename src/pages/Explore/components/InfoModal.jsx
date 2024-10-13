import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { enhancedFetch } from '../../../globals';
import 'react-loading-skeleton/dist/skeleton.css';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';

const reformatName = (name) => name.split(',').reverse().join(' ');

function InfoModal({ open, setOpen, id, name }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState(0);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
    contentRef.current.scrollTop = 0;
  };
  const contentRef = useRef();
  const [dropdown, setDropdown] = useState(false);

  const btnRef = useRef();
  useEffect(() => {
    // Closes dropdown when clicking outside of it
    const closeDropdown = (e) => {
      console.log(e.target.querySelectorAll(':scope .dropdown'));
      if (
        e.target &&
        e.target.querySelectorAll(':scope .dropdown').length !== 0 &&
        e.target !== btnRef.current
      )
        setDropdown(false);
    };
    document.body.addEventListener('click', closeDropdown);
    return () => document.body.removeEventListener('click', closeDropdown);
  }, [dropdown]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await Promise.all([
        enhancedFetch('CONGRESS', `member/${id}/sponsored-legislation`),
        enhancedFetch('CONGRESS', `member/${id}/cosponsored-legislation`),
      ]);

      data[0]['legislation'] = data[0].sponsoredLegislation;
      data[1]['legislation'] = data[1].cosponsoredLegislation;

      setData(data);
      setLoading(false);
    };

    id && getData();
  }, [id]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpen(false);
              setPage(1);
            }}
            className='bg-gray-300 h-screen fixed top-0 right-0 left-0 opacity-65'
          />

          <motion.div
            className='bg-white max-w-4xl shadow-lg rounded-md fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0 }}
          >
            <div className='px-4 sm:px-6 lg:px-8 py-8'>
              <div className='sm:flex sm:items-center'>
                <div className='sm:flex-auto'>
                  <h1 className='text-2xl font-semibold leading-6 text-gray-900'>
                    {reformatName(name)}'s Legislation
                  </h1>
                  <p className='mt-3 text-sm text-gray-700'>
                    View the twenty most recent legislation and acts supported
                    by {reformatName(name)}.
                  </p>
                </div>
                <div
                  className={classNames(
                    { rb: dropdown },
                    'dropdown rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white'
                  )}
                >
                  <div
                    className='dropdown-btn'
                    onClick={toggleDropdown}
                    ref={btnRef}
                  >
                    {['Sponsored', 'Co-Sponsored'][type]}{' '}
                    <svg
                      onClick={toggleDropdown}
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      style={{ transform: dropdown ? 'rotate(180deg)' : '' }}
                    >
                      <polyline points='6 9 12 15 18 9'></polyline>
                    </svg>
                  </div>
                  <div className='wrapper'>
                    <div
                      className={classNames(
                        'doggie rounded-md ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white',
                        'dropdown-content',
                        {
                          'dropdown-active': dropdown,
                        }
                      )}
                      ref={contentRef}
                      style={{
                        ...[dropdown ? {} : { height: 0 }][0],
                        ...[
                          {
                            left:
                              btnRef.current && -btnRef.current.clientWidth - 8,
                            width: btnRef.current
                              ? btnRef.current.clientWidth + 16
                              : null,
                          },
                        ][0],
                      }}
                    >
                      <div className='padder'>
                        <ul>
                          <li
                            onClick={(e) => {
                              setType(0);
                              setDropdown(false);
                              setPage(1);
                            }}
                          >
                            Sponsored
                          </li>
                          <li
                            onClick={(e) => {
                              setType(1);
                              setDropdown(false);
                              setPage(1);
                            }}
                          >
                            Co-Sponsored
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                  <select
                    defaultValue='Sponsored'
                    onChange={(e) => {
                      setType(+e.target.value);
                      setPage(1);
                    }}
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white'
                  >
                    <option value={0}>Sponsored</option>
                    <option value={1}>Co-Sponsored</option>
                  </select>
                </div> */}
              </div>

              {loading ? (
                <div className='mt-8'>
                  <Skeleton height={374} width={709} borderRadius='0.75rem' />
                </div>
              ) : (
                data && (
                  <div className='mt-8 flow-root'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                      <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                        <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
                          <table className='min-w-full divide-y divide-gray-300'>
                            <thead className='bg-gray-50'>
                              <tr>
                                <th
                                  scope='col'
                                  className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                >
                                  Title
                                </th>
                                <th
                                  scope='col'
                                  className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                >
                                  Introduced Date
                                </th>
                              </tr>
                            </thead>

                            <tbody className='divide-y divide-gray-200 bg-white'>
                              {data[type].legislation
                                .slice((page - 1) * 5, page * 5)
                                .map((legislation, i) => (
                                  <tr key={i}>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate max-w-xl'>
                                      {legislation.title}
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {legislation.introducedDate}
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>

                          <div
                            aria-label='Pagination'
                            className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
                          >
                            <div className='hidden sm:block'>
                              <p className='text-sm text-gray-700'>
                                Showing{' '}
                                <span className='font-medium'>
                                  {(page - 1) * 5 + 1}
                                </span>{' '}
                                to{' '}
                                <span className='font-medium'>{page * 5}</span>{' '}
                                of{' '}
                                <span className='font-medium'>
                                  {data[type].legislation.length}
                                </span>{' '}
                                results
                              </p>
                            </div>
                            <div className='flex flex-1 justify-between sm:justify-end'>
                              <button
                                className={`relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 ${
                                  page - 1 < 1 && 'cursor-not-allowed'
                                }`}
                                onClick={() => setPage(page - 1)}
                                disabled={page - 1 < 1}
                              >
                                Previous
                              </button>

                              <button
                                className={`relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 ${
                                  (page + 1) * 5 >
                                    data[0].sponsoredLegislation.length &&
                                  'cursor-not-allowed'
                                }`}
                                disabled={
                                  (page + 1) * 5 > data[type].legislation.length
                                }
                                onClick={() => setPage(page + 1)}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default InfoModal;
