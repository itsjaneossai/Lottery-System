"use client";

import { FormEvent, useState } from "react";
import styles from "./style.module.css";
import { isValidPassword } from "@/app/servicesAndHelpers/formVlidation";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const strongEnough = isValidPassword(password);
  const matches = password === confirm && confirm !== "";
  const canSubmit = strongEnough && matches;
   const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
      router.push("/auth/resetSuccessful")
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Reset Password</h1>
          <p className={styles.subtitle}>
            Try a strong password you can remember
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label htmlFor="new-password">New password</label>
            <input
              id="new-password"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Re-enter new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          {/* Optional tiny error text */}
          {!matches && confirm.length > 0 && (
            <p className={styles.errorText}>Passwords don&apos;t match.</p>
          )}

          {!strongEnough && password.length > 0 && (
            <p className={styles.errorText}>
              Password isn&apos;t strong enough yet.
            </p>
          )}

          <button
            type="submit"
            className={styles.primaryBtn}
            disabled={!canSubmit}
          >
            Reset password
          </button>
        </form>
      </section>
    </main>
  );
}
