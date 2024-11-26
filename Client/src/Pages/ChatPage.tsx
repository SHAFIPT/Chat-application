import { ChatState } from "../Components/Context/ChatProvider"
import SideDrower from "../Components/Chat/SideDrower";
import MyChats from "../Components/Chat/MyChat";
import ChatBox from "../Components/Chat/ChatBox";
const ChatPage = () => {

  const { user } = ChatState();

  return (
    <div>
      {user && <SideDrower/>}
      <div className="flex justify-between w-[100%] h-[91.5vh]">
        {user && <MyChats/>}
        {user && <ChatBox/>}
      </div>
    </div>
  )
}

export default ChatPage
