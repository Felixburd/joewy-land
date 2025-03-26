'use client';
import React from 'react';
import { TextShimmer } from '@/src/components/TextShimmer';

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden relative bg-white">
      {/* Background with animated gradients */}
      <div 
        className="absolute inset-0 animate-morph"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, #F5B509 20%, transparent 100%),
            radial-gradient(circle at 80% 30%, #383966 20%, transparent 100%),
            radial-gradient(circle at 50% 80%, #598393 20%, transparent 100%)
          `,
          backgroundBlendMode: 'screen',
        }}
      />
      
      {/* Glassmorphism Taskbar */}
      <div className="absolute top-3 left-3 right-3 h-12 backdrop-blur-md bg-white/10 border border-white/20 shadow-[4px_3px_11px_0px_rgba(0,_0,_0,_0.02)] rounded-lg flex items-center justify-between pl-5 pr-2">
        <h1 
          className="font-space-grotesk font-bold text-xl text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Joewy
        </h1>
        
        {/* Beta Button */}
        <a 
          href="https://felixburt.com/joewy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-md backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors duration-200"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Beta
        </a>
      </div>
      
      {/* Centered content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <TextShimmer 
          className="font-space-grotesk font-medium text-lg text-white" 
          duration={3}
          as="p"
        >
          Coming soon...
        </TextShimmer>
      </div>
    </main>
  );
}
