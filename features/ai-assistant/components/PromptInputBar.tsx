"use client";
import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ReusableInput from '@/components/reusable/Input/Input';

const PromptInputBar = () => {
  const [prompt, setPrompt] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setPrompt('');
  };

  return (
    <div className="sticky bottom-4 pt-4">
      <form 
        onSubmit={handleSend} 
        className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 hover:border-zinc-700/80 focus-within:border-zinc-600 focus-within:ring-1 focus-within:ring-zinc-600 transition-all rounded-2xl p-3 shadow-2xl flex flex-col gap-3"
      >
        <ReusableInput 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask Momentum AI to search, create, update, or assign tasks..."
        aria-label="Prompt input"
        />
        <div className="flex items-center justify-between px-2 pt-1 border-t border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs text-zinc-400 select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>Grounded in workspace tasks</span>
            <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/50 text-[10px] text-zinc-300 font-mono">
              7 task tools enabled
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Attach file"
              className="h-8 w-8 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 cursor-pointer transition-colors"
            >
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button
              type="submit"
              disabled={!prompt.trim()}
              className="bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs h-8 px-4 rounded-xl shadow-sm flex items-center gap-1.5 cursor-pointer transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Send <Send className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PromptInputBar;