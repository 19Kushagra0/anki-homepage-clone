import React from "react";
import "./Contributing.css";

export default function Contributing() {
  return (
    <div className="contributing">
      <h2 className="anki-title">Contributing</h2>
      <div className="anki-description-container">
        <p className="anki-description">
          Anki is a community project where anyone can make contributions to
          help improve everyone's experience.
        </p>
      </div>
      <div className="contributing-boxes-container">
        <div className="contributing-box">
          <div className="contributing-box-top">
            <h3>Open source</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#968CA8"
              className="contributing-box-top-image"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="contributing-box-bottom">
            If you know how to code you could help maintain Anki or create new
            add-ons/features.
          </div>
        </div>
        <div className="contributing-box">
          <div className="contributing-box-top">
            <h3>Share decks </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#968CA8"
              className="contributing-box-top-image"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="contributing-box-bottom">
            Sharing your deck can make it easier for others to start learning
            what you're studying.
          </div>
        </div>
        <div className="contributing-box">
          <div className="contributing-box-top">
            <h3>Translate anki </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#968CA8"
              className="contributing-box-top-image "
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="contributing-box-bottom">
            Help with the efforts to translate Anki so it can become more
            accessible to everyone.
          </div>
        </div>
      </div>
    </div>
  );
}
