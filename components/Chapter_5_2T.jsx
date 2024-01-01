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
           Given N items with weights W[0..n-1], values V[0..n-1] and a knapsack with capacity C, select the items such that:  <br /> <br />
 

          The sum of weights taken into the knapsack is less than or equal to C. <br /> <br />
          The sum of values of the items in the knapsack is maximum among all the possible combinations. <br /> <br />
 
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
        <TitleText title={<>LC Branch and Bound solution</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Follow the steps below to solve the problem: <br /> <br />
 

        Sort the items based on their value/weight(V/W) ratio. <br /> <br />
        Insert a dummy node into the priority queue.<br /> <br />
        Repeat the following steps until the priority queue is empty:<br /> <br />
        Extract the peek element from the priority queue and assign it to the current node. <br /> <br />
        If the upper bound of the current node is less than minLB, the minimum lower bound of all the nodes explored, then there is no point of exploration. So, continue with the next element. The reason for not considering the nodes whose upper bound is greater than minLB is that, the upper bound stores the best value that might be achieved. If the best value itself is not optimal than minLB, then exploring that path is of no use. <br /> <br />
        <br /> <br />
        Update the path array. <br /> <br />
        If the current node’s level is N, then check whether the lower bound of the current node is less than finalLB, minimum lower bound of all the paths that reached the final level. If it is true, update the finalPath and finalLB. Otherwise, continue with the next element. <br /> <br />
        Calculate the lower and upper bounds of the right child of the current node. <br /> <br />
        If the current item can be inserted into the knapsack, then calculate the lower and upper bound of the left child of the current node. <br /> <br />
        Update the minLB and insert the children if their upper bound is less than minLB. <br /> <br />
 
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
