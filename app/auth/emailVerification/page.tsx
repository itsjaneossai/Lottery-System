"use client";

import { useState, useRef } from "react";
import styles from "./style.module.css";
import { Mail, SvgLines } from "@/app/components/svgs";
import { useRouter, useSearchParams } from "next/navigation";

const CODE_LENGTH = 4;

export default function EmailVerificationPage() {
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // read bool from URL: /auth/emailVerification?isSignup=true|false
  const isSignupFlow = searchParams.get("isSignup") === "true";

  const handleChange = (index: number, value: string) => {
    const char = value.slice(-1);
    const updated = [...code];
    updated[index] = char;
    setCode(updated);

    if (char && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const isComplete = code.every((c) => c.trim().length === 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;

    const token = code.join("");
    console.log("Verify with code:", token, "signupFlow =", isSignupFlow);

    try {
      if (isSignupFlow) {
        // 🔹 API for signup email verification
        // await fetch("/api/auth/verify-signup", {
        //   method: "POST",
        //   body: JSON.stringify({ code: token }),
        //   headers: { "Content-Type": "application/json" },
        // });

        // 🔹 Next page for signup flow
        router.push("/auth/chooseCampus");
      } else {
        // 🔹 API for password-reset email verification (example)
        // await fetch("/api/auth/verify-reset", {
        //   method: "POST",
        //   body: JSON.stringify({ code: token }),
        //   headers: { "Content-Type": "application/json" },
        // });

        // 🔹 Next page for reset flow
        router.push("/auth/resetPassword");
      }
    } catch (err) {
      console.error(err);
      // TODO: show error UI
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.lines}>
        <SvgLines />
      </div>
      <div className={styles.card}>
        <div className={styles.mail}>
          <Mail />
        </div>
        <h1 className={styles.title}>Check your email</h1>
        <p className={styles.subtitle}>
          {isSignupFlow
            ? "We sent you a code to verify your account."
            : "We sent you a code to reset your password."}
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.codeRow}>
            {code.map((value, index) => (
              <input
                key={index}
                ref={(el: HTMLInputElement | null) => {
                  inputsRef.current[index] = el;
                }}
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                inputMode="numeric"
                className={styles.codeInput}
              />
            ))}
          </div>

          <button
            type="submit"
            className={styles.verifyBtn}
            disabled={!isComplete}
          >
            Verify email
          </button>
        </form>

        <p className={styles.resendText}>
          Didn&apos;t receive the email?{" "}
          <button type="button" className={styles.linkBtn}>
            Click to resend
          </button>
        </p>

        <button
          type="button"
          onClick={() => {
            router.push("/auth/signup");
          }}
          className={styles.backBtn}
        >
          ← Back to sign up
        </button>
      </div>
    </main>
  );
}
