import React from "react"
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md"

const ThemeToggle = ({ darkMode, toggleDarkMode,className }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full border border-gray-500 bg-white/20 dark:bg-black/30 backdrop-blur-md ${className}`}
    >
      {darkMode ? (
        <MdOutlineDarkMode className="text-violet-500 text-2xl" />
      ) : (
        <MdLightMode className="text-yellow-400 text-2xl" />
      )}
    </button>
  )
}

export default ThemeToggle