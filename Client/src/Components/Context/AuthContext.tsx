import { createContext } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other properties you expect to be part of the user object
}

interface ChatContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);