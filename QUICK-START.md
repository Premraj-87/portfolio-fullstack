# ⚡ Quick Deployment Guide

**TL;DR:** Deploy your portfolio in 30 minutes!

---

## 🎯 What You'll Do

1. **Database** → MongoDB Atlas (5 min)
2. **Backend** → Render.com (10 min)
3. **Frontend** → Vercel (10 min)
4. **Test** → Everything works! (5 min)

**Total:** ~30 minutes | **Cost:** $0 (100% Free!)

---

## Step 1️⃣: Database (MongoDB Atlas)

### Quick Steps:
1. Go to [mongodb.com/cloud/atlas/register](https://mongodb.com/cloud/atlas/register)
2. Create FREE cluster
3. Create database user → **Save password!**
4. Network Access → Allow 0.0.0.0/0
5. Get connection string → **Save it!**

**Result:** `mongodb+srv://user:password@cluster.mongodb.net/portfolio`

---

## Step 2️⃣: Backend (Render)

### Quick Steps:
1. Go to [render.com](https://render.com) → Sign up with GitHub
2. New Web Service → Connect your repo
3. Settings:
   - Root: `backend`
   - Build: `npm install`
   - Start: `npm start`
4. Add Environment Variables:
   ```
   MONGODB_URI=<your_connection_string>
   JWT_SECRET=mySecret123
   PORT=5000
   FRONTEND_URL=https://your-site.vercel.app
   ```
5. Deploy!

**Result:** `https://portfolio-backend-xxxx.onrender.com` ← **Save this!**

---

## Step 3️⃣: Frontend (Vercel)

### Before deploying:

**Update `.env` in frontend folder:**
```env
VITE_API_URL=https://portfolio-backend-xxxx.onrender.com/api
```

**Commit and push:**
```powershell
git add .
git commit -m "Update API URL"
git push origin main
```

### Deploy:
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Import your repo
3. Settings:
   - Framework: Vite
   - Root: `frontend`
   - Build: `npm run build`
   - Output: `dist`
4. Add Environment Variable:
   - `VITE_API_URL` = `https://portfolio-backend-xxxx.onrender.com/api`
5. Deploy!

**Result:** `https://your-portfolio.vercel.app` 🎉

---

## Step 4️⃣: Final Touch

### Go back to Render:
1. Environment → Update `FRONTEND_URL`
2. Set to: `https://your-portfolio.vercel.app`
3. Save → Auto redeploys

---

## ✅ Test Everything

Visit your Vercel URL and test:
- ✅ Login/Signup
- ✅ Create blog
- ✅ Upload image
- ✅ Contact form

---

## 🆘 Issues?

### Can't login?
- Check backend logs on Render
- Verify `MONGODB_URI` is correct
- Check Network Access in MongoDB

### CORS errors?
- Update `FRONTEND_URL` in Render
- Check CORS config in backend

### Images not uploading?
- Add Cloudinary env vars in Vercel

---

## 🎊 You're Live!

**Share your portfolio:**
- 📱 Add to LinkedIn
- 💼 Include in resume
- 🎯 Send to recruiters

---

**Full Guide:** See `DEPLOYMENT.md` for detailed instructions

**Checklist:** Use `DEPLOYMENT-CHECKLIST.md` to track progress
