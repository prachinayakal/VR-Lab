"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_3_2T = () => {
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
        <TitleText title={<>Multistage Graph </>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
         A multistage graph is a directed, weighted graph that consists of multiple stages, partitioning vertices into disjoint subsets. Each stage represents a phase of the problem, and edges connect vertices between adjacent stages. The goal is to find the path with the minimum cost from a designated source vertex to a sink vertex. This problem is commonly solved using dynamic programming principles. 
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

        <TypingText_1 title="| Working of Multistage Graph  " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          In a multistage graph, the dynamic programming approach involves breaking down the problem into subproblems and finding optimal solutions for each subproblem, which are then combined to obtain the overall optimal solution. The stages of the graph are traversed in a bottom-up manner, starting from the sink and working towards the source. <br /> <br />
          <span className="font-extrabold text-white">
            1.	Optimal Substructure and Recursive Equation: 
          </span> <br /> <br />
          •	Define a cost function C(i, j) representing the minimum cost to reach the sink from stage i, node j.  <br /> <br />
          •	The recursive equation is expressed as: <br />
              C(i, j) = c(j, k) + C(i+1, k) for all k in stage i+1 <br /> <br />
          •	The base case is when i is the last stage, and C(i, j) is simply the cost of the edge (j, sink). <br /> <br />


          <span className="font-extrabold text-white">
          2.	Dynamic Programming Approach: 
          </span>{" "} <br /> <br />
          •	Starting from the second-to-last stage (k-2), compute the optimal cost for each node in each stage based on the recursive equation. <br /> <br />
          •	Iterate through the stages in a bottom-up manner, updating the cost values for each node. <br /> <br />
          •	At the end of this process, the minimum cost to reach the sink from the source is obtained. <br /> <br />

          
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
          title="| Pseudocode/Steps for Multistage Graph "
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
       
    </section>
      
  
  );
};

export default Chapter_3_2T;
