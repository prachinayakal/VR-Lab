"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_4_3T = () => {
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
        <TitleText title={<>Finding articulation point</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
         A vertex is said to be an articulation point in a graph if removal of the vertex and associated edges disconnects the graph. So, the removal of articulation points increases the number of connected components in a graph. <br /> <br />

Articulation points are sometimes called cut vertices. <br /> <br />

The main aim here is to find out all the articulations points in a graph. <br /> <br />
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

        <TypingText_1 title="| Working of algorithm " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        > 
          This is a Depth First Search (DFS) based algorithm to find all the articulation points in a graph. Given a graph, the algorithm first constructs a DFS tree. <br /> <br />
          Initially, the algorithm chooses any random vertex to start the algorithm and marks its status as visited. The next step is to calculate the depth of the selected vertex. The depth of each vertex is the order in which they are visited. <br /> <br />
          Next, we need to calculate the lowest discovery number. This is equal to the depth of the vertex reachable from any vertex by considering one back edge in the DFS tree. An edge (X, Y) is a back edge if Y is an ancestor of edge X but not part of the DFS tree. But the edge (X, Y) is a part of the original graph. <br /> <br />
          After calculating the depth and lowest discovery number for the first picked vertex, the algorithm then searches for its adjacent vertices. It checks whether the adjacent vertices are already visited or not. If not, then the algorithm marks it as the current vertex and calculates its depth and lowest discovery number. <br /> <br />

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
          title="| Applications"
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
         The concept of articulation points is very crucial in a network. The presence of articulation points in a connected network is an indication of high risk and vulnerability. If a connected network has an articulation point, then a single point failure would disconnect the whole network.

In computer science, one popular problem is to find out the maximum amount of flow passing from a source vertex to a sink vertex. This problem is known as the max-flow min-cut theorem. The concept of articulation point is used here to find the solution.


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

export default Chapter_4_3T;
