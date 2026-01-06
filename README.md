# UltraLife Monthly Updates - Member Login Portal

A modern, secure member login portal for the UltraLife Monthly Updates platform, built with React and integrated with Airtable.

![UltraLife Login](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Modern UI Design** - Beautiful gradient backgrounds and smooth animations
- **Secure Authentication** - Member login using email and password from Airtable
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Validation** - Input validation and error handling
- **Success Dashboard** - Post-login member information display
- **Easy Integration** - Ready to connect with Airtable backend

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Git
- Airtable account with API access

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/benitoabraham/UltraLife-Monthly-Updates.git
cd UltraLife-Monthly-Updates
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🧪 Testing

### Demo Credentials

The application currently runs with sample data. You can test with these credentials:

- **Email:** aaron.royston@ultralife.com | **Password:** AaronR2024!
- **Email:** sarah.douglass@ultralife.com | **Password:** SarahD2024!
- **Email:** carlos.malatesta@ultralife.com | **Password:** CarlosM#2024
- **Email:** aleem.tejani@ultralife.com | **Password:** AleemT$2024
- **Email:** talor.zamir@ultralife.com | **Password:** TalorZ2024!

## 🔌 Connecting to Airtable

### Airtable Database Details

- **Base ID:** `appShheFjBIpUtI4G`
- **Table:** Members (`tblgBvDl6zowiluxo`)
- **Fields:**
  - Name (`fldEZeukfsjG7hnHM`)
  - Email (`fldyAXx6U9v4KbDal`)
  - Password (`fldwpiv0ZXR2WQQz1`)

### Option 1: Backend API (Recommended)

For production use, implement a secure backend API:

1. Create a Node.js/Express server
2. Use Airtable API to query member data
3. Implement password hashing with bcrypt
4. Use JWT for session management

See `IMPLEMENTATION_GUIDE.md` for detailed instructions.

### Option 2: Direct Airtable Connection

⚠️ **For internal use only** - This exposes your API key in client-side code.

Install Airtable SDK:
```bash
npm install airtable
```

Update the login handler in `src/components/UltraLifeLogin.jsx` with the provided code in the implementation guide.

## 📁 Project Structure

```
UltraLife-Monthly-Updates/
├── public/
├── src/
│   ├── components/
│   │   └── UltraLifeLogin.jsx    # Main login component
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles with Tailwind
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── IMPLEMENTATION_GUIDE.md      # Detailed implementation guide
└── README.md                     # This file
```

## 🛠️ Tech Stack

- **React 18.2.0** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Airtable** - Database and authentication backend

## 🔒 Security Considerations

1. **Never commit API keys** - Use environment variables
2. **Implement password hashing** - Use bcrypt or similar
3. **Use HTTPS** - Always in production
4. **Implement rate limiting** - Prevent brute force attacks
5. **Session management** - Use secure JWT tokens
6. **Input validation** - Sanitize all user inputs

## 🌐 Deployment Options

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

### GitHub Pages

Update `vite.config.js`:
```javascript
base: '/UltraLife-Monthly-Updates/'
```

Then:
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 📖 Documentation

- [Implementation Guide](./IMPLEMENTATION_GUIDE.md) - Detailed setup instructions
- [Airtable API Docs](https://airtable.com/developers/web/api/introduction)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- **Benito Abraham** - Initial work

## 🙏 Acknowledgments

- UltraLife community members
- Airtable for providing the database infrastructure
- React and Vite communities for excellent tools

## 📧 Support

For questions or issues, please open an issue on GitHub or contact the maintainer.

---

**Made with ❤️ by the UltraLife Team**
