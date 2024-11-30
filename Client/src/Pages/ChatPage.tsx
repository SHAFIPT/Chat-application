// ChatPage.tsx
import { useState } from "react";
import { ChatState } from "../Components/Context/ChatProvider"
import MyChats from "../Components/Chat/MyChat";
import ChatBox from "../Components/Chat/ChatBox";

const ChatPage = () => {
  const [activeView, setActiveView] = useState<'chats' | 'chatbox'>('chatbox');
   
  const { user } = ChatState();

  const toggleView = () => {
    setActiveView(prev => prev === 'chats' ? 'chatbox' : 'chats');
     console.log("Toggled view to:", activeView);
  }

  return (
    <div>
      <div className="flex w-full h-[91.5vh]">
        {/* Mobile and Tablet View */}
        <div className="block md:hidden w-full">
          {activeView === 'chats' ? (
            <MyChats 
              onUserSelect={() => setActiveView('chatbox')}
            />
          ) : (
            <ChatBox 
                onBackClick={toggleView}
                
            />
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex w-full ">
          <div className="w-[320px]">
            <MyChats 
              onUserSelect={() => {}}  // No action needed in desktop view
            />
          </div>
          <div className="flex-grow">
            <ChatBox 
              onBackClick={toggleView}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage;