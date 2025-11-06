# 🚀 Portfolio Deployment Guide

Complete guide to deploy your Full-Stack Portfolio with React (Frontend) + Express (Backend).

---

## 📋 Prerequisites

- GitHub account
- MongoDB Atlas account (free tier)
- Vercel account (for frontend)
- Render account (for backend)

---

## 🗂️ Step 1: Setup GitHub Repository

### 1.1 Initialize Git (if not already done)

```powershell
# In project root
git init
git add .
git commit -m "Initial commit: Portfolio project"
```

### 1.2 Create GitHub Repository

1. Go to https://github.com/new
2. Name: `portfolio-fullstack` (or any name)
3. Keep it Public or Private
4. **DO NOT** initialize with README (you already have code)
5. Click "Create repository"

### 1.3 Push to GitHub

```powershell
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio-fullstack.git
git branch -M main
git push -u origin main
```

---

## 🗄️ Step 2: Setup MongoDB Atlas (Database)

### 2.1 Create Free Cluster

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up/Login
3. Create a **FREE** M0 Cluster
4. Choose AWS, region closest to you
5. Cluster Name: `Portfolio`

### 2.2 Setup Database Access

1. **Database Access** (left sidebar)
2. **Add New Database User**
   - Username: `portfolioAdmin` (or any name)
   - Password: Auto-generate (SAVE THIS!)
   - Database User Privileges: **Read and write to any database**
3. Click **Add User**

### 2.3 Setup Network Access

1. **Network Access** (left sidebar)
2. **Add IP Address**
3. Click **"ALLOW ACCESS FROM ANYWHERE"** (0.0.0.0/0)
4. Confirm

### 2.4 Get Connection String

1. Click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Driver: **Node.js**, Version: **5.5 or later**
4. Copy the connection string:
   ```
   mongodb+srv://portfolioAdmin:<password>@portfolio.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. **Replace `<password>` with your actual password**
6. **SAVE THIS** - You'll need it for backend deployment

---

## 🔧 Step 3: Deploy Backend (Render)

### 3.1 Create Render Account

1. Go to https://render.com
2. Sign up with GitHub (easiest)

### 3.2 Create Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select `portfolio-fullstack` repo
4. Configure:

   **Basic Settings:**
   - Name: `portfolio-backend`
   - Region: Choose closest to you
   - Branch: `main`
   - Root Directory: `backend`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

   **Environment:**
   - Instance Type: **Free**

### 3.3 Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these one by one:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your MongoDB connection string from Step 2.4 |
| `JWT_SECRET` | Create a random string (e.g., `mySecretKey123!@#`) |
| `PORT` | `5000` |
| `EMAIL_USER` | Your Gmail (if using Nodemailer) |
| `EMAIL_PASS` | Gmail App Password |
| `FRONTEND_URL` | `https://your-portfolio.vercel.app` (update after frontend deploy) |
| `NODE_ENV` | `production` |

### 3.4 Deploy

1. Click **"Create Web Service"**
2. Wait 5-10 minutes for deployment
3. **COPY YOUR BACKEND URL**: `https://portfolio-backend-xxxx.onrender.com`

---

## 🎨 Step 4: Deploy Frontend (Vercel)

### 4.1 Update Frontend Environment

Before deploying, update your `.env` file:

```env
VITE_API_URL=https://portfolio-backend-xxxx.onrender.com/api
```

Replace with YOUR actual Render backend URL from Step 3.4

### 4.2 Commit Changes

```powershell
git add .
git commit -m "Update API URL for production"
git push origin main
```

### 4.3 Deploy to Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click **"Add New..."** → **"Project"**
4. Import `portfolio-fullstack` repository
5. Configure:

   **Framework Preset:** Vite
   **Root Directory:** `frontend`
   **Build Command:** `npm run build`
   **Output Directory:** `dist`
   **Install Command:** `npm install`

### 4.4 Add Environment Variables in Vercel

Click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `VITE_API_URL` | `https://portfolio-backend-xxxx.onrender.com/api` |
| `VITE_EMAILJS_SERVICE_ID` | (Your EmailJS Service ID) |
| `VITE_EMAILJS_TEMPLATE_ID` | (Your EmailJS Template ID) |
| `VITE_EMAILJS_PUBLIC_KEY` | (Your EmailJS Public Key) |
| `VITE_CLOUDINARY_CLOUD_NAME` | (Your Cloudinary name) |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | (Your upload preset) |

### 4.5 Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes
3. **YOUR SITE IS LIVE!** 🎉
4. Copy your URL: `https://your-portfolio.vercel.app`

---

## 🔄 Step 5: Update Backend with Frontend URL

1. Go back to **Render Dashboard**
2. Select your backend service
3. Go to **"Environment"** tab
4. Update `FRONTEND_URL` to your Vercel URL:
   ```
   https://your-portfolio.vercel.app
   ```
5. Click **"Save Changes"**
6. Your backend will auto-redeploy

---

## ✅ Step 6: Verify Deployment

### Test Backend
Visit: `https://portfolio-backend-xxxx.onrender.com/api/test`
(Create a test route if you don't have one)

### Test Frontend
1. Visit your Vercel URL
2. Try login/signup
3. Test creating a blog/project
4. Check if data persists in MongoDB Atlas

---

## 🐛 Common Issues & Solutions

### Issue 1: CORS Errors

**Solution:** Update backend CORS configuration:

```javascript
// In backend server.js or app.js
import cors from 'cors';

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
```

### Issue 2: API Not Working

**Check:**
- ✅ Backend is deployed and running (check Render logs)
- ✅ MongoDB connection string is correct
- ✅ Environment variables are set correctly
- ✅ `VITE_API_URL` in Vercel matches your Render backend URL

### Issue 3: Images Not Loading

**Solution:** Make sure Cloudinary credentials are added in Vercel environment variables

### Issue 4: Render Free Tier Sleeps

**Note:** Render free tier sleeps after 15 mins of inactivity. First request takes ~30 seconds to wake up.

**Solution:** Upgrade to paid plan ($7/month) or use alternative like Railway.app

---

## 🔄 Future Updates

### To update your deployed site:

```powershell
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main
```

- **Vercel**: Auto-deploys on every push to main
- **Render**: Auto-deploys on every push to main

---

## 📊 Monitoring

### Vercel Dashboard
- View deployment logs
- Check analytics
- Monitor performance

### Render Dashboard
- View server logs
- Monitor uptime
- Check memory usage

### MongoDB Atlas
- Monitor database size
- View connections
- Check queries

---

## 💰 Cost Breakdown

| Service | Free Tier | Usage |
|---------|-----------|-------|
| **Vercel** | 100GB bandwidth/month | Frontend hosting |
| **Render** | 750 hours/month | Backend API |
| **MongoDB Atlas** | 512MB storage | Database |

**Total Monthly Cost:** $0 (Free!) 🎉

---

## 🎯 Next Steps

1. ✅ Add custom domain (optional)
2. ✅ Setup SSL (automatic on Vercel/Render)
3. ✅ Add Google Analytics
4. ✅ Setup error monitoring (Sentry)
5. ✅ Add CI/CD tests

---

## 📚 Alternative Deployment Options

### Backend Alternatives to Render:
- **Railway.app** (Similar to Render, $5/month)
- **Fly.io** (Good free tier)
- **Cyclic.sh** (Easy deployment)
- **AWS EC2** (More control, steeper learning curve)

### Frontend Alternatives to Vercel:
- **Netlify** (Similar to Vercel)
- **GitHub Pages** (Free, static only)
- **Cloudflare Pages** (Fast, free)

### Database Alternatives:
- **Railway PostgreSQL** (If you switch to PostgreSQL)
- **PlanetScale** (MySQL)
- **Supabase** (PostgreSQL with backend features)

---

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **MongoDB Docs**: https://docs.atlas.mongodb.com

---

**Your portfolio is now live and ready to impress! 🚀**

Good luck with your job search! 💼✨
