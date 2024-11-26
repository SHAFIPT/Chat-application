import ChatPage from "./Pages/ChatPage"
import { Route , Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chatPage" element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
