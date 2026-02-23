console.log("BootSequence mounted");
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  'INITIALIZING NEURAL CORE...',
  'LOADING QUANTUM PROCESSORS...',
  'ESTABLISHING BLOCKCHAIN NODES...',
  'SYNCING DISTRIBUTED SYSTEMS...',
  'ACTIVATING PORTFOLIO INTERFACE...'
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
console.log("🚀 BootSequence RENDERED");
console.log("BootSequence called");
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
console.log("BootSequence effect started");
  const lineInterval = setInterval(() => {
    setCurrentLine((prev) => {
      if (prev < bootLines.length - 1) return prev + 1;
      clearInterval(lineInterval);
      return prev;
    });
  }, 300);

  const progressInterval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setShow(false);
          setTimeout(onComplete, 800);
        }, 200);
        return 100;
      }
      return prev + 2.2;
    });
  }, 40);

  return () => {
    clearInterval(lineInterval);
    clearInterval(progressInterval);
  };
}, [onComplete]);



  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] bg-[#030306] flex items-center justify-center"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.03) 2px, rgba(0,212,255,0.03) 4px)'
        }}
      >
        <div className="w-full max-w-2xl px-8">
          <div className="space-y-4 mb-12">
            {bootLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={i <= currentLine ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between font-mono text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">&gt;</span>
                  <span className="text-gray-400">{line}</span>
                  {i === currentLine && i < bootLines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-4 bg-[#00D4FF] inline-block"
                    />
                  )}
                </div>
                {i < currentLine && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500"
                  >
                    [OK]
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#0099cc] to-[#00D4FF] relative"
              >
                <div className="absolute right-0 top-0 w-8 h-full bg-white opacity-60 blur-md" />
              </motion.div>
            </div>
            <div className="flex justify-between mt-2 font-mono text-xs text-gray-500">
              <span>LOADING</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
