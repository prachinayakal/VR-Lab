"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_3_6T = () => {
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
        <TitleText title={<>Traveling Salesperson Problem (TSP)</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          The Traveling Salesperson Problem is a classic optimization problem in which a salesperson needs to visit a set of cities and return to the starting city, aiming to minimize the total distance traveled. The challenge is to find the shortest possible route that visits each city exactly once and returns to the starting point. <br /> <br />
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

        <TypingText_1 title="| Working of Traveling Salesperson Problem " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          <span className="font-extrabold text-white">
          1. Given Cities and Distances:
          </span>
          - You are given a list of cities, and the distances between each pair of cities are known. <br />
          <br />
          <span className="font-extrabold text-white">
          2. Dynamic Programming Approach:
          </span>{" "}
          - The problem is commonly solved using dynamic programming, which involves breaking down the problem into smaller subproblems and solving them.<br /> <br />
          <span className="font-extrabold text-white">
            {" "}
            3. Dynamic Programming Table:
          </span>{" "}
          - Create a table to store intermediate results, with rows and columns representing different subsets of cities.
          <br /> <br />
          <span className="font-extrabold text-white">
          4. Initialization:
          </span>{" "}
          - Initialize the table for the base case where the salesperson has visited only the starting city and no other cities. <br /> <br />
          <span className="font-extrabold text-white">
          5. Dynamic Programming Iteration:
          </span>{" "}
          - Fill in the table using a bottom-up approach, considering subproblems and building up to the main problem. <br /> <br />
          - For each cell (i, S) in the table, where i is the current city and S is a subset of cities: <br /> <br />
           - If S includes only the starting city, skip this iteration as it's the base case. <br /> <br />
            - Otherwise, calculate the minimum distance to reach city i from any city in subset S, considering all possible subsets of cities. <br /> <br />
          <span className="font-extrabold text-white">
          6. Optimal Solution:
          </span>{" "}
          - The bottom-right cell of the table contains the minimum distance required to visit all cities and return to the starting city, representing the optimal solution.<br /> <br />
          <span className="font-extrabold text-white">
          7. Backtracking (Optional):
          </span>{" "}
          - If needed, backtracking can be performed to reconstruct the actual path taken by the salesperson. <br /> <br />
         

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
          title="| Pseudocode for Traveling Salesperson Problem"
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
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
        <TypingText_1
          title="| Real-Life Application"
          textStyles="text-center"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          Imagine a delivery person who needs to visit multiple locations to drop off packages and return to the starting point. The Traveling Salesperson Problem is like finding the shortest route for the delivery person to cover all the destinations efficiently, minimizing the overall distance traveled. This optimization problem is relevant in real life for various scenarios, such as delivery routes, tour planning, and logistics optimization. The goal is to save time and resources by finding the most efficient way to visit all locations.
        </motion.p>
      </motion.div>
    </section>
      
  
  );
};

export default Chapter_3_6T;
