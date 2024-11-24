import React from 'react'

const MaxWidth = ({children}) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1500px]'>
                {children}
            </div>
        </div>
    )
}

export default MaxWidth