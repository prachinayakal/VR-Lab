"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_4_4T = () => {
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
        <TitleText title={<>N - Queens problem</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          N - Queens problem is to place n - queens in such a manner on an n x n chessboard that no queens attack each other by being in the same row, column or diagonal. <br /> <br />

It can be seen that for n =1, the problem has a trivial solution, and no solution exists for n =2 and n =3. So first we will consider the 4 queens problem and then generate it to n - queens problem. <br /> <br />


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
          The complete algorithm for the N queen problem is discussed below : <br /> <br />

Start in the leftmost column <br /> <br />
- If all queens are placed, return true <br /> <br />
- Try all rows in the current column. For each row: <br /> <br />
a. If the queen can be placed safely in this row, mark this cell and recursively try placing the rest of the queen <br /> <br />
b. If placing the queen in this row leads to an unsafe configuration, unmark the cell and try the next row <br /> <br />
- If all rows have been tried and nothing worked, return false to trigger backtracking <br /> <br />
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
          title="| Classification of Randomized Algorithms"
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          Randomized algorithms can be roughly grouped into numerous categories
          based on their properties and applications. Here are two broadly
          classified categories of randomized algorithms.
          <br /> <br />
          <span className="font-extrabold text-white">
            1. Monte Carlo Algorithms{" "}
          </span>{" "}
          <br />
          <br />
          The goal of the Monte Carlo approach for randomized algorithms is to
          complete the execution within the allotted time limit. This method's
          running time is therefore predictable. For instance, when <br />{" "}
          <br />
          performing string matching, Monte Carlo starts the procedure over from
          the last error it encountered. Thus, time is saved.
          <br />
          A deterministic algorithm's output is always anticipated to be right,
          whereas Monte Carlo techniques can not guarantee this. These
          algorithms are typically categorized as either false-biased or
          true-biased for decision issues. When a false-biased Monte Carlo
          algorithm delivers false, it is always correct; likewise, a
          true-biased method always yields true. <br /> <br />
          <span className="font-extrabold text-white">
            2. Las Vegas Algorithms{" "}
          </span>{" "}
          <br /> <br />
          This is a randomized algorithm that consistently yields the right
          answer or fails. Still, it cannot guarantee a time limit because the
          time complexity depends on the input. Virtually every search result
          contains a Las Vegas algorithm. Consider a Las Vegas algorithm as a
          problem whose answer, when found, is certain to be the right one but
          whose route to that answer may be uncertain. <br /> <br />
          The term "Las Vegas" for this algorithm is credited to mathematician
          Laszlo Babai, who came up with it in 1979 simply as a comparison to
          the much older Monte Carlo algorithm as both are significant global
          gaming centers.
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
          title="| Quick Sort Algorithm Using Randomization"
          textStyles="text-center"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          The quicksort technique is done by separating the list into two parts.
          Initially a pivot element is chosen by partitioning algorithm. The
          left part of the pivot holds the smaller values than pivot, and right
          part holds the larger value. After partitioning, each separate lists
          are partitioned using same procedure.
          <br /> <br /> In this case we are choosing the pivot element randomly.
          After choosing the pivot, we are doing the partitioning, then sort the
          array recursively.
          <br />
          <br />
          code is here
          <br />
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

export default Chapter_4_4T;
