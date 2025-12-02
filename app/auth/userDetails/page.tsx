"use client";

import { useState, FormEvent, useRef } from "react";
import styles from "./style.module.css";
import { FiCalendar } from "react-icons/fi";
import { useRouter } from "next/navigation";

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

type FormErrors = {
  regNumber?: string;
  birthday?: string;
  gender?: string;
};

export default function UserDetailsPage() {
  const [faculty, setFaculty] = useState<Faculty>("Biological Sciences");
  const [department, setDepartment] = useState<string>(
    FACULTIES["Biological Sciences"][0]
  );
  const [regNumber, setRegNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState<Gender>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const dateRef = useRef<HTMLInputElement | null>(null);
   const router = useRouter();

  const validateForm = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!regNumber.trim()) {
      nextErrors.regNumber = "Please enter your registration or ID number.";
    }

    if (!birthday) {
      nextErrors.birthday = "Please select your birthday.";
    }

    if (!gender) {
      nextErrors.gender = "Please choose your gender.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
router.push("/auth/congratulations")
  };

  const handleBack = () => {
    console.log("Back to user");
  };

  const handleFacultyChange = (value: string) => {
    const nextFaculty = value as Faculty;
    setFaculty(nextFaculty);
    const firstDept = FACULTIES[nextFaculty][0] ?? "";
    setDepartment(firstDept);
  };

  const isSubmitDisabled = !regNumber.trim() || !birthday || !gender;

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
            className={`${styles.input} ${styles.inputNoSpinner} ${
              errors.regNumber ? styles.inputError : ""
            }`}
            placeholder="2024/124212"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
          />
          {errors.regNumber && (
            <p className={styles.errorText}>{errors.regNumber}</p>
          )}
        </div>

        {/* Birthday */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Your birthday</label>
          <div
            className={styles.inputWithIcon}
            onClick={() => {
              if (dateRef.current && (dateRef.current as any).showPicker) {
                (dateRef.current as any).showPicker();
              } else {
                dateRef.current?.focus();
              }
            }}
          >
            <input
              ref={dateRef}
              type="date"
              className={`${styles.input} ${styles.inputDate} ${
                errors.birthday ? styles.inputError : ""
              }`}
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <FiCalendar className={styles.inputIcon} />
          </div>
          {errors.birthday && (
            <p className={styles.errorText}>{errors.birthday}</p>
          )}
        </div>

        {/* Gender */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Gender</label>
          <div className={styles.genderGroup}>
            <button
              type="button"
              onClick={() => {
                setGender("male");
                setErrors((prev) => ({ ...prev, gender: undefined }));
              }}
              className={`${styles.genderOption} ${
                gender === "male" ? styles.genderOptionActive : ""
              }`}
            >
              <span className={styles.genderIndicator} />
              <span>Male</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setGender("female");
                setErrors((prev) => ({ ...prev, gender: undefined }));
              }}
              className={`${styles.genderOption} ${
                gender === "female" ? styles.genderOptionActive : ""
              }`}
            >
              <span className={styles.genderIndicator} />
              <span>Female</span>
            </button>
          </div>
          {errors.gender && (
            <p className={styles.errorText}>{errors.gender}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitDisabled}
        >
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
