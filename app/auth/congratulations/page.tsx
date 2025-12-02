"use client";

import { Confetti, Lion } from "@/app/components/svgs";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

export default function DenWelcomePage() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div className={styles.screen}>
      <Confetti />

      <div className={styles.textBlock}>
        <h1 className={styles.title}>Roarrrrrrrrrrr!!!</h1>
        <p className={styles.subtitle}>Welcome to The Den Digest</p>
      </div>
      <div className={styles.lionWrapper}>
        <Lion />
      </div>
    </div>
  );
}
