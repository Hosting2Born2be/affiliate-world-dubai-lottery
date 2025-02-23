"use client";
import React from "react";
import styles from "./HowToParticipate.module.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HowToParticipate = () => {
  return (
    <section className={styles.howToParticipate}>
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          How to Participate <br />
          in the Raffle
        </motion.h2>
        <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Your chance to win an exclusive prize! Just fill out the form below
          and you're in!
        </motion.h4>
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
          >
            <img src="/images/step1.svg" alt="step1" />
            <p>Fill out the form below</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
          >
            <img src="/images/step2.svg" alt="step2" />
            <p>Get your unique raffle number</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
          >
            <img src="/images/step3.svg" alt="step3" />
            <p>Join us at Affiliate World Dubai</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;
