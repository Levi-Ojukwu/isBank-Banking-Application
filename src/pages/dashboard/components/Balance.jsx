import React from 'react'

const Balance = () => {
  return (
    <>
        <div className='bg-blue-900 mx-60 rounded-xl h-40'>
            <div className='p-4 pt-0 px-0'>
                <div className='bg-blue-200 p-3 pb-4 rounded-t-xl'>
                    <h2 className='text-left text-gray-800 text-lg font-normal'>Total Balance</h2>
                </div>
                <div className='flex mt-5 items-center justify-between pr-10'>
                    <p className='text-left text-2xl flex ml-3 items-center gap-2 font-semibold'>US$<span className='text-xl font-medium'>9,980,000.00</span> </p>
                    <p>Show balance</p>

                </div>
            </div>
            
            {/* <div className='p-4'>
                <h2 className='text-left text-gray-200 text-lg font-semibold'>Total balance</h2>
            </div> */}
        </div>
    </>
  )
}

export default Balance