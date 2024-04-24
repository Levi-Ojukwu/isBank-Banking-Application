import React from 'react'

const Internet = () => {
  return (
    <>
        <div className='lg:px-52 px-10 mb-5 mt-10'>
            <h3 className='text-blue-900 font-semibold md:text-2xl text-xl'>İşbank Online Banking</h3>
        </div>

        <div className='px-10 lg:px-56 mt-3'>
            <p className='text-gray-500 text-left'>​İşCep transforms the traditional banking experience and gives you the advantage of accessing your bank wherever you wish!</p>
            <p className='text-gray-500 text-left mt-2 mb-5'>İşCep offers many new and innovative features to personal and corporate customers to ease their life. With Turkey's most comprehensive mobile banking app İşCep you can;</p>
            <div className='flex items-center gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500 text-left'>Be an İşbank customer with a few easy steps without going to bank branches.</p>
            </div>

            <div className='flex items-center gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500 text-left'>Easily perform nearly 150 banking transactions with English support.*</p>
            </div>

            <div className='flex items-center gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500 text-left'>Take a look at your financial status examining your assets and debt at first glance.</p>
            </div>

            <div className='flex items-center gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500 text-left'>Follow the latest financial news on “Economy Bulletin” </p>
            </div>

            <div className='flex items-center gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500 text-left'>Access the free internet at almost 5,000 TTNET WiFi hotspots located in all provinces of Turkey.</p>
            </div>
            <div className='flex items-center gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500 text-left'>Easily collect money in one account for special organizations</p>
            </div>
        </div>
    </>
  )
}

export default Internet