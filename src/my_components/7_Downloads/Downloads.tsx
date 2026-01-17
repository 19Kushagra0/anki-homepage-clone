import React from 'react'
import './Downloads.css'

export default function Downloads() {
    return (
        <div className='downloads'>

            <h2 className="anki-title">Downloads
            </h2>
            <div className="anki-description-container">
                <p className="anki-description">
                    Choose the correct download for your platform. For details, see the
                    {" "}
                    <span>installation guide</span>.
                </p>
            </div>
            <div className="desktop-download-container">
                <div className="destop-download-top">
                    <div className="destop-download-left">
                        <h3>Desktop</h3>
                        <p>The free computer version is available for all major platforms.</p>
                    </div>
                    <div className="destop-download-right">
                        <div className="destop-download-os-container">
                            <div className="destop-download-os-text">Windows 10+</div>
                            <div className="destop-download-os-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.005 12L3 6.408l6.8-.923v6.517H3.005ZM11 5.32L19.997 4v8H11zM20.067 13l-.069 8l-9.065-1.275L11 13zM9.8 19.58l-6.795-.931V13H9.8z"
                                    />
                                </svg>

                                Anki 25.09</div>
                        </div>
                        <div className="destop-download-os-container os-border">
                            <div className="destop-download-os-text">macOS 12+</div>
                            <div className="destop-download-os-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M17.537 12.625a4.42 4.42 0 0 0 2.684 4.047a11 11 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457c-1.34.025-1.77-.794-3.3-.794c-1.531 0-2.01.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532c-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869c.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984a4.52 4.52 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.48 4.48 0 0 0-2.945 1.516a4.18 4.18 0 0 0-1.061 3.093a3.7 3.7 0 0 0 2.967-1.416Z"
                                    />
                                </svg>

                                Anki 25.09</div>
                        </div>  <div className="destop-download-os-container os-border">
                            <div className="destop-download-os-text">Linux 2023+
                            </div>
                            <div className="destop-download-os-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 128 128"
                                    className="size-6"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M113.823 104.595c-1.795-1.478-3.629-2.921-5.308-4.525c-1.87-1.785-3.045-3.944-2.789-6.678c.147-1.573-.216-2.926-2.113-3.452c.446-1.154.864-1.928 1.033-2.753c.188-.92.178-1.887.204-2.834c.264-9.96-3.334-18.691-8.663-26.835c-2.454-3.748-5.017-7.429-7.633-11.066c-4.092-5.688-5.559-12.078-5.633-18.981a47.6 47.6 0 0 0-1.081-9.475C80.527 11.956 77.291 7.233 71.422 4.7c-4.497-1.942-9.152-2.327-13.901-1.084c-6.901 1.805-11.074 6.934-10.996 14.088c.074 6.885.417 13.779.922 20.648c.288 3.893-.312 7.252-2.895 10.34c-2.484 2.969-4.706 6.172-6.858 9.397c-1.229 1.844-2.317 3.853-3.077 5.931c-2.07 5.663-3.973 11.373-7.276 16.5c-1.224 1.9-1.363 4.026-.494 6.199c.225.563.363 1.429.089 1.882c-2.354 3.907-5.011 7.345-10.066 8.095c-3.976.591-4.172 1.314-4.051 5.413c.1 3.337.061 6.705-.28 10.021c-.363 3.555.008 4.521 3.442 5.373c7.924 1.968 15.913 3.647 23.492 6.854c3.227 1.365 6.465.891 9.064-1.763c2.713-2.771 6.141-3.855 9.844-3.859c6.285-.005 12.572.298 18.86.369c1.702.02 2.679.653 3.364 2.199c.84 1.893 2.26 3.284 4.445 3.526c4.193.462 8.013-.16 11.19-3.359c3.918-3.948 8.436-7.066 13.615-9.227c1.482-.619 2.878-1.592 4.103-2.648c2.231-1.922 2.113-3.146-.135-5M62.426 24.12c.758-2.601 2.537-4.289 5.243-4.801c2.276-.43 4.203.688 5.639 3.246c1.546 2.758 2.054 5.64.734 8.658c-1.083 2.474-1.591 2.707-4.123 1.868c-.474-.157-.937-.343-1.777-.652c.708-.594 1.154-1.035 1.664-1.382c1.134-.772 1.452-1.858 1.346-3.148c-.139-1.694-1.471-3.194-2.837-3.175c-1.225.017-2.262 1.167-2.4 2.915c-.086 1.089.095 2.199.173 3.589c-3.446-1.023-4.711-3.525-3.662-7.118m-12.75-2.251c1.274-1.928 3.197-2.314 5.101-1.024c2.029 1.376 3.547 5.256 2.763 7.576c-.285.844-1.127 1.5-1.716 2.241l-.604-.374c-.23-1.253-.276-2.585-.757-3.733c-.304-.728-1.257-1.184-1.919-1.762c-.622.739-1.693 1.443-1.757 2.228c-.088 1.084.477 2.28.969 3.331c.311.661 1.001 1.145 1.713 1.916l-1.922 1.51c-3.018-2.7-3.915-8.82-1.871-11.909M87.34 86.075c-.203 2.604-.5 2.713-3.118 3.098c-1.859.272-2.359.756-2.453 2.964a102 102 0 0 0-.012 7.753c.061 1.77-.537 3.158-1.755 4.393c-6.764 6.856-14.845 10.105-24.512 8.926c-4.17-.509-6.896-3.047-9.097-6.639c.98-.363 1.705-.607 2.412-.894c3.122-1.27 3.706-3.955 1.213-6.277c-1.884-1.757-3.986-3.283-6.007-4.892c-1.954-1.555-3.934-3.078-5.891-4.629c-1.668-1.323-2.305-3.028-2.345-5.188c-.094-5.182.972-10.03 3.138-14.747c1.932-4.209 3.429-8.617 5.239-12.885c.935-2.202 1.906-4.455 3.278-6.388c1.319-1.854 2.134-3.669 1.988-5.94c-.084-1.276-.016-2.562-.016-3.843l.707-.352c1.141.985 2.302 1.949 3.423 2.959c4.045 3.646 7.892 3.813 12.319.67c1.888-1.341 3.93-2.47 5.927-3.652c.497-.294 1.092-.423 1.934-.738c2.151 5.066 4.262 10.033 6.375 15c1.072 2.524 1.932 5.167 3.264 7.547c2.671 4.775 4.092 9.813 4.07 15.272c-.012 2.83.137 5.67-.081 8.482"
                                    />
                                </svg>

                                Anki 25.09</div>
                        </div>

                    </div>
                </div>
                <div className="destop-download-bottom">
                    <div className="destop-download-bottom-link">

                        <span>
                            Installation Guide

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="destop-download-bottom-link">

                        <span>

                            Change Notes & Older Releases

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mobile-download-container">

                <div className="destop-download-top">
                    <div className="destop-download-left">
                        <h3>Mobile</h3>
                        <p>AnkiMobile is the official iOS app and all purchases help fund Anki's development.</p>
                    </div>
                    <div className="destop-download-right">
                        <div className="destop-download-os-container">
                            <div className="destop-download-os-text">iOS</div>
                            <div className="destop-download-os-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M8.823 15.343q-.591-.716-1.479-.509l-.15.041l-.59 1.016a.823.823 0 0 0 1.366.916l.062-.093zM13.21 8.66c-.488.404-.98 1.597-.29 2.787l3.04 5.266a.824.824 0 0 0 1.476-.722l-.049-.1l-.802-1.392h1.19a.82.82 0 0 0 .822-.823a.82.82 0 0 0-.72-.816l-.103-.006h-2.14L13.44 9.057zm.278-3.044a.825.825 0 0 0-1.063.21l-.062.092l-.367.633l-.359-.633a.824.824 0 0 0-1.476.722l.049.1l.838 1.457l-2.685 4.653H6.266a.82.82 0 0 0-.822.822c0 .421.312.766.719.817l.103.006h7.48c.34-.64-.06-1.549-.81-1.638l-.121-.007h-2.553l3.528-6.11a.823.823 0 0 0-.302-1.124"
                                    />
                                </svg>

                                AnkiMobile</div>
                        </div>
                        <div className="destop-download-os-container os-border">
                            <div className="destop-download-os-text">Android</div>
                            <div className="destop-download-os-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M17.537 12.625a4.42 4.42 0 0 0 2.684 4.047a11 11 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457c-1.34.025-1.77-.794-3.3-.794c-1.531 0-2.01.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532c-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869c.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984a4.52 4.52 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.48 4.48 0 0 0-2.945 1.516a4.18 4.18 0 0 0-1.061 3.093a3.7 3.7 0 0 0 2.967-1.416Z"
                                    />
                                </svg>

                                AnkiDroid</div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
