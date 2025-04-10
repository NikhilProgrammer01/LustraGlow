"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./ProcessSection.module.css";

function ProcessSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -5]);

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
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section
      className={styles.processSection}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.header
        className={styles.processHeader}
        variants={containerVariants}
      >
        <motion.div
          className={styles.processHeaderItem}
          variants={headerVariants}
        >
          <h3 className={styles.processHeaderTitle}>Crafted with care</h3>
          <p className={styles.processHeaderDescription}>
            Step by step perfection
          </p>
        </motion.div>
        <motion.h2 className={styles.sectionTitle} variants={headerVariants}>
          Our Process
        </motion.h2>
        <motion.div
          className={styles.processHeaderItem}
          variants={headerVariants}
        >
          <h3 className={styles.processHeaderTitle}>Natural harmony</h3>
          <p className={styles.processHeaderDescription}>In every detail</p>
        </motion.div>
      </motion.header>
      <motion.div
        className={styles.processGallery}
        variants={containerVariants}
      >
        <motion.div
          className={styles.processImageContainer}
          style={{ rotate: rotate1 }}
          variants={imageVariants}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className={styles.processImageCaption}
            variants={textVariants}
          >
            <h3 className={styles.processImageTitle}>Gentle Care</h3>
            <p className={styles.processImageDescription}>
              With pure ingredients
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.processImageContainer}
          style={{
            rotate: rotate2,
            backgroundImage: `url('https://images.unsplash.com/photo-1620295642909-0e1f604c2eb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
          variants={imageVariants}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        />
      </motion.div>
    </motion.section>
  );
}

export default ProcessSection;
