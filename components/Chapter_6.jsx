'use client';

import { motion } from "framer-motion";
import { ChapterCard,TypingText, TitleText, TypingText_1 } from "../components";
import styles from "../styles";
import {staggerContainer } from "../utils/motion";
import { chapter_6 } from '../constants';

const Chapter_6 = () => { 
    return(
       
      <section className={`${styles.paddings}`} id = "chapter_6"> 
       <div className="mb-[50px] h-[2px] bg-white opacity-50" />
      <motion.div
        variants={staggerContainer}
        initial = "hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
  
        <TypingText_1 title="| Chapter 6" textStyles="text-center"/>
        <TitleText title={<>NP-Hard and NP-Complete problems </>} textStyles="text-center"/>
  
        <div className="mt-[50px] flex flex-col gap-[30px]">
        
          {chapter_6.map((item, index) => (
            <ChapterCard key={`chapter_6-${index}`} {...item} index={index + 1} />
          ))}
          
        </div>
        
      </motion.div> 
      </section>
    )
      
   }
  
  export default Chapter_6;
  