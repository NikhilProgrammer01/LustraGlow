"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import styles from "./NaturalBeauty.module.css";
import HeroSection from "../HeroSection/HeroSection";
import QuoteSection from "../QuoteSection/QuoteSection";
import IngredientsSection from "../IngredientsSection/IngredientsSection";
import ProcessSection from "../ProcessSection/ProcessSection";

function NaturalBeauty() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <AnimatePresence>
          <HeroSection />
          <QuoteSection />
          <IngredientsSection />
          <ProcessSection />
        </AnimatePresence>
      </div>
    </>
  );
}

export default NaturalBeauty;
