"use client";

import { motion } from "framer-motion";
import { TypingText_1, TitleText } from ".";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const Chapter_4_7T = () => {
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
        <TitleText title={<>Hamiltonian cycles</>} textStyles="text-center" />
        <TypingText_1 title="| Introduction" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          If graph contains a Hamiltonian cycle, it is called Hamiltonian graph otherwise it is non-Hamiltonian. <br /> <br />
          Finding a Hamiltonian Cycle in a graph is a well-known NP-complete problem, which means that there’s no known efficient algorithm to solve it for all types of graphs. However, it can be solved for small or specific types of graphs. <br /> <br />
          The Hamiltonian Cycle problem has practical applications in various fields, such as logistics, network design, and computer science. <br /> <br />

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

        <TypingText_1 title="| What is Hamiltonian Path?s " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-secondary-white "
        >
          Similar to the Hamiltonian Cycle problem, finding a Hamiltonian Path in a general graph is also NP-complete and can be challenging. However, it is often a more easier problem than finding a Hamiltonian Cycle. <br /> <br />
          Hamiltonian Paths have applications in various fields, such as finding optimal routes in transportation networks, circuit design, and graph theory research. <br /> <br />
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
          title="| Application "
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text -[32px] text-[24px]  text-allign  text-secondary-white"
        >
          - A search for these cycles isn’t just a fun game for the afternoon off. It has real applications in such diverse fields as computer graphics, electronic circuit design, mapping genomes, and operations research. <br /> <br />
          - For instance, when mapping genomes scientists must combine many tiny fragments of genetic code (“reads”, they are called), into one single genomic sequence (a ‘superstring’). This can be done by finding a Hamiltonian path or cycle, where each of the reads are considered nodes in a graph and each overlap (place where the end of one read matches the beginning of another) is considered to be an edge. <br /> <br />
          - In a much less complex application of exactly the same math, school districts use Hamiltonians to plan the best route to pick up students from across the district. Here students may be considered nodes, the paths between them edges, and the bus wishes to travel a route that will pass each students house exactly once. <br /> <br />
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

export default Chapter_4_7T;
