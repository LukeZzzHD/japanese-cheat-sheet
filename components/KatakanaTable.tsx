"use client";

import { useState } from "react";

import { useIsLargeScreen } from "@/hooks/useMediaQuery";

interface KanaCell {
  kana: string;
  romaji: string;
}

const basicKatakana: (KanaCell | null)[][] = [
  [
    { kana: "ア", romaji: "a" },
    { kana: "イ", romaji: "i" },
    { kana: "ウ", romaji: "u" },
    { kana: "エ", romaji: "e" },
    { kana: "オ", romaji: "o" },
  ],
  [
    { kana: "カ", romaji: "ka" },
    { kana: "キ", romaji: "ki" },
    { kana: "ク", romaji: "ku" },
    { kana: "ケ", romaji: "ke" },
    { kana: "コ", romaji: "ko" },
  ],
  [
    { kana: "サ", romaji: "sa" },
    { kana: "シ", romaji: "shi" },
    { kana: "ス", romaji: "su" },
    { kana: "セ", romaji: "se" },
    { kana: "ソ", romaji: "so" },
  ],
  [
    { kana: "タ", romaji: "ta" },
    { kana: "チ", romaji: "chi" },
    { kana: "ツ", romaji: "tsu" },
    { kana: "テ", romaji: "te" },
    { kana: "ト", romaji: "to" },
  ],
  [
    { kana: "ナ", romaji: "na" },
    { kana: "ニ", romaji: "ni" },
    { kana: "ヌ", romaji: "nu" },
    { kana: "ネ", romaji: "ne" },
    { kana: "ノ", romaji: "no" },
  ],
  [
    { kana: "ハ", romaji: "ha" },
    { kana: "ヒ", romaji: "hi" },
    { kana: "フ", romaji: "fu" },
    { kana: "ヘ", romaji: "he" },
    { kana: "ホ", romaji: "ho" },
  ],
  [
    { kana: "マ", romaji: "ma" },
    { kana: "ミ", romaji: "mi" },
    { kana: "ム", romaji: "mu" },
    { kana: "メ", romaji: "me" },
    { kana: "モ", romaji: "mo" },
  ],
  [
    { kana: "ヤ", romaji: "ya" },
    null,
    { kana: "ユ", romaji: "yu" },
    null,
    { kana: "ヨ", romaji: "yo" },
  ],
  [
    { kana: "ラ", romaji: "ra" },
    { kana: "リ", romaji: "ri" },
    { kana: "ル", romaji: "ru" },
    { kana: "レ", romaji: "re" },
    { kana: "ロ", romaji: "ro" },
  ],
  [
    { kana: "ワ", romaji: "wa" },
    null,
    null,
    null,
    { kana: "ヲ", romaji: "wo" },
  ],
  [{ kana: "ン", romaji: "n" }, null, null, null, null],
];

const dakutenKatakana: (KanaCell | null)[][] = [
  [
    { kana: "ガ", romaji: "ga" },
    { kana: "ギ", romaji: "gi" },
    { kana: "グ", romaji: "gu" },
    { kana: "ゲ", romaji: "ge" },
    { kana: "ゴ", romaji: "go" },
  ],
  [
    { kana: "ザ", romaji: "za" },
    { kana: "ジ", romaji: "ji" },
    { kana: "ズ", romaji: "zu" },
    { kana: "ゼ", romaji: "ze" },
    { kana: "ゾ", romaji: "zo" },
  ],
  [
    { kana: "ダ", romaji: "da" },
    { kana: "ヂ", romaji: "ji" },
    { kana: "ヅ", romaji: "zu" },
    { kana: "デ", romaji: "de" },
    { kana: "ド", romaji: "do" },
  ],
  [
    { kana: "バ", romaji: "ba" },
    { kana: "ビ", romaji: "bi" },
    { kana: "ブ", romaji: "bu" },
    { kana: "ベ", romaji: "be" },
    { kana: "ボ", romaji: "bo" },
  ],
];

const handakutenKatakana: (KanaCell | null)[][] = [
  [
    { kana: "パ", romaji: "pa" },
    { kana: "ピ", romaji: "pi" },
    { kana: "プ", romaji: "pu" },
    { kana: "ペ", romaji: "pe" },
    { kana: "ポ", romaji: "po" },
  ],
];

const comboKatakana: (KanaCell | null)[][] = [
  [
    { kana: "キャ", romaji: "kya" },
    { kana: "キュ", romaji: "kyu" },
    { kana: "キョ", romaji: "kyo" },
  ],
  [
    { kana: "シャ", romaji: "sha" },
    { kana: "シュ", romaji: "shu" },
    { kana: "ショ", romaji: "sho" },
  ],
  [
    { kana: "チャ", romaji: "cha" },
    { kana: "チュ", romaji: "chu" },
    { kana: "チョ", romaji: "cho" },
  ],
  [
    { kana: "ニャ", romaji: "nya" },
    { kana: "ニュ", romaji: "nyu" },
    { kana: "ニョ", romaji: "nyo" },
  ],
  [
    { kana: "ヒャ", romaji: "hya" },
    { kana: "ヒュ", romaji: "hyu" },
    { kana: "ヒョ", romaji: "hyo" },
  ],
  [
    { kana: "ミャ", romaji: "mya" },
    { kana: "ミュ", romaji: "myu" },
    { kana: "ミョ", romaji: "myo" },
  ],
  [
    { kana: "リャ", romaji: "rya" },
    { kana: "リュ", romaji: "ryu" },
    { kana: "リョ", romaji: "ryo" },
  ],
  [
    { kana: "ギャ", romaji: "gya" },
    { kana: "ギュ", romaji: "gyu" },
    { kana: "ギョ", romaji: "gyo" },
  ],
  [
    { kana: "ジャ", romaji: "ja" },
    { kana: "ジュ", romaji: "ju" },
    { kana: "ジョ", romaji: "jo" },
  ],
  [
    { kana: "ビャ", romaji: "bya" },
    { kana: "ビュ", romaji: "byu" },
    { kana: "ビョ", romaji: "byo" },
  ],
  [
    { kana: "ピャ", romaji: "pya" },
    { kana: "ピュ", romaji: "pyu" },
    { kana: "ピョ", romaji: "pyo" },
  ],
];

const extendedKatakana: (KanaCell | null)[][] = [
  [
    { kana: "ファ", romaji: "fa" },
    { kana: "フィ", romaji: "fi" },
    { kana: "フェ", romaji: "fe" },
    { kana: "フォ", romaji: "fo" },
  ],
  [
    { kana: "ティ", romaji: "ti" },
    { kana: "ディ", romaji: "di" },
    { kana: "デュ", romaji: "dyu" },
    null,
  ],
  [
    { kana: "ウィ", romaji: "wi" },
    { kana: "ウェ", romaji: "we" },
    { kana: "ウォ", romaji: "wo" },
    null,
  ],
  [
    { kana: "ヴァ", romaji: "va" },
    { kana: "ヴィ", romaji: "vi" },
    { kana: "ヴ", romaji: "vu" },
    { kana: "ヴェ", romaji: "ve" },
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

export function KatakanaTable() {
  const isLargeScreen = useIsLargeScreen();
  const [manualOverrides, setManualOverrides] = useState<
    Record<string, boolean>
  >({});

  const defaultState: Record<string, boolean> = isLargeScreen
    ? {
        basic: true,
        dakuten: true,
        handakuten: true,
        combo: true,
        extended: true,
      }
    : {
        basic: true,
        dakuten: false,
        handakuten: false,
        combo: false,
        extended: false,
      };

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
          カタカナ (Katakana)
        </h2>
      </div>
      <div className="px-4 pb-4">
      <AccordionSection
        title="Basic (ア - ン)"
        isOpen={openSections.basic}
        onToggle={() => toggleSection("basic")}
      >
        <KanaGrid data={basicKatakana} columns={5} />
      </AccordionSection>

      <AccordionSection
        title="Dakuten (゛) - Voiced"
        isOpen={openSections.dakuten}
        onToggle={() => toggleSection("dakuten")}
      >
        <KanaGrid data={dakutenKatakana} columns={5} />
      </AccordionSection>

      <AccordionSection
        title="Handakuten (゜) - P-sounds"
        isOpen={openSections.handakuten}
        onToggle={() => toggleSection("handakuten")}
      >
        <KanaGrid data={handakutenKatakana} columns={5} />
      </AccordionSection>

      <AccordionSection
        title="Combo Sounds (キャ, シャ...)"
        isOpen={openSections.combo}
        onToggle={() => toggleSection("combo")}
      >
        <KanaGrid data={comboKatakana} columns={3} />
      </AccordionSection>

      <AccordionSection
        title="Extended (Foreign Sounds)"
        isOpen={openSections.extended}
        onToggle={() => toggleSection("extended")}
      >
        <KanaGrid data={extendedKatakana} columns={4} />
      </AccordionSection>
      </div>
    </div>
  );
}
