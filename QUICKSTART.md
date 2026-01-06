# ⚡ Quick Start Guide

Get the UltraLife Member Login Portal running in under 5 minutes!

## 🎯 Option 1: Using the Deploy Script (Easiest)

```bash
# Navigate to the project directory
cd /path/to/UltraLife-Monthly-Updates

# Run the deployment script
./deploy.sh
```

That's it! The script will:
- ✅ Initialize Git
- ✅ Commit your files
- ✅ Push to GitHub
- ✅ Give you next steps

## 🎯 Option 2: Manual Setup

### 1. Clone or Navigate to Repository

```bash
git clone https://github.com/benitoabraham/UltraLife-Monthly-Updates.git
cd UltraLife-Monthly-Updates
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser!

### 4. Test the Login

Use these demo credentials:
- Email: `aaron.royston@ultralife.com`
- Password: `AaronR2024!`

## 🌐 Deploy to Production

### GitHub Pages (Free Hosting)

```bash
# Commit your changes
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages in repository settings
# Settings → Pages → Source: GitHub Actions
```

Your site will be live at:
`https://benitoabraham.github.io/UltraLife-Monthly-Updates/`

### Vercel (One Command)

```bash
npm install -g vercel
vercel
```

## 🔧 Customize

Edit these files to customize:
- `src/components/UltraLifeLogin.jsx` - Login component
- `src/index.css` - Styles
- `README.md` - Documentation

## 📚 Learn More

- [Full README](./README.md) - Complete documentation
- [Deployment Guide](./DEPLOYMENT.md) - Detailed deployment instructions
- [Implementation Guide](./IMPLEMENTATION_GUIDE.md) - Airtable integration

## 🆘 Need Help?

**Login not working?**
- Check demo credentials (case-sensitive!)
- Open browser console (F12) for errors

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Can't push to GitHub?**
- Check you have repository access
- Ensure Git is configured: `git config user.email "your@email.com"`

## 🎉 You're Ready!

Start building amazing features for UltraLife members!
