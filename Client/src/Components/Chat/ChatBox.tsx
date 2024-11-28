import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPhone, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Char1 from '../../assets/char5.jpeg'


const ChatBox = () => {
  return (
    <div className="bg-slate-300 w-full text-white h-screen">
      <div className="flex items-center justify-between bg-slate-600 p-4">
        {/* leftSide */}
        <div className="flex items-center">
          <img src={Char1} alt=""  className="w-10 h-10 rounded-full mr-3"/>
          <span>User Name</span>
        </div>

        {/* rightSide */}
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
    </div>
  )
}

export default ChatBox

