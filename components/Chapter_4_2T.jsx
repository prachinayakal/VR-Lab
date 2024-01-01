"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_4_2T = () => {
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
        <TitleText title={<>Depth-First Search (DFS) in Backtracking</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
         Depth-First Search (DFS) in backtracking is an algorithm used to explore all possible solutions in a systematic way by going as deep as possible along each branch before backtracking. It is particularly useful in solving problems where the goal is to find a solution or reach a valid state by exploring as far as possible along each path. <br /> <br />
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

        <TypingText_1 title="| Working of Depth-First Search in Backtracking " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          <span className="font-extrabold text-white">
            1. Starting Point:
          </span>
           - The algorithm starts at the initial state or configuration of the problem.<br />
          <br />
          <span className="font-extrabold text-white">
          2. Exploration Process:{" "}
          </span>{" "}
          - It explores as far as possible along one branch before backtracking. <br /> <br />
          - The algorithm systematically explores all possible choices at each decision point.
 <br /> <br />
          <span className="font-extrabold text-white">
            {" "}
            3. Backtracking:{" "}
          </span>{" "}
          - If a solution is not found at the current branch, the algorithm backtracks to the previous decision point and explores other choices.
{" "}
          <br /> <br />
          <span className="font-extrabold text-white">
            4. Recursive Nature:{" "}
          </span>{" "}
          - DFS is often implemented using recursion, where the exploration of each choice leads to a recursive call, continuing the exploration process. <br /> <br />
          <span className="font-extrabold text-white">
          5. Completing the Search{" "}
          </span>{" "}
          - The search continues until all possible paths or solutions are explored, ensuring a thorough examination of the problem space.
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
          title="| Pseudocode"
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Code Is here
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
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          
Consider a puzzle-solving scenario, such as finding the solution to a maze. Depth-First Search in backtracking is like exploring one path as deeply as possible before trying alternative paths. It's akin to navigating through a maze by choosing one path at a time, going as far as possible, and backtracking when you reach a dead end. This approach is applicable in real-life situations where systematic exploration is needed, such as puzzle-solving, decision-making processes, and certain optimization problems.

        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[10px] mb-24"
        ></motion.img> </motion.div>
  
    </section>
      
  
  );
};

export default Chapter_4_2T;
