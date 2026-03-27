import { useState, useEffect, useCallback } from 'react';

const roles = [
  'Agentic AI Developer',
  'AI Workflow Automation Specialist',
  'Backend Engineer',
  'DevOps & Cloud Engineer',
  'Frontend Vibe Coder',
];

export default function GlitchText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  const getRandomChar = () => glitchChars[Math.floor(Math.random() * glitchChars.length)];

  const glitchText = useCallback((text: string, intensity: number) => {
    return text
      .split('')
      .map((char) => {
        if (char === ' ') return ' ';
        if (Math.random() < intensity) {
          return getRandomChar();
        }
        return char;
      })
      .join('');
  }, []);

  const cycleRole = useCallback(() => {
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      if (iterations < maxIterations) {
        setDisplayText(glitchText(roles[(roleIndex + 1) % roles.length], 0.8 - (iterations * 0.08)));
        iterations++;
      } else {
        clearInterval(interval);
        const nextIndex = (roleIndex + 1) % roles.length;
        setDisplayText(roles[nextIndex]);
        setRoleIndex(nextIndex);
        setIsGlitching(false);
      }
    }, 50);
  }, [roleIndex, glitchText]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isGlitching) {
        cycleRole();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [cycleRole, isHovered, isGlitching]);

  const handleHover = () => {
    if (!isGlitching) {
      setIsHovered(true);
      cycleRole();
      setTimeout(() => setIsHovered(false), 500);
    }
  };

  return (
    <>
      <style>{`
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        
        .glitch-text:hover::before {
          animation: glitch-1 0.3s infinite linear alternate-reverse;
          color: #ff00ff;
          z-index: -1;
          opacity: 0.8;
        }
        
        .glitch-text:hover::after {
          animation: glitch-2 0.3s infinite linear alternate-reverse;
          color: #00ffff;
          z-index: -2;
          opacity: 0.8;
        }
        
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, -2px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, 2px); }
          40% { clip-path: inset(40% 0 30% 0); transform: translate(-1px, 1px); }
          60% { clip-path: inset(10% 0 70% 0); transform: translate(1px, -1px); }
          80% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
          100% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-2 {
          0% { clip-path: inset(70% 0 10% 0); transform: translate(2px, 2px); }
          20% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, -2px); }
          40% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
          60% { clip-path: inset(60% 0 20% 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(5% 0 85% 0); transform: translate(2px, -2px); }
          100% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 2px); }
        }
      `}</style>
      
      <h2
        className="glitch-text"
        data-text={displayText}
        onMouseEnter={handleHover}
        style={{
          minHeight: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--muted)',
          fontWeight: 400,
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          marginBottom: '1.5rem',
          cursor: 'default',
          userSelect: 'none',
        }}
      >
        {displayText}
      </h2>
    </>
  );
}
