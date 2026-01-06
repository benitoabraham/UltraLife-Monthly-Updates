# 🚀 Deployment Instructions

This guide will help you deploy the UltraLife Member Login Portal to GitHub.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Repository access: https://github.com/benitoabraham/UltraLife-Monthly-Updates

## 🔄 Step-by-Step Deployment

### Step 1: Clone the Repository (if not already done)

```bash
git clone https://github.com/benitoabraham/UltraLife-Monthly-Updates.git
cd UltraLife-Monthly-Updates
```

### Step 2: Copy All Project Files

Copy all the files from the project directory to your repository folder. The structure should look like:

```
UltraLife-Monthly-Updates/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── components/
│   │   └── UltraLifeLogin.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── IMPLEMENTATION_GUIDE.md
├── DEPLOYMENT.md
└── README.md
```

### Step 3: Initialize Git (if needed)

```bash
git init
```

### Step 4: Add and Commit Files

```bash
# Add all files
git add .

# Commit with a meaningful message
git commit -m "Initial commit: UltraLife Member Login Portal"
```

### Step 5: Connect to GitHub Repository

```bash
# Add remote repository
git remote add origin https://github.com/benitoabraham/UltraLife-Monthly-Updates.git

# Or if already exists, update it
git remote set-url origin https://github.com/benitoabraham/UltraLife-Monthly-Updates.git
```

### Step 6: Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

## 🌐 Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

**Enable GitHub Pages:**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The site will automatically deploy on every push to main

Your site will be available at: `https://benitoabraham.github.io/UltraLife-Monthly-Updates/`

### Option 2: Manual Deployment

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Install gh-pages package
npm install -g gh-pages

# Deploy to gh-pages branch
gh-pages -d dist
```

## 🔧 Configuration for GitHub Pages

If using GitHub Pages, update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/UltraLife-Monthly-Updates/',  // Add this line
})
```

Then rebuild and redeploy.

## 🌍 Alternative Deployment Options

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify's deploy page
   OR
3. Connect your GitHub repository to Netlify for automatic deployments

### Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login and deploy:
```bash
railway login
railway init
railway up
```

## 🔐 Environment Variables (for Production)

If you're connecting to real Airtable data, create environment variables:

### For Vercel/Netlify:
Add these in your deployment platform's dashboard:
- `VITE_AIRTABLE_API_KEY`
- `VITE_AIRTABLE_BASE_ID`

### For local .env file:
```env
VITE_AIRTABLE_API_KEY=your_api_key_here
VITE_AIRTABLE_BASE_ID=appShheFjBIpUtI4G
```

⚠️ **Never commit the .env file!** It's already in .gitignore.

## ✅ Verify Deployment

After deployment, test your application:

1. ✅ Login page loads correctly
2. ✅ Responsive design works on mobile
3. ✅ Sample credentials work
4. ✅ Error messages display properly
5. ✅ Success screen appears after login

## 🐛 Troubleshooting

### Issue: "Permission denied" when pushing
**Solution:**
```bash
git remote set-url origin https://<your-username>@github.com/benitoabraham/UltraLife-Monthly-Updates.git
```

### Issue: Build fails
**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: 404 on GitHub Pages
**Solution:**
- Check that `base` in `vite.config.js` matches your repo name
- Ensure GitHub Pages is enabled in repository settings
- Wait a few minutes for deployment to complete

### Issue: Tailwind styles not working
**Solution:**
```bash
# Ensure all Tailwind dependencies are installed
npm install -D tailwindcss postcss autoprefixer
```

## 📱 Custom Domain (Optional)

To use a custom domain with GitHub Pages:

1. Create a `CNAME` file in the `public` folder
2. Add your domain name to the file
3. Configure DNS settings with your domain provider
4. Enable HTTPS in GitHub Pages settings

## 🔄 Updating the Deployment

To deploy updates:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
```

GitHub Actions will automatically rebuild and deploy!

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs in the **Actions** tab
2. Review error messages in the browser console
3. Open an issue on GitHub
4. Consult the README.md and IMPLEMENTATION_GUIDE.md

---

**Happy Deploying! 🎉**
