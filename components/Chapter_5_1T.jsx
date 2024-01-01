"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_5_1T = () => {
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
        <TitleText title={<>Randomized Algorithm</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Branch and bound is one of the techniques used for problem solving. It is similar to the backtracking since it also uses the state space tree. It is used for solving the optimization problems and minimization problems. If we have given a maximization problem then we can convert it using the Branch and bound technique by simply converting the problem into a maximization problem.
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

        <TypingText_1 title="| Application  " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          The BnB algorithm is an excellent addition to an organization’s problem-solving armory, especially when branch and bound notes all possibilities in the worst-case scenario. Furthermore, it is applied in situations where a combination of tasks is to be optimized. Let us discuss a few cases where BnB would be a good choice: <br /> <br />
          <span className="font-extrabold text-white">
            1. Discrete Optimization: {" "}
          </span>
          Discrete optimization is a subset of optimization where the variables of a particular problem must belong to a discrete set, for example, network flow issues. In situations like these, the BnB algorithm is a sensible choice.<br />
          <br />
          <span className="font-extrabold text-white">
            2. Combinatory Optimization::{" "}
          </span>{" "}
          Since it is established that an optimization problem is to be solved, combinatory optimization finds the maximum and minimum bounds of the given function. The domain of the process must be discrete or unattached and significant. <br /> <br />
          
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
          title="| Key Takeaways"
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
        - The branch and bound algorithm solves an optimization problem with time complexity. <br /> <br />
        -It was introduced in 1960 by two researchers, Alisa Land and Alison Diog, from the London School of Economics. <br /> <br />
        - The algorithm divides a big optimization problem into smaller and simpler subsets and scans for the best possible solution among the candidate solutions. <br /> <br />
        -The algorithm searches the tree entirely before arriving at the best solution. This process is considered to be a time-consuming process, especially for big or complex problems. <br /> <br />
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

export default Chapter_5_1T;
