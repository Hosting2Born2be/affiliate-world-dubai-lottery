"use client";
import React from "react";
import styles from "./Raffle.module.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RaffleForm from "../Form/RaffleForm";

const Raffle = () => {
  return (
    <section className={styles.raffle} id="raffle">
      <div className="container">
        <div className={styles.body}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Don’t miss your chance — <br />
            enter now!
          </motion.h2>
          <RaffleForm />
        </div>
      </div>
    </section>
  );
};

export default Raffle;
