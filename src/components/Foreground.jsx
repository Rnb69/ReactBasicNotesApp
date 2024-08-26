import React, { useRef} from 'react';
import Card from './Card';


function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Here it will show your daily tasks and ToDo list.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagtitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "Here it will show your daily tasks and ToDo list.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: false, tagtitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "Here it will show your daily tasks and ToDo list.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagtitle: "Upload", tagColor: "blue"},
        },
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground;