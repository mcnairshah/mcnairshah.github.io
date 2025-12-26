import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ChladniBackground from '../components/ChladniBackground';

const Home = () => {
    const [isMuted, setIsMuted] = useState(false);

    return (
        <div className="full-screen" style={{ overflow: 'hidden' }}>
            <ChladniBackground muted={isMuted} />

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 5vw',
                boxSizing: 'border-box',
                pointerEvents: 'none' // Allow clicks to pass through to canvas
            }}>
                <div style={{ pointerEvents: 'auto' }}>
                    <h1 className="fade-shadow" style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: 600,
                        margin: 0
                    }}>
                        McNair Shah
                    </h1>
                </div>

                {/* Mute Button */}
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        pointerEvents: 'auto',
                        padding: '10px',
                        zIndex: 10,
                        color: 'rgba(255, 255, 255, 0.7)',
                        transition: 'color 0.3s ease'
                    }}
                    className="fade-shadow"
                    title={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="1" y1="1" x2="23" y2="23"></line>
                            <path d="M9 9v6a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0a7 7 0 0 1 0 2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>
                    )}
                </button>

                <nav style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'right',
                    pointerEvents: 'auto'
                }}>
                    <Link to="/about" className="fade-shadow" style={{ fontSize: '1.2rem' }}>About Me</Link>
                    <Link to="/blog" className="fade-shadow" style={{ fontSize: '1.2rem' }}>Blog</Link>
                    <Link to="/projects" className="fade-shadow" style={{ fontSize: '1.2rem' }}>Projects</Link>
                </nav>
            </div>
        </div>
    );
};

export default Home;
