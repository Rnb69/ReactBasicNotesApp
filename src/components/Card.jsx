import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose} from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    <motion.div 
    drag 
    dragConstraints={reference} 
    whileDrag={{scale: 1.2}} 
    dragElastic={0.1}
    dragTransition = {{bounceStiffness: 100, bounceDamping: 30}} 
    className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 px-5 py-10 overflow-hidden text-white p-5'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-5 py-3 mb-3'>
                <h6 className='font-thin text-sm'>{data.filesize}</h6>
                <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-md'>{data.tag.tagtitle}</h3>
            </div>
            )}
        </div>
    </motion.div>
  )
}

export default Card
