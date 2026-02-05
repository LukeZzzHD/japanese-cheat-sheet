"use client";

import { useState } from "react";

import { useIsLargeScreen } from "@/hooks/useMediaQuery";

interface Expression {
  japanese: string;
  romaji: string;
  english: string;
  usage?: string;
}

interface ExpressionCategory {
  id: string;
  title: string;
  titleJapanese: string;
  description?: string;
  expressions: Expression[];
}

const expressionsData: ExpressionCategory[] = [
  {
    id: "greetings",
    title: "Greetings",
    titleJapanese: "あいさつ",
    description: "Common greetings for different times of day and situations.",
    expressions: [
      {
        japanese: "おはようございます",
        romaji: "ohayou gozaimasu",
        english: "Good morning",
        usage: "Morning greeting (polite)",
      },
      {
        japanese: "おはよう",
        romaji: "ohayou",
        english: "Good morning",
        usage: "Morning greeting (casual)",
      },
      {
        japanese: "こんにちは",
        romaji: "konnichiwa",
        english: "Hello / Good afternoon",
        usage: "Daytime greeting",
      },
      {
        japanese: "こんばんは",
        romaji: "konbanwa",
        english: "Good evening",
        usage: "Evening greeting",
      },
      {
        japanese: "おやすみなさい",
        romaji: "oyasuminasai",
        english: "Good night",
        usage: "Before sleeping",
      },
      {
        japanese: "さようなら",
        romaji: "sayounara",
        english: "Goodbye",
        usage: "Formal farewell",
      },
      {
        japanese: "じゃあ、また",
        romaji: "jaa, mata",
        english: "See you later",
        usage: "Casual farewell",
      },
      {
        japanese: "おつかれさまでした",
        romaji: "otsukaresama deshita",
        english: "Good work / Thanks for your hard work",
        usage: "End of work day",
      },
    ],
  },
  {
    id: "polite",
    title: "Polite Expressions",
    titleJapanese: "ていねいな ひょうげん",
    description: "Essential polite phrases for everyday interactions.",
    expressions: [
      {
        japanese: "すみません",
        romaji: "sumimasen",
        english: "Excuse me / Sorry",
        usage: "Getting attention or apologizing",
      },
      {
        japanese: "ありがとうございます",
        romaji: "arigatou gozaimasu",
        english: "Thank you",
        usage: "Polite thanks",
      },
      {
        japanese: "どうも ありがとうございます",
        romaji: "doumo arigatou gozaimasu",
        english: "Thank you very much",
        usage: "Very polite thanks",
      },
      {
        japanese: "いいえ",
        romaji: "iie",
        english: "No / You're welcome",
        usage: "Response to thanks",
      },
      {
        japanese: "しつれいします",
        romaji: "shitsurei shimasu",
        english: "Excuse me",
        usage: "When entering or leaving",
      },
      {
        japanese: "おさきに しつれいします",
        romaji: "osaki ni shitsurei shimasu",
        english: "Excuse me for leaving first",
        usage: "Leaving before others",
      },
      {
        japanese: "あのう",
        romaji: "anoo",
        english: "Um...",
        usage: "Before asking a question",
      },
      {
        japanese: "どうぞ",
        romaji: "douzo",
        english: "Please / Here you go",
        usage: "Offering something",
      },
      {
        japanese: "しょうしょう おまち ください",
        romaji: "shoushou omachi kudasai",
        english: "Please wait a moment",
        usage: "Polite request to wait",
      },
    ],
  },
  {
    id: "introduction",
    title: "Introductions",
    titleJapanese: "じこしょうかい",
    description: "Phrases for meeting someone for the first time.",
    expressions: [
      {
        japanese: "はじめまして",
        romaji: "hajimemashite",
        english: "Nice to meet you",
        usage: "First meeting only",
      },
      {
        japanese: "どうぞ よろしく",
        romaji: "douzo yoroshiku",
        english: "Nice to meet you",
        usage: "After introduction",
      },
      {
        japanese: "よろしく おねがいします",
        romaji: "yoroshiku onegaishimasu",
        english: "Nice to meet you / Please treat me well",
        usage: "Formal introduction",
      },
      {
        japanese: "おなまえは？",
        romaji: "onamae wa?",
        english: "What is your name?",
        usage: "Asking for name",
      },
      {
        japanese: "どちらから？",
        romaji: "dochira kara?",
        english: "Where are you from?",
        usage: "Asking origin",
      },
      {
        japanese: "そうですか",
        romaji: "soo desu ka",
        english: "I see / Is that so?",
        usage: "Acknowledging information",
      },
    ],
  },
  {
    id: "meals",
    title: "Meal Expressions",
    titleJapanese: "しょくじの ことば",
    description: "Phrases used before and after eating.",
    expressions: [
      {
        japanese: "いただきます",
        romaji: "itadakimasu",
        english: "I humbly receive",
        usage: "Before eating (always say this!)",
      },
      {
        japanese: "ごちそうさまでした",
        romaji: "gochisousama deshita",
        english: "Thank you for the meal",
        usage: "After eating (polite)",
      },
      {
        japanese: "ごちそうさま",
        romaji: "gochisousama",
        english: "Thank you for the meal",
        usage: "After eating (casual)",
      },
      {
        japanese: "おいしい！",
        romaji: "oishii!",
        english: "Delicious!",
        usage: "Praising food",
      },
      {
        japanese: "おいしかったです",
        romaji: "oishikatta desu",
        english: "It was delicious",
        usage: "After finishing",
      },
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant Expressions",
    titleJapanese: "レストランの ことば",
    description: "Useful phrases for dining out.",
    expressions: [
      {
        japanese: "いらっしゃいませ",
        romaji: "irasshaimase",
        english: "Welcome!",
        usage: "Staff greeting (no response needed)",
      },
      {
        japanese: "〜ひとつ ください",
        romaji: "~hitotsu kudasai",
        english: "One ~, please",
        usage: "Ordering one item",
      },
      {
        japanese: "〜ふたつ ください",
        romaji: "~futatsu kudasai",
        english: "Two ~, please",
        usage: "Ordering two items",
      },
      {
        japanese: "〜を ください",
        romaji: "~o kudasai",
        english: "~ please",
        usage: "General ordering",
      },
      {
        japanese: "ちゅうもん おねがいします",
        romaji: "chuumon onegai shimasu",
        english: "I'd like to order",
        usage: "Calling to order",
      },
      {
        japanese: "〜ですね",
        romaji: "~desu ne",
        english: "~ right?",
        usage: "Staff confirming order",
      },
      {
        japanese: "おかいけい おねがいします",
        romaji: "okaikei onegai shimasu",
        english: "Check, please",
        usage: "Asking for the bill",
      },
    ],
  },
  {
    id: "classroom",
    title: "Classroom Phrases",
    titleJapanese: "きょうしつの ことば",
    description: "Common phrases used in Japanese class.",
    expressions: [
      {
        japanese: "もういちど",
        romaji: "mou ichido",
        english: "One more time",
        usage: "Asking for repetition",
      },
      {
        japanese: "もういちど おねがいします",
        romaji: "mou ichido onegai shimasu",
        english: "Please say it again",
        usage: "Politely asking for repetition",
      },
      {
        japanese: "きいて ください",
        romaji: "kiite kudasai",
        english: "Please listen",
        usage: "Teacher instruction",
      },
      {
        japanese: "かいて ください",
        romaji: "kaite kudasai",
        english: "Please write",
        usage: "Teacher instruction",
      },
      {
        japanese: "よんで ください",
        romaji: "yonde kudasai",
        english: "Please read",
        usage: "Teacher instruction",
      },
      {
        japanese: "みて ください",
        romaji: "mite kudasai",
        english: "Please look",
        usage: "Teacher instruction",
      },
      {
        japanese: "はい",
        romaji: "hai",
        english: "Yes",
        usage: "Affirmative response",
      },
      {
        japanese: "いいえ",
        romaji: "iie",
        english: "No",
        usage: "Negative response",
      },
      {
        japanese: "わかりました",
        romaji: "wakarimashita",
        english: "I understood",
        usage: "Confirming understanding",
      },
      {
        japanese: "わかりません",
        romaji: "wakarimasen",
        english: "I don't understand",
        usage: "Expressing confusion",
      },
      {
        japanese: 'えいごで "〜" です',
        romaji: 'eigo de "~" desu',
        english: 'In English, it\'s "~"',
        usage: "Translating",
      },
    ],
  },
  {
    id: "celebration",
    title: "Celebration & Encouragement",
    titleJapanese: "おいわいの ことば",
    description: "Phrases for celebrations and showing support.",
    expressions: [
      {
        japanese: "おめでとうございます",
        romaji: "omedetou gozaimasu",
        english: "Congratulations",
        usage: "Polite celebration",
      },
      {
        japanese: "おめでとう",
        romaji: "omedetou",
        english: "Congratulations",
        usage: "Casual celebration",
      },
      {
        japanese: "たんじょうび おめでとう",
        romaji: "tanjoubi omedetou",
        english: "Happy birthday",
        usage: "Birthday greeting",
      },
      {
        japanese: "あけまして おめでとうございます",
        romaji: "akemashite omedetou gozaimasu",
        english: "Happy New Year",
        usage: "New Year greeting",
      },
      {
        japanese: "がんばって",
        romaji: "ganbatte",
        english: "Good luck / Do your best",
        usage: "Encouragement",
      },
      {
        japanese: "がんばれ",
        romaji: "ganbare",
        english: "Do your best!",
        usage: "Strong encouragement",
      },
      {
        japanese: "がんばります",
        romaji: "ganbarimasu",
        english: "I'll do my best",
        usage: "Response to encouragement",
      },
    ],
  },
  {
    id: "responses",
    title: "Common Responses",
    titleJapanese: "へんじ",
    description: "Quick responses for everyday conversations.",
    expressions: [
      {
        japanese: "はい、そうです",
        romaji: "hai, sou desu",
        english: "Yes, that's right",
        usage: "Confirming",
      },
      {
        japanese: "いいえ、ちがいます",
        romaji: "iie, chigaimasu",
        english: "No, that's wrong",
        usage: "Correcting",
      },
      {
        japanese: "いいですよ",
        romaji: "ii desu yo",
        english: "Sure / That's fine",
        usage: "Agreeing",
      },
      {
        japanese: "だいじょうぶです",
        romaji: "daijoubu desu",
        english: "I'm fine / It's okay",
        usage: "Reassuring",
      },
      {
        japanese: "ちょっと...",
        romaji: "chotto...",
        english: "Um... / It's a bit...",
        usage: "Polite refusal/hesitation",
      },
      {
        japanese: "ざんねんですが...",
        romaji: "zannen desu ga...",
        english: "Unfortunately...",
        usage: "Declining politely",
      },
      {
        japanese: "わたしも です",
        romaji: "watashi mo desu",
        english: "Me too",
        usage: "Agreeing with someone",
      },
      {
        japanese: "まだ きめて いません",
        romaji: "mada kimete imasen",
        english: "I haven't decided yet",
        usage: "Expressing indecision",
      },
    ],
  },
];

interface AccordionSectionProps {
  title: string;
  subtitle: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionSection({
  title,
  subtitle,
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
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              {title}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </span>
          </div>
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

function ExpressionCard({ expression }: { expression: Expression }) {
  return (
    <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            {expression.japanese}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {expression.romaji}
          </p>
        </div>
        <span className="shrink-0 text-sm text-zinc-600 dark:text-zinc-300">
          {expression.english}
        </span>
      </div>
      {expression.usage && (
        <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400">
          {expression.usage}
        </p>
      )}
    </div>
  );
}

export function GrammarSection() {
  const isLargeScreen = useIsLargeScreen();
  const [manualOverrides, setManualOverrides] = useState<
    Record<string, boolean>
  >({});

  const defaultState: Record<string, boolean> = {};
  expressionsData.forEach((category) => {
    defaultState[category.id] = isLargeScreen
      ? true
      : category.id === "greetings";
  });

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
        className="sticky z-30 rounded-t-xl bg-white px-4 pt-4 dark:bg-zinc-900"
        style={{ top: 'var(--navbar-height)' }}
      >
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          ひょうげん (Common Expressions)
        </h2>
        <p className="pb-2 text-sm text-zinc-600 dark:text-zinc-400">
          Essential phrases for everyday situations. Each includes romaji
          pronunciation and usage context.
        </p>
      </div>
      <div className="px-4 pb-4">
        {expressionsData.map((category) => (
          <AccordionSection
            key={category.id}
            title={category.title}
            subtitle={`(${category.titleJapanese})`}
            isOpen={openSections[category.id] || false}
            onToggle={() => toggleSection(category.id)}
          >
            {category.description && (
              <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                {category.description}
              </p>
            )}
            <div className="grid gap-2 lg:grid-cols-2">
              {category.expressions.map((expression, index) => (
                <ExpressionCard key={index} expression={expression} />
              ))}
            </div>
          </AccordionSection>
        ))}
      </div>
    </div>
  );
}
