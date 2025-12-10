"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { GreenStar } from "../svgs";


const BurgerIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);


type NavItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

const HomeIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 10.5L12 4l9 6.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 21V11h14v10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BookmarkIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 2h12v20l-6-4-6 4V2z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 0 1 3.3 16.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82L4.3 3.3A2 2 0 0 1 7.13.47l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V0a2 2 0 0 1 4 0v.09c.1.7.64 1.25 1.34 1.34h.09a1.65 1.65 0 0 0 1 .51c.69.14 1.26-.2 1.82-.33l.06-.06A2 2 0 0 1 20.7 7.1l-.06.06c-.13.56.19 1.13.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H24a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
  </svg>
);

const ProfileIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NAV_ITEMS: NavItem[] = [
  { id: "new chat", label: "+ New chat" },
  {
    id: "news",
    label: "News & updates",
    icon: HomeIcon,
  },
  {
    id: "photos",
    label: "Photo repository",
    icon: BookmarkIcon,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`} aria-label="Main">
        <div className={styles.topArea}>
          <div className={styles.brandLeft}>
            <div className={styles.badge} aria-hidden>
              <GreenStar />
            </div>
            <div className={styles.brandText}>The Den Digest</div>
          </div>
        </div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((it) => (
            <button
              key={it.id}
              type="button"
              className={styles.navItem}
              onClick={() => setSidebarOpen(false)}
            >
              <span className={styles.icon} aria-hidden>
                {it.icon}
              </span>
              <div className={styles.navTextWrap}>
                <span className={styles.label}>{it.label}</span>
              </div>
            </button>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.profileWrap}>
            <div className={styles.avatar} />
            <div className={styles.profileText}>
              <div className={styles.profileName}>New user</div>
              <button className={styles.loginLink}>Login or sign up</button>
            </div>
          </div>

          <div className={styles.sidebarAuthButtons}>
            <button className={styles.sidebarLoginBtn}>Log in</button>
            <button className={styles.sidebarSignupBtn}>Sign Up</button>
          </div>
        </div>
      </aside>

      {sidebarOpen && <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />}

      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerRight}>
            <button
              className={styles.burgerMenuBtn}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              {BurgerIcon}
            </button>
          </div>
        </header>

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
