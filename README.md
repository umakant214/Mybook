# 📘 README.md

## 📌 Project Overview

This project follows a **team-based development workflow** using Git and GitHub. Every developer works on a **separate branch** and pushes only their own code to maintain clean collaboration and avoid conflicts.
## Live Project Url
https://mybook-six-tau.vercel.app/

This document explains how developers should:

* Set up the project
* Create and manage branches
* Push code correctly
* Follow team collaboration rules

---

## ⚙️ Project Setup

### 1️⃣ Clone Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Project

```bash
npm run dev
```

*(Use the correct command if your project uses Vite )*

---

## 🌿 Branching Strategy (IMPORTANT)

🚫 **Never work directly on the `main` branch.**

Each developer must create their **own branch**.

### Step 1: Get Latest Code

```bash
git checkout main
git pull origin main
```

### Step 2: Create New Branch

Branch naming convention:

```
feature/your-name-feature
fix/bug-name
```

Example:

```bash
git checkout -b feature/umakant-login-page
```

---

## 💻 Development Rules

✅ Developers must:

* Work only on their own branch
* Write clean and readable code
* Test before pushing
* Use meaningful commit messages

❌ Do NOT:

* Push directly to `main`
* Modify other developers' branches
* Push broken or incomplete code

---

## ⬆️ How to Push Code

### Add Changes

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Add: login page UI"
```

### Push Branch

```bash
git push origin your-branch-name
```

Example:

```bash
git push origin feature/umakant-login-page
```

---

## 🔁 Update Your Branch (Avoid Conflicts)

Before continuing work:

```bash
git checkout main
git pull origin main
git checkout your-branch-name
git merge main
```

Resolve conflicts if required and commit again.

---

## 🔍 Pull Request Process

1. Push your branch to GitHub
2. Create a Pull Request (PR)
3. Wait for review approval
4. Code will be merged into `main`

---

## 📝 Commit Message Format

```
Add: new feature
Fix: bug fix
Update: improvement
Remove: deleted unused code
```

Example:

```
Fix: navbar responsive issue
```

---

## 🤝 Collaboration Guidelines

* Communicate before working on the same feature
* Keep branches small and focused
* Review code before merging
* Follow project structure strictly

---

## 🧑‍💻 Support

If you face any issue while setting up or pushing code, contact the project maintainer.

---

✅ **Happy Coding!**