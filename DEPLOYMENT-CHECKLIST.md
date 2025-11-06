# 🚀 Deployment Checklist

Use this checklist to ensure smooth deployment of your portfolio.

## ✅ Pre-Deployment

### Code Preparation
- [ ] All features working locally
- [ ] No console errors in browser
- [ ] Backend API responding correctly
- [ ] Database connections working
- [ ] Environment variables documented

### Git Repository
- [ ] `.gitignore` files in place
- [ ] No sensitive data in commits
- [ ] All changes committed
- [ ] Repository pushed to GitHub

### Environment Files
- [ ] `.env.example` created for backend
- [ ] `.env.example` created for frontend
- [ ] Actual `.env` files NOT committed

---

## 🗄️ Database (MongoDB Atlas)

- [ ] Free cluster created
- [ ] Database user created with password saved
- [ ] Network access set to allow all IPs (0.0.0.0/0)
- [ ] Connection string copied and saved
- [ ] Connection string tested locally

---

## 🔧 Backend Deployment (Render)

### Setup
- [ ] Render account created
- [ ] GitHub repository connected
- [ ] Web service created
- [ ] Root directory set to `backend`
- [ ] Build command: `npm install`
- [ ] Start command: `npm start`

### Environment Variables
- [ ] `MONGODB_URI` added
- [ ] `JWT_SECRET` added
- [ ] `PORT` set to 5000
- [ ] `EMAIL_USER` added (if using email)
- [ ] `EMAIL_PASS` added (if using email)
- [ ] `FRONTEND_URL` added
- [ ] `NODE_ENV` set to `production`
- [ ] Any Cloudinary vars added

### Verification
- [ ] Backend deployed successfully
- [ ] Backend URL copied and saved
- [ ] API endpoint tested (e.g., `/api/test`)
- [ ] No deployment errors in logs

---

## 🎨 Frontend Deployment (Vercel)

### Setup
- [ ] Vercel account created
- [ ] GitHub repository connected
- [ ] Project imported
- [ ] Framework: Vite
- [ ] Root directory set to `frontend`
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`

### Environment Variables
- [ ] `VITE_API_URL` added (with Render backend URL)
- [ ] `VITE_EMAILJS_SERVICE_ID` added
- [ ] `VITE_EMAILJS_TEMPLATE_ID` added
- [ ] `VITE_EMAILJS_PUBLIC_KEY` added
- [ ] `VITE_CLOUDINARY_CLOUD_NAME` added
- [ ] `VITE_CLOUDINARY_UPLOAD_PRESET` added

### Verification
- [ ] Frontend deployed successfully
- [ ] Frontend URL copied and saved
- [ ] Website loads correctly
- [ ] No console errors
- [ ] All pages accessible

---

## 🔄 Final Configuration

### Update Backend with Frontend URL
- [ ] Went back to Render dashboard
- [ ] Updated `FRONTEND_URL` environment variable
- [ ] Service redeployed

### CORS Configuration
- [ ] Backend CORS allows frontend URL
- [ ] Credentials enabled if needed

---

## 🧪 Testing

### Basic Functionality
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Dark/Light mode toggles
- [ ] All pages accessible
- [ ] Images load correctly

### Authentication
- [ ] Can create new account
- [ ] Can login
- [ ] JWT token persists
- [ ] Dashboard accessible after login
- [ ] Logout works

### CRUD Operations
- [ ] Can create new blog
- [ ] Can edit blog
- [ ] Can delete blog
- [ ] Can create new project
- [ ] Can edit project
- [ ] Can delete project

### Features
- [ ] Contact form sends emails
- [ ] Image upload works (Cloudinary)
- [ ] Rich text editor works
- [ ] Tags/tech stack display correctly
- [ ] Featured items show correctly

### Responsive Design
- [ ] Mobile view (320px-767px)
- [ ] Tablet view (768px-1023px)
- [ ] Desktop view (1024px+)
- [ ] No horizontal scroll
- [ ] All buttons clickable on mobile

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Images optimized
- [ ] No memory leaks
- [ ] API responses fast

---

## 📊 Post-Deployment

### Documentation
- [ ] `README.md` updated with live URL
- [ ] `DEPLOYMENT.md` reviewed
- [ ] Environment variables documented
- [ ] Repository description updated

### Monitoring
- [ ] Vercel analytics checked
- [ ] Render logs reviewed
- [ ] MongoDB connections monitored
- [ ] No errors in production logs

### Optional Enhancements
- [ ] Custom domain added
- [ ] SSL certificate verified (auto)
- [ ] Google Analytics added
- [ ] SEO meta tags added
- [ ] Favicon updated
- [ ] Social media preview cards tested

### Backup
- [ ] Database backup strategy in place
- [ ] Environment variables backed up securely
- [ ] Code repository backed up

---

## 🐛 Common Issues Resolved

- [ ] CORS errors fixed
- [ ] API URL correct in frontend
- [ ] All environment variables set
- [ ] MongoDB IP whitelist includes 0.0.0.0/0
- [ ] No hardcoded URLs in code
- [ ] Build passes with no errors

---

## ✨ Ready to Share!

- [ ] LinkedIn post prepared
- [ ] GitHub repository set to public
- [ ] Portfolio added to resume
- [ ] Share with recruiters
- [ ] Add to job applications

---

**Your live URLs:**

- 🌐 Frontend: `https://your-portfolio.vercel.app`
- 🔧 Backend: `https://portfolio-backend-xxxx.onrender.com`
- 🗄️ Database: MongoDB Atlas

---

**Deployment Date:** _______________

**Status:** 🎉 LIVE!
