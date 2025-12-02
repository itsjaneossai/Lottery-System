"use client";
import { useState } from "react";
import { CluseredDps, GoogleBtn, GreenStar, Stars } from "@/app/components/svgs";
import styles from "./style.module.css";
import { isValidEmail, isValidPassword } from "@/app/servicesAndHelpers/formVlidation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if button should be enabled
  const allFilled = name.trim() !== "" && isValidEmail(email)  && isValidPassword(password);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCon}>
          <div className={styles.logoBadge}>
            <Stars />
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              The ultimate
              <br />
              digital den for UNN
              <br />
              and UNEC
            </h1>

            <p className={styles.subtitle}>
              Join the UNN &amp; UNEC vibrant community.
            </p>

            <div className={styles.socialProof}>
              <CluseredDps />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.authWrapper}>
        <div className={styles.authCard}>
        <GreenStar/>
          <h2 className={styles.authTitle}>Sign up</h2>
          <p className={styles.authSubtitle}>
            Create your account and enter the den.
          </p>

          <form className={styles.form}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.helpText}>
                Must be at least 8 characters.
              </span>
            </div>

            <button
              type="submit"
              className={styles.primaryBtn}
              disabled={!allFilled}
            >
              Get started
            </button>

            <button type="button" className={styles.googleBtn}>
              <span className={styles.googleIcon}><GoogleBtn/></span>
              <span>Sign up with Google</span>
            </button>
          </form>

          <p className={styles.footerText}>
            Already have an account?{" "}
            <button className={styles.linkBtn}>Log in</button>
          </p>
        </div>
      </section>
    </main>
  );
}
