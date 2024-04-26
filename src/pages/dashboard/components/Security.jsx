import React from 'react'

const Security = () => {
  return (
    <>
        <div className='px-10 lg:px-60 mb-24 mt-32'>
            <div>
                <div className='sm:flex sm:flex-row flex flex-col gap-4 items-center md:gap-10'>
                    <div className='flex flex-col items-start md:items-center'>
                        <img src="../images/security.png" className='md:w-14 md:h-14 w-7 mb-2 md:mb-4' alt="Security" />
                        <h2 className='text-gray-800 font-bold text-sm md:text-2xl '>Safe and secure</h2>
                        <p className='text-gray-500 text-left text-xs md:text-lg'>Your safety is our top priority. Multi-level security keeps your money and data protected.</p>
                    </div>

                    <div className='flex flex-col items-start md:items-center md:mb-5'>
                        <img src="../images/customer-service.png" className='md:w-20 md:h-20 w-10 mb-2' alt="Security" />
                        <h2 className='text-gray-800 font-bold text-sm md:text-2xl'>24/7  support</h2>
                        <p className='text-gray-500 text-left text-xs md:text-lg'>Fast and reliable transfer support to your friends and loved ones.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Security