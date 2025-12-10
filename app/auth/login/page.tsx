"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { GoogleBtn, GreenStar } from "@/app/components/svgs";
import {
  isValidEmail,
  isValidPassword,
} from "@/app/servicesAndHelpers/formVlidation";
import { useRouter } from "next/navigation";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Get curated newsletters, instant AI-powered answers to your questions about the university, and access to a timeless photo repository—all in one place.",
    name: "Dexter Chukwumeka",
    role: "Hub Manager",
    org: "Borderless Tech Club",
    rating: 5,
  },
  {
    quote:
      "The Den Digest helps me stay on top of campus events and deadlines without feeling overwhelmed.",
    name: "Adaeze N.",
    role: "Undergraduate Student",
    org: "UNN",
    rating: 5,
  },
  {
    quote:
      "It’s my go-to hub for quick information about UNN & UNEC, especially when I’m mentoring new students.",
    name: "Chinedu O.",
    role: "Alumni Mentor",
    org: "UNEC",
    rating: 4,
  },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = TESTIMONIALS[testimonialIndex];
  const allFilled = isValidEmail(email) && isValidPassword(password);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!allFilled) return;

    // TODO: call login API
    console.log({ email, password, remember });
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  return (
    <main className={styles.page}>
      {/* LEFT – AUTH PANEL */}
      <section className={styles.authWrapper}>
        <div className={styles.authInner}>
          <div className={styles.topLogo}>
            <GreenStar />
          </div>

          <div className={styles.authCard}>
            <h1 className={styles.authTitle}>Welcome back</h1>
            <p className={styles.authSubtitle}>Please enter your details.</p>

            <form className={styles.form} onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className={styles.formRow}>
                <label className={styles.rememberLabel}>
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className={styles.textLink}
                  onClick={() => router.push("/auth/forgotPassword")}
                >
                  Forgot password
                </button>
              </div>

              <button
                type="submit"
                className={styles.primaryBtn}
                disabled={!allFilled}
              >
                Sign in
              </button>

              <button
                type="button"
                className={styles.googleBtn}
                onClick={() => console.log("Google sign in")}
              >
                <span className={styles.googleIcon}>
                  <GoogleBtn />
                </span>
                <span>Sign in with Google</span>
              </button>
            </form>

            <p className={styles.footerText}>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className={styles.linkBtn}
                onClick={() => router.push("/auth/signup")}
              >
                Sign up
              </button>
            </p>
          </div>

          <p className={styles.devText}>
            Developed by Borderless Tech Club, UNN
          </p>
        </div>
      </section>

      {/* RIGHT – HERO / CAROUSEL PANEL */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>

          <div className={styles.heroOverlay} />

          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              &ldquo;{currentTestimonial.quote}&rdquo;
            </p>

            <div className={styles.personRow}>
              <div>
                <p className={styles.personName}>{currentTestimonial.name}</p>
                <p className={styles.personRole}>{currentTestimonial.org}</p>
                <p className={styles.personRole}>{currentTestimonial.role}</p>
              </div>

              <div className={styles.ratingBlock}>
                <span className={styles.stars}>
                  {"★".repeat(currentTestimonial.rating).padEnd(5, "☆")}
                </span>
              </div>
            </div>

            <div className={styles.testimonialFooter}>
              {/* dots */}
              <div className={styles.dots}>
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.dot} ${
                      idx === testimonialIndex ? styles.dotActive : ""
                    }`}
                    onClick={() => setTestimonialIndex(idx)}
                  />
                ))}
              </div>

              {/* arrows */}
              <div className={styles.testimonialNav}>
                <button
                  type="button"
                  className={styles.navBtn}
                  onClick={handlePrevTestimonial}
                >
                  ←
                </button>
                <button
                  type="button"
                  className={styles.navBtn}
                  onClick={handleNextTestimonial}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
