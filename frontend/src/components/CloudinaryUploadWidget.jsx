import { useEffect, useRef } from "react";
import { Upload } from "lucide-react";

const CloudinaryUploadWidget = ({ onUploadSuccess, buttonText = "Upload Image" }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    // Load Cloudinary script
    if (!window.cloudinary) {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        cloudinaryRef.current = window.cloudinary;
      };
    } else {
      cloudinaryRef.current = window.cloudinary;
    }
  }, []);

  const openWidget = () => {
    if (!cloudinaryRef.current) {
      alert("Cloudinary widget is still loading. Please try again.");
      return;
    }

    // Create upload widget
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "djpnc474q", // Your Cloudinary cloud name
        uploadPreset: "portfolio_uploads", // Your upload preset
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: true,
        croppingAspectRatio: 16/9,
        folder: "portfolio", // Optional: organize uploads in folders
        clientAllowedFormats: ["png", "jpg", "jpeg", "webp", "gif"],
        maxImageFileSize: 2000000, // 2MB
        maxImageWidth: 2000,
        maxImageHeight: 2000,
        theme: "minimal",
        styles: {
          palette: {
            window: "#000000",
            windowBorder: "#4ade80",
            tabIcon: "#4ade80",
            menuIcons: "#FFFFFF",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#4ade80",
            action: "#4ade80",
            inactiveTabIcon: "#555555",
            error: "#F44235",
            inProgress: "#4ade80",
            complete: "#4ade80",
            sourceBg: "#1a1a1a"
          }
        }
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Upload successful:", result.info);
          // Return the secure URL to parent component
          onUploadSuccess(result.info.secure_url);
          widgetRef.current.close();
        }
        if (error) {
          console.error("Upload error:", error);
        }
      }
    );

    widgetRef.current.open();
  };

  return (
    <button
      type="button"
      onClick={openWidget}
      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-md hover:bg-green-500/30 transition text-sm font-medium border border-green-500/30"
    >
      <Upload size={16} />
      {buttonText}
    </button>
  );
};

export default CloudinaryUploadWidget;
