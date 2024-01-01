"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_4_1T = () => {
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
        <TitleText title={<>Breadth-First Search (BFS) in Backtracking</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Breadth-First Search (BFS) is a searching algorithm used in backtracking to explore all possible solutions systematically. It operates by exploring all the nodes at the current level before moving on to the next level, making it suitable for finding the shortest path or exploring all solutions in a problem space. <br /> <br />
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

        <TypingText_1 title="| Working of Breadth-First Search in Backtracking " textStyles="text-center" />
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
          2. Queue Data Structure:
          </span>{" "}
          - It uses a queue data structure to keep track of the states or configurations to be explored. <br /> <br />
          <span className="font-extrabold text-white">
            {" "}
            3. Exploration Process:
          </span>{" "}
          - Nodes at the current level are explored first before moving on to the next level. <br /> <br />
          - The algorithm systematically explores all possible choices at each level, recording the solutions or paths found. <br /> <br />

          <br /> <br />
          <span className="font-extrabold text-white">
          4. Backtracking:
          </span>{" "}
          - If a solution is not found at the current level, the algorithm backtracks to the previous level and explores other choices. <br /> <br />
          <span className="font-extrabold text-white">
          5. Completing the Search:
          </span>{" "}
          - The search continues until all possible paths or solutions are explored, ensuring a thorough examination of the problem space. <br /> <br />
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
          title="| Pseudocode/Steps for Breadth-First Search"
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
          title="| Real-Life Application:"
          textStyles="text-center"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Consider a maze-solving scenario where you start at a particular point and want to find the shortest path to reach the exit. Using Breadth-First Search in backtracking, you explore all possible paths systematically, moving one step at a time. The algorithm ensures that you try all possible paths on the current level before considering paths at the next level. This approach is like searching for the shortest way out of a maze, making sure you explore all available options before determining the optimal path. It's applicable in various real-life scenarios, such as route planning, puzzle solving, and decision-making processes where systematic exploration is necessary. <br /> <br />
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

export default Chapter_4_1T;
