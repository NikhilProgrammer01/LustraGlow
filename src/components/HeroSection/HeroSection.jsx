"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./HeroSection.module.css";

function HeroSection() {
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
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section
      className={styles.hero}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.parallaxOverlay}></div>
      <motion.div className={styles.heroContent} variants={textVariants}>
        <motion.h1 className={styles.heroTitle} variants={textVariants}>
          Natural Beauty
        </motion.h1>
        <motion.h2 className={styles.heroSubtitle} variants={textVariants}>
          Unleashed
        </motion.h2>
        <motion.p className={styles.heroDescription} variants={textVariants}>
          Embrace the essence of natural skincare, where purity meets radiance.
        </motion.p>
      </motion.div>
      <motion.div className={styles.heroImage} variants={imageVariants} />
    </motion.section>
  );
}

export default HeroSection;
