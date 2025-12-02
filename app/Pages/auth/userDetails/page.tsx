"use client";

import { useState, FormEvent, useRef } from "react";
import styles from "./style.module.css";
import { FiCalendar } from "react-icons/fi";

type Gender = "male" | "female" | null;

const FACULTIES = {
  "Biological Sciences": ["Microbiology", "Biochemistry", "Zoology"],
  "Physical Sciences": ["Physics", "Chemistry", "Geology"],
  Engineering: [
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
  ],
  "Medical Sciences": ["Anatomy", "Physiology", "Medical Laboratory Science"],
} as const;

type Faculty = keyof typeof FACULTIES;

export default function UserDetailsPage() {
  const [faculty, setFaculty] = useState<Faculty>("Biological Sciences");
  const [department, setDepartment] = useState<string>(
    FACULTIES["Biological Sciences"][0]
  );
  const [regNumber, setRegNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState<Gender>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: send data to API
    console.log({
      faculty,
      department,
      regNumber,
      birthday,
      gender,
    });
  };

  const handleBack = () => {
    // TODO: navigate back to "user" step
    console.log("Back to user");
  };

  const handleFacultyChange = (value: string) => {
    const nextFaculty = value as Faculty;
    setFaculty(nextFaculty);

    // reset department to first department in that faculty
    const firstDept = FACULTIES[nextFaculty][0] ?? "";
    setDepartment(firstDept);
  };

  return (
    <div className={styles.screen}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        {/* Faculty */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Faculty</label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={faculty}
              onChange={(e) => handleFacultyChange(e.target.value)}
            >
              {(Object.keys(FACULTIES) as Faculty[]).map((fac) => (
                <option key={fac} value={fac}>
                  {fac}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Department */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Department</label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              {FACULTIES[faculty].map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Registration / ID */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Registration or ID number</label>
          <input
            type="number"
            className={`${styles.input} ${styles.inputNoSpinner}`}
            placeholder="2024/124212"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
          />
        </div>

        {/* Birthday */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Your birthday</label>
          <div
    className={styles.inputWithIcon}
    onClick={() => {
      // Try to open native date picker (Chrome/Edge support this)
      if (dateRef.current && (dateRef.current as any).showPicker) {
        (dateRef.current as any).showPicker();
      } else {
        // Fallback: just focus the input
        dateRef.current?.focus();
      }
    }}
  >
    <input
      ref={dateRef}
      type="date"
      className={`${styles.input} ${styles.inputDate}`}
      value={birthday}
      onChange={(e) => setBirthday(e.target.value)}
    />
    <FiCalendar className={styles.inputIcon} />
  </div>
        </div>

        {/* Gender */}
        <div className={styles.genderGroup}>
          <button
            type="button"
            onClick={() => setGender("male")}
            className={`${styles.genderOption} ${
              gender === "male" ? styles.genderOptionActive : ""
            }`}
          >
            <span className={styles.genderIndicator} />
            <span>Male</span>
          </button>

          <button
            type="button"
            onClick={() => setGender("female")}
            className={`${styles.genderOption} ${
              gender === "female" ? styles.genderOptionActive : ""
            }`}
          >
            <span className={styles.genderIndicator} />
            <span>Female</span>
          </button>
        </div>

        {/* Submit */}
        <button type="submit" className={styles.submitButton}>
          Enter the digital den 😌
        </button>

        {/* Back link */}
        <button type="button" onClick={handleBack} className={styles.backLink}>
          &lt; Back to user
        </button>
      </form>
    </div>
  );
}
