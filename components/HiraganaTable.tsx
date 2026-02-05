"use client";

import { useState } from "react";

import { useIsLargeScreen } from "@/hooks/useMediaQuery";

interface KanaCell {
  kana: string;
  romaji: string;
}

const basicHiragana: (KanaCell | null)[][] = [
  [
    { kana: "あ", romaji: "a" },
    { kana: "い", romaji: "i" },
    { kana: "う", romaji: "u" },
    { kana: "え", romaji: "e" },
    { kana: "お", romaji: "o" },
  ],
  [
    { kana: "か", romaji: "ka" },
    { kana: "き", romaji: "ki" },
    { kana: "く", romaji: "ku" },
    { kana: "け", romaji: "ke" },
    { kana: "こ", romaji: "ko" },
  ],
  [
    { kana: "さ", romaji: "sa" },
    { kana: "し", romaji: "shi" },
    { kana: "す", romaji: "su" },
    { kana: "せ", romaji: "se" },
    { kana: "そ", romaji: "so" },
  ],
  [
    { kana: "た", romaji: "ta" },
    { kana: "ち", romaji: "chi" },
    { kana: "つ", romaji: "tsu" },
    { kana: "て", romaji: "te" },
    { kana: "と", romaji: "to" },
  ],
  [
    { kana: "な", romaji: "na" },
    { kana: "に", romaji: "ni" },
    { kana: "ぬ", romaji: "nu" },
    { kana: "ね", romaji: "ne" },
    { kana: "の", romaji: "no" },
  ],
  [
    { kana: "は", romaji: "ha" },
    { kana: "ひ", romaji: "hi" },
    { kana: "ふ", romaji: "fu" },
    { kana: "へ", romaji: "he" },
    { kana: "ほ", romaji: "ho" },
  ],
  [
    { kana: "ま", romaji: "ma" },
    { kana: "み", romaji: "mi" },
    { kana: "む", romaji: "mu" },
    { kana: "め", romaji: "me" },
    { kana: "も", romaji: "mo" },
  ],
  [
    { kana: "や", romaji: "ya" },
    null,
    { kana: "ゆ", romaji: "yu" },
    null,
    { kana: "よ", romaji: "yo" },
  ],
  [
    { kana: "ら", romaji: "ra" },
    { kana: "り", romaji: "ri" },
    { kana: "る", romaji: "ru" },
    { kana: "れ", romaji: "re" },
    { kana: "ろ", romaji: "ro" },
  ],
  [
    { kana: "わ", romaji: "wa" },
    null,
    null,
    null,
    { kana: "を", romaji: "wo" },
  ],
  [{ kana: "ん", romaji: "n" }, null, null, null, null],
];

const dakutenHiragana: (KanaCell | null)[][] = [
  [
    { kana: "が", romaji: "ga" },
    { kana: "ぎ", romaji: "gi" },
    { kana: "ぐ", romaji: "gu" },
    { kana: "げ", romaji: "ge" },
    { kana: "ご", romaji: "go" },
  ],
  [
    { kana: "ざ", romaji: "za" },
    { kana: "じ", romaji: "ji" },
    { kana: "ず", romaji: "zu" },
    { kana: "ぜ", romaji: "ze" },
    { kana: "ぞ", romaji: "zo" },
  ],
  [
    { kana: "だ", romaji: "da" },
    { kana: "ぢ", romaji: "ji" },
    { kana: "づ", romaji: "zu" },
    { kana: "で", romaji: "de" },
    { kana: "ど", romaji: "do" },
  ],
  [
    { kana: "ば", romaji: "ba" },
    { kana: "び", romaji: "bi" },
    { kana: "ぶ", romaji: "bu" },
    { kana: "べ", romaji: "be" },
    { kana: "ぼ", romaji: "bo" },
  ],
];

const handakutenHiragana: (KanaCell | null)[][] = [
  [
    { kana: "ぱ", romaji: "pa" },
    { kana: "ぴ", romaji: "pi" },
    { kana: "ぷ", romaji: "pu" },
    { kana: "ぺ", romaji: "pe" },
    { kana: "ぽ", romaji: "po" },
  ],
];

const comboHiragana: (KanaCell | null)[][] = [
  [
    { kana: "きゃ", romaji: "kya" },
    { kana: "きゅ", romaji: "kyu" },
    { kana: "きょ", romaji: "kyo" },
  ],
  [
    { kana: "しゃ", romaji: "sha" },
    { kana: "しゅ", romaji: "shu" },
    { kana: "しょ", romaji: "sho" },
  ],
  [
    { kana: "ちゃ", romaji: "cha" },
    { kana: "ちゅ", romaji: "chu" },
    { kana: "ちょ", romaji: "cho" },
  ],
  [
    { kana: "にゃ", romaji: "nya" },
    { kana: "にゅ", romaji: "nyu" },
    { kana: "にょ", romaji: "nyo" },
  ],
  [
    { kana: "ひゃ", romaji: "hya" },
    { kana: "ひゅ", romaji: "hyu" },
    { kana: "ひょ", romaji: "hyo" },
  ],
  [
    { kana: "みゃ", romaji: "mya" },
    { kana: "みゅ", romaji: "myu" },
    { kana: "みょ", romaji: "myo" },
  ],
  [
    { kana: "りゃ", romaji: "rya" },
    { kana: "りゅ", romaji: "ryu" },
    { kana: "りょ", romaji: "ryo" },
  ],
  [
    { kana: "ぎゃ", romaji: "gya" },
    { kana: "ぎゅ", romaji: "gyu" },
    { kana: "ぎょ", romaji: "gyo" },
  ],
  [
    { kana: "じゃ", romaji: "ja" },
    { kana: "じゅ", romaji: "ju" },
    { kana: "じょ", romaji: "jo" },
  ],
  [
    { kana: "びゃ", romaji: "bya" },
    { kana: "びゅ", romaji: "byu" },
    { kana: "びょ", romaji: "byo" },
  ],
  [
    { kana: "ぴゃ", romaji: "pya" },
    { kana: "ぴゅ", romaji: "pyu" },
    { kana: "ぴょ", romaji: "pyo" },
  ],
];

interface KanaGridProps {
  data: (KanaCell | null)[][];
  columns?: number;
}

function KanaGrid({ data, columns = 5 }: KanaGridProps) {
  return (
    <div
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {data.flat().map((cell, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center rounded-lg p-2 ${
            cell ? "bg-zinc-100 dark:bg-zinc-800" : "bg-transparent"
          }`}
        >
          {cell && (
            <>
              <span className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">
                {cell.kana}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {cell.romaji}
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

interface AccordionSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
}: AccordionSectionProps) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-700">
      <div
        className="sticky z-20 bg-white dark:bg-zinc-900"
        style={{ top: 'calc(var(--navbar-height) + var(--section-header-height))' }}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between py-3 text-left"
        >
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {title}
          </span>
          <svg
            className={`h-5 w-5 text-zinc-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}

export function HiraganaTable() {
  const isLargeScreen = useIsLargeScreen();
  const [manualOverrides, setManualOverrides] = useState<
    Record<string, boolean>
  >({});

  const defaultState: Record<string, boolean> = isLargeScreen
    ? { basic: true, dakuten: true, handakuten: true, combo: true }
    : { basic: true, dakuten: false, handakuten: false, combo: false };

  const openSections = { ...defaultState, ...manualOverrides };

  const toggleSection = (section: string) => {
    setManualOverrides((prev) => ({
      ...prev,
      [section]: !openSections[section],
    }));
  };

  return (
    <div className="rounded-xl bg-white shadow-sm dark:bg-zinc-900">
      <div
        className="sticky z-30 rounded-t-xl bg-white px-4 pt-4 pb-2 dark:bg-zinc-900"
        style={{ top: 'var(--navbar-height)' }}
      >
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          ひらがな (Hiragana)
        </h2>
      </div>
      <div className="px-4 pb-4">
      <AccordionSection
        title="Basic (あ - ん)"
        isOpen={openSections.basic}
        onToggle={() => toggleSection("basic")}
      >
        <KanaGrid data={basicHiragana} columns={5} />
      </AccordionSection>

      <AccordionSection
        title="Dakuten (゛) - Voiced"
        isOpen={openSections.dakuten}
        onToggle={() => toggleSection("dakuten")}
      >
        <KanaGrid data={dakutenHiragana} columns={5} />
      </AccordionSection>

      <AccordionSection
        title="Handakuten (゜) - P-sounds"
        isOpen={openSections.handakuten}
        onToggle={() => toggleSection("handakuten")}
      >
        <KanaGrid data={handakutenHiragana} columns={5} />
      </AccordionSection>

      <AccordionSection
        title="Combo Sounds (きゃ, しゃ...)"
        isOpen={openSections.combo}
        onToggle={() => toggleSection("combo")}
      >
        <KanaGrid data={comboHiragana} columns={3} />
      </AccordionSection>
      </div>
    </div>
  );
}
