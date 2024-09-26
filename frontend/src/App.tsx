import React from "react"
import { ThemeProvider } from "next-themes"
import { DarkModeToggle } from "@/components/DarkModeToggle"
import { Link, Outlet } from "react-router-dom"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <ThemeProvider attribute='class'>
      <div className='container mx-auto p-4 min-h-screen flex flex-col gap-3'>
        <div className='flex justify-between items-center mb-4 '>
          <Link to='/'>
            <h1 className='text-3xl font-bold'>Hadith Verse</h1>
          </Link>
          <DarkModeToggle />
        </div>
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
