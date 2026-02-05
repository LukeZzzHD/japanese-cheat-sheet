'use client';

import { useState } from 'react';

interface Example {
  japanese: string;
  romaji: string;
  english: string;
}

interface Pattern {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  structure?: string;
  examples: Example[];
  notes?: string;
}

const patterns: Pattern[] = [
  {
    id: 'sov',
    title: 'Basic Word Order',
    subtitle: 'SOV Structure',
    description:
      'Japanese follows Subject-Object-Verb order. The verb always comes at the end of the sentence.',
    structure: '[Topic] は + [Object] を + [Verb]',
    examples: [
      {
        japanese: 'わたし は ごはん を たべます',
        romaji: 'watashi wa gohan o tabemasu',
        english: 'I eat rice',
      },
      {
        japanese: 'かれ は みず を のみます',
        romaji: 'kare wa mizu o nomimasu',
        english: 'He drinks water',
      },
      {
        japanese: 'わたし は にほんご を べんきょうします',
        romaji: 'watashi wa nihongo o benkyou shimasu',
        english: 'I study Japanese',
      },
    ],
    notes:
      'The topic (marked by は) can often be omitted when it is clear from context.',
  },
  {
    id: 'desu',
    title: 'です (desu)',
    subtitle: 'Copula - "is/am/are"',
    description:
      'Used to make polite statements. Equivalent to "is/am/are" in English.',
    structure: '[Topic] は + [Noun/Adjective] + です',
    examples: [
      {
        japanese: 'わたし は がくせい です',
        romaji: 'watashi wa gakusei desu',
        english: 'I am a student',
      },
      {
        japanese: 'これ は ほん です',
        romaji: 'kore wa hon desu',
        english: 'This is a book',
      },
      {
        japanese: 'きょう は あつい です',
        romaji: 'kyou wa atsui desu',
        english: 'Today is hot',
      },
    ],
    notes:
      'For negative: じゃないです (ja nai desu) or ではありません (dewa arimasen). Past: でした (deshita).',
  },
  {
    id: 'masu',
    title: 'Verb Conjugation',
    subtitle: '-ます form (Polite)',
    description:
      'The -masu form is the standard polite form for verbs. It has four main conjugations.',
    examples: [
      {
        japanese: 'たべます → たべません',
        romaji: 'tabemasu → tabemasen',
        english: 'eat → don\'t eat',
      },
      {
        japanese: 'たべます → たべました',
        romaji: 'tabemasu → tabemashita',
        english: 'eat → ate',
      },
      {
        japanese: 'たべます → たべませんでした',
        romaji: 'tabemasu → tabemasen deshita',
        english: 'eat → didn\'t eat',
      },
    ],
    notes:
      'Pattern: Positive (-masu), Negative (-masen), Past Positive (-mashita), Past Negative (-masen deshita)',
  },
  {
    id: 'i-adj',
    title: 'い-Adjective Conjugation',
    subtitle: 'Adjectives ending in い',
    description:
      'い-adjectives change form by modifying the い ending.',
    examples: [
      {
        japanese: 'おいしい → おいしくない',
        romaji: 'oishii → oishikunai',
        english: 'delicious → not delicious',
      },
      {
        japanese: 'たかい → たかかった',
        romaji: 'takai → takakatta',
        english: 'expensive → was expensive',
      },
      {
        japanese: 'さむい → さむくなかった',
        romaji: 'samui → samukunakatta',
        english: 'cold → wasn\'t cold',
      },
    ],
    notes:
      'Exception: いい (good) → よくない (not good), よかった (was good). Remove い, add: くない (negative), かった (past), くなかった (past negative).',
  },
  {
    id: 'na-adj',
    title: 'な-Adjective Conjugation',
    subtitle: 'Adjectives using な',
    description:
      'な-adjectives use な when modifying nouns and conjugate like です.',
    examples: [
      {
        japanese: 'すきな りょうり',
        romaji: 'sukina ryouri',
        english: 'favorite food (liked food)',
      },
      {
        japanese: 'しずか じゃない',
        romaji: 'shizuka ja nai',
        english: 'not quiet',
      },
      {
        japanese: 'げんき だった',
        romaji: 'genki datta',
        english: 'was healthy/energetic',
      },
    ],
    notes:
      'Before nouns: use な. Negative: じゃない (ja nai). Past: だった (datta). Past negative: じゃなかった (ja nakatta).',
  },
  {
    id: 'jikoshoukai',
    title: 'Self-Introduction',
    subtitle: 'じこしょうかい',
    description:
      'Standard pattern for introducing yourself in Japanese.',
    examples: [
      {
        japanese: 'はじめまして',
        romaji: 'hajimemashite',
        english: 'Nice to meet you (first meeting)',
      },
      {
        japanese: 'わたし は [なまえ] です',
        romaji: 'watashi wa [namae] desu',
        english: 'I am [name]',
      },
      {
        japanese: '[くに] から きました',
        romaji: '[kuni] kara kimashita',
        english: 'I came from [country]',
      },
      {
        japanese: 'どうぞ よろしく おねがいします',
        romaji: 'douzo yoroshiku onegaishimasu',
        english: 'Nice to meet you (please treat me well)',
      },
    ],
    notes:
      'Full pattern: はじめまして → Name → Origin → Occupation (optional) → どうぞよろしく',
  },
  {
    id: 'dekimasu',
    title: 'Ability Pattern',
    subtitle: 'できます - can/able to',
    description:
      'Express what you can or cannot do using できます.',
    structure: '[Thing] が + できます / できません',
    examples: [
      {
        japanese: 'にほんご が できます',
        romaji: 'nihongo ga dekimasu',
        english: 'I can speak Japanese',
      },
      {
        japanese: 'すこし できます',
        romaji: 'sukoshi dekimasu',
        english: 'I can a little',
      },
      {
        japanese: 'べんきょうちゅう です',
        romaji: 'benkyou-chuu desu',
        english: 'I\'m currently studying it',
      },
    ],
    notes:
      'Use が (not を) with できます. Responses: はい、できます / はい、すこしできます / いいえ、できません',
  },
  {
    id: 'suki',
    title: 'Likes & Dislikes',
    subtitle: 'すき / きらい',
    description:
      'Express preferences using すき (like) and きらい (dislike).',
    structure: '[Thing] が + すき/きらい + です',
    examples: [
      {
        japanese: 'すし が すきです',
        romaji: 'sushi ga suki desu',
        english: 'I like sushi',
      },
      {
        japanese: 'なに が すきですか',
        romaji: 'nani ga suki desu ka',
        english: 'What do you like?',
      },
      {
        japanese: 'いちばん すきです',
        romaji: 'ichiban suki desu',
        english: 'I like it the most',
      },
    ],
    notes:
      'すき and きらい are な-adjectives. Use が (not を) to mark the liked/disliked thing.',
  },
  {
    id: 'time',
    title: 'Time Expressions',
    subtitle: 'When things happen',
    description:
      'Use に to indicate specific times when actions occur.',
    structure: '[Time] に + [Verb]',
    examples: [
      {
        japanese: '7じ に おきます',
        romaji: 'shichi-ji ni okimasu',
        english: 'I wake up at 7 o\'clock',
      },
      {
        japanese: 'げつようび に あいます',
        romaji: 'getsuyoubi ni aimasu',
        english: 'I\'ll meet (you) on Monday',
      },
      {
        japanese: '3がつ に にほん に いきます',
        romaji: 'sangatsu ni nihon ni ikimasu',
        english: 'I\'ll go to Japan in March',
      },
    ],
    notes:
      'Use に with specific times (7時, 月曜日, 3月). Do NOT use に with relative times: きょう, あした, きのう, らいしゅう.',
  },
  {
    id: 'location',
    title: 'Location of Action',
    subtitle: 'で - where actions happen',
    description:
      'Use で to indicate where an action takes place.',
    structure: '[Place] で + [Action Verb]',
    examples: [
      {
        japanese: 'レストラン で たべます',
        romaji: 'resutoran de tabemasu',
        english: 'I eat at a restaurant',
      },
      {
        japanese: 'うち で べんきょうします',
        romaji: 'uchi de benkyou shimasu',
        english: 'I study at home',
      },
      {
        japanese: 'こうえん で あそびます',
        romaji: 'kouen de asobimasu',
        english: 'I play at the park',
      },
    ],
    notes:
      'で = location of action. に = destination/direction. Compare: がっこうで べんきょうします (study AT school) vs がっこうに いきます (go TO school).',
  },
  {
    id: 'invitation',
    title: 'Making Invitations',
    subtitle: 'Suggesting plans',
    description:
      'Patterns for inviting someone or suggesting activities.',
    examples: [
      {
        japanese: 'にちようび は いいですか',
        romaji: 'nichiyoubi wa ii desu ka',
        english: 'Is Sunday good?',
      },
      {
        japanese: 'いいですよ',
        romaji: 'ii desu yo',
        english: 'Sure / That\'s fine',
      },
      {
        japanese: 'ざんねんですが...',
        romaji: 'zannen desu ga...',
        english: 'Unfortunately...',
      },
      {
        japanese: 'じゃ、そうしましょう',
        romaji: 'ja, sou shimashou',
        english: 'Let\'s do that',
      },
    ],
    notes:
      'Use ～ましょう (mashou) to suggest doing something together: いきましょう (let\'s go), たべましょう (let\'s eat).',
  },
  {
    id: 'question',
    title: 'Asking Questions',
    subtitle: 'Question words & patterns',
    description:
      'Form questions by adding か (ka) at the end of a statement.',
    examples: [
      {
        japanese: 'なに を たべますか',
        romaji: 'nani o tabemasu ka',
        english: 'What do you eat?',
      },
      {
        japanese: 'どこ に いきますか',
        romaji: 'doko ni ikimasu ka',
        english: 'Where do you go?',
      },
      {
        japanese: 'いつ きますか',
        romaji: 'itsu kimasu ka',
        english: 'When do you come?',
      },
      {
        japanese: 'だれ と いきますか',
        romaji: 'dare to ikimasu ka',
        english: 'Who do you go with?',
      },
    ],
    notes:
      'Question words: なに/なん (what), どこ (where), いつ (when), だれ (who), どう/どうやって (how), なぜ/どうして (why), いくら (how much)',
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
          <div className="flex flex-col">
            <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
              {title}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </span>
          </div>
          <svg
            className={`h-5 w-5 flex-shrink-0 text-zinc-500 transition-transform ${
              isOpen ? 'rotate-180' : ''
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

function PatternCard({ pattern }: { pattern: Pattern }) {
  return (
    <div className="space-y-3">
      <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          {pattern.description}
        </p>
        {pattern.structure && (
          <p className="mt-2 font-mono text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {pattern.structure}
          </p>
        )}
      </div>

      <div className="space-y-2">
        {pattern.examples.map((example, index) => (
          <div
            key={index}
            className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700"
          >
            <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
              {example.japanese}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {example.romaji}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
              {example.english}
            </p>
          </div>
        ))}
      </div>

      {pattern.notes && (
        <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <span className="font-medium">Note:</span> {pattern.notes}
          </p>
        </div>
      )}
    </div>
  );
}

export function SentenceStructure() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    sov: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="rounded-xl bg-white shadow-sm dark:bg-zinc-900">
      <div
        className="sticky z-30 rounded-t-xl bg-white px-4 pt-4 dark:bg-zinc-900"
        style={{ top: 'var(--navbar-height)' }}
      >
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          ぶんぽう (Sentence Structure)
        </h2>
        <p className="pb-2 text-sm text-zinc-600 dark:text-zinc-400">
          Japanese sentence patterns and conjugation rules for constructing correct sentences.
        </p>
      </div>
      <div className="px-4 pb-4">

      {patterns.map((pattern) => (
        <AccordionSection
          key={pattern.id}
          title={pattern.title}
          subtitle={pattern.subtitle}
          isOpen={openSections[pattern.id] || false}
          onToggle={() => toggleSection(pattern.id)}
        >
          <PatternCard pattern={pattern} />
        </AccordionSection>
      ))}
      </div>
    </div>
  );
}
