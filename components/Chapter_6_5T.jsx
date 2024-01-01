"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_6_5T = () => {
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
        <TitleText title={<>NP Hard Problem</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Definition 1 of NP: A problem is said to be Nondeterministically Polynomial (NP) if we can find a nodeterminsitic Turing machine that can solve the problem in a polynomial number of nondeterministic moves. <br /> <br />
For those who are not familiar with Turing machines, two alternative definitions of NP will be developed. <br /> <br />
Definition 2 of NP: A problem is said to be NP if <br /> <br />
its solution comes from a finite set of possibilities, and <br /> <br />
it takes polynomial time to verify the correctness of a candidate solution <br /> <br />
Remark: It is much easier and faster to "grade" a solution than to find a solution from scratch. <br /> <br />
We use NP to designate the class of all nondeterministically polynomial problems. <br /> <br />
Clearly, P is a subset of NP


          
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

export default Chapter_6_5T;
