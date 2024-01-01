"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_3_3T = () => {
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
          The All Pair Shortest Path algorithm, commonly known as the Floyd-Warshall algorithm, is utilized to determine the shortest paths between all pairs of vertices in a weighted graph. The output of this algorithm is a matrix that represents the minimum distance from any node to all other nodes in the graph. The algorithm iteratively updates the matrix by considering each vertex as an intermediate vertex, refining the shortest path information. 
          <br /> <br /> 
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

        <TypingText_1 title="| Working of All Pair Shortest Path  " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          The algorithm initializes the output matrix with the given cost matrix of the graph. It then iteratively considers each vertex as an intermediate vertex and updates the matrix based on the possibility of finding a shorter path through the intermediate vertex. The process continues until all vertices have been considered as intermediates, resulting in the final matrix of all pair shortest paths. <br />
          <br />
          <span className="font-extrabold text-white">
          1.	Initialization: 
          </span>{" "}
          The output matrix is initialized with the given cost matrix of the graph. <br /> <br />
          <span className="font-extrabold text-white">
            {" "}
            2.	Iterative Updates: 
          </span>{" "}
          For each vertex 'k' (considered as an intermediate vertex), the algorithm compares the current distance between vertices 'i' and 'j' with the distance obtained by going through vertex 'k'. If the path through 'k' is shorter, the matrix is updated with the new shorter distance. <br /> <br />
          <br /> <br />
          <span className="font-extrabold text-white">
          3.	Matrix Representation: 
          </span>{" "}
          The final matrix represents the minimum distance from any node to all other nodes in the graph. <br /> <br />
          <span className="font-extrabold text-white">
          4.	Display:  
          </span>{" "}
          The algorithm displays the current cost matrix at each iteration to track the progress. <br /> <br />

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

export default Chapter_3_3T;
