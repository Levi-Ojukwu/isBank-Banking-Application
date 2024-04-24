import React from 'react'

const Form = () => {
  return (
    <>
        <div className='px-5 lg:px-52'>
            <form className='text-left ml-2 mt-10'>
                <div className=''>
                    <p className='text-blue-900 text-sm sm:text-base font-semibold mb-1'>Enter Destination Account</p>
                    <input type="text" placeholder='Account Number' className='bg-gray-100 text-gray-500 rounded border-2 border-blue-100 text-sm sm:text-base py-2 w-full sm:py-3 px-2 sm:w-3/5' />
                </div>

                <div className='mt-6'>
                    <p className='text-blue-900 text-sm sm:text-base font-semibold mb-1'>Enter Destination Name</p>
                    <input type="text" placeholder='Account Name' className='bg-gray-100 text-gray-500 rounded border-2 border-blue-100 text-sm sm:text-base py-2 w-full sm:py-3 px-2 sm:w-3/5' />
                </div>

                <div className='mt-6'>
                    <p className='text-blue-900 text-sm sm:text-base font-semibold mb-1'>Amount</p>
                    <input type="text" placeholder='0.00' className='bg-gray-100 text-gray-500 rounded border-2 border-blue-100 text-sm sm:text-base py-2 w-full sm:py-3 px-2 sm:w-3/5' />
                </div>

                <div className='mt-6'>
                    <p className='text-blue-900 text-sm sm:text-base font-semibold mb-1'>Transaction Description</p>
                    <input type="text" placeholder='Transaction Description' className='bg-gray-100 text-gray-500 rounded border-2 border-blue-100 text-sm sm:text-base py-2 w-full sm:py-3 px-2 sm:w-3/5' />
                </div>

                <div className='flex text-right sm:text-center gap-1 mt-5 mb-10 flex-col ml-14'>
                <img src="../images/proceed.png" className='w-8 h-6 mr-7 sm:mr-2 self-end sm:self-center' alt="Proceed" />
                <div>
                <button className='text-blue-900 font-bold text-xs sm:text-base border-gray-400 hover:bg-blue-300 hover:border-gray-400 transition duration-300 border-2 bg-blue-200'>Proceed</button>
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default Form