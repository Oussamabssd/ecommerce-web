import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === "light" ? "bg-amber-400" : "bg-gray-600"
        }`}
      >
        {theme === "light" ? (
          <Moon className="w-4.5 h-4.5" />
        ) : (
          <Sun className="w-4.5 h-4.5 " />
        )}
      </button>
    </div>
  );
}
