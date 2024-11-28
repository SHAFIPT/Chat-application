import { useContext, useEffect, useState } from "react";
import { ChatContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other properties you expect to be part of the user object
}

interface ChatProviderProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Typed user state
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("UserInfo");

    if (userInfo) {
      try {
        const parsedUser: User = JSON.parse(userInfo);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error Parsing UserInfo :", error);
        localStorage.removeItem("UserInfo"); 
        navigate("/"); 
      }
    } else {
      navigate("/"); 
    }
  }, [navigate]);
    
    const logout = () => {
        localStorage.removeItem("UserInfo");
        setUser(null);
        navigate('/')
  }

  return (
    <ChatContext.Provider value={{ user, setUser , logout }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider
