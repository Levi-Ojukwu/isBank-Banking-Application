import { Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoEyeClosed } from 'react-icons/go'
import { RxEyeOpen } from 'react-icons/rx'

const Balance = () => {
  const [showBalance, setShowBalance] = useState(false)

  const handleShowBalance = () => {
    if (showBalance === false) {
        setShowBalance(true)
    } else {
        setShowBalance(false)
    }
  }

  return (
    <>
        <div className='bg-blue-900 mx-3 mt-5 sm:mx-20 lg:mx-60 rounded-xl h-36 lg:h-40'>
            <div className='p-4 pt-0 px-0'>
                <div className='bg-blue-200 p-3 pb-4 rounded-t-xl'>
                    <h2 className='text-left text-gray-800 text-sm sm:text-lg font-normal'>Total Balance</h2>
                </div>
                <div className='flex mt-2 items-center justify-between pr-5 sm:pr-10'>
                    <p className='text-left text-white text-xl sm:text-2xl flex ml-3 items-center gap-2 font-semibold'>US$ {showBalance ? <span className='text-base sm:text-xl font-medium'>9,980,000.00</span> : <span className='text-base sm:text-xl font-medium'>********</span>}</p>
                    
                    <div>
                        <p onClick={handleShowBalance} className='text-xs text-white p-1 bored-transparent sm:px-3 sm:py-2 sm:text-base'>{!showBalance ? <Icon as={RxEyeOpen} fontSize={"26px"} /> : <Icon as={GoEyeClosed} fontSize={"26px"} />}</p>
                    </div>
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