import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, LogOut, Menu, X } from "lucide-react";
import premLogo from "../assets/prem-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.theme || "dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };
    
    // Check on mount and when storage changes
    checkAuth();
    window.addEventListener("storage", checkAuth);
    
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    // Trigger storage event for other components
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/work", label: "Work" },
    { to: "/projects", label: "Projects" },
    { to: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={premLogo}
              alt="Prem"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-bold text-gray-900 dark:text-white text-lg hidden sm:block transition-colors">
              Prem Raj Anand
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-sm font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {isAuthenticated && (
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm font-medium"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Auth Button - Desktop */}
            <div className="hidden md:block">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg bg-red-100 dark:bg-red-500/20 hover:bg-red-200 dark:hover:bg-red-500/30 transition text-red-600 dark:text-red-400"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg bg-amber-100 dark:bg-amber-500/20 hover:bg-amber-200 dark:hover:bg-amber-500/30 transition text-amber-600 dark:text-amber-400 text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-400"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 transition-colors">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {isAuthenticated && (
                <li>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition py-2"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li className="pt-2 border-t border-gray-200 dark:border-gray-800 transition-colors">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition py-2"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition py-2"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;