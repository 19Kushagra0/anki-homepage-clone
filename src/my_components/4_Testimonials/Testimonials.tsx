"use client";

import React, { useState } from "react";
import "@/my_components/4_Testimonials/Testimonials.css";

const testimonialsData = [
    {
        author: 'Michael A. Nielsen, "Augmenting Long-term Memory"',
        description:
            "The single biggest change that Anki brings about is that it means memory is no longer a haphazard event, to be left to chance. Rather, it guarantees I will remember something, with minimal effort. That is, Anki makes memory a choice.",
    },
    {
        author: 'K. M. Lawson, "Anki All The Way"',
        description:
            "No other application [...] comes remotely close to Anki in terms of the number and power of features, flexibility in study, or implementation of spaced repetition.",
    },
    {
        author: "Keldin, via Email",
        description:
            "... consistent use of Anki has opened more doors for me intellectually than I could have imagined two years ago. And being a poor student, I'll be forever grateful that you've provided this software open-source and free of charge.",
    },
];

export default function Testimonials() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const showPrevious = () => {
        setTestimonialIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    const showNext = () => {
        setTestimonialIndex((prevIndex) =>
            prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="testimonials">
            <h2 className="anki-title">Testimonials</h2>

            <div className="anki-description-container">
                <p className="anki-description">
                    See what people are saying about Anki.
                </p>
            </div>

            <div className="testimonials-card-container">
                <div className="testimonials-card">
                    <div className="card-author-button-container">
                        <div className="card-author">
                            <p>
                                {testimonialsData[testimonialIndex].author}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="size-4 lg:size-5 inline ml-1"
                                    strokeWidth={3}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </p>
                        </div>

                        <div className="card-button-container">
                            {/* Previous */}
                            <div className="card-button" onClick={showPrevious}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="card-button-image"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </div>

                            {/* Next */}
                            <div className="card-button" onClick={showNext}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="card-button-image"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="card-discription-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="size-8 lg:size-12 dark:text-background"
                        >
                            <path
                                fill="currentColor"
                                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"
                            />
                        </svg>

                        <div className="card-discription">
                            {testimonialsData[testimonialIndex].description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
