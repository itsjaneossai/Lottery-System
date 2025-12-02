"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function ResetSuccessPage() {
  const router = useRouter();
  const handleContinue = () => {
   router.push("/")
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>It&apos;s all done</h1>
        <p className={styles.subtitle}>
          Your password has been successfully reset.
          <br />
          Click below to log in magically.
        </p>

        <button
          type="button"
          className={styles.primaryBtn}
          onClick={handleContinue}
        >
          Continue
        </button>
      </section>
    </main>
  );
}
