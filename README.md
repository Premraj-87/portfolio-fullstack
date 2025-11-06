# Portfolio Project

A modern full-stack portfolio website built with React, Express.js, MongoDB, and TailwindCSS.

## 🌟 Features

- ✨ Modern responsive design with Tailwind CSS v4
- 🎨 Dark/Light mode support
- 📝 Blog management system
- 💼 Project showcase
- 👨‍💼 Work experience timeline
- 📧 Contact form with EmailJS
- 🔐 Admin dashboard with authentication
- 🖼️ Cloudinary image uploads
- ⚡ Smooth micro-interactions

## 🛠️ Tech Stack

### Frontend
- React 18.3
- Vite
- React Router DOM
- Tailwind CSS v4
- Axios
- React Quill (Rich text editor)
- Lucide React (Icons)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt
- Nodemailer
- CORS

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas account)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/portfolio-fullstack.git
cd portfolio-fullstack
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create `.env` file in `backend` folder:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
```

Start backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

Create `.env` file in `frontend` folder:
```env
VITE_API_URL=http://localhost:5000/api
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset
```

Start frontend:
```bash
npm run dev
```

### 4. Access the application
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Summary:
1. **Database**: MongoDB Atlas (Free)
2. **Backend**: Render.com (Free)
3. **Frontend**: Vercel (Free)

## 📁 Project Structure

```
portfolio-fullstack/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🎨 Color Scheme

- Primary: Amber/Goldenrod (`#DAA520`)
- Dark Mode: Enhanced contrast with amber accents
- Light Mode: Clean with subtle amber highlights

## 🔒 Admin Access

1. Navigate to `/login`
2. Create admin account (first signup becomes admin)
3. Access dashboard at `/dashboard`

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start with nodemon
- `npm start` - Start production server

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Prem Raj Anand**

- GitHub: [@YourGitHub](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Icons from Lucide React
- Hosting by Vercel and Render

---

**Made with ❤️ and lots of ☕**
