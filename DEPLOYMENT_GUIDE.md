# GitHub Pages Deployment Guide

## ✅ Your Portfolio is Configured!

**GitHub Repository:** https://github.com/awaneesh959891/Awaneesh_CV_2025_React

**Live URL:** https://awaneesh959891.github.io/Awaneesh_CV_2025_React

---

## Deployment Status

Your portfolio has been set up and is being deployed to GitHub Pages!

The deployment is currently in progress. Your website will be live in 2-5 minutes.

### 1. Create a GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `portfolio` (or any name you prefer)
4. Keep it **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Update package.json with Your GitHub Username
1. Open `package.json`
2. Find the line: `"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"`
3. Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
4. If you named your repo differently, replace `portfolio` with your repo name
5. Save the file

Example:
```json
"homepage": "https://johnsmith.github.io/portfolio"
```

### 3. Initialize and Push to GitHub

Open PowerShell in the project folder and run these commands one by one:

```powershell
# Navigate to your project (if not already there)
cd "d:\My Project\PortFolio\portfolio-app"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

After pushing to GitHub, run:

```powershell
npm run deploy
```

This command will:
- Build your React app for production
- Create a `gh-pages` branch
- Deploy your built files to GitHub Pages

### 5. Configure GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", ensure `gh-pages` branch is selected
5. Click "Save" if needed

### 6. Access Your Live Website

Your portfolio will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/portfolio
```

It may take 2-5 minutes for the site to go live after the first deployment.

## Making Updates

Whenever you make changes to your portfolio:

```powershell
# 1. Save your changes in your code editor

# 2. Add changes to git
git add .

# 3. Commit changes
git commit -m "Description of your changes"

# 4. Push to GitHub
git push origin main

# 5. Deploy updated version
npm run deploy
```

## Troubleshooting

### Images or PDFs not loading?
- Ensure all files are in the `public` or `src/assets` folder
- Check that file paths are correct (case-sensitive)
- Rebuild and redeploy: `npm run deploy`

### 404 Error on GitHub Pages?
- Check that `homepage` in package.json matches your GitHub Pages URL
- Ensure the `gh-pages` branch exists in your repository
- Wait a few minutes and clear browser cache

### Deployment fails?
- Ensure you have pushed all changes to GitHub first
- Check that gh-pages is installed: `npm list gh-pages`
- Try: `npm install --save-dev gh-pages` and deploy again

## Custom Domain (Optional)

To use a custom domain like `www.yourname.com`:

1. Buy a domain from a domain registrar
2. Add a `CNAME` file to the `public` folder with your domain name
3. Configure DNS settings with your domain registrar
4. In GitHub repo settings > Pages, add your custom domain

---

**Your portfolio is now ready to share with the world! 🚀**

Share your live link:
- On LinkedIn
- On your resume
- With potential employers
- In job applications
