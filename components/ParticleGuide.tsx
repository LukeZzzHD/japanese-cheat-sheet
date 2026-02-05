'use client';

import { useState } from 'react';

interface ParticleExample {
  japanese: string;
  romaji: string;
  english: string;
}

interface Particle {
  particle: string;
  romaji: string;
  name: string;
  usage: string;
  examples: ParticleExample[];
  notes?: string;
}

const particles: Particle[] = [
  {
    particle: 'は',
    romaji: 'wa',
    name: 'Topic Marker',
    usage: 'Marks the topic of the sentence - what you are talking about',
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
    notes: 'Written as は but pronounced "wa" when used as a particle',
  },
  {
    particle: 'が',
    romaji: 'ga',
    name: 'Subject Marker',
    usage: 'Marks the subject (who/what does the action). Used with ability verbs and to introduce new information',
    examples: [
      {
        japanese: 'にほんご が できます',
        romaji: 'nihongo ga dekimasu',
        english: 'I can speak Japanese',
      },
      {
        japanese: 'あめ が ふっています',
        romaji: 'ame ga futteimasu',
        english: 'It is raining',
      },
      {
        japanese: 'すし が すきです',
        romaji: 'sushi ga suki desu',
        english: 'I like sushi',
      },
    ],
    notes: 'Used with すき (like), きらい (dislike), できます (can), わかります (understand), あります/います (exist)',
  },
  {
    particle: 'を',
    romaji: 'o',
    name: 'Object Marker',
    usage: 'Marks the direct object of an action verb',
    examples: [
      {
        japanese: 'ごはん を たべます',
        romaji: 'gohan o tabemasu',
        english: 'I eat rice',
      },
      {
        japanese: 'みず を のみます',
        romaji: 'mizu o nomimasu',
        english: 'I drink water',
      },
      {
        japanese: 'にほんご を べんきょう します',
        romaji: 'nihongo o benkyou shimasu',
        english: 'I study Japanese',
      },
    ],
    notes: 'Written as を but pronounced "o". Also used with movement verbs (みちをあるく - walk along the road)',
  },
  {
    particle: 'に',
    romaji: 'ni',
    name: 'Direction / Time / Location',
    usage: 'Indicates direction, specific time, or location of existence',
    examples: [
      {
        japanese: 'がっこう に いきます',
        romaji: 'gakkou ni ikimasu',
        english: 'I go to school',
      },
      {
        japanese: '7じ に おきます',
        romaji: 'shichi-ji ni okimasu',
        english: 'I wake up at 7 o\'clock',
      },
      {
        japanese: 'へや に います',
        romaji: 'heya ni imasu',
        english: 'I am in the room',
      },
      {
        japanese: 'ともだち に あいます',
        romaji: 'tomodachi ni aimasu',
        english: 'I meet my friend',
      },
    ],
    notes: 'Use に with specific times (7時に) but NOT with relative times (きょう, あした). Also used with あげます/もらいます (giving/receiving)',
  },
  {
    particle: 'で',
    romaji: 'de',
    name: 'Location of Action / Means',
    usage: 'Marks where an action takes place, or the means/tool used',
    examples: [
      {
        japanese: 'レストラン で たべます',
        romaji: 'resutoran de tabemasu',
        english: 'I eat at a restaurant',
      },
      {
        japanese: 'でんしゃ で いきます',
        romaji: 'densha de ikimasu',
        english: 'I go by train',
      },
      {
        japanese: 'にほんご で はなします',
        romaji: 'nihongo de hanashimasu',
        english: 'I speak in Japanese',
      },
    ],
    notes: 'Compare: レストランで (at the restaurant - action) vs レストランに (to the restaurant - direction)',
  },
  {
    particle: 'へ',
    romaji: 'e',
    name: 'Direction',
    usage: 'Indicates direction of movement (similar to に but emphasizes the direction)',
    examples: [
      {
        japanese: 'にほん へ いきます',
        romaji: 'nihon e ikimasu',
        english: 'I go to Japan',
      },
      {
        japanese: 'みぎ へ まがってください',
        romaji: 'migi e magatte kudasai',
        english: 'Please turn right',
      },
    ],
    notes: 'Written as へ but pronounced "e" when used as a particle. Often interchangeable with に for destinations',
  },
  {
    particle: 'と',
    romaji: 'to',
    name: 'With / And',
    usage: 'Connects nouns (and) or indicates doing something with someone',
    examples: [
      {
        japanese: 'ともだち と いきます',
        romaji: 'tomodachi to ikimasu',
        english: 'I go with a friend',
      },
      {
        japanese: 'ちち と はは',
        romaji: 'chichi to haha',
        english: 'Father and mother',
      },
      {
        japanese: 'コーヒー と ケーキ を ください',
        romaji: 'koohii to keeki o kudasai',
        english: 'Coffee and cake, please',
      },
    ],
    notes: 'と lists ALL items (exhaustive). For "or" use か',
  },
  {
    particle: 'も',
    romaji: 'mo',
    name: 'Also / Too',
    usage: 'Replaces は/が/を to mean "also" or "too"',
    examples: [
      {
        japanese: 'わたし も がくせい です',
        romaji: 'watashi mo gakusei desu',
        english: 'I am also a student',
      },
      {
        japanese: 'ビール も ください',
        romaji: 'biiru mo kudasai',
        english: 'Beer too, please',
      },
      {
        japanese: 'にほんご も できます',
        romaji: 'nihongo mo dekimasu',
        english: 'I can also speak Japanese',
      },
    ],
    notes: 'In negative sentences: なにも + negative = nothing, だれも + negative = nobody',
  },
  {
    particle: 'の',
    romaji: 'no',
    name: 'Possessive / Modifier',
    usage: 'Shows possession or connects nouns (like "of" or "\'s")',
    examples: [
      {
        japanese: 'わたし の かぞく',
        romaji: 'watashi no kazoku',
        english: 'My family',
      },
      {
        japanese: 'にほん の りょうり',
        romaji: 'nihon no ryouri',
        english: 'Japanese food',
      },
      {
        japanese: 'がっこう の せんせい',
        romaji: 'gakkou no sensei',
        english: 'School teacher',
      },
    ],
    notes: 'Order is reversed from English: Possessor の Possessed',
  },
  {
    particle: 'から',
    romaji: 'kara',
    name: 'From',
    usage: 'Indicates starting point (place, time, or reason)',
    examples: [
      {
        japanese: 'どちら から ですか',
        romaji: 'dochira kara desu ka',
        english: 'Where are you from?',
      },
      {
        japanese: '9じ から 5じ まで',
        romaji: 'ku-ji kara go-ji made',
        english: 'From 9 to 5',
      },
      {
        japanese: 'えき から あるきます',
        romaji: 'eki kara arukimasu',
        english: 'I walk from the station',
      },
    ],
    notes: 'Often paired with まで (until/to)',
  },
  {
    particle: 'まで',
    romaji: 'made',
    name: 'Until / To',
    usage: 'Indicates ending point (place or time)',
    examples: [
      {
        japanese: '5じ まで はたらきます',
        romaji: 'go-ji made hatarakimasu',
        english: 'I work until 5',
      },
      {
        japanese: 'えき まで あるきます',
        romaji: 'eki made arukimasu',
        english: 'I walk to the station',
      },
      {
        japanese: 'あした まで',
        romaji: 'ashita made',
        english: 'Until tomorrow',
      },
    ],
    notes: 'Unlike に/へ, まで emphasizes the limit/extent',
  },
  {
    particle: 'より',
    romaji: 'yori',
    name: 'Than (Comparison)',
    usage: 'Used for comparisons',
    examples: [
      {
        japanese: 'ねこ より いぬ が すきです',
        romaji: 'neko yori inu ga suki desu',
        english: 'I like dogs more than cats',
      },
      {
        japanese: 'きのう より あつい です',
        romaji: 'kinou yori atsui desu',
        english: 'It\'s hotter than yesterday',
      },
    ],
    notes: 'Pattern: A より B が [adjective] = B is more [adjective] than A',
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
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">
            {title}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </span>
        </div>
        <svg
          className={`h-5 w-5 text-zinc-500 transition-transform ${
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
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}

function ParticleCard({ particle }: { particle: Particle }) {
  return (
    <div className="space-y-3">
      <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {particle.usage}
        </p>
      </div>

      <div className="space-y-2">
        {particle.examples.map((example, index) => (
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

      {particle.notes && (
        <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <span className="font-medium">Note:</span> {particle.notes}
          </p>
        </div>
      )}
    </div>
  );
}

export function ParticleGuide() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    wa: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-900">
      <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        じょし (Particles)
      </h2>

      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        Particles are small words that indicate the grammatical relationship between words in a sentence.
      </p>

      {particles.map((particle) => (
        <AccordionSection
          key={particle.romaji}
          title={particle.particle}
          subtitle={`(${particle.romaji}) - ${particle.name}`}
          isOpen={openSections[particle.romaji] || false}
          onToggle={() => toggleSection(particle.romaji)}
        >
          <ParticleCard particle={particle} />
        </AccordionSection>
      ))}
    </div>
  );
}
