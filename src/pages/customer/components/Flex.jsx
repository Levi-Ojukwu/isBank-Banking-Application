import React from 'react'

const Flex = () => {
  return (
    <> 
        <div className='px-32 mt-10 mb-20'>
            <div>
            <h2 className='text-blue-900 text-left font-semibold text-2xl mb-5'>Türkiye İş Bankası Net Income</h2>
            <div className='flex items-center gap-10'>
                <img src="../images/customer2.png" className='w-2/4 h-80' alt="Net Income" />
                <p className='text-gray-500 text-2xl font-semibold text-left'>Turkiye Is Bankasi reported TRY18.71B in Net Income for its fiscal quarter ending in June of 2023.</p>
            </div>
            </div>
            
            <div className='mt-20'>
            <h2 className='text-blue-900 text-left font-semibold text-2xl mb-5'>Türkiye İş Bankası Service <br /> Accomplishment</h2>
            <div className='flex items-center mt-5 gap-10'>
                <p className='text-gray-500 text-2xl font-semibold text-left'>We believe our accomplishments are a result of hard work, team spirit, and a determination to constantly improve upon our services.</p>
                <img src="../images/customer1.png" className='border-2 border-blue-400 w-2/4 h-80' alt="Net Income" />
            </div>
            </div>
        </div>
    </>
  )
}

export default Flex