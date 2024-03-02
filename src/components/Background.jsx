import React from 'react'

function Background() {
  return (
    <>
      <div className='fixed z-[2] h-screen w-full bg-zinc-950'>
        <div className='capitalize text-2xl font-semibold py-[5vh] flex justify-center absolute text-zinc-500 z-10 w-full top-[7vh]'> documents </div>
        <h1 className='text-white text-[15vh] uppercase leading-none tracking-tighter absolute left-[50%] top-1/2 -translate-y-[50%] -translate-x-[50%] font-semibold text-zinc-500'> docs. </h1>
      </div>
    </>
  )
}

export default Background