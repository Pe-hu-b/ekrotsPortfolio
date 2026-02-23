import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalEntry {
  type: 'system' | 'user' | 'output' | 'error' | 'prompt';
  content: string;
}

const commands: Record<string, () => TerminalEntry[]> = {
  help: () => [
    { type: 'output', content: 'Available commands:' },
    { type: 'output', content: '  help           - Show this help message' },
    { type: 'output', content: '  run project    - Execute current project' },
    { type: 'output', content: '  show skills    - Display skill levels' },
    { type: 'output', content: '  render 3d      - Initialize 3D renderer' },
    { type: 'output', content: '  whoami         - Display user info' },
    { type: 'output', content: '  status         - System status' },
    { type: 'output', content: '  clear          - Clear terminal' }
  ],
  'run project': () => [
    { type: 'output', content: 'Compiling project...' },
    { type: 'output', content: 'Progress: ████████████ 100%' },
    { type: 'output', content: 'Build successful! Project ready.' }
  ],
  'show skills': () => [
    { type: 'output', content: 'React/TypeScript  ████████████████ 95%' },
    { type: 'output', content: 'Three.js/WebGL    ███████████████░ 90%' },
    { type: 'output', content: 'Node.js/Express   ██████████████░░ 88%' },
    { type: 'output', content: 'GLSL Shaders      █████████████░░░ 85%' },
    { type: 'output', content: 'System Design     ████████████░░░░ 82%' }
  ],
  'render 3d': () => [
    { type: 'output', content: 'Initializing WebGL context...' },
    { type: 'output', content: 'Loading shader programs...' },
    { type: 'output', content: '3D renderer active!' }
  ],
  whoami: () => [
    { type: 'output', content: 'root@neural-core' },
    { type: 'output', content: 'Full-Stack Developer & Creative Technologist' }
  ],
  status: () => [
    { type: 'output', content: 'System: OPERATIONAL' },
    { type: 'output', content: 'Neural Core: ONLINE' },
    { type: 'output', content: 'Uptime: 99.9%' }
  ]
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<TerminalEntry[]>([
    { type: 'system', content: 'Neural Terminal v3.0.1 - Type "help" for commands' }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((prev) => [...prev, { type: 'user', content: cmd }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setInput('');
    setHistoryIndex(-1);
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 400));

    if (trimmed === 'clear') {
      setHistory([{ type: 'system', content: 'Terminal cleared.' }]);
    } else if (commands[trimmed]) {
      setHistory((prev) => [...prev, ...commands[trimmed]()]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'error', content: `Command not found: ${cmd}. Type "help" for available commands.` }
      ]);
    }

    setIsProcessing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div
      className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-gray-400 font-mono">neural-terminal</span>
      </div>

      <div
        ref={terminalRef}
        className="p-4 h-96 overflow-y-auto font-mono text-sm space-y-1"
      >
        <AnimatePresence>
          {history.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={
                entry.type === 'system' ? 'text-gray-600' :
                entry.type === 'user' ? 'text-white' :
                entry.type === 'error' ? 'text-red-400' :
                'text-[#7B61FF]'
              }
            >
              {entry.type === 'user' && <span className="text-[#00D4FF]">&gt; </span>}
              {entry.content}
            </motion.div>
          ))}
        </AnimatePresence>

        {!isProcessing && (
          <div className="flex items-center gap-2">
            <span className="text-[#00D4FF]">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white"
              autoFocus
            />
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="w-2 h-4 bg-[#00D4FF]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
