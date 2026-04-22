"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "w-[52px] h-[38px]", variant = 'full' }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 800 600"
        className={`w-full h-full ${variant === 'white' ? 'logo-white' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              .lulu-script {
                font-family: var(--font-great-vibes), cursive;
                font-size: 340px;
                fill: #F2DA24;
              }
              .tissue-sans {
                font-family: var(--font-montserrat), sans-serif;
                font-weight: 700;
                font-size: 72px;
                fill: #FFFFFF;
                letter-spacing: 0.12em;
              }
            `}
          </style>
        </defs>
        
        {/* We remove the hardcoded rect background to allow the CSS to handle it */}
        <text x="50%" y="55%" textAnchor="middle" className="lulu-script">Lulu</text>
        <text x="50%" y="78%" textAnchor="middle" className="tissue-sans uppercase">Tissue Products</text>
      </svg>
    </div>
  );
};

export default Logo;
