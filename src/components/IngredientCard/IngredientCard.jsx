"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./IngredientCard.module.css";

function IngredientCard({ title, description, imageUrl, index }) {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2 || 0,
      },
    },
  };

  return (
    <motion.article
      className={styles.ingredientCard}
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className={styles.ingredientImageContainer}>
        <motion.div
          className={styles.ingredientImage}
          style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : "none" }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        />
        <div className={styles.circleSmall} />
        <div className={styles.circleLarge} />
      </div>
      <h3 className={styles.ingredientTitle}>{title}</h3>
      <p className={styles.ingredientDescription}>{description}</p>
    </motion.article>
  );
}

export default IngredientCard;
