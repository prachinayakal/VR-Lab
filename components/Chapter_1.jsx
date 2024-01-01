'use client';

import { motion } from "framer-motion";
import { ChapterCard,TypingText_1, TitleText } from "../components";
import styles from "../styles";
import {staggerContainer } from "../utils/motion";
import { chapter_1} from '../constants';



const Chapter_1 = () => { 
  return(
    <section className={`${styles.paddings}`} id = "chapter_1"> 
    <motion.div
      variants={staggerContainer}
      initial = "hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText_1 title="| Chapter 1" textStyles="text-center"/>
      <TitleText title={<>Fundamentals of Algorithms and <br className="md:block hidden" /> Performance Analysis</>} textStyles="text-center"/>

      <div className="mt-[50px] flex flex-col gap-[30px]">
        {chapter_1.map((item, index) => (
          <ChapterCard key={`chapter_1-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div> 

   
    
    
   
    </section>
   
  )
    
 }

export default Chapter_1;
