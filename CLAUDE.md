# Personal Website - Astro Project

## Project Overview

A personal website built with Astro static site generator, deployed to GitHub Pages and IPFS.

**Site URL**: https://jamesbeck7.github.io/personal-website/

## Tech Stack

- **Framework**: Astro 5.16.6
- **Language**: JavaScript (ESM modules)
- **Styling**: CSS (with IPFS/GitHub Pages compatibility)
- **RSS Feed**: @astrojs/rss 4.0.14
- **Build Tool**: Astro CLI
- **Code Formatter**: Prettier 3.7.4 with prettier-plugin-astro 0.14.1

## Directory Structure

```
/home/user/personal-website/
├── src/              # Source files
│   ├── pages/        # Astro pages (auto-routed)
│   ├── components/   # Reusable Astro components
│   └── layouts/      # Page layouts
├── public/           # Static assets
├── dist/             # Build output (generated, not committed)
├── astro.config.mjs  # Astro configuration
└── package.json      # Dependencies and scripts
```

## Key Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (REQUIRED before PR)
npm run preview  # Preview production build
npx prettier --write .  # Format code (REQUIRED before commit)
```

## Automated PR Workflow

### When Code is Ready for PR

When you've completed a task and the code is ready for review, **automatically create a pull request** by following these steps:

1. **Run Build Check**

   ```bash
   npm run build
   ```

   - Build MUST succeed before creating PR
   - If build fails, fix errors and retry
   - Do NOT create PR if build is broken

2. **Format Code**

   ```bash
   npx prettier --write .
   ```

   - Ensure all files are properly formatted
   - This is non-negotiable for code quality

3. **Commit Changes**
   - Create clear, descriptive commit messages
   - Use conventional commit format where appropriate
   - Examples:
     - `feat: add dark mode toggle`
     - `fix: resolve styling issues on IPFS`
     - `refactor: simplify navigation component`

4. **Push to Branch**

   ```bash
   git push -u origin <branch-name>
   ```

   - Branch name MUST start with `claude/` prefix
   - Always use `-u` flag to set upstream
   - Retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s) on network errors

5. **Create Pull Request**
   ```bash
   gh pr create --title "..." --body "..."
   ```

   - Write clear, concise PR title summarizing the change
   - Include in PR body:
     - **Summary**: What changed and why (bullet points)
     - **Test Plan**: How to verify the changes work
     - **Screenshots**: If visual changes were made
   - Return the PR URL to the user

### Example PR Creation Flow

```bash
# 1. Build check
npm run build

# 2. Format code
npx prettier --write .

# 3. Commit changes
git add .
git commit -m "feat: add new blog post component"

# 4. Push to branch
git push -u origin claude/add-blog-component-abc123

# 5. Create PR
gh pr create --title "Add reusable blog post component" --body "$(cat <<'EOF'
## Summary
- Created new BlogPost component for displaying blog content
- Added proper meta tags for SEO
- Ensured IPFS and GitHub Pages compatibility

## Test Plan
- [x] Build succeeds without errors
- [x] Component renders correctly in development
- [x] Styling works on both GitHub Pages and IPFS
- [x] Code is properly formatted with Prettier
EOF
)"
```

## Code Standards

### Required Practices

- ✅ **Always** run `npm run build` before committing
- ✅ **Always** run `npx prettier --write .` before committing
- ✅ Use semantic HTML in Astro templates
- ✅ Ensure CSS works on both GitHub Pages and IPFS deployments
- ✅ Include proper meta tags and RSS feeds where applicable
- ✅ Follow Astro best practices for component structure

### Forbidden Practices

- ❌ Do NOT commit if build fails
- ❌ Do NOT skip Prettier formatting
- ❌ Do NOT add server-side rendering (static generation only)
- ❌ Do NOT use absolute paths that break on IPFS
- ❌ Do NOT add new dependencies without explicit approval

## Important Deployment Constraints

### Static Site Requirements

- **No SSR**: This is a static site generator - no server-side rendering
- **Base Path**: Site uses `/personal-website` as base path (configurable via `BASE_PATH` env var)
- **Dual Hosting**: Must work on both:
  - GitHub Pages: https://jamesbeck7.github.io/personal-website/
  - IPFS: Content-addressed hosting

### Asset Handling

- Use relative paths for assets
- Test that CSS loads correctly on both platforms
- Avoid hardcoded absolute URLs

## PR Guidelines

### Before Creating PR

- [ ] `npm run build` completes successfully
- [ ] `npx prettier --write .` has been run
- [ ] All changes are committed with clear messages
- [ ] Branch name starts with `claude/` prefix
- [ ] Changes have been tested locally

### PR Content Requirements

- **Title**: Clear, concise summary of changes (50 chars or less)
- **Summary**: Bullet points explaining what changed and why
- **Test Plan**: Checklist of verification steps
- **Screenshots**: Include if there are visual changes

### Auto-PR Trigger Conditions

Create a PR automatically when:

1. ✅ User explicitly says "create a PR" or "open a pull request"
2. ✅ User says "this is ready for review"
3. ✅ Task is complete AND user confirms they want it committed
4. ✅ You've fixed all issues and tests pass

Do NOT create PR automatically when:

1. ❌ Build is failing
2. ❌ User is still iterating on the solution
3. ❌ User hasn't confirmed the changes are correct
4. ❌ You're in the middle of debugging

## Common Tasks

### Adding a New Page

1. Create file in `src/pages/` (e.g., `about.astro`)
2. Add appropriate imports and layout
3. Test with `npm run dev`
4. Build and format before committing

### Updating Components

1. Locate component in `src/components/`
2. Make changes following Astro component patterns
3. Ensure props are properly typed (JSDoc or TypeScript)
4. Test in development and production builds

### Fixing Styling Issues

1. Check CSS compatibility with static hosting
2. Test on both GitHub Pages and IPFS
3. Avoid CSS features that don't work statically
4. Verify responsive design on multiple screen sizes

## Git Workflow

### Branch Naming

- All branches MUST start with `claude/`
- Include descriptive suffix: `claude/fix-navigation`
- Auto-PR branch format: `claude/auto-pr-<feature>-<session-id>`

### Commit Messages

Use conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `style:` - Formatting, missing semicolons, etc.
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks

### Push Retry Logic

If push fails with network error:

1. Wait 2 seconds, retry
2. Wait 4 seconds, retry
3. Wait 8 seconds, retry
4. Wait 16 seconds, retry
5. If still failing, report to user

## Summary

**TL;DR for Claude:**

1. When task is complete and user confirms, automatically prepare for PR
2. Run `npm run build` - must succeed
3. Run `npx prettier --write .` - format everything
4. Commit with clear message
5. Push to `claude/*` branch with retry logic
6. Create PR with `gh pr create` including summary and test plan
7. Return PR URL to user

This workflow ensures code quality, consistency, and smooth collaboration.
