"use client";
import React from "react";
import styles from "./style.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.navLeft}>
          <div className={styles.forYou}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="19" cy="12" r="1" fill="currentColor" />
              <circle cx="5" cy="12" r="1" fill="currentColor" />
            </svg>
            <span>For You</span>
          </div>
        </div>

        <div className={styles.navRight}>
          <button className={styles.loginBtn}>Log in</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
