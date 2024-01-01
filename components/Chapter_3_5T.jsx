"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_3_5T = () => {
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
        <TitleText title={<>0/1 Knapsack Problem</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
         The 0/1 Knapsack Problem is a classic optimization problem where the goal is to maximize the total value of items selected, given a knapsack or backpack with a limited weight capacity. Each item has a weight and a value, and the challenge is to decide which items to include in the knapsack to achieve the maximum value without exceeding its capacity. <br /> <br />
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

        <TypingText_1 title="| Working of 0/1 Knapsack Problem " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          <span className="font-extrabold text-white">
            1. Items and Knapsack:
          </span>
            - You have a set of items, each with a specific weight and a value. <br /> <br />
            - You also have a knapsack with a maximum weight capacity.
 <br />
          <br />
          <span className="font-extrabold text-white">
            2. Dynamic Programming Table:
          </span>{" "}
             - Create a table to store intermediate results, with rows representing the number of items considered so far and columns representing the remaining capacity of the knapsack. <br /> <br />
          <span className="font-extrabold text-white">
            {" "}
            3. Initialization:
          </span>{" "}
          - Initialize the first row and column of the table to zero, as they represent the base case where there are no items or the knapsack has zero capacity. <br /> <br />
          
          <span className="font-extrabold text-white">
            4. Dynamic Programming Iteration:
          </span>{" "} <br /> <br />
          - Fill in the table using a bottom-up approach, considering subproblems and building up to the main problem. <br /> <br />
          - For each cell (i, j) in the table: <br /> <br />
          - If the weight of the current item is greater than the remaining capacity, the value in the cell is the same as the value in the cell above it (excluding the current item). <br /> <br />
          - Otherwise, the value in the cell is the maximum of two options: excluding the current item or including it. <br /> <br />
          <span className="font-extrabold text-white">
            5. Optimal Solution:
          </span>{" "} <br /> <br />
          - The bottom-right cell of the table contains the maximum value that can be obtained with the given set of items and knapsack capacity. <br /> <br />
          <span className="font-extrabold text-white">
          6. Backtracking (Optional):
          </span>{" "} <br /> <br />
          - If needed, backtracking can be performed to identify the specific items that contribute to the optimal value.
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[10px] mb-24"
        ></motion.img>
        </motion.div>
        <div className="gradient-02 z-0" />
      
        <motion.div
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-8 `}
      >

        <TypingText_1 title="| Pseudocode for 0/1 Knapsack " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          Code is Here
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

        <TypingText_1 title="| Real-Life Application " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          Imagine you have a backpack with a weight limit, and you're going on a trip. Each item you want to take has a different weight and importance to you. The 0/1 Knapsack Problem is like figuring out the best combination of items to carry in your backpack so that you maximize their total importance without exceeding the weight limit. It's like solving a puzzle to make the most out of the limited space you have, ensuring you bring the items that matter the most to you.
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

export default Chapter_3_5T;
