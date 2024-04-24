import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aside() {
  const [accNumber, setAccNumber] = useState("")
  const [accName, setAccName] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const regex = /^ISB-9201671563$/

    if(!regex.test(accNumber) || accName === "") {
        toast.error("Invalid Details")
    } else {
        localStorage.setItem("AccNumber",accNumber)
        localStorage.setItem("AccName",accName)
        navigate("/dashboard")
    }
  }

  const handleAccNumber = (e) => {
    setAccNumber(e.target.value)
  }
  
  const handleAccName = (e) => {
    setAccName(e.target.value)
  }
  
  return (
    <>
    <div className='flex'>
        <div className='hidden sm:grid sm:w-96 lg:w-60 bg-cyan-300'>
            <h2 className='text-blue-900 text-3xl mb-5 font-extrabold mt-10 p-5'>With isCep, <br /> your bank is <br /> wherever you <br /> wish</h2>
            <img src="../images/online-Phone.png" alt="Phone" className='w-48 ml-5 h-96' />
        </div>
        <div className='p-5 sm:p-10'>
            <div className='mb-10'>
            <h2 className='text-blue-900 text-left text-xl md:text-3xl font-normal'>Welcome to Isbank <br /> online banking</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-4 flex-col'>
                <input type="text" value={accNumber} onChange={handleAccNumber} className='bg-white rounded border p-2 text-gray-500' placeholder='Enter 16 digit account number' />
                <input type="text" value={accName} onChange={handleAccName} className='bg-white rounded border  p-2 text-gray-500' placeholder='Enter your account name' />
                </div>
                <div className='mt-5 text-right'>
                    <button type='submit' className='bg-blue-900 text-white font-semibold'>Login</button>
                </div>
            </form>

            <div className='mt-10'>
                <h2 className='text-blue-400 mb-3 text-left text-lg font-semibold'>Security</h2>
                <div className='bg-gray-100 p-3 pt-5 pb-5'>
                    <ul className='list-disc pl-5 pb-5'>
                        <li className='text-gray-500 text-sm md:text-base text-left'> Be sure to use licensed operating system and anti-virus software and update regularly.</li>
                        <li className='text-gray-500 text-sm md:text-base text-left'> Do not share your bank details to anybody who is not a bank staff.</li>
                        <li className='text-gray-500 text-sm md:text-base text-left'>Make sure you fill in the correct account number and account name.</li>
                        <li className='text-gray-500 text-sm md:text-base text-left'>Avoid sharing your information and do not make any money transfer under the direction of unauthorized staffs.</li>
                        
                    </ul>
                </div>
            </div>

            <div className='divide-solid mt-20'>
                <p className='text-gray-400 text-left text-sm'>©2024 Türkiye İş Bankası A.Ş</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Aside