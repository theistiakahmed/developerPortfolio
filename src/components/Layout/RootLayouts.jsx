import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import useDarkMode from "../common/useDarkMode"

const RootLayouts = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-all duration-300">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Outlet />

      <Footer />
    </div>
  )
}

export default RootLayouts