import React, { useRef, useState } from 'react'
import Card from './Card';

function Foreground() {
  const ref = useRef(null);
  const data = {
    desc: 'mac sdfjhsdjk sdafdaj daca',
    filesize: '.9mb',
    close: true,
    tag: {isopen: true, tagtitle: 'download now', tagcolor: 'green'}
  }
  
  return (
    <>
        <div ref = {ref} className='fixed w-full top-0 h-screen bg-sky-800/50 z-[3] '>
           <Card reference={ref} />
        </div>
    </>
  )
}

export default Foreground