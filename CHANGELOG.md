# Session Notes & Changelog

A running log of development sessions for Julianna Roberts' personal website.

---

## Session 4: February 2, 2025
**Branch:** `claude/review-improve-workflow-5qnhW`
**Focus:** Workflow improvements and documentation

### Goals
**Workflow & Automation**
- [ ] Identify issues and improve workflow with Claude
- [ ] Automate more workflow (e.g., PR deployment - currently manual)
- [ ] Establish local testing/building workflow

**Risk Assessment**
- [ ] Identify risks with using Claude
- [ ] Identify how to manage Claude risks

**Site Planning & Design**
- [ ] Identify and refine site goals
- [ ] Change site design based on new goals
- [ ] Change the site name

**Features**
- [ ] Create a domain
- [ ] Add daily log feature to website (draw from changelog notes)

### Changes
- Added: `CHANGELOG.md` for session tracking

### Notes
- Reviewed all previous sessions to identify workflow improvements
- Established structured session flow: Review → Plan → Build → Test → Handoff

### Next Session
- _TBD_

---

## Session 3: January 31, 2025
**Branch:** `claude/create-blog-post-3-GJSXi`
**Focus:** Blog Post #3 - The Elements of Style

### Changes
- Added: Blog Post #3 "I Failed My Assignment - The Elements of Style"
- Fixed: "My Notes" dropdown crash (changed to plain text)
- Fixed: List items styling (lighter visual weight)
- Fixed: Grammar in Claude notes explanation
- Added: Intro text before dialogue section
- Removed: Parenthetical text from section headers

### Issues Encountered
- Collapsible dropdown caused crash when content wasn't properly formatted
- Multiple iterations needed for formatting refinement

---

## Session 2: January 30, 2025
**Branch:** `claude/blog-review-update-SKKf5`
**Focus:** Blog Post #2 + Subscribe functionality

### Changes
- Added: Blog Post #2 "I've Been Convinced of Crusonia Plants - Stubborn Attachments"
- Added: Email subscribe forms (footer + writing page)
- Added: Feedback form at end of blog posts
- Added: Collapsible note headers (dropdowns)
- Added: Netlify serverless function for welcome emails
- Added: Terminal-style formatting for code output
- Fixed: Subscribe form 404 errors (multiple attempts - PRs #6-9, #12)
- Fixed: Duplicate onSubmit handlers causing build failure
- Fixed: Various styling (centered forms, hover states)

### Issues Encountered
- Subscribe form 404: Required switching from standard form to fetch-based submission
- Duplicate form handlers: Two onSubmit props on same element
- Multiple PRs needed to resolve form issues - should have tested locally first

---

## Session 1: January 28, 2025
**Branch:** `main` (initial setup)
**Focus:** Initial website creation

### Changes
- Created: Full React website with App.jsx
- Created: Project structure (package.json, public/, src/)
- Deployed: Site to Netlify
- Added: Blog Post #1 documenting the creation process

### Issues Encountered
- Claude Code installation confusion (macOS updates required)
- "Ghostty" vs "Ghostie" terminal naming confusion
- Cyclical responses when Claude didn't know the answer
- Model mismatch: Claude Desktop was on Sonnet instead of Opus
- Build errors: Unclosed `<main>` tags, invalid href attributes
- Artifact display: Claude said it "couldn't" show visuals when it could

### Lessons Learned
- Always verify exact commands before suggesting
- Ask clarifying questions instead of assuming
- Check which Claude model is being used
- Test locally before deploying

---

## Project Info

**Owner:** Julianna Roberts
**Tagline:** Architecture × AI × Writing
**Stack:** React 18, Netlify, Resend (email)
**Live URL:** Deployed on Netlify

### Custom Content Markup
The blog uses custom tags for formatting:
- `LISTITEM:` / `SUBITEM:` - Bullet points
- `HEADER:` - Collapsible section headers
- `SECTION:` - Major section headings
- `DIALOGUE:` - Conversation quotes
- `TERMINAL:` - Command line output
- `NOTE:` - Sidebar content
- `QUOTE:` - Block quotes
- `TIMESTAMP:` - Time markers (collapsible)
- `SEPARATOR:` - Visual dividers
- `CODEBLOCK:` - Code display
