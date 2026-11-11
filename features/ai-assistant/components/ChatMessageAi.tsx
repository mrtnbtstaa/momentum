"use client";
import React, { useState } from 'react';
import { Copy, Check, Search, Bot, UserPlus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ChatMessageAi = () => {
  const [reassigned, setReassigned] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("I found 1 urgent overdue task assigned to you in Atlas Core...");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article 
      aria-label="AI Assistant Message"
      className="flex flex-col gap-4 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 sm:p-6 shadow-xl relative backdrop-blur-sm"
    >
      
      {/* AI Message Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
        <div className="flex items-center gap-2.5">
          <div 
            aria-hidden="true"
            className="w-7 h-7 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs shadow-sm"
          >
            M
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-100 tracking-tight">Momentum AI</span>
            <span className="text-[10px] text-zinc-500" aria-hidden="true">•</span>
            <time dateTime="2026-11-10T10:42" className="text-[11px] text-zinc-400">10:42 AM</time>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          aria-label={copied ? "Message copied to clipboard" : "Copy AI message"}
          className="h-8 w-8 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 rounded-lg transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-indigo-500"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
        </Button>
      </div>

      {/* Execution Stack / Tool Cards */}
      <div className="flex flex-col gap-2.5" aria-label="Tool execution steps">
        
        {/* Tool Execution Card 1 */}
        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3.5 flex flex-col gap-2 text-xs shadow-inner">
          <div className="flex items-center justify-between">
            <span className="font-mono text-zinc-300 flex items-center gap-2 font-medium">
              <Search className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" /> tool: search_tasks
            </span>
            <Badge variant="outline" className="px-2 py-0.5 bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-[10px] font-medium rounded-md">
              <span aria-hidden="true">● </span>Success
            </Badge>
          </div>
          <p className="text-zinc-400 font-mono text-[11px] bg-zinc-900/60 px-2.5 py-1.5 rounded-lg border border-zinc-800/50">
            Query: status=&quot;in_progress&quot;, assignee=&quot;Sarah Chen&quot;, project=&quot;Atlas Core&quot;
          </p>
          <p className="text-zinc-300 text-xs">
            Found 2 matching tasks: <strong className="text-zinc-100 font-medium">ATL-042</strong> (Urgent, Overdue) and <strong className="text-zinc-100 font-medium">ATL-045</strong> (In Review).
          </p>
        </div>

        {/* Tool Execution Card 2 */}
        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3.5 flex flex-col gap-2 text-xs shadow-inner">
          <div className="flex items-center justify-between">
            <span className="font-mono text-zinc-300 flex items-center gap-2 font-medium">
              <Bot className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" /> tool: get_task
            </span>
            <span className="text-[10px] text-zinc-400 font-mono bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-800">
              task_id=&quot;ATL-042&quot;
            </span>
          </div>
          <p className="text-zinc-300 text-xs">
            Retrieved details: Design Token Migration (Phase 2 &amp; Semantic Mappings). Priority: P0 Urgent - Due: Nov 02 (2 days overdue).
          </p>
        </div>

      </div>

      {/* Main Response Copy */}
      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed pt-1">
        I found 1 urgent overdue task assigned to you in <strong className="text-white font-semibold">Atlas Core</strong>:
      </p>

      {/* Task Preview Card */}
      <div className="bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700/80 transition-all rounded-xl p-4 flex items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3.5 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shrink-0 shadow-sm shadow-rose-500/50" aria-hidden="true" />
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-xs text-zinc-400 font-bold">ATL-042</span>
              <span className="text-xs font-semibold text-zinc-100 truncate">Design Token Migration</span>
              <span className="px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/25 text-[10px] text-rose-400 font-semibold">
                P0 Urgent
              </span>
            </div>
            <span className="text-[11px] text-zinc-400">
              Due Nov 02, 2026 · 2 days overdue · Atlas Core Milestone 3
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed">
        Because reassigning tasks modifies ownership in your sprint backlog, please review and confirm the proposed change below:
      </p>

      {/* Confirmation Box (Reassign Action) */}
      <div className="bg-zinc-950/90 border border-indigo-500/30 rounded-xl p-4 sm:p-5 flex flex-col gap-3.5 shadow-md">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs font-semibold text-zinc-200 flex items-center gap-2">
            <UserPlus className="w-4 h-4 text-indigo-400" aria-hidden="true" /> Confirm Reassignment (<span className="font-mono">assign_task</span>)
          </span>
          <span className="text-[10px] text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 px-2.5 py-0.5 rounded-full font-medium">
            Consequential update
          </span>
        </div>

        <p className="text-xs text-zinc-300 leading-relaxed">
          Reassign <strong className="text-white font-mono bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">ATL-042</strong> from <strong className="text-white font-medium">Sarah Chen</strong> to <strong className="text-white font-medium">Marcus Vance (Senior Systems Engineer)</strong>.
        </p>

        <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-zinc-900">
          {reassigned ? (
            <div 
              role="status" 
              aria-live="polite"
              className="flex items-center gap-2 text-xs text-emerald-400 font-medium px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-xl shadow-sm"
            >
              <Check className="w-4 h-4" aria-hidden="true" /> Reassignment Confirmed
            </div>
          ) : (
            <>
              <Button
                variant="outline"
                className="bg-zinc-900/90 hover:bg-zinc-800 border-zinc-800 text-zinc-300 text-xs h-9 px-4 rounded-xl cursor-pointer transition-colors shadow-sm focus-visible:ring-1 focus-visible:ring-indigo-500"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setReassigned(true)}
                className="bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs h-9 px-4 rounded-xl shadow-sm flex items-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-1 focus-visible:ring-indigo-500"
              >
                <Check className="w-3.5 h-3.5 stroke-3" aria-hidden="true" /> Confirm Reassign
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Source Footer Links */}
      <div className="flex items-center justify-between text-xs text-zinc-500 pt-3 border-t border-zinc-800/60">
        <span className="flex items-center gap-1.5">
          🔗 Source: <button type="button" className="text-indigo-400 hover:text-indigo-300 hover:underline cursor-pointer font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded">Atlas Core / ATL-042</button>
        </span>
        <Button 
          type="button" 
          className="flex items-center gap-1 text-zinc-300 hover:text-white font-medium group cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded px-1"
        >
          Open task <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </Button>
      </div>

    </article>
  );
};

export default ChatMessageAi;