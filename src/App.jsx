import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AllTasksPage from "./pages/AllTasksPage"
import InProgressPage from "./pages/InProgressPage"
import FinishiedPage from "./pages/FinishedTasksPage"
import CreateTodo from "./components/CreateTodo"
import { useState } from "react"
import { IoAddSharp } from "react-icons/io5";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllTasksPage />} />
        <Route path="all-tasks" element={<AllTasksPage />} />
        <Route path="in-progress" element={<InProgressPage />} />
        <Route path="finished" element={<FinishiedPage />} />

        <Route path="*" element={<h2>Not Found! 404</h2>} />
      </Routes>
      <button
        type="button"
        onClick={handleToggle}
        className="fixed bottom-20 right-40 rounded-full border bg-indigo-500 w-10 h-10 flex justify-center items-center shadow"
      >
        <IoAddSharp size={20} color="white"/>
      </button>

      {isOpen && <CreateTodo handleToggle={handleToggle} />}
    </>
  )
}

export default App
