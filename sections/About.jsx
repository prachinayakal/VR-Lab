'use client';
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, fadeInIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>

    <div className="gradient-02 z-0"/>
    <motion.div
    variants ={staggerContainer}
    initial = "hidden"
    whileInView = "show"
    viewport = {{once: false, amount: 0.25}}
    className = {`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}
    >
      <TypingText title = "| About DAA Virtual Lab" textStyles = "text-center"/>
      <motion.p
      variants={fadeIn('up', 'tween', 0.2, 1 )}
      className="mt-[8px] font-normal sm:text -[32px] text-[24px] text-center text-secondary-white"
      >
        The <span className="font-extrabold text-white">Design & Analysis of Algorithms Virtual Lab</span> is an online platform that provides 
        students and users with a practical environment to explore and experiment with various algorithmic concepts. 
        Through interactive simulations and exercises, users can gain <span className="font-extrabold text-white">hands-on experience </span> 
        in designing, implementing, and analyzing algorithms. This virtual lab offers a convenient and accessible way to enhance algorithmic problem-solving skills 
        and deepen understanding of complex computational processes.

      </motion.p>
      <motion.img
      variants={fadeIn('up', 'tween', 0.3, 1)}
      src = "/arrow-down.svg"
      alt ="arrow down"
      className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
    
  </section>
);

export default About;
