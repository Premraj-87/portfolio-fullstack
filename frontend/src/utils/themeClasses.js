// Theme utility classes for consistent color palette across the app

export const theme = {
  // Background colors
  bg: {
    primary: "bg-white dark:bg-black",
    secondary: "bg-gray-50 dark:bg-gray-900",
    tertiary: "bg-gray-100 dark:bg-gray-800",
    card: "bg-white dark:bg-gray-900",
    hover: "hover:bg-gray-50 dark:hover:bg-gray-800",
    overlay: "bg-white/80 dark:bg-black/80 backdrop-blur-md",
    gradient: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black",
  },

  // Text colors
  text: {
    primary: "text-gray-900 dark:text-gray-100",
    secondary: "text-gray-700 dark:text-gray-300",
    tertiary: "text-gray-600 dark:text-gray-400",
    muted: "text-gray-500 dark:text-gray-500",
    accent: "text-amber-600 dark:text-amber-400",
    accentHover: "hover:text-amber-700 dark:hover:text-amber-300",
    error: "text-red-600 dark:text-red-400",
    success: "text-amber-600 dark:text-amber-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    info: "text-blue-600 dark:text-blue-400",
  },

  // Border colors
  border: {
    primary: "border-gray-200 dark:border-gray-800",
    secondary: "border-gray-300 dark:border-gray-700",
    hover: "hover:border-gray-300 dark:hover:border-gray-600",
    accent: "border-amber-600 dark:border-amber-400",
    accentHover: "hover:border-amber-600 dark:hover:border-amber-400",
    error: "border-red-300 dark:border-red-800",
    success: "border-amber-300 dark:border-amber-800",
  },

  // Button styles
  button: {
    primary: "bg-amber-600 dark:bg-amber-500 text-white hover:bg-amber-700 dark:hover:bg-amber-600 transition-all micro-bounce btn-press",
    secondary: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all micro-bounce btn-press",
    outline: "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all micro-bounce btn-press",
    ghost: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all micro-bounce",
    danger: "bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600 transition-all micro-bounce btn-press",
    disabled: "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed",
  },

  // Input styles
  input: {
    base: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-amber-600 dark:focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 transition-all",
    error: "bg-white dark:bg-gray-800 border-red-300 dark:border-red-800 text-gray-900 dark:text-gray-100 focus:border-red-500 dark:focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all",
    disabled: "bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed",
  },

  // Badge styles
  badge: {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
    accent: "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30",
    error: "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30",
    success: "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/30",
    warning: "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-500/30",
    info: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30",
  },

  // Icon colors
  icon: {
    primary: "text-gray-700 dark:text-gray-300",
    secondary: "text-gray-600 dark:text-gray-400",
    accent: "text-amber-600 dark:text-amber-400",
    hover: "hover:text-gray-900 dark:hover:text-white",
    muted: "text-gray-400 dark:text-gray-600",
  },

  // Link styles
  link: {
    primary: "text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-all micro-glow",
    secondary: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all micro-bounce",
    underline: "text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 underline underline-offset-4 transition-all",
  },

  // Card styles
  card: {
    base: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg transition-all",
    hover: "hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-none",
    shadow: "shadow-sm dark:shadow-none",
    interactive: "cursor-pointer hover:scale-[1.02] transition-transform",
  },

  // Alert/Notification styles
  alert: {
    success: "bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 animate-fadeIn",
    error: "bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-300 animate-fadeIn",
    warning: "bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300 animate-fadeIn",
    info: "bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-300 animate-fadeIn",
  },

  // Divider styles
  divider: {
    horizontal: "border-t border-gray-200 dark:border-gray-800",
    vertical: "border-l border-gray-200 dark:border-gray-800",
  },

  // Loading/Skeleton styles
  skeleton: {
    base: "bg-gray-200 dark:bg-gray-800 animate-pulse rounded",
    text: "bg-gray-200 dark:bg-gray-800 animate-pulse rounded h-4",
  },

  // Transitions
  transition: {
    colors: "transition-colors duration-300",
    all: "transition-all duration-300",
    fast: "transition-all duration-150",
    slow: "transition-all duration-500",
  },

  // Focus styles
  focus: {
    ring: "focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
    visible: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:focus-visible:ring-amber-400",
  },

  // Scrollbar styles
  scrollbar: {
    thin: "scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent",
  },
};

// Helper function to combine theme classes
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Pre-built component combinations
export const components = {
  // Form field wrapper
  formField: cn(
    "flex flex-col gap-2 w-full"
  ),
  
  // Label
  label: cn(
    theme.text.secondary,
    "text-sm font-medium",
    theme.transition.colors
  ),
  
  // Input field
  input: cn(
    theme.input.base,
    "px-4 py-2 rounded-lg w-full"
  ),
  
  // Textarea
  textarea: cn(
    theme.input.base,
    "px-4 py-2 rounded-lg w-full resize-none"
  ),
  
  // Primary button
  buttonPrimary: cn(
    theme.button.primary,
    "px-6 py-3 rounded-lg font-medium"
  ),
  
  // Secondary button
  buttonSecondary: cn(
    theme.button.secondary,
    "px-6 py-3 rounded-lg font-medium"
  ),
  
  // Card container
  card: cn(
    theme.card.base,
    theme.card.shadow,
    "p-6"
  ),
  
  // Interactive card
  cardInteractive: cn(
    theme.card.base,
    theme.card.hover,
    theme.card.interactive,
    "p-6"
  ),
  
  // Section heading
  sectionHeading: cn(
    theme.text.primary,
    "text-3xl md:text-4xl font-bold mb-4",
    theme.transition.colors
  ),
  
  // Section subtitle
  sectionSubtitle: cn(
    theme.text.tertiary,
    "text-lg mb-8",
    theme.transition.colors
  ),
  
  // Badge
  badge: cn(
    theme.badge.default,
    "px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1",
    theme.transition.colors
  ),
  
  // Container
  container: cn(
    "max-w-6xl mx-auto px-4 py-12"
  ),
  
  // Link
  link: cn(
    theme.link.primary,
    "font-medium"
  ),
};

// Utility functions
export const utils = {
  // Get current theme from localStorage
  getTheme: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  },
  
  // Set theme
  setTheme: (theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },
  
  // Toggle theme
  toggleTheme: () => {
    const currentTheme = utils.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    utils.setTheme(newTheme);
    return newTheme;
  },
};
