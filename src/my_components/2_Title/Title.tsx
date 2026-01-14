import React from "react";
import "@/my_components/2_Title/Title.css";

export default function Title() {
  return (
    <div className="title">
      <div className="title-container">
        <div className="title-manual-container">
          <span>Powerful, Intelligent Flashcards</span>
          <div className="circle"></div>
          <span className="gap-1">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-3"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
              />
            </svg>
          </span>
        </div>
        <h1>Remembering is easier with Anki</h1>
        <p>
          Anki is a flashcard program that helps you spend more time on
          challenging material, and less on what you already know.
        </p>
        <button className="title-dowload-button">
          <span>Download Anki</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.5 10H16M16 10L11.5 5.5M16 10L11.5 14.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
