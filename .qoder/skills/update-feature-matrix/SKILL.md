---
name: update-feature-matrix
description: Monthly update of MongoDB GUI Feature Comparison matrix — fetches latest version numbers and release dates for Studio 3T, NoSQLBooster, Compass, Navicat, and NoSQLManager, updates data.js and all month references across docs. Use when the user asks to refresh version data, perform a monthly update, or update the feature comparison matrix.
---

# Monthly Update — MongoDB GUI Feature Matrix

Perform a monthly refresh of version numbers, release dates, and month labels across the project.

> **Month placeholders used in this skill**  
> `{{CURRENT_MONTH_EN}}` = current month English name in the files (e.g. "June")  
> `{{TARGET_MONTH_EN}}` = new month English name (e.g. "July")  
> `{{CURRENT_MONTH_ZH}}` = current month Chinese name in the files (e.g. "6月")  
> `{{TARGET_MONTH_ZH}}` = new month Chinese name (e.g. "7月")  
>  
> Determine these values from the user's request or the current date before starting.

---

## Task Checklist

```
- [ ] Step 1: Confirm target month
- [ ] Step 2: Fetch latest versions for all 5 tools
- [ ] Step 3: Update data.js Release row
- [ ] Step 4: Replace month names in md + config.js
- [ ] Step 5: List update details for non-NoSQLBooster products
- [ ] Step 6: Present summary and pause for user confirmation
- [ ] Step 7: Commit and push (only after user confirms)
```

---

## Step 1: Confirm Target Month

Ask the user (or infer from context) the target month and year, e.g. "July 2026".

Set the four placeholders above accordingly.

---

## Step 2: Fetch Latest Version Info

Fetch all 5 tools **in parallel** using `search_web` / `fetch_content`:

| Tool | Source URLs to check |
|------|---------------------|
| Studio 3T | `studio3t.com/blog/`, `files.studio3t.com/changelog/changelog.txt` |
| NoSQLBooster | `nosqlbooster.com/blog/`, `nosqlbooster.com/downloads` |
| Compass | `mongodb.com/docs/compass/release-notes/`, `github.com/mongodb-js/compass/releases` |
| Navicat | `navicat.com/en/products/navicat-for-mongodb-release-note` |
| NoSQLManager | `mongodbmanager.com/news`, `mongodbmanager.com/download-free` |

For each tool collect:
- **Version string** (e.g. `2026.10.0`, `11.0.0`, `1.49.8`)
- **Release date** in `YYYY-MM-DD` format

---

## Step 3: Update `data.js` Release Row

**File**: `docs/.vuepress/components/data.js`

Locate the `["Release", ...]` row (line ~23) and update only the entries that have changed:

```js
// Before
["Release", tp.ver("OLD_VER","OLD_DATE"), tp.ver(...), ...]

// After
["Release", tp.ver("NEW_VER","NEW_DATE"), tp.ver(...), ...]
```

Keep tools that haven't been updated as-is. Do **not** modify other rows.

Also note any significant feature updates per tool to summarise for the user.

---

## Step 4: Replace Month Names in md + config.js

Replace `{{CURRENT_MONTH_EN}}` → `{{TARGET_MONTH_EN}}` in these three files:

| File | Occurrences |
|------|-------------|
| `docs/README.md` | Title heading: `# Feature Comparison of MongoDB GUI tools ({{TARGET_MONTH_EN}} YYYY)` |
| `docs/index.md` | `description:` front-matter AND `# Title heading` (2 places) |
| `docs/.vuepress/config.js` | `description:` field |

Also replace `{{CURRENT_MONTH_ZH}}` → `{{TARGET_MONTH_ZH}}` if any Chinese month text exists in the project.

> Use `search_replace` with `replace_all: false` per unique match, or `replace_all: true` if the string appears multiple times in the same file.

---

## Step 5: List Update Details (Non-NoSQLBooster)

After updating files, compile and present the **update details** for the following 4 products (exclude NoSQLBooster):

- **Studio 3T**
- **Compass**
- **Navicat**
- **NoSQLManager**

For each product, list:
- Version change: `old → new`
- Release date
- 2–3 key new features or bug fixes (from changelog/release notes fetched in Step 2)

Output format:

```
## Studio 3T — OLD → NEW (DATE)
- feature 1
- feature 2

## Compass — OLD → NEW (DATE)
- ...

## Navicat — OLD → NEW (DATE)
- ...

## NoSQLManager — OLD → NEW (DATE)
- ...
```

---

## Step 6: Present Summary and Pause

Print a version summary table for **all 5 tools**:

| Tool | Old Version | New Version | Release Date |
|------|------------|------------|--------------|
| Studio 3T | ... | ... | YYYY-MM-DD |
| NoSQLBooster | ... | ... | YYYY-MM-DD |
| Compass | ... | ... | YYYY-MM-DD |
| Navicat | ... | ... | YYYY-MM-DD |
| NoSQLManager | ... | ... | YYYY-MM-DD |

**⚠️ STOP HERE — Do NOT commit or push.**

Ask the user to confirm:
> "所有文件已更新完毕，请确认是否可以提交（commit + push）？"

Wait for user's explicit confirmation before proceeding to Step 7.

---

## Step 7: Commit and Push (After User Confirms)

> Only execute this step after the user explicitly confirms.

Use the Windows-safe git pattern (avoids path-parsing errors in Git Bash):

```bash
# Stage all changed files
git -C "WORKSPACE_ROOT" add "docs/README.md" "docs/index.md" "docs/.vuepress/config.js" "docs/.vuepress/components/data.js"

# Commit
git -C "WORKSPACE_ROOT" commit -m "Update feature matrix to {{TARGET_MONTH_EN}} YYYY: [list updated tools]"

# Push
git -C "WORKSPACE_ROOT" push origin main
```

> **Windows pitfall**: Never use `cd "path" && git add ...` with unquoted mixed paths.  
> Always use `git -C "absolute_path"` with each file path in double quotes.
