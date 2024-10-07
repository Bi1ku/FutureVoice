// TODO: SEARCH FILTERS
// TODO: LOADING STATES

import { useEffect, useState } from 'react';
import { enhancedFetch } from '../../globals';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import InfoModal from './components/InfoModal';

const pageSize = 15;

function Bills() {
  const [data, setData] = useState<any>();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState({
    url: '',
    billNumber: 0,
    title: '',
  });
  const [filter, setFilter] = useState({
    congress: 0,
    from: '',
    to: '',
  });

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const res = await enhancedFetch(
        'CUSTOM',
        `https://api.congress.gov/v3/bill${
          filter.congress ? `/${filter.congress}` : ''
        }?offset=${
          (page - 1) * pageSize
        }&limit=${pageSize}&format=json&api_key=${
          process.env.REACT_APP_CONGRESS_API_KEY
        }${filter.from ? `&fromDateTime=${filter.from}` : ''}${
          filter.to ? `&toDateTime=${filter.to}` : ''
        }`
      );

      setData(res);
      setLoading(false);
    };

    getData();
  }, [page, filter]);

  return (
    <div className='xl:px-44 py-16 lg:px-32 md:px-24 px-16 relative'>
      <div className='max-w-2xl'>
        <h3 className='text-5xl font-semibold text-[#1D3557]'>BILLS</h3>
        <p className='text-xl py-2'>
          View and learn more about the latest bills worked on by Congress and
          passed laws!
        </p>
      </div>
      <div className='flex max-w-lg mt-2'>
        <div className='mr-4 w-1/5'>
          <label className='block text-sm font-medium leading-6 text-gray-900'>
            Congress
          </label>
          <input
            type='number'
            onBlur={(e) => setFilter({ ...filter, congress: +e.target.value })}
            placeholder='118'
            className='w-full block rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:focus-blue-600 sm:text-sm sm:leading-6'
          />
        </div>

        <div className='mr-4 w-2/5'>
          <label className='block text-sm font-medium leading-6 text-gray-900'>
            From
          </label>
          <input
            type='date'
            onBlur={(e) =>
              setFilter({
                ...filter,
                from: e.target.value
                  ? new Date(e.target.value)
                      .toISOString()
                      .replace(/\.\d{3}/, '')
                  : '',
              })
            }
            placeholder='118'
            className='w-full block rounded-md border-0 py-1.5 pr-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:focus-blue-600 sm:text-sm sm:leading-6'
          />
        </div>

        <div className='mr-4 w-2/5'>
          <label className='block text-sm font-medium leading-6 text-gray-900'>
            To
          </label>
          <input
            type='date'
            onBlur={(e) =>
              setFilter({
                ...filter,
                to: e.target.value
                  ? new Date(e.target.value)
                      .toISOString()
                      .replace(/\.\d{3}/, '')
                  : '',
              })
            }
            placeholder='118'
            className='w-full block rounded-md border-0 py-1.5 pr-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:focus-blue-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div className='px-4 sm:px-6 xl:px-16 lg:px-6'>
        <div className='mt-8 flow-root'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              {loading ? (
                <Skeleton width={1425} height={50.5} count={pageSize + 1} />
              ) : (
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-0'
                      >
                        Title
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left font-semibold text-gray-900'
                      >
                        Bill #
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left font-semibold text-gray-900'
                      >
                        Origin Chamber
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left font-semibold text-gray-900'
                      >
                        Congress
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left font-semibold text-gray-900'
                      >
                        Updated Date
                      </th>
                      <th
                        scope='col'
                        className='relative py-3.5 pl-3 pr-4 sm:pr-0'
                      >
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {data &&
                      data.bills.map((bill: any, i: number) => (
                        <tr key={i}>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 max-w-2xl pr-4 truncate'>
                            {bill.title}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {bill.number}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {bill.originChamber}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {bill.congress}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {bill.updateDate}
                          </td>
                          <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                            <button
                              className='text-[#457B9D] hover:text-[#E63946] duration-200'
                              onClick={() => {
                                setModalData({
                                  url: bill.url,
                                  billNumber: bill.number,
                                  title: bill.title,
                                });
                                setOpen(true);
                              }}
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
              <div className='flex items-center justify-between border-t border-gray-200 px-4 sm:px-0'>
                <div className='-mt-px flex w-0 flex-1'>
                  <button
                    onClick={() => setPage(page - 1)}
                    className={`inline-flex items-center pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${
                      page - 1 < 0 && 'cursor-not-allowed'
                    }`}
                    disabled={page - 1 < 0}
                  >
                    <ArrowLongLeftIcon
                      aria-hidden='true'
                      className='mr-3 h-5 w-5 text-gray-400'
                    />
                    Previous
                  </button>
                </div>
                <div className='hidden md:-mt-px md:flex'>
                  <button
                    onClick={() => setPage(1)}
                    className={`inline-flex items-center ${
                      page === 1 ? 'text-[#457B9D]' : 'text-gray-500'
                    } px-4 pt-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setPage(2)}
                    className={`inline-flex items-center   ${
                      page === 2 ? 'text-[#457B9D]' : 'text-gray-500'
                    } px-4 pt-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700`}
                  >
                    2
                  </button>
                  <button
                    onClick={() => setPage(3)}
                    className={`inline-flex items-center   ${
                      page === 3 ? 'text-[#457B9D]' : 'text-gray-500'
                    } px-4 pt-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700`}
                  >
                    3
                  </button>{' '}
                  <span className='inline-flex items-center   px-4 pt-4 text-sm font-medium text-gray-500'>
                    ...
                  </span>
                  <input
                    type='number'
                    placeholder='10'
                    className='w-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-4 px-2 text-center'
                    onBlur={(e) => setPage(+e.target.value)}
                  />
                </div>
                <div className='-mt-px flex w-0 flex-1 justify-end'>
                  <button
                    onClick={() => setPage(page + 1)}
                    className='inline-flex items-center pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  >
                    Next
                    <ArrowLongRightIcon
                      aria-hidden='true'
                      className='ml-3 h-5 w-5 text-gray-400'
                    />
                  </button>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
      <InfoModal open={open} setOpen={setOpen} modalData={modalData} />
    </div>
  );
}

export default Bills;
