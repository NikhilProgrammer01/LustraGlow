"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./QuoteSection.module.css";

function QuoteSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      className={styles.quoteSection}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className={styles.quoteContainer} variants={contentVariants}>
        <motion.div className={styles.quoteImage} variants={contentVariants} />
        <motion.blockquote className={styles.quote}>
          <motion.p
            className={styles.quoteText}
            custom={0}
            variants={textVariants}
          >
            &quot;Every woman is a masterpiece,
          </motion.p>
          <motion.p
            className={styles.quoteText}
            custom={1}
            variants={textVariants}
          >
            uniquely crafted by nature&quot;
          </motion.p>
          <motion.cite
            className={styles.quoteAuthor}
            custom={2}
            variants={textVariants}
          >
            Embrace your natural beauty
          </motion.cite>
        </motion.blockquote>
      </motion.div>
    </motion.section>
  );
}

export default QuoteSection;
