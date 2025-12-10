"use client";

import { FormEvent, useState } from "react";
import styles from "./style.module.css";
import { isValidEmail } from "@/app/servicesAndHelpers/formVlidation";
import { useRouter } from "next/navigation";
import { QuestionMark, Reload, SvgLines } from "@/app/components/svgs";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const isValid = isValidEmail(email);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/auth/emailVerification?isSignup=false");
  };

  const handleBack = () => {
    router.push("/auth/login");
  };

  return (
    <main className={styles.page}>
      <div className={styles.lines}>
        <SvgLines />
      </div>
      <div className={styles.mail}>
        <QuestionMark />
      </div>
      <section className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Forgot Password</h1>
          <p className={styles.subtitle}>
            We&apos;ve got you. Just remind us your email.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@unn.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={styles.primaryBtn}
            disabled={!isValid}
          >
            Continue
          </button>
        </form>

        <button type="button" className={styles.backLink} onClick={handleBack}>
          <span className={styles.backArrow}>←</span>
          <span>Remembered my login</span>
        </button>
      </section>
    </main>
  );
}
