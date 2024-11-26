import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {Login} from "../Components/Auth/Login";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("UserInfo");   

    if (userInfo) {
      try {
        const parsedUser = JSON.parse(userInfo); // No need to define a specific type here unless User is globally defined
        navigate("/chatPage"); // Redirect if the user info exists
      } catch (error) {
        console.error("Error parsing UserInfo:", error);
        localStorage.removeItem("UserInfo"); // Clear invalid data
      }
    }
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
