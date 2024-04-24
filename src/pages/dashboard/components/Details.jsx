import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  const AccNumber = localStorage.getItem("AccNumber")
  const AccName = localStorage.getItem("AccName")
  return (
    <>
        <div className='sm:mx-16 lg:mx-60 my-5'>
            <div className='ml-5'>
                <p className='text-blue-900 text-left sm:text-xl'>{AccNumber} - <span className='text-green-600 font-semibold'>ACTIVE</span></p>
            </div>

            <div className='ml-5 mt-4'>
                <p className='text-blue-900 uppercase text-left sm:text-xl'>{AccName}</p>
                <p className='text-left text-xl sm:text-2xl flex mt-2 items-center gap-2 font-semibold text-gray-600'>US$<span className='text-base sm:text-xl font-medium'>9,980,000.00</span></p>
            </div>

            <div className='text-right flex gap-2 mt-3 flex-col'>
                <img src="../images/transfer.png" className='w-8 h-6 mr-12 sm:mr-8 self-end' alt="Transfer" />
                <div className='mt-1 mr-4 sm:mr-0'>
                {/* <button className='text-blue-900 font-bold border-gray-400 hover:bg-blue-300 hover:border-gray-400 transition duration-300 border-2 bg-blue-200'>Transfer</button> */}
                
                <Link to="/transfer" className='text-blue-900 px-3 p-2 rounded-lg font-bold border-gray-400 hover:bg-blue-300 hover:border-gray-400 transition duration-300 border-2 bg-blue-200'>Transfer</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details