"use client";
import React from "react";
import styles from "./StayConnected.module.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import WhiteArrow from "@/icons/WhiteArrow";
import Image from "next/image";

const StayConnected = () => {
  return (
    <>
      <section className={styles.stayConnected}>
        <div className="container">
          <div className={styles.body}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Stay Updated – Join Our <br />
              Telegram Channel!
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Be the first to know the raffle results, event <br />
              updates, and exclusive Clarity Global insights.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href="https://t.me/+yQGYniRsLHNiMDM8" target="_blank">
                Join <WhiteArrow />
              </Link>
            </motion.div>
          </div>
          <Image src="/images/plane.png" alt="plane" width={546} height={400} />
        </div>
      </section>
      <section className={styles.banner}>
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Good Luck!
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We look forward to meeting you at Affiliate World Dubai and inviting
            you to explore our <br />
            payment solution tailored to your business needs!
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default StayConnected;
