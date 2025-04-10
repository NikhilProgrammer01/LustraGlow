"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./IngredientsSection.module.css";
import IngredientCard from "../IngredientCard/IngredientCard";

function IngredientsSection() {
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
        staggerChildren: 0.2,
      },
    },
  };

  const ingredients = [
    {
      title: "Elena",
      description: "A timeless glow, effortlessly radiant",
      imageUrl:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Léa",
      description: "Graceful and luminous, skin that tells a story",
      imageUrl:
        "https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Amara",
      description: "A golden glow kissed by nature’s best",
      imageUrl:
        "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <motion.section
      className={styles.ingredientsSection}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Removed title */}
      <motion.div
        className={styles.ingredientsGrid}
        variants={containerVariants}
      >
        {ingredients.map((ingredient, index) => (
          <IngredientCard
            key={index}
            title={ingredient.title}
            description={ingredient.description}
            imageUrl={ingredient.imageUrl}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default IngredientsSection;
