import React from 'react'

export default function Input ({ title = '', customInput, ...props }) {
  return (
    <div className='flex flex-col mb-3'>
      <label className='ms-1 font-medium'>
        {props.required && <span className='me-1 text-red-700'>*</span>}
        {title}
      </label>

      {customInput ? (
        React.cloneElement(customInput, { ...props })
      ) : (
        <input
          className='py-3 px-4 block w-full border border-sky-400 rounded-lg text-sm 
                      focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 
                      disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 
                      focus:bg-neutral-800'
          {...props}
        />
      )}
    </div>
  )
}
