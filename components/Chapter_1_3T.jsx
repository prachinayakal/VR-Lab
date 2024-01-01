"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Chapter_1_3T = () => {
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
        <TitleText title={<>Binary Search Algorithm</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Binary search is the search technique that works efficiently on sorted lists. Hence, to search an element into some list using the binary search technique, we must ensure that the list is sorted.
          <br /> <br /> Binary search follows the divide and conquer approach in which the list is divided into two halves, and the item is compared with the middle element of the list. If the match is found then, the location of the middle element is returned. Otherwise, we search into either of the halves depending upon the result produced through the match.
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

        <TypingText_1 title="| Working " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
         The binary search algorithm works by comparing the element to be searched by the middle element of the array and based on this comparison follows the required procedure. <br /> <br />
          <span className="font-extrabold text-white">
          Case 1 − element = middle, the element is found return the index.
          </span>{" "}
           <br /> <br />
          <span className="font-extrabold text-white">
            {" "}
            Case 2 − element &gt; middle, search for the element in the sub-array starting from middle+1 index to n.
          </span>{" "}
          <br /> <br />
          <span className="font-extrabold text-white">
          Case 3 − element &lt; middle, search for element in the sub-array starting from 0 index to middle -1.
          </span>
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
          title="| Methods"
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          There are two methods to implement the binary search algorithm -
          <br /> <br />
          <span className="font-extrabold text-white">
          1. Iterative method : 
          </span>{" "}
          <br />
          <br />
          In the case of Iterative algorithms, a certain set of statements are repeated a certain number of time.An Iterative algorithm will use looping statements such as for loop, while loop or do-while loop to repeat the same steps number of time.<br />{" "}
          <br />
          code is here <br /> <br />
          <span className="font-extrabold text-white">
            2. Recursive method : 
          </span>{" "}
          <br /> <br />
          Recursive algorithm, a function calls itself again and again till the base condition(stopping condition) is satisfied. <br /> <br />
          code is here 
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
          title="| Real life applications of Binary Search"
          textStyles="text-center"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          <span className="font-extrabold text-white">
          1. Dictionary
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          2. Debugging a linear piece of code
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          3. Figuring out resource requirements for a large system
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          4. Find values in sorted collection
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          5. Semiconductor test programs
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
          6. Numerical solutions to an equation
          </span>{" "}
          <br />
          <br />
        </motion.p>
      </motion.div>
    </section>
      
  
  );
};

export default Chapter_1_3T;
