import React from 'react'

const Hero = () => {
  return (
    <> 
      <div>
        <h1 className='text-blue-900 text-left bg-blue-100 mt-5  border-4 pt-32 text-7xl font-medium p-20'>Our accomplishments are a result of hard work, team spirit and determination</h1>
      </div>

      <div className='pt-20 mb-10'>
        <h2 className='text-gray-700 text-3xl font-semibold'>Türkiye İş Bankası – About İşbank</h2>
      </div>

      <div className='px-96'>
        <p className='text-gray-500 text-left'>Türkiye İş Bankasi A.Ş. was founded on August 26, 1924, as the First National Bank of the Republican Period, under the directives of Atatürk, in accordance with decisions taken at the First Congress of Economy, held in Izmir. Türkiye İş Bankasi, under the leadership of the first General Director Celal Bayar, began providing services in two branches and with 37 staff members.</p>
        <p className='text-gray-500 text-left mt-5'>As a key leading and reliable bank, holding financial powerful position in the region, our vision is to make the Bank the preferred bank by customers, shareholders and employees.</p>
        <p className='text-gray-500 text-left mt-5'>Our values encompass the representation of the Bank's corporate identity, achieving the vision and goals that guide our work and acquisition of lifestyle and business values among employees:</p>

        <ul className='mt-2 list-disc ml-4'>
            <li className='text-gray-500 text-left'>Honesty and Reliability</li>
            <li className='text-gray-500 text-left'>Leading and Innovative</li>
            <li className='text-gray-500 text-left'>Client-centered and providing high quality services.</li>
            <li className='text-gray-500 text-left'>Respectful and sensitive to society, humanity and environment.</li>
            <li className='text-gray-500 text-left'>Transparent</li>
        </ul>
      </div>
      <div className='flex px-52 mb-16 gap-10'>
        <div className='mt-20'>
            <img src="../images/investor-relation.jpeg" className='w-52 h-36 rounded-3xl' alt="" />
            <div>
            <p className='text-blue-900 font-semibold text-md flex flex-col mt-2'>Investor <span>Relations</span></p>
            </div>
        </div>

        <div className='mt-20'>
            <img src="../images/finantial-statement.webp" className='w-52 h-36 rounded-3xl border' alt="" />
            <div>
            <p className='text-blue-900 font-semibold text-md flex flex-col mt-2'>Financial <span>Statements</span></p>
            </div>
        </div>

        <div className='mt-20'>
            <img src="../images/investor-presentation.webp" className='w-52 h-36 rounded-3xl border' alt="" />
            <div>
            <p className='text-blue-900 font-semibold text-md flex flex-col mt-2'>Investor <span>Presentations</span></p>
            </div>
        </div>

        <div className='mt-20'>
            <img src="../images/debit-card.jpeg" className='w-52 h-36 rounded-3xl border' alt="" />
            <div>
            <p className='text-blue-900 font-semibold text-md flex flex-col mt-2'>Debit <span>Cards</span></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero