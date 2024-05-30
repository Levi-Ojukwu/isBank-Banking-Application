import React from 'react'

const Notfound = () => {
  return (
    
    <>
        <div className='mx-5 mt-60 px-4 py-7'>
            <div className='mb-4'>
              <h1 className='text-2xl font-bold text-left mb-5'>Page Not Found</h1>
              <p className='text-left text-lg font-medium'>Looks like you've followed a broken link or your host is due for renewal</p>
              
            </div>
            <hr />
            <div className='mt-4 mb-5'>
                <p className='text-left text-lg font-medium'>If this site is your site, and you weren't expecting a <span className='font-extrabold'>404</span> error for this path, please visit the host page to renew your host </p>
            </div>
        </div>
    </>
  )
}

export default Notfound