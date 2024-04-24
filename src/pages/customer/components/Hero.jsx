import React from 'react'

const Hero = () => {
  return (
    <>
        <div>
            <div className='p-20 pb-10'>
                <h2 className='text-blue-900 text-4xl font-semibold text-left'>Become Our Customer</h2>
                <p className='text-gray-700 text-lg text-left mt-1'>​Becoming an İşbank customer is easy and hassle-free. Explore what information is needed to open your bank account.​</p>
            </div>

            <div className='border-blue-600 border mx-20 p-5'>
                <p className='text-gray-500 text-left'>You can set up your bank account at İşbank quickly and easily. Just gather the following documents and information, and then <span className='text-blue-700 font-semibold'>visit the nearest İşbank branch.</span></p>

                <div className='flex items-center mt-5 gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500'>Your valid passport, not older than 10 years, or (if applicable) valid residence permit*</p>
            </div>

                <div className='flex items-center gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500'>Your unique Foreigner’s Identification Number or Tax Identification Number**</p>
            </div>

                <div className='flex items-center  gap-3 mb-1'>
                <img src="../images/check.png" className='w-5 h-5' alt="Checkmark" />
                <p className='text-gray-500'>Proof*** of your valid residence address in Turkey or (if applicable) the printed address on your passport</p>
            </div>

            <div className='mt-8'>
                <ul className='list-disc pl-5'>
                    <li className='text-gray-500 mt-3 text-left'>If no valid passport or residence permit can be presented, an official document, issued and approved by the Republic of Turkey Ministry of Finance, validating the account applicant’s national ID document will be eligible.</li>
                    <li className='text-gray-500 mt-3 text-left'>Foreigner’s Identity Number is issued by civil registration offices, administered by the Republic of Turkey Ministry of Interior. Tax Identification Number is issued by tax offices, administered by the Republic of Turkey Ministry of Finance.</li>
                    <li className='text-gray-500 mt-3 text-left'>a copy of electric, water, natural gas or phone bill addressed to your name and issued in the last three months by Turkish service providers</li>
                </ul>
            </div>
            </div>

            {/* <div>
            
            </div> */}
        </div>
    </>
  )
}

export default Hero