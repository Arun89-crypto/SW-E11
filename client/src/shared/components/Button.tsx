import React from 'react'

export const PrimaryButton = (props: any) => {
  return (
    <button className='bg-secondary h-12 rounded px-6 lg:px-8 text-white uppercase text-xs'>
      {props.msg}
    </button>
  )
}

export const SecondaryButton = (props: any) => {
  return (
    <button className='border border-secondary h-10 rounded px-6 text-secondary uppercase text-xs'>
      {props.msg}
    </button>
  )
}

