import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

function card({data, reference}) {
  return (
    <>
          <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{bounceStiffness:600, bounceDamping:20}} className='relative pt-5 pl-5 w-[10vw] h-[30vh] rounded-[1rem] bg-slate-400 overflow-hidden'>
            <FaRegFileAlt />
            <p className='leading-none text-xs font-semibold mt-3 w-[8vw]'> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            <div className='flex justify-around items-center footer w-full h-[7vh] mt-10 '>
                <h5 className='font-semibold'> .4mb </h5>  
                <span className='bg-black text-white rounded-[3rem] p-1 flex items-center justify-center'> <LuDownload size='0.8rem' /> </span>
            </div>
                <div className='bg-green-700 capitalize font-semibold absolute left-0 overflow-hidden flex justify-center items-center px-10 '>
                  <h3 className=''> download now </h3>
                </div>
          </motion.div>

          <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{bounceStiffness:600, bounceDamping:20}} className='relative pt-5 pl-5 w-[10vw] h-[30vh] rounded-[1rem] bg-slate-400 overflow-hidden'>
            <FaRegFileAlt />
            <p className='leading-none text-xs font-semibold mt-3 w-[8vw]'> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            <div className='flex justify-around items-center footer w-full h-[7vh] mt-10 '>
                <h5 className='font-semibold'> .4mb </h5>  
                <span className='bg-black text-white rounded-[3rem] p-1 flex items-center justify-center'> <LuDownload size='0.8rem' /> </span>
            </div>
                <div className='bg-green-700 capitalize font-semibold absolute left-0 overflow-hidden flex justify-center items-center px-10'>
                  <h3> download now </h3>
                </div>
          </motion.div>

          <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{bounceStiffness:600, bounceDamping:20}} className='relative pt-5 pl-5 w-[10vw] h-[30vh] rounded-[1rem] bg-slate-400 overflow-hidden'>
            <FaRegFileAlt />
            <p className='leading-none text-xs font-semibold mt-3 w-[8vw]'> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            <div className='flex justify-around items-center footer w-full h-[7vh] mt-10 '>
                <h5 className='font-semibold'> .4mb </h5>  
                <span className='bg-black text-white rounded-[3rem] p-1 flex items-center justify-center'> <LuDownload size='0.8rem' /> </span>
            </div>
                <div className='bg-green-700 capitalize font-semibold absolute left-0 overflow-hidden flex justify-center items-center px-10'>
                  <h3> download now </h3>
                </div>
          </motion.div>
          
          <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{bounceStiffness:600, bounceDamping:20}} className='relative pt-5 pl-5 w-[10vw] h-[30vh] rounded-[1rem] bg-slate-400 overflow-hidden'>
            <FaRegFileAlt />
            <p className='leading-none text-xs font-semibold mt-3 w-[8vw]'> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            <div className='flex justify-around items-center footer w-full h-[7vh] mt-10 '>
                <h5 className='font-semibold'> .4mb </h5>  
                <span className='bg-black text-white rounded-[3rem] p-1 flex items-center justify-center'> <LuDownload size='0.8rem' /> </span>
            </div>
                <div className='bg-green-700 capitalize font-semibold absolute left-0 overflow-hidden flex justify-center items-center px-10'>
                  <h3> download now </h3>
                </div>
          </motion.div>
    </>
  )
}

export default card