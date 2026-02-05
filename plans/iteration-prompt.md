# Japanese Cheat Sheet - Iteration Prompt

Copy and paste this prompt into a new Claude Code instance to continue work.

---

## Prompt

I'm building a Japanese cheat sheet web app. Please continue the implementation.

**Instructions:**
1. Read `/plans/tasks.json` to see current progress
2. Read `/plans/progress.txt` for context and findings
3. Read `/plans/extracted-content.md` for content already extracted
4. Find the current phase (first phase with status "pending")
5. Execute all steps in that phase
6. After completing each step, update tasks.json status to "completed"
7. Log any findings, issues, or decisions in progress.txt
8. When all steps in a phase are complete, mark the phase as "completed"

**Rules:**
- For every Japanese sentence: include romaji + hiragana/katakana
- Avoid kanji; if used, show reading/meaning/hiragana
- Optimize for mobile, focus on readability
- Use clean, minimal design with dark mode support

**When done with current phase:**
- Update tasks.json with completed status
- Add summary to progress.txt
- Tell me which phase was completed and what's next
