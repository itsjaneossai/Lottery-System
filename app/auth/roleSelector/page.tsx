"use client";

import { useState } from "react";
import styles from "./style.module.css";
import { Alumni, PostGrad, Staff, SvgLines, UnderGrad, Users } from "@/app/components/svgs";
import { useRouter } from "next/navigation";
// Replace these with your actual SVGs if you have them
// import { UndergradSvg, PostgradSvg, AlumniSvg, StaffSvg } from "@/app/components/svgs";

type RoleId = "undergrad" | "postgrad" | "alumni" | "staff";

const ROLES: {
  id: RoleId;
  title: string;
  subtitle: string;
  // illustration?: JSX.Element;
}[] = [
  {
    id: "undergrad",
    title: "Undergrad",
    subtitle: "Still going through a lot",
  },
  {
    id: "postgrad",
    title: "Postgrad",
    subtitle: "Decided to continue the lot",
  },
  {
    id: "alumni",
    title: "Alumni",
    subtitle: "Came and conquered",
  },
  {
    id: "staff",
    title: "Staff",
    subtitle: "Management and Lecturers",
  },
];

export default function RoleSelector() {
  const [selected, setSelected] = useState<RoleId | null>(null);
 const router = useRouter();
  const handleContinue = () => {
    if (!selected) return;
   router.push("/auth/userDetails")
  };

  const handleBack = () => {
    router.push("/auth/chooseCampus")
  };

  return (
    <div className={styles.screen}>
      <div className={styles.lines}>
        <SvgLines />
      </div>
      <div className={styles.mail}>
        <Users />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1 className={styles.pageTitle}>User</h1>
          <p className={styles.pageSubtitle}>Which user describes you?</p>
        </div>
        {/* Cards grid */}
        <div className={styles.cardGrid}>
          {ROLES.map((role) => {
            const isSelected = selected === role.id;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelected(role.id)}
                className={`${styles.card} ${
                  isSelected ? styles.cardSelected : ""
                }`}
              >
                {/* Illustration area – swap for real SVG/Images */}
                <div
                  className={styles.illustration}
                  style={{
                    border: isSelected
                      ? "2px solid #22c55e"
                      : "1px solid transparent",
                    borderRadius: "16px",
                    transition: "border-color 150ms ease",
                  }}
                >
                  {role.id === "undergrad" && <UnderGrad />}
                  {role.id === "postgrad" && <PostGrad />}
                  {role.id === "alumni" && <Alumni />}
                  {role.id === "staff" && <Staff />}
                </div>

                {/* Bottom text + radio */}
                <div className={styles.cardBottom}>
                  <div>
                    <p className={styles.roleTitle}>{role.title}</p>
                    <p className={styles.roleSubtitle}>{role.subtitle}</p>
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

        {/* Continue button */}
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selected}
          className={`${styles.continueButton} ${
            !selected ? styles.continueButtonDisabled : ""
          }`}
        >
          Continue
        </button>

        {/* Back link / button */}
        <button type="button" onClick={handleBack} className={styles.backLink}>
          &lt; Back to campus
        </button>
      </div>
    </div>
  );
}
