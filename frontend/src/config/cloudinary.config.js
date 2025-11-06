/* 
 * Cloudinary Configuration
 * 
 * SETUP REQUIRED:
 * 1. Sign up at https://cloudinary.com (FREE)
 * 2. Get your Cloud Name from dashboard
 * 3. Create an UNSIGNED upload preset (Settings → Upload → Add upload preset)
 * 4. Replace the values below with your actual credentials
 */

export const CLOUDINARY_CONFIG = {
  // Your Cloudinary cloud name (found on dashboard)
  // Example: "dxyz123abc"
  CLOUD_NAME: "YOUR_CLOUD_NAME",
  
  // Your upload preset name (must be UNSIGNED)
  // Example: "portfolio_uploads"
  UPLOAD_PRESET: "YOUR_UPLOAD_PRESET",
  
  // Optional: Folder to organize uploads
  FOLDER: "portfolio",
  
  // Upload restrictions
  MAX_FILE_SIZE: 2000000, // 2MB in bytes
  ALLOWED_FORMATS: ["png", "jpg", "jpeg", "webp", "gif"],
  
  // Image dimensions
  MAX_WIDTH: 2000,
  MAX_HEIGHT: 2000,
  
  // Cropping aspect ratio (width/height)
  CROP_RATIO: 16/9
};

/* 
 * HOW TO USE:
 * 
 * 1. Import this config in CloudinaryUploadWidget.jsx
 * 2. Replace hardcoded values with CLOUDINARY_CONFIG constants
 * 3. All image uploads will use these settings
 * 
 * FREE TIER LIMITS:
 * - 10GB storage
 * - 25GB bandwidth per month
 * - Unlimited transformations
 * - CDN delivery worldwide
 */
