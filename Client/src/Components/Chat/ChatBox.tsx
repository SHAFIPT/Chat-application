import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPhone, faEllipsisV, faPaperPlane, faShare ,faSmile ,faPaperclip} from "@fortawesome/free-solid-svg-icons";
import Char1 from '../../assets/char5.jpeg';
import './chatBox.css';

const ChatBox = ({ onBackClick }) => {
  return (
    <div className="bg-slate-300 w-full text-white h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-600 p-4">
        <div className="flex items-center">
          <button onClick={onBackClick} className="button mr-2">
            <div className="button-box">
              <span className="button-elem">
                <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
              <span className="button-elem">
                <svg viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
            </div>
          </button>
          <img src={Char1} alt="User Profile" className="w-10 h-10 rounded-full mr-3" />
          <span>User Name</span>
        </div>
        <div className="flex items-center space-x-7">
          <button className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faVideo} size="lg" />
          </button>
          <button className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faPhone} size="lg" />
          </button>
          <button className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faEllipsisV} size="lg" />
          </button>
        </div>
      </div>

            {/* Chat Messages Area */}
        <div className="flex-grow bg-white p-4 overflow-y-auto">
          {/* Example Messages */}
          <div className="text-gray-800 mb-3">
            {/* Receiver Message */}
            <div className="flex items-start mb-3">
              <img
                src={Char1}
                alt="Receiver"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="relative bg-slate-200 text-black p-3 rounded-lg">
                <p className="mb-2">Hello! How can I help you today?</p>
                <span className="text-xs text-gray-500 absolute bottom-1 right-2">
                  10:30 AM
                </span>
              </div>
            </div>
            {/* Sender Message */}
            <div className="flex items-start justify-end mb-3">
              <div className="relative bg-blue-500 text-white p-3 rounded-lg text-right">
                <p className="mb-2">Hi! I need some assistance with my account.</p>
                <span className="text-xs text-gray-300 absolute bottom-1 left-2">
                  10:32 AM
                </span>
              </div>
              <img
                src={Char1} // Replace with sender's image URL
                alt="Sender"
                className="w-8 h-8 rounded-full ml-2"
              />
            </div>
          </div>
        </div>

      {/* Message Input Area */}
      <div className="bg-slate-600 p-4 flex items-center">
        <button className="text-white hover:text-gray-300 mr-3">
          <FontAwesomeIcon icon={faShare} size="lg" />
        </button>
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-md text-black"
        />
        {/* Emoji Icon */}
        <button className="text-white hover:text-gray-300 mr-3 ml-3">
          <FontAwesomeIcon icon={faSmile} size="lg" />
        </button>
        {/* Paperclip Icon */}
        <button className="text-white hover:text-gray-300 mr-3">
          <FontAwesomeIcon icon={faPaperclip} size="lg" />
        </button>
        {/* Custom Send Button */}
        <button className="buttons flex items-center text-white hover:text-gray-300 ml-3">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="mr-1"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;



