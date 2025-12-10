"use client";

import { useState } from "react";
import styles from "./style.module.css";
import { Campus, SvgLines, UNEC, UNN } from "@/app/components/svgs";
import { useRouter } from "next/navigation";

type CampusId = "UNN" | "UNEC";

const CAMPUSES: {
  id: CampusId;
  title: string;
  subtitle: string;
}[] = [
  { id: "UNN", title: "UNN", subtitle: "The OG campus" },
  { id: "UNEC", title: "UNEC", subtitle: "The branch off campus" },
];

export default function CampusSelector() {
  const [selected, setSelected] = useState<CampusId | null>(null);
  const router = useRouter();

  const handleChoose = () => {
    if (!selected) return;
    router.push("/auth/roleSelector")
  };

  return (
    <div className={styles.screen}>
      <div className={styles.lines}>
        <SvgLines />
      </div>
      <div className={styles.mail}>
        <Campus/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1 className={styles.pageTitle}>Campus</h1>
          <p className={styles.pageSubtitle}>Which campus are you at?</p>
        </div>
        <div className={styles.cardRow}>
          {CAMPUSES.map((campus) => {
            const isSelected = selected === campus.id;

            return (
              <button
                key={campus.id}
                type="button"
                onClick={() => setSelected(campus.id)}
                className={`${styles.card} ${
                  isSelected ? styles.cardSelected : ""
                }`}
              >
                <span className={styles.illustrationText}>
                  {campus.id === "UNN" ? (
                    <div
                      style={{
                        border: isSelected
                          ? "2px solid #22c55e"
                          : "1px solid transparent",
                        borderRadius: "15px",
                        transition: "border-color 150ms ease",
                        width:"300px"
                      }}
                    >
                      <UNN />
                    </div>
                  ) : (
                    <div
                      style={{
                        border: isSelected
                          ? "2px solid #22c55e"
                          : "1px solid transparent",
                        borderRadius: "15px",
                        transition: "border-color 150ms ease",
                        width:"300px"
                      }}
                    >
                      <UNEC />
                    </div>
                  )}
                </span>

                <div className={styles.cardBottom}>
                  <div>
                    <p className={styles.campusTitle}>{campus.title}</p>
                    <p className={styles.campusSubtitle}>{campus.subtitle}</p>
                  </div>

                  <div
                    className={`${styles.radioOuter} ${
                      isSelected ? styles.radioOuterActive : ""
                    }`}
                  >
                    {isSelected && <div className={styles.radioInner} />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleChoose}
          disabled={!selected}
          className={`${styles.chooseButton} ${
            !selected ? styles.chooseButtonDisabled : ""
          }`}
          
        >
          Choose campus
        </button>
      </div>
    </div>
  );
}
