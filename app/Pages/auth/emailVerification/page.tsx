"use client";

import { useState, useRef } from "react";
import styles from "./style.module.css";
import { Mail, SvgLines } from "@/app/components/svgs";

const CODE_LENGTH = 4;

export default function EmailVerificationPage() {
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    // only allow single digit/letter
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;

    const token = code.join("");
    console.log("Verify with code:", token);
    // call your API here
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
        <p className={styles.subtitle}>We sent a verification code</p>

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

        <button type="button" className={styles.backBtn}>
          ← Back to sign up
        </button>
      </div>
    </main>
  );
}

export const Lines = () => {
  return (
    <>
      <svg
        width="909"
        height="575"
        viewBox="0 0 909 575"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M416.541 79.6867L471.214 67.5661C481.728 65.2351 492.141 71.869 494.472 82.3833L506.593 137.056C508.924 147.57 502.29 157.983 491.776 160.314L437.103 172.435C426.589 174.766 416.176 168.132 413.845 157.618L401.724 102.945C399.393 92.4308 406.027 82.0177 416.541 79.6867Z"
          stroke="#22262F"
        />
        <path
          d="M359.291 43.2131L507.688 10.3142C518.203 7.98329 528.616 14.6172 530.947 25.1314L563.846 173.528C566.176 184.043 559.543 194.456 549.028 196.787L400.631 229.686C390.117 232.017 379.704 225.383 377.373 214.868L344.474 66.4714C342.143 55.9571 348.777 45.544 359.291 43.2131Z"
          stroke="#22262F"
        />
        <path
          d="M302.039 6.74041L544.161 -46.9366C554.675 -49.2676 565.088 -42.6337 567.419 -32.1194L621.096 210.002C623.427 220.516 616.793 230.929 606.279 233.26L364.158 286.937C353.643 289.268 343.23 282.634 340.899 272.12L287.222 29.9988C284.891 19.4845 291.525 9.07137 302.039 6.74041Z"
          stroke="#22262F"
        />
        <path
          d="M244.787 -29.7332L580.633 -104.188C591.148 -106.519 601.561 -99.8855 603.892 -89.3713L678.347 246.475C680.678 256.989 674.044 267.402 663.53 269.733L327.684 344.188C317.17 346.519 306.756 339.885 304.425 329.371L229.97 -6.47488C227.639 -16.9891 234.273 -27.4023 244.787 -29.7332Z"
          stroke="#22262F"
        />
        <path
          d="M187.537 -66.2059L617.108 -161.439C627.622 -163.77 638.035 -157.136 640.366 -146.622L735.599 282.948C737.93 293.462 731.297 303.876 720.782 306.206L291.212 401.44C280.698 403.771 270.285 397.137 267.954 386.623L172.72 -42.9475C170.389 -53.4618 177.023 -63.8749 187.537 -66.2059Z"
          stroke="#22262F"
        />
        <path
          d="M130.286 -102.679L653.58 -218.691C664.094 -221.022 674.508 -214.388 676.839 -203.874L792.85 319.421C795.181 329.935 788.547 340.348 778.033 342.679L254.738 458.691C244.224 461.022 233.811 454.388 231.48 443.874L115.468 -79.4209C113.137 -89.9352 119.771 -100.348 130.286 -102.679Z"
          stroke="#22262F"
        />
        <path
          d="M73.0336 -139.152L690.053 -275.942C700.567 -278.273 710.98 -271.639 713.311 -261.125L850.101 355.894C852.432 366.409 845.798 376.822 835.284 379.153L218.265 515.942C207.75 518.273 197.337 511.64 195.006 501.125L58.2164 -115.894C55.8854 -126.408 62.5193 -136.821 73.0336 -139.152Z"
          stroke="#22262F"
        />
        <path
          d="M15.7836 -175.626L726.527 -333.194C737.041 -335.525 747.454 -328.891 749.785 -318.377L907.353 392.367C909.684 402.881 903.051 413.294 892.536 415.625L181.793 573.193C171.278 575.524 160.865 568.89 158.534 558.376L0.966354 -152.367C-1.36459 -162.882 5.26929 -173.295 15.7836 -175.626Z"
          stroke="#22262F"
        />
      </svg>
    </>
  );
};
