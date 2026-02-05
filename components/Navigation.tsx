'use client';

import { useState } from 'react';

const sections = [
  { id: 'hiragana', label: 'ひらがな', labelEn: 'Hiragana' },
  { id: 'katakana', label: 'カタカナ', labelEn: 'Katakana' },
  { id: 'particles', label: 'じょし', labelEn: 'Particles' },
  { id: 'sentence', label: 'ぶんけい', labelEn: 'Sentence' },
  { id: 'vocabulary', label: 'たんご', labelEn: 'Vocab' },
  { id: 'expressions', label: 'ひょうげん', labelEn: 'Expressions' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile navigation toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-2 text-zinc-700 transition-colors hover:bg-zinc-50 md:hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 left-0 z-50 mt-2 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg md:hidden dark:border-zinc-700 dark:bg-zinc-800">
          <nav className="flex flex-col gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="rounded-md px-3 py-2 text-left text-sm text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                <span className="font-medium">{section.label}</span>
                <span className="ml-2 text-zinc-500 dark:text-zinc-400">
                  {section.labelEn}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop horizontal navigation */}
      <nav className="hidden gap-1 md:flex">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="flex items-center rounded-md px-2 py-1 text-xs text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            <span>{section.label}</span>
            <span className="ml-1 text-zinc-400 dark:text-zinc-500">
              {section.labelEn}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
