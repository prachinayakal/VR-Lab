"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_4_6T = () => {
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
          Graph coloring is nothing but a simple way of labelling graph components such as vertices, edges, and regions under some constraints. In a graph, no two adjacent vertices, adjacent edges, or adjacent regions are colored with minimum number of colors. This number is called the chromatic number and the graph is called a properly colored graph. <br /> <br />
          While graph coloring, the constraints that are set on the graph are colors, order of coloring, the way of assigning color, etc. A coloring is given to a vertex or a particular region. Thus, the vertices or regions having same colors form independent sets.


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

        <TypingText_1 title="| Application " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          Graph coloring is one of the most important concepts in graph theory. It is used in many real-time applications of computer science such as − <br /> <br />


          <span className="font-extrabold text-white">
            1.Clustering{" "}
          </span>
          <span className="font-extrabold text-white">
            2. Data mining{" "}
          </span>{" "}
          <span className="font-extrabold text-white">
            {" "}
            3. Image capturing{" "}
          </span>{" "}
          <span className="font-extrabold text-white">
           4. Networking{" "}
          </span>{" "}
          <span className="font-extrabold text-white">
           5. Resource allocation{" "}
          </span>{" "}
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

export default Chapter_4_6T;
