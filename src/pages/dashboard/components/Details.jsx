import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <>
        <div className='mx-60 my-5'>
            <div className='ml-5'>
                <p className='text-blue-900 text-left text-xl'>ISB-9201671563 - <span className='text-green-600 font-semibold'>ACTIVE</span></p>
            </div>

            <div className='ml-5 mt-4'>
                <p className='text-gray-500 text-left text-xl'>MELHEM JAMIL AMHAZ</p>
                <p className='text-left text-gray-600 mt-7 text-2xl flex items-center gap-2 font-semibold'>US$<span className='text-xl font-medium'>9,980,000.00</span></p>
            </div>

            <div className='text-right flex gap-2 mt-3 flex-col'>
                <img src="../images/transfer.png" className='w-8 h-6 mr-8 self-end' alt="Transfer" />
                <div className='mt-1'>
                {/* <button className='text-blue-900 font-bold border-gray-400 hover:bg-blue-300 hover:border-gray-400 transition duration-300 border-2 bg-blue-200'>Transfer</button> */}
                
                <Link to="/transfer" className='text-blue-900 px-3 p-2 rounded-lg font-bold border-gray-400 hover:bg-blue-300 hover:border-gray-400 transition duration-300 border-2 bg-blue-200'>Transfer</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details