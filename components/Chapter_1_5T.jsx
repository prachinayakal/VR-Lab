"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Chapter_1_5T = () => {
  return (
    <section className={`${styles.paddings} relative z-10 gap-8`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-8 `}
      >
        <TitleText title={<>Quick Sort</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        
          <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-white "
          >

Quicksort is a sorting algorithm based on the divide and conquer approach where <br /> <br />
            1. Determining outcomes in games{" "}
          
          <br />
          <br />
         
            2. Preventing communications on a shared channel from interfering
            with each other{" "}
         
          <br />
          <br />
          
            {" "}
            3. Initializing passwords{" "}
          
          <br />
          <br />
          
            4. Performing statistical (e.g. "Monte Carlo") analysis on a system{" "}
         
          <br />
          <br />
         
            5. Simulating real-world behaviors and processes
          
          <br />
          <br />
         
            6. Emergent system generation using genetic hybridization
          
          <br />
          <br />
          </motion.p>
          <motion.img src="/qc.png" alt = "qc img">
            
          </motion.img>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[10px] mb-24"
        ></motion.img>
        </motion.div>
        <motion.div
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-8 `}
      >

        <TypingText_1 title="| Working of Quicksort Algorithm " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          <span className="font-extrabold text-white">
            1. Selecting Pivot :
          </span>
          The process starts by selecting one element (known as the pivot) from the list; this can be any element. A pivot can be: <br />
          <br />
          ● Any element at random <br />
          ● The first or last element <br />
          ● Middle element <br />

          <span className="font-extrabold text-white">
            2. Rearranging the Array :
          </span>{" "}
          Now, the goal here is to rearrange the list such that all the elements less than the pivot are towards the left of it, and all the elements greater than the pivot are towards the right of it. <br /> <br />
          ● The pivot element is compared to all of the items starting with the first index. If the element is greater than the pivot element, a second pointer is appended. <br />
          ● When compared to other elements, if a smaller element than the pivot element is found, the smaller element is swapped with the larger element identified before. <br /> <br />
          <span className="font-extrabold text-white">
            {" "}
            3. Dividing Subarrays :
          </span>{" "}
          Once we have partitioned the array, we can break this problem into two sub-problems. First, sort the segment of the array to the left of the pivot, and then sort the segment of the array to the right of the pivot.
          <br /> <br />

          
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[10px] mb-24"
        ></motion.img>
        </motion.div>

        <motion.div
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-8 `}
      >
        <TypingText_1
          title="| Algorithms"
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Code is here
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[10px] mb-24"
        ></motion.img>
        </motion.div>
       
  <motion.div
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-8 `}
      >
        <TypingText_1
          title="| Applications "
          textStyles="text-center"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          <span className="font-extrabold text-white">
          1.	Commercial Computing is used in various government and private organizations for the purpose of sorting various data like sorting files by name/date/price, sorting of students by their roll no., sorting of account profile by given id, etc.
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          2.	The sorting algorithm is used for information searching and as Quicksort is the fastest algorithm so it is widely used as a better way of searching.
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
            {" "}
          3.	It is used everywhere where a stable sort is not needed.
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          4.	Quicksort is a cache-friendly algorithm as it has a good locality of reference when used for arrays.
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          5.	It is tail -recursive and hence all the call optimization can be done.
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          6.	It is an in-place sort that does not require any extra storage memory.
          </span>{" "}
          <br />
          <br />
        </motion.p>
      </motion.div>
    </section>
      
  
  );
}

export default Chapter_1_5T;
