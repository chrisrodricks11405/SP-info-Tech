"use client";

import { useState } from "react";
import { Bot, ChevronDown, MessageCircle, Send, X } from "lucide-react";

const quickReplies = [
  { label: "Explore services", href: "/services" },
  { label: "Request a callback", href: "/#contact" },
  { label: "Chat on WhatsApp", href: "https://wa.me/6266196880" },
];

export function ContactAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {isOpen && (
        <div className="w-[min(21rem,calc(100vw-2.5rem))] overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-bold">SP Assistant</p>
                <p className="text-xs text-primary-foreground/70">
                  Here to point you in the right direction
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1.5 transition hover:bg-primary-foreground/10"
              aria-label="Close assistant"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="p-5">
            <p className="text-sm leading-6 text-muted-foreground">
              Looking for reliable IT support? Choose an option and we&apos;ll take you there.
            </p>
            <div className="mt-4 grid gap-2">
              {quickReplies.map((reply) => (
                <a
                  key={reply.label}
                  href={reply.href}
                  target={reply.href.startsWith("http") ? "_blank" : undefined}
                  rel={reply.href.startsWith("http") ? "noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-lg border border-border px-3.5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:bg-accent/10"
                >
                  {reply.label}
                  {reply.href.startsWith("http") ? (
                    <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4 text-accent" aria-hidden="true" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-2 rounded-full bg-accent px-4 py-3 font-semibold text-accent-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close SP Assistant" : "Open SP Assistant"}
      >
        {isOpen ? (
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Bot className="h-5 w-5" aria-hidden="true" />
        )}
        <span className="hidden sm:inline">SP Assistant</span>
      </button>
    </div>
  );
}
