import React, { useEffect } from 'react'
import './Navbar.css'

interface NavbarProps {
    showNavbar: () => void;
}

export default function Navbar({ showNavbar }: NavbarProps) {
    useEffect(() => {
        // Block scroll when component mounts
        document.body.style.overflow = 'hidden';

        // Re-enable scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className='navbar'>
            <div className="">
                <div className="navbar-header">
                    <button onClick={showNavbar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-8"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            />
                        </svg>

                    </button>
                </div>
                <div className="navbar-links">
                    <div className="navbar-link">Docs  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-8"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                        />
                    </svg></div>
                    <div className="navbar-link">Forums  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-8"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                        />
                    </svg></div>
                    <div className="navbar-link">AnkiWeb  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-8"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                        />
                    </svg></div>
                    <div className="navbar-link">Add-Ons  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-8"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                        />
                    </svg></div>
                    <div className="navbar-link">Shared Decks  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-8"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                        />
                    </svg></div>
                </div>

            </div>
            <div className="navbar-download-container">
                <button>Download Anki</button>
            </div>
        </div >
    )
}
