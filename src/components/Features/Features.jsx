"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <div className={"container"}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Clarity Global – Your <br />
          Business Payment Partner
        </motion.h2>
        <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Seamless, secure, and efficient financial transactions designed for
          businesses.
        </motion.h4>
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
          >
            <img src="/images/feature1.svg" alt="Fast & Efficient" />
            <h3>Fast Payments</h3>
            <p>Instant cross-border transactions</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
          >
            <img src="/images/feature2.svg" alt="Multi-currency support" />
            <h3>Multi-currency</h3>
            <p>Manage 30+ currencies easily</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
          >
            <img src="/images/feature3.svg" alt="Transparent pricing" />
            <h3>Transparent Rates</h3>
            <p>No hidden fees</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
          >
            <img src="/images/feature4.svg" alt="Secure & compliant" />
            <h3>Secure & Compliant</h3>
            <p>Fully regulated</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item}
          >
            <img src="/images/feature5.svg" alt="Business-focused" />
            <h3>Business-focused</h3>
            <p>Tailored solutions, Individual approach</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
