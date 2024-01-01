"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_5_2T = () => {
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
        <TitleText title={<>LC Branch and Bound solution</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Branch and bound is an algorithm to find the optimal solution to various optimization problems. It is very similar to the backtracking strategy, only just in the backtracking method state-space tree is used. The benefit of the branch and bound method is that it does not limit us to only a certain way of traversing the tree. Though it also has certain drawbacks, one being it is much slower and gets an exponential time complexity in the worst cases.  The branch and bound method are applicable to many discrete combinational problems.
          <br /> <br /> 
The branch and bound can be solved using FIFO, LIFO, and least count strategies. The selection rule used in the FIFO or LIFO linked list can sometimes be erroneous, as it does not give preference to certain nodes, and hence may not find the best response as quickly. To overcome this drawback we use the least cost method, which is also considered to be an intelligent method as it uses an intelligent ranking method. It is also referred to as the approximate cost function “C”. 
          <br /> <br />
          The least-cost method of branch and bound selects the next node based on the Heuristic Cost Function, and it picks the one with the least count, therefore it is one of the best methods. In the 0/1 knapsack problem, we need to maximize the total value, but we cannot directly use the least count branch and bound method to solve this. 
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[10px] mb-24"
        ></motion.img>
        </motion.div>
       
    </section>
      
  
  );
};

export default Chapter_5_2T;
