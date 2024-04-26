import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ErrorModal from '../../../components/modal/Modal'

const Form = () => {
    const [accNumber, setAccNumber] = useState("")
    const [accName, setAccName] = useState("")
    const [amount, setAmount] = useState("")
    const [txDesc, setTxDesc] = useState("")
    const [message, setMessage] = useState(null)
//   const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const regex = /^[A-Z0-9-]{14}$/
    // Remove any non-numeric characters from the input value
    const numericValue = parseFloat(amount.replace(/[^0-9.]/g, ''));

    if(!regex.test(accNumber) || accName === "") {
        toast.error("Invalid Details")
    } else if (numericValue > 1000000 || numericValue < 10) {
        // Check if the amount is above $1,000,000 or below $10
        toast.error('Amount must be between $10 and $1,000,000');
    } else {
        return setMessage({
            message: "This is a fixed deposit account, an OTP is required to transfer"
        })
    }
  }

  const handleAccNumber = (e) => {
    setAccNumber(e.target.value)
  }
  
  const handleAccName = (e) => {
    setAccName(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleDesc = (e) => {
    setTxDesc(e.target.value)
  }

  const handleCancel = () => {
    setMessage(null)
  }

  return (
    <>
        {message && <ErrorModal message={message.message} onCancel={handleCancel} />}
        <div className='px-5 lg:px-52'>
            <form onSubmit={handleSubmit} className='text-left ml-2 mt-10'>
                <div className=''>
                    <p className='text-blue-900 text-sm sm:text-base font-semibold mb-1'>Enter Destination Account</p>
                    <input value={accNumber} onChange={handleAccNumber} type="text" placeholder='Account Number' className='bg-gray-100 text-gray-500 rounded border-2 border-blue-100 text-sm sm:text-base py-2 w-full sm:py-3 px-2 sm:w-3/5' />
                </div>

                <div className='mt-6'>
                    <p className='text-blue-900 text-sm sm:text-base font-semibold mb-1'>Enter Destination Name</p>
                    <input value={accName} onChange={handleAccName} type="text" placeholder='Account Name' className='bg-gray-100 text-gray-500 rounded border-2 border-blue-100 text-sm sm:text-base py-2 w-full sm:py-3 px-2 sm:w-3/5' />
                </div>

                <div className='mt-6'>
                    <p className='text-blue-900 text-sm sm:text-base font-semibold mb-1'>Amount</p>
                    <input value={amount} onChange={handleAmount} type="number" placeholder='0.00' className='bg-gray-100 text-gray-500 rounded border-2 border-blue-100 text-sm sm:text-base py-2 w-full sm:py-3 px-2 sm:w-3/5' />
                </div>

                <div className='mt-6'>
                    <p className='text-blue-900 text-sm sm:text-base font-semibold mb-1'>Transaction Description</p>
                    <input value={txDesc} onChange={handleDesc} type="text" placeholder='Transaction Description' className='bg-gray-100 text-gray-500 rounded border-2 border-blue-100 text-sm sm:text-base py-2 w-full sm:py-3 px-2 sm:w-3/5' />
                </div>

                <div className='flex text-right sm:text-center gap-1 mt-5 mb-10 flex-col ml-14'>
                <img src="../images/proceed.png" className='w-8 h-6 mr-6 sm:mr-2 self-end sm:self-center' alt="Proceed" />
                <div>
                <button type='submit' className='text-blue-900 font-bold text-xs sm:text-base border-gray-400 hover:bg-blue-300 hover:border-gray-400 transition duration-300 px-3 py-2 border-2 bg-blue-200'>Proceed</button>
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default Form