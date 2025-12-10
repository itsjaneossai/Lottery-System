"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import DisplayCard from "../../components/displayCard";

interface FeaturedArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  publishedOn: string;
  tags: string[];
}

const FEATURED_ARTICLE: FeaturedArticle = {
  id: "featured-1",
  title: "Research Team Develops Low-Cost Water Filtration Prototype",
  description:
    "Engineering and Environmental Science collaborate on affordable filter for rural communities.",
  image: "/oluwakemi.jpg",
  author: "Desir Obinna",
  publishedOn: "26 November 2025",
  tags: ["Engineering", "Research", "Water-tech"],
};

// Mock cards data for the 3-column row below featured section
const MOCK_CARDS = [
  {
    id: "c1",
    category: "Campus",
    title: "New Student Centre Opens Its Doors",
    excerpt:
      "The multimodal Student Centre provides study spaces, counseling rooms, and a 24/7 lounge for students.",
    image: "/oluwakemi.jpg",
    author: "Emmanuel Nwafor",
    date: "20 Nov 2025",
  },
  {
    id: "c2",
    category: "Tech & Science",
    title: "Students Win National Hackathon with Health App Prototype",
    excerpt:
      'Team "Wellcode" secures top prize for an app that tracks immunization records in low-connectivity areas.',
    image: "/oluwakemi.jpg",
    author: "Terry Isife",
    date: "19 Nov 2025",
  },
  {
    id: "c3",
    category: "Arts & Humanities",
    title: "History Department Hosts Panel on Colonial Architecture",
    excerpt:
      "Scholars discuss preservation, restoration and campus heritage in a public forum.",
    image: "/oluwakemi.jpg",
    author: "Otiete Ayebanua",
    date: "18 Nov 2025",
  },
];

export default function Newsletter() {
  const [selectedTab, setSelectedTab] = useState<string>("Popular");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const totalPages = 10;

  return (
    <DisplayCard background="#0C0E12">
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navContent}>
            <div className={styles.navLeft}>
              <div className={styles.forYou}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                  <circle cx="19" cy="12" r="1" fill="currentColor" />
                  <circle cx="5" cy="12" r="1" fill="currentColor" />
                </svg>
                <span>For You</span>
              </div>
            </div>

            <div className={styles.navRight}>
              <button className={styles.menuBtn} title="More options">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="5" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="19" r="2" fill="currentColor" />
                </svg>
              </button>
              <button className={styles.linkBtn} title="Copy link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className={styles.shareBtn}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="5" r="3" fill="currentColor" />
                  <circle cx="6" cy="12" r="3" fill="currentColor" />
                  <circle cx="18" cy="19" r="3" fill="currentColor" />
                  <path
                    d="M8.59 13.51l6.83 3.98"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.41 6.51l-6.82 3.98"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>
        </nav>

        <div className={styles.featuredSection}>
          <article className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <img src={FEATURED_ARTICLE.image} alt={FEATURED_ARTICLE.title} />
              <div className={styles.featuredOverlay}></div>
            </div>

            <div className={styles.featuredContent}>
              <h1 className={styles.featuredTitle}>{FEATURED_ARTICLE.title}</h1>
              <p className={styles.featuredDescription}>
                {FEATURED_ARTICLE.description}
              </p>

              <div className={styles.featuredMeta}>
                <div className={styles.metaLeft}>
                  <div className={styles.authorSection}>
                    <span className={styles.authorLabel}>Author</span>
                    <div className={styles.author}>
                      <div className={styles.authorAvatar}></div>
                      <span className={styles.authorName}>
                        {FEATURED_ARTICLE.author}
                      </span>
                    </div>
                  </div>

                  <div className={styles.publishedSection}>
                    <span className={styles.publishedLabel}>Published on</span>
                    <span className={styles.publishedDate}>
                      {FEATURED_ARTICLE.publishedOn}
                    </span>
                  </div>
                </div>

                <div className={styles.tagsSection}>
                  <span className={styles.tagsLabel}>Tags</span>
                  <div className={styles.tagsList}>
                    {FEATURED_ARTICLE.tags.map((tag) => (
                      <button key={tag} className={styles.tag}>
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Popular cards row */}
        <section className={styles.popularSection}>
          <div className={styles.popularInner}>
            <div className={styles.tabsRow}>
              <nav className={styles.tabs}>
                <div>
                  {[
                    "Popular",
                    "Updates",
                    "Campus",
                    "Events",
                    "Science & Tech",
                  ].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTab(t)}
                      className={
                        selectedTab === t ? styles.tabActive : styles.tab
                      }
                      aria-pressed={selectedTab === t}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </nav>

              <div className={styles.filterWrap}>
                <select
                  className={styles.categorySelect}
                  aria-label="All categories"
                >
                  <option>All categories</option>
                  <option>Campus</option>
                  <option>Tech & Science</option>
                  <option>Arts & Humanities</option>
                </select>
              </div>
            </div>

            <div className={styles.cardsGrid}>
              {MOCK_CARDS.map((card) => (
                <article key={card.id} className={styles.cardItem}>
                  <div className={styles.cardMedia}>
                    <img src={card.image} alt={card.title} />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>{card.category}</div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardExcerpt}>{card.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <div className={styles.cardAuthor}>
                        <div className={styles.cardAvatar}></div>
                        <div className={styles.cardAuthorInfo}>
                          <div className={styles.cardAuthorName}>
                            {card.author}
                          </div>
                          <div className={styles.cardDate}>{card.date}</div>
                        </div>
                      </div>

                      <button
                        className={styles.cardOpenBtn}
                        aria-label={`Open ${card.title}`}
                      >
                        ↗
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <nav className={styles.pagination}>
          <button 
            className={styles.paginationBtn} 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>

          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? styles.pageActive : styles.page}
              >
                {page}
              </button>
            ))}
          </div>

          <button 
            className={styles.paginationBtn}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </nav>

          {/* Newsletter Subscription Section */}
        <section className={styles.subscriptionSection}>
          <div className={styles.subscriptionContent}>
            <div className={styles.subscriptionText}>
              <h2 className={styles.subscriptionTitle}>Join 2,500+ subscribers</h2>
              <p className={styles.subscriptionDesc}>
                Stay in the loop with everything you need to know.
              </p>
            </div>

            <form className={styles.subscriptionForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.subscriptionInput}
                required
              />
              <p className={styles.subscriptionHint}>
                Be first to know about events and deadlines.
              </p>
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </DisplayCard>
  );
}
