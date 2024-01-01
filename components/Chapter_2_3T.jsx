"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_2_3T = () => {
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
          Algorithms are step-by-step procedure that is used to solve problems
          or to do some calculations. While most algorithms use a defined set of
          rules, we can introduce some randomness in their logic to make them
          into randomized algorithms. Randomized Algorithms use some randomness
          in their logic to improve efficiency, time complexity, or maybe the
          total memory used.
          <br /> <br /> Randomized algorithms are a class of algorithms in
          computer science that use randomness or randomness in combination with
          deterministic steps to solve computational problems. These algorithms
          introduce randomness intentionally into their calculations to achieve
          specific goals, such as improving efficiency or increasing the
          likelihood of finding a correct solution.
          <br /> <br />
          Randomized algorithms are particularly useful in situations where
          finding an exact solution to a problem is computationally expensive or
          impractical. They often provide approximate solutions with a
          controlled level of error.
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

        <TypingText_1 title="| Advantages " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          <span className="font-extrabold text-white">
            1. Improved Efficiency:{" "}
          </span>
          Adding randomness to the logic of an Algorithm might reduce the
          likelihood of that worst-case scenario happening, thus increasing its
          efficiency. <br />
          <br />
          <span className="font-extrabold text-white">
            2. Complex Problems can be Handled Effectively:{" "}
          </span>{" "}
          Randomized algorithms are suitable for difficult situations because
          they manage complex issues that are difficult to solve
          deterministically by providing approximate solutions or many other
          techniques. <br /> <br />
          <span className="font-extrabold text-white">
            {" "}
            3. Worst-Case Scenarios can be avoided:{" "}
          </span>{" "}
          we have already discussed this advantage of randomized algorithms.
          Take the example of the quick sort; introducing random pivot selection
          in the logic can reduce the probability of falling into the worst-case
          scenario of the algorithm, improving the overall time complexity.{" "}
          <br /> <br />
          <span className="font-extrabold text-white">
            4. Cryptography:{" "}
          </span>{" "}
          In cryptography, randomness is essential for creating secure keys,
          ensuring unpredictable results, and protecting against attacks. To
          increase security, randomized algorithms are used in random number
          generation, encryption techniques, and cryptographic protocols.
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
  <motion.div
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-8 `}
      >
        <TypingText_1
          title="| Applications of Randomized Algorithm"
          textStyles="text-center"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          <span className="font-extrabold text-white">
            1. Determining outcomes in games{" "}
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
            2. Preventing communications on a shared channel from interfering
            with each other{" "}
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
            {" "}
            3. Initializing passwords{" "}
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
            4. Performing statistical (e.g. "Monte Carlo") analysis on a system{" "}
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
            5. Simulating real-world behaviors and processes
          </span>{" "}
          <br />
          <br />
          <span className="font-extrabold text-white">
            6. Emergent system generation using genetic hybridization
          </span>{" "}
          <br />
          <br />
        </motion.p>
      </motion.div>
    </section>
      
  
  );
};

export default Chapter_2_3T;
