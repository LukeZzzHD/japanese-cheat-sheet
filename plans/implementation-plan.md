# Japanese Cheat Sheet - Implementation Plan

## Project Overview
Build a mobile-optimized Japanese cheat sheet web application from 63 HEIC images containing class notes and textbook materials. Target audience: N4 level learner.

## Technical Stack
- Next.js 16 with App Router
- Tailwind CSS 4
- TypeScript

## Design Requirements
- **Style**: Clean & minimal with excellent readability
- **Dark mode**: Toggle between light/dark themes
- **Layout**: Mobile-first, simple static content (no complex interactivity)
- **Collapsible sections**: Accordion-style sections on mobile for easier navigation
- **Typography**: System fonts with Japanese fallbacks:
  ```css
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  ```

## Content Requirements
1. All Japanese sentences must include: romaji + hiragana/katakana
2. Avoid kanji; when used, show reading/meaning
3. All sections prioritized equally:
   - Hiragana & Katakana tables
   - Particle usage guide
   - Sentence structure & grammar
   - Vocabulary by category
4. Iterative workflow with progress tracking

## Project Structure

```
/japanese-cheat-sheet
├── /plans                    # Planning/tracking files
│   ├── tasks.json            # Phased task list
│   ├── iteration-prompt.md   # Prompt for continuing work
│   ├── progress.txt          # Progress log
│   └── extracted-content.md  # Raw content from images
├── /images                   # Source images (HEIC)
├── /images-converted         # Converted PNG images
├── /app                      # Next.js app
│   ├── page.tsx             # Main cheat sheet
│   ├── layout.tsx           # Mobile-optimized layout
│   └── globals.css          # Custom styles
└── /components              # React components
    ├── HiraganaTable.tsx
    ├── KatakanaTable.tsx
    ├── GrammarSection.tsx
    ├── ParticleGuide.tsx
    └── ...
```

---

## Phase 0: Setup & Image Conversion (Pre-requisite)
**Goal**: Convert images and create project infrastructure

### Steps:
1. Create `/plans` directory structure with tracking files
2. Convert all 63 HEIC images to PNG format for text readability
3. Create `tasks.json` with all phases
4. Create `iteration-prompt.md` for workflow continuation
5. Create `progress.txt` for logging

---

## Phase 1: Content Extraction - Images 1-15
**Goal**: Extract and document content from first batch of images

### Steps:
1. Read and analyze images IMG_7492 through IMG_7506
2. Document all hiragana/katakana found
3. Document vocabulary with readings
4. Document grammar patterns
5. Log findings in `extracted-content.md`

**Note**: When duplicate content appears across images, merge entries and keep the most complete version.

---

## Phase 2: Content Extraction - Images 16-30
**Goal**: Continue content extraction

**Note**: IMG_7516 does not exist - actual range is IMG_7507-IMG_7515, then IMG_7517-IMG_7521

### Steps:
1. Read and analyze images IMG_7507 through IMG_7521 (skipping missing IMG_7516)
2. Add new hiragana/katakana to documentation
3. Add vocabulary with readings
4. Add grammar patterns
5. Update `extracted-content.md`

---

## Phase 3: Content Extraction - Images 31-45
**Goal**: Continue content extraction

### Steps:
1. Read and analyze images IMG_7522 through IMG_7536
2. Add new content to documentation
3. Categorize content by topic
4. Identify sentence patterns
5. Update `extracted-content.md`

---

## Phase 4: Content Extraction - Images 46-63
**Goal**: Complete content extraction

### Steps:
1. Read and analyze remaining images IMG_7537 through IMG_7555
2. Finalize content documentation
3. Organize all content by topic
4. Create topic outline for web app
5. Complete `extracted-content.md`

---

## Phase 5: Build Hiragana & Katakana Tables
**Goal**: Create interactive kana reference tables

### Steps:
1. Create `HiraganaTable.tsx` component
2. Create `KatakanaTable.tsx` component
3. Include all sounds with romaji
4. Add dakuten (゛) and handakuten (゜) variations
5. Style for mobile readability

---

## Phase 6: Build Particle Guide
**Goal**: Create comprehensive particle reference

### Steps:
1. Create `ParticleGuide.tsx` component
2. Document: は, が, を, に, で, へ, と, も, の, から, まで, より
3. Include usage rules and examples
4. Add exception cases
5. Mobile-optimized layout

---

## Phase 7: Build Sentence Structure Section
**Goal**: Explain Japanese sentence formation

### Steps:
1. Create `SentenceStructure.tsx` component
2. Document SOV word order
3. Explain verb conjugation basics
4. Include example sentences with translations
5. Add practice patterns

---

## Phase 8: Build Vocabulary Sections
**Goal**: Organize vocabulary by category

### Steps:
1. Create vocabulary component structure
2. Group by categories (numbers, time, places, etc.)
3. Include romaji and kana for each word
4. Add example usage sentences
5. Mobile card layout

---

## Phase 9: Build Grammar Reference
**Goal**: Document grammar patterns from notes

### Steps:
1. Create `GrammarSection.tsx` component
2. Document verb forms (masu, te, nai, etc.)
3. Document adjective conjugations
4. Include pattern explanations
5. Add example sentences

---

## Phase 10: Build Main App Layout
**Goal**: Assemble all components into mobile-optimized app

### Steps:
1. Create navigation/section structure
2. Implement dark mode toggle (light/dark)
3. Create clean, minimal page layout
4. Ensure mobile responsiveness
5. Test on various screen sizes

---

## Phase 11: Final Polish & Review
**Goal**: Complete and verify the application

### Steps:
1. Review all content for accuracy
2. Ensure consistent formatting
3. Test mobile experience
4. Run component tests with Vitest
5. Add any missing content
6. Mark project complete in tasks.json

---

## Files to Create in Phase 0

### tasks.json (full structure):
```json
{
  "projectName": "Japanese Cheat Sheet",
  "currentPhase": 0,
  "totalPhases": 12,
  "phases": [
    {
      "id": 0,
      "name": "Setup & Image Conversion",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Create /plans directory structure", "status": "pending" },
        { "id": 2, "task": "Convert all 63 HEIC images to PNG", "status": "pending" },
        { "id": 3, "task": "Create tasks.json", "status": "pending" },
        { "id": 4, "task": "Create iteration-prompt.md", "status": "pending" },
        { "id": 5, "task": "Create progress.txt", "status": "pending" }
      ]
    },
    {
      "id": 1,
      "name": "Content Extraction - Images 1-15",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Read images IMG_7492-IMG_7506", "status": "pending" },
        { "id": 2, "task": "Document hiragana/katakana", "status": "pending" },
        { "id": 3, "task": "Document vocabulary", "status": "pending" },
        { "id": 4, "task": "Document grammar patterns", "status": "pending" },
        { "id": 5, "task": "Log in extracted-content.md", "status": "pending" }
      ]
    },
    {
      "id": 2,
      "name": "Content Extraction - Images 16-30",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Read images IMG_7507-IMG_7521 (skip missing IMG_7516)", "status": "pending" },
        { "id": 2, "task": "Add new kana content", "status": "pending" },
        { "id": 3, "task": "Add vocabulary", "status": "pending" },
        { "id": 4, "task": "Add grammar patterns", "status": "pending" },
        { "id": 5, "task": "Update extracted-content.md", "status": "pending" }
      ]
    },
    {
      "id": 3,
      "name": "Content Extraction - Images 31-45",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Read images IMG_7522-IMG_7536", "status": "pending" },
        { "id": 2, "task": "Add new content", "status": "pending" },
        { "id": 3, "task": "Categorize by topic", "status": "pending" },
        { "id": 4, "task": "Identify sentence patterns", "status": "pending" },
        { "id": 5, "task": "Update extracted-content.md", "status": "pending" }
      ]
    },
    {
      "id": 4,
      "name": "Content Extraction - Images 46-63",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Read images IMG_7537-IMG_7555", "status": "pending" },
        { "id": 2, "task": "Finalize content", "status": "pending" },
        { "id": 3, "task": "Organize by topic", "status": "pending" },
        { "id": 4, "task": "Create topic outline", "status": "pending" },
        { "id": 5, "task": "Complete extracted-content.md", "status": "pending" }
      ]
    },
    {
      "id": 5,
      "name": "Build Hiragana & Katakana Tables",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Create HiraganaTable.tsx", "status": "pending" },
        { "id": 2, "task": "Create KatakanaTable.tsx", "status": "pending" },
        { "id": 3, "task": "Include all sounds with romaji", "status": "pending" },
        { "id": 4, "task": "Add dakuten/handakuten variations", "status": "pending" },
        { "id": 5, "task": "Style for mobile readability", "status": "pending" }
      ]
    },
    {
      "id": 6,
      "name": "Build Particle Guide",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Create ParticleGuide.tsx", "status": "pending" },
        { "id": 2, "task": "Document all particles", "status": "pending" },
        { "id": 3, "task": "Include usage rules", "status": "pending" },
        { "id": 4, "task": "Add exception cases", "status": "pending" },
        { "id": 5, "task": "Mobile-optimized layout", "status": "pending" }
      ]
    },
    {
      "id": 7,
      "name": "Build Sentence Structure Section",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Create SentenceStructure.tsx", "status": "pending" },
        { "id": 2, "task": "Document SOV word order", "status": "pending" },
        { "id": 3, "task": "Explain verb conjugation", "status": "pending" },
        { "id": 4, "task": "Include example sentences", "status": "pending" },
        { "id": 5, "task": "Add practice patterns", "status": "pending" }
      ]
    },
    {
      "id": 8,
      "name": "Build Vocabulary Sections",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Create vocabulary components", "status": "pending" },
        { "id": 2, "task": "Group by categories", "status": "pending" },
        { "id": 3, "task": "Include romaji and kana", "status": "pending" },
        { "id": 4, "task": "Add example sentences", "status": "pending" },
        { "id": 5, "task": "Mobile card layout", "status": "pending" }
      ]
    },
    {
      "id": 9,
      "name": "Build Grammar Reference",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Create GrammarSection.tsx", "status": "pending" },
        { "id": 2, "task": "Document verb forms", "status": "pending" },
        { "id": 3, "task": "Document adjective conjugations", "status": "pending" },
        { "id": 4, "task": "Include pattern explanations", "status": "pending" },
        { "id": 5, "task": "Add example sentences", "status": "pending" }
      ]
    },
    {
      "id": 10,
      "name": "Build Main App Layout",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Create navigation structure", "status": "pending" },
        { "id": 2, "task": "Implement dark mode toggle", "status": "pending" },
        { "id": 3, "task": "Create clean page layout", "status": "pending" },
        { "id": 4, "task": "Ensure mobile responsiveness", "status": "pending" },
        { "id": 5, "task": "Test various screen sizes", "status": "pending" }
      ]
    },
    {
      "id": 11,
      "name": "Final Polish & Review",
      "status": "pending",
      "steps": [
        { "id": 1, "task": "Review content accuracy", "status": "pending" },
        { "id": 2, "task": "Ensure consistent formatting", "status": "pending" },
        { "id": 3, "task": "Test mobile experience", "status": "pending" },
        { "id": 4, "task": "Run component tests with Vitest", "status": "pending" },
        { "id": 5, "task": "Add missing content", "status": "pending" },
        { "id": 6, "task": "Mark project complete", "status": "pending" }
      ]
    }
  ]
}
```

### iteration-prompt.md (full content):
```markdown
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
```

### progress.txt (initial content):
```
# Japanese Cheat Sheet - Progress Log

## Project Start
- Date: [Current Date]
- Total Images: 63 HEIC files (IMG_7492 - IMG_7555)
- Target Level: N4 (Elementary)
- Source: Mixed materials (textbook + class notes)

---

## Phase Log

### Phase 0: Setup & Image Conversion
Status: Pending
Notes:
-

---

[Additional phases will be logged as completed]
```

### extracted-content.md (initial structure):
```markdown
# Japanese Cheat Sheet - Extracted Content

This file contains all content extracted from the source images.

## Hiragana (ひらがな)
<!-- Add hiragana found in images -->

## Katakana (カタカナ)
<!-- Add katakana found in images -->

## Particles (じょし)
<!-- Add particle usage examples -->

## Vocabulary (たんご)
### Numbers
### Time
### Places
### People
### Actions
### Adjectives

## Grammar Patterns (ぶんぽう)
### Verb Conjugations
### Sentence Patterns
### Common Expressions

## Example Sentences
<!-- Format: Japanese | Romaji | English -->

## Notes & Exceptions
<!-- Special rules, exceptions, tips from notes -->
```

---

## Verification
After each phase:
1. Check that extracted content is accurate
2. Verify romaji/hiragana consistency
3. Test components on mobile viewport
4. Update progress.txt with completion notes
5. Mark phase complete in tasks.json

---

## Image Conversion Command (for Phase 0)
To convert HEIC to PNG, run this in terminal:
```bash
mkdir -p images-converted
for file in images/*.HEIC; do
  sips -s format png "$file" --out "images-converted/$(basename "$file" .HEIC).png"
done
```

