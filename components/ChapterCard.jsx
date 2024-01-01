'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';
import { useRouter } from 'next/router';

const ChapterCard = ({ Url, Qurl, title, subtitle, index }) => {
 const router = useRouter();

return(

  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <div className="w-full flex justify-between items-center gap-8">
   
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
      <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
        <div>
  </div>
        <div>
   
  </div>
      </div>

      <div className="flex flex-col gap-4">
        <button type="button" className="flex items-center py-5 px-10 bg-[#25618B] rounded-[3px] gap-[12px]" onClick={() => router.push(Url)}>
          
          <h1 className="font-normal  text-[16px] text-white">
            Study Algo
          </h1>
        </button>
        <button type="button" className="flex items-center py-5 px-10 bg-[#25618B] rounded-[3px] gap-[12px]" onClick={() => router.push(Qurl)}>
          
          <h1 className="font-normal text-[16px] text-white">
            Take Quiz
          </h1>
        </button>
       
      </div>
    </div>
  
  </motion.div>
  
  
);
}

export default ChapterCard ;
