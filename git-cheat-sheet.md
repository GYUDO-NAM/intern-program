# Git Cheat Sheet

A comprehensive guide to the most commonly used Git commands.

---

## Initial Setup

### Configure Git
```bash
# Set your username
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Check your settings
git config --list
```

---

## Creating Repositories

### Initialize a new repository
```bash
# Create a new local repository
git init

# Clone an existing repository
git clone <repository-url>

# Clone to a specific directory
git clone <repository-url> <directory-name>
```

---

## Basic Commands

### Checking Status
```bash
# Check the status of your working directory
git status

# Show changes in files
git diff

# Show changes for staged files
git diff --staged
```

### Adding & Committing
```bash
# Add a specific file to staging
git add <file-name>

# Add all changes to staging
git add .

# Add all changes (including deletions)
git add -A

# Commit staged changes
git commit -m "Commit message"

# Add and commit in one step
git commit -am "Commit message"

# Amend the last commit
git commit --amend -m "New commit message"
```

---

## Branching & Merging

### Branch Management
```bash
# List all local branches
git branch

# List all branches (local and remote)
git branch -a

# Create a new branch
git branch <branch-name>

# Switch to a branch
git checkout <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>

# Delete a branch
git branch -d <branch-name>

# Force delete a branch
git branch -D <branch-name>

# Rename current branch
git branch -m <new-branch-name>
```

### Merging
```bash
# Merge a branch into current branch
git merge <branch-name>

# Abort a merge
git merge --abort
```

---

## Remote Repositories

### Managing Remotes
```bash
# Show remote repositories
git remote -v

# Add a remote repository
git remote add origin <repository-url>

# Remove a remote
git remote remove <remote-name>

# Rename a remote
git remote rename <old-name> <new-name>
```

### Fetching & Pulling
```bash
# Fetch changes from remote
git fetch

# Fetch from specific remote
git fetch <remote-name>

# Pull changes from remote (fetch + merge)
git pull

# Pull from specific branch
git pull origin <branch-name>

# Pull with rebase
git pull --rebase
```

### Pushing
```bash
# Push to remote repository
git push

# Push to specific remote and branch
git push origin <branch-name>

# Push and set upstream
git push -u origin <branch-name>

# Push all branches
git push --all

# Push tags
git push --tags

# Force push (use with caution!)
git push --force
```

---

## Viewing History

### Log Commands
```bash
# View commit history
git log

# View compact log
git log --oneline

# View log with graph
git log --graph --oneline --all

# View last N commits
git log -n <number>

# View commits by author
git log --author="<author-name>"

# View commits with file changes
git log --stat

# View commits for a specific file
git log <file-name>
```

### Show Command
```bash
# Show details of a specific commit
git show <commit-hash>

# Show changes in a specific file
git show <commit-hash>:<file-name>
```

---

## Undoing Changes

### Working Directory
```bash
# Discard changes in working directory
git checkout -- <file-name>

# Discard all changes in working directory
git checkout -- .

# Remove untracked files
git clean -f

# Remove untracked files and directories
git clean -fd
```

### Staging Area
```bash
# Unstage a file
git reset <file-name>

# Unstage all files
git reset
```

### Commits
```bash
# Undo last commit, keep changes staged
git reset --soft HEAD~1

# Undo last commit, keep changes unstaged
git reset HEAD~1

# Undo last commit, discard changes (use with caution!)
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert <commit-hash>
```

---

## Stashing

### Save & Apply Changes
```bash
# Stash current changes
git stash

# Stash with a message
git stash save "message"

# List all stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove most recent stash
git stash pop

# Apply a specific stash
git stash apply stash@{<number>}

# Drop a specific stash
git stash drop stash@{<number>}

# Clear all stashes
git stash clear
```

---

## Tagging

### Creating & Managing Tags
```bash
# List all tags
git tag

# Create a lightweight tag
git tag <tag-name>

# Create an annotated tag
git tag -a <tag-name> -m "Tag message"

# Tag a specific commit
git tag <tag-name> <commit-hash>

# Push a tag to remote
git push origin <tag-name>

# Push all tags
git push --tags

# Delete a local tag
git tag -d <tag-name>

# Delete a remote tag
git push origin --delete <tag-name>
```

---

## Advanced Commands

### Rebasing
```bash
# Rebase current branch onto another
git rebase <branch-name>

# Interactive rebase for last N commits
git rebase -i HEAD~<number>

# Continue rebase after resolving conflicts
git rebase --continue

# Abort rebase
git rebase --abort
```

### Cherry-picking
```bash
# Apply a specific commit to current branch
git cherry-pick <commit-hash>

# Cherry-pick without committing
git cherry-pick -n <commit-hash>
```

### Searching
```bash
# Search for text in files
git grep "<search-term>"

# Search in a specific branch
git grep "<search-term>" <branch-name>
```

---

## Useful Aliases

Add these to your Git config for shortcuts:

```bash
# Add aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'
```

---

## Troubleshooting

### Common Issues

**Merge Conflicts:**
```bash
# View files with conflicts
git status

# After resolving conflicts manually
git add <resolved-files>
git commit
```

**Wrong Commit Message:**
```bash
# Amend last commit message
git commit --amend -m "Corrected message"
```

**Committed to Wrong Branch:**
```bash
# On wrong branch, save the commit hash
git log

# Switch to correct branch
git checkout <correct-branch>

# Cherry-pick the commit
git cherry-pick <commit-hash>

# Go back to wrong branch
git checkout <wrong-branch>

# Remove the commit
git reset --hard HEAD~1
```

---

## Best Practices

1. **Commit Often:** Make small, frequent commits with clear messages
2. **Write Clear Commit Messages:** Use present tense, be descriptive
3. **Pull Before Push:** Always pull latest changes before pushing
4. **Use Branches:** Create feature branches for new work
5. **Review Before Commit:** Use `git diff` to review changes
6. **Don't Commit Sensitive Data:** Use `.gitignore` for secrets
7. **Keep History Clean:** Use rebase for feature branches
8. **Test Before Push:** Ensure code works before pushing

---

## Additional Resources

- **Official Git Documentation:** https://git-scm.com/doc
- **Git Book:** https://git-scm.com/book/en/v2
- **GitHub Guides:** https://guides.github.com/
- **Interactive Git Tutorial:** https://learngitbranching.js.org/

---

*Last updated: 2026-01-05*
