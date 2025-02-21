"use client";
import React from "react";
import styles from "./Hero.module.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import WhiteArrow from "@/icons/WhiteArrow";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={"container"}>
        <div className={styles.body}>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.label}
          >
            Affiliate World Dubai
          </motion.span>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            Exclusive Raffle for Affiliate World Dubai <br />
            Participants!
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Join & Win exclusive prizes from Clarity Global!
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="#raffle" className={styles.button}>
              Enter the Raffle <WhiteArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
