#!/bin/bash

# UltraLife Deployment Helper Script
# This script helps deploy the UltraLife Member Login Portal to GitHub

echo "🚀 UltraLife Deployment Helper"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📝 Found uncommitted changes."
    echo ""
    
    # Ask for commit message
    read -p "Enter commit message: " commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Update UltraLife deployment"
    fi
    
    echo ""
    echo "📤 Adding files to Git..."
    git add .
    
    echo "💾 Committing changes..."
    git commit -m "$commit_message"
else
    echo "✅ No uncommitted changes found."
fi

echo ""
echo "🔗 Checking remote repository..."

# Check if remote exists
if ! git remote | grep -q origin; then
    echo "Adding remote repository..."
    git remote add origin https://github.com/benitoabraham/UltraLife-Monthly-Updates.git
else
    echo "✅ Remote repository already configured."
fi

echo ""
echo "🌿 Ensuring main branch..."
git branch -M main

echo ""
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "================================"
echo "✅ Deployment complete!"
echo ""
echo "📍 Your repository: https://github.com/benitoabraham/UltraLife-Monthly-Updates"
echo ""
echo "🌐 To enable GitHub Pages:"
echo "   1. Go to repository Settings → Pages"
echo "   2. Select 'GitHub Actions' as source"
echo "   3. Your site will be live at:"
echo "      https://benitoabraham.github.io/UltraLife-Monthly-Updates/"
echo ""
echo "================================"
