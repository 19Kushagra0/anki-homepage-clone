import React from "react";
import "./Concept.css";
import Image from "next/image";
export default function Concepts() {
  return (
    <div className="concepts">
      <h2 className="anki-title">Basic concepts</h2>
      <div className="anki-description-container">
        <p className="anki-description">
          Anki supports complex workflows, but getting started is easy.
        </p>
      </div>
      <div className="concepts-container">
        <Image
          className="concepts-image"
          width={345}
          height={207}
          src="/asset/images/deck-graphic-dark.svg"
          alt=""
        />
        <div className="concept-text-container">
          <h3>Decks</h3>
          <p>
            Decks are groups of flashcards that allow you to study specific
            parts of your collection instead of everything all at once. Create a
            new deck and add some flashcards to get started.
          </p>
        </div>
      </div>
      <div className="concepts-container">
        <Image
          className="concepts-image show-later"
          width={345}
          height={207}
          src="/asset/images/review-graphic-dark.svg"
          alt=""
        />
        <div className="concept-text-container">
          <h3>Reviews</h3>
          <p>
            When you're ready, start reviewing your flashcards. Rate your recall
            with the most suitable option and Anki will schedule the next review
            for when you're most likely to forget the information.
          </p>
        </div>
        <Image
          className="concepts-image hide-later"
          width={345}
          height={207}
          src="/asset/images/review-graphic-dark.svg"
          alt=""
        />
      </div>
    </div>
  );
}
