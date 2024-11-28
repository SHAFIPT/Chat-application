import Char1 from '../../assets/char1.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const MyChat = () => {

   const users = [
    { id: 1, name: "John Doe", profile: "", time: "10:30 AM" },
    { id: 2, name: "Jane Smith", profile: "/path-to-profile2.jpg", time: "Yesterday" },
    { id: 3, name: "Alice Johnson", profile: "/path-to-profile3.jpg", time: "2 days ago" },
    { id: 3, name: "Alice Johnson", profile: "/path-to-profile3.jpg", time: "2 days ago" },
    { id: 3, name: "Alice Johnson", profile: "/path-to-profile3.jpg", time: "2 days ago" },
    { id: 3, name: "Alice Johnson", profile: "/path-to-profile3.jpg", time: "2 days ago" },
  ];

  return (
    <div className="h-screen flex flex-col">
  {/* Background above Chat Listing */}
  <div className="bg-slate-700 p-[36px] w-full">
    <span className="text-white text-lg"></span>
  </div>
      
      <div className="Chat_Listing bg-slate-500 w-[320px] h-screen flex flex-col items-center p-6 text-white">
         <div className="searchUser mb-8">
      <div className="flex items-center w-[296px] p-2 bg-slate-600 rounded">
        {/* Search Icon */}
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" size="lg" />
        {/* Search Input */}
        <input
          type="search"
          placeholder="Search users..."
          className="w-full bg-transparent text-white focus:outline-none"
        />
      </div>
    </div>
        <ul className="space-y-4 w-[300px]">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between bg-slate-600 p-3 rounded hover:bg-slate-700 transition duration-200"
          >
            {/* Profile Image and Name */}
            <div className="flex items-center space-x-4">
              <img
                src={Char1}
                alt={`${user.name}'s profile`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{user.name}</span>
            </div>

            {/* Time or Date */}
            <div className="text-xs text-gray-300">{user.time}</div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default MyChat
