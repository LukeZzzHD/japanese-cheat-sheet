import { GrammarSection } from "@/components/GrammarSection";
import { HiraganaTable } from "@/components/HiraganaTable";
import { KatakanaTable } from "@/components/KatakanaTable";
import { Navigation } from "@/components/Navigation";
import { ParticleGuide } from "@/components/ParticleGuide";
import { SentenceStructure } from "@/components/SentenceStructure";
import { ThemeToggle } from "@/components/ThemeToggle";
import { VocabularySection } from "@/components/VocabularySection";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-50/95 px-4 py-3 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
        <div className="relative mx-auto flex max-w-lg items-center justify-between lg:max-w-4xl xl:max-w-6xl">
          <div>
            <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Japanese Cheat Sheet
            </h1>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              にほんご チートシート - N4
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Navigation />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 py-4 lg:max-w-4xl xl:max-w-6xl">
        <div className="space-y-4">
          <section id="hiragana" className="scroll-mt-20">
            <HiraganaTable />
          </section>

          <section id="katakana" className="scroll-mt-20">
            <KatakanaTable />
          </section>

          <section id="particles" className="scroll-mt-20">
            <ParticleGuide />
          </section>

          <section id="sentence" className="scroll-mt-20">
            <SentenceStructure />
          </section>

          <section id="vocabulary" className="scroll-mt-20">
            <VocabularySection />
          </section>

          <section id="expressions" className="scroll-mt-20">
            <GrammarSection />
          </section>
        </div>

        <footer className="mt-8 border-t border-zinc-200 pt-4 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          <p>N4 Level Japanese Reference</p>
          <p className="mt-1 text-zinc-400 dark:text-zinc-600">
            がんばって! Good luck with your studies!
          </p>
        </footer>
      </main>
    </>
  );
}
