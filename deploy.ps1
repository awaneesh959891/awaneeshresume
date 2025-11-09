# Quick Deploy Script for Portfolio
# Run this script to deploy your portfolio to GitHub Pages

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Portfolio Deployment Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "Git initialized!" -ForegroundColor Green
}

# Check if remote exists
$remoteExists = git remote -v | Select-String "origin"
if (-not $remoteExists) {
    Write-Host ""
    Write-Host "WARNING: No GitHub remote configured!" -ForegroundColor Red
    Write-Host "Please set up your GitHub repository first:" -ForegroundColor Yellow
    Write-Host "1. Create a repository on GitHub" -ForegroundColor Yellow
    Write-Host "2. Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git" -ForegroundColor Yellow
    Write-Host ""
    exit
}

# Add all changes
Write-Host "Adding all changes to git..." -ForegroundColor Yellow
git add .

# Commit changes
$commitMessage = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "$commitMessage"

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

# Deploy to GitHub Pages
Write-Host ""
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "Deployment Complete! 🚀" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio will be live in 2-5 minutes at:" -ForegroundColor Cyan
Write-Host "Check your package.json for the homepage URL" -ForegroundColor Cyan
Write-Host ""
