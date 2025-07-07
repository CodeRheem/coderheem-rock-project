# 🛠️ Guide: Setting Up GitHub Issues on a Project Board

This guide walks you through how to create and manage GitHub Issues, and organize them on a GitHub Project Board for your repository (e.g., `sprintfixer-frontend`).

---

## ✅ Step 1: Create a GitHub Project Board

1. Go to the repository (e.g., `sprintfixer-frontend`).
2. Click on the **"Projects"** tab.
3. Click **"New project"**.
4. Choose **"Board"** for a kanban-style layout.
5. Give it a name (e.g., `Frontend Tasks`, `Sprint 1`).
6. Add a description (optional) and select **Repository-linked**.
7. Click **"Create project"**.

---

## 📌 Step 2: Set Up Project Columns

Recommended columns for a basic workflow:

- `To Do`
- `In Progress`
- `In Review`
- `Done`

You can add or rename columns as your team sees fit.

---

## 🐛 Step 3: Create GitHub Issues

1. Go to the **"Issues"** tab.
2. Click **"New issue"**.
3. Add a **clear title** (e.g., `Create Navbar Component`).
4. Add a **description**, including:
   - What needs to be done
   - Checklists using `- [ ]` if needed
5. Assign a **label** (`bug`, `feature`, `urgent`, etc.).
6. Assign the **team member(s)** responsible.
7. Set a **milestone** if applicable.
8. Click **"Submit new issue"**.

---

## 🔁 Step 4: Link Issues to Project Board

### ✅ Option A: From the Issue Page

- On the right sidebar of the issue, scroll to **"Projects"**.
- Click `+` to add it to your board and select the column (e.g., `To Do`).

### ✅ Option B: From the Project Board

- Open the Project Board.
- Under a column (e.g., `To Do`), click **"+ Add item"**.
- Search for and select an existing issue.

### ✅ Option C: Automation (Optional)

- Go to the **Project Board** → Click **"Settings"** or ⚙️.
- Set up automation like:
  - `"When issue is added → move to To Do"`
  - `"When PR is merged → move to Done"`

---

## 📈 Step 5: Track Progress and Update

- Drag issues across columns as work progresses.
- Update issue status with comments or commits.
- Use commit messages like `Fixes #12` or `Closes #5` to automatically close issues when merged.

---

## 🚀 Bonus Tips

- Use labels like `bug`, `feature`, `priority:high`, `frontend`, etc.
- Break large tasks into smaller linked issues.
- Use **milestones** to group issues into sprints or releases.
- Enable **Discussions** or **Wiki** for broader collaboration.

---

> 🔄 Keep your board updated and review it daily during standups or sync meetings!
