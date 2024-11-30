  import Avathar from '../../assets/chating_Avathar.jpeg'
  import msgIcon from '../../assets/chat icon1.jpg'
  import api from '../../api/axios'
  import './Login.css'
  import { useState } from 'react'
  import Swal from 'sweetalert2'
  import axios from 'axios'
  import { useNavigate } from 'react-router-dom'

  interface payloadType{
    name: string,
    email: string,
    password : string
  }

 export const Login = () => {

    const [signState, setSignState] = useState('Sign In');
    const [showSpinner, setShowSpinner] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        const payload: payloadType = signState === 'Sign Up' ? { name, email, password } : { name: '', email, password }  

        console.log('This is the payload from the user', payload)

        const url = signState === 'Sign In' ? '/api/user/login' : '/api/user/register';

        console.log("This is url  to be passed to data :", url)

        const response = await api.post(url, payload)
        
        console.log('This is the response data', response.data) 

        if (response.status === 200) {
          const userData = response.data.user;

          console.log("this is user data to store :", userData);

          localStorage.setItem('UserInfo', JSON.stringify(userData))

          Swal.fire({
          icon: 'success',
          title: signState === 'Sign In' ? 'Logged In Successfully!' : 'Registered Successfully!',
          text: 'You will be redirected to your profile page.',
          timer: 100,
          showConfirmButton: false,
          customClass: { popup: 'custom-swal' }
          });

          setShowSpinner(true)
          setTimeout(() => {
            setShowSpinner(false)
            console.log("Iam navigate to chatpage")
            navigate('/chatPage')
          },3000)     
        
        }

      } catch (error) {
        console.error("Form submission error:", error);
        setShowSpinner(false)
      
              if (axios.isAxiosError(error)) {
                  // Handle axios errors with response
                  if (error.response?.data) {
                      Swal.fire({
                          icon: 'error',
                          title: 'Authentication Error',
                          text: error.response.data.message,
                          customClass: { popup: 'custom-swal' }
                      });
                  } 
                  // Handle axios errors without response
                  else {
                      Swal.fire({
                          icon: 'error',
                          title: 'Connection Error',
                          text: 'Unable to connect to the server. Please check your internet connection.',
                          customClass: { popup: 'custom-swal' }
                      });
                  }
              } 
              // Handle non-axios errors
              else {
                  Swal.fire({
                      icon: 'error',
                      title: 'Unexpected Error',
                      text: 'An unexpected error occurred. Please try again.',
                      customClass: { popup: 'custom-swal' }
                  });
              }
          }
      };

    return (
      <div>
        {showSpinner && (
          <div className="loading-spinner active">
            <div className="dot dotOne"></div>
            <div className="dot dotTwo"></div>
            <div className="dot dotThree"></div>
          </div>
        )}

        <form onSubmit={handleFormSubmit}>
          <div className="login_page flex relative h-screen">
        <h1 className="p-7 px-16 text-[42px] mt-10 sm:mt-10 md:mt-4 lg:mt-0  sm:text-[42px] md:text-[40px] lg:text-[43px] text-[#1f4167] font-serif font-black">
          Rizo Chat
        </h1>
        <img 
          src={msgIcon} 
          alt="" 
          className="absolute right-4 top-4 w-[320px] hidden lg:block" 
        />
        <div className="left_image hidden lg:block absolute -bottom-5 left-0 p-12">
          <img src={Avathar} alt="" className="w-[670px]" />
          </div>
          <div className="group inputFilds flex flex-col justify-center items-start gap-6 p-6 sm:p-8 md:p-10 lg:p-14 bg-[#f1f2f6] h-auto rounded-[12px] absolute top-1/2 right-0 transform -translate-y-1/2 mr-3 sm:mr-[50px] md:mr-[150px] lg:mr-[290px]">
    <h1 className="p-2 text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold font-mono text-[#1f4167]">
      {signState} to Rizo
        </h1>
        {signState === 'Sign Up' && (
          <div className="wave-group w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
            <input
              required
              type="text"
              className="input w-full p-2 sm:p-3 md:p-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ '--index': 0 }}>N</span>
              <span className="label-char" style={{ '--index': 1 }}>a</span>
              <span className="label-char" style={{ '--index': 2 }}>m</span>
              <span className="label-char" style={{ '--index': 3 }}>e</span>
            </label>
          </div>
        )}

        <div className="wave-group w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
          <input
            required
            type="text"
            className="input w-full p-2 sm:p-3 md:p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char" style={{ '--index': 0 }}>E</span>
            <span className="label-char" style={{ '--index': 1 }}>m</span>
            <span className="label-char" style={{ '--index': 2 }}>a</span>
            <span className="label-char" style={{ '--index': 3 }}>i</span>
            <span className="label-char" style={{ '--index': 4 }}>l</span>
          </label>
        </div>

        <div className="wave-group w-full sm:w-[280px] md:w-[300px] lg:w-[320px] relative">
          <input
            required
            type={showPassword ? 'text' : 'password'}
            className="input w-full p-2 sm:p-3 md:p-4 pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char" style={{ '--index': 0 }}>P</span>
            <span className="label-char" style={{ '--index': 1 }}>a</span>
            <span className="label-char" style={{ '--index': 2 }}>s</span>
            <span className="label-char" style={{ '--index': 3 }}>s</span>
            <span className="label-char" style={{ '--index': 4 }}>w</span>
            <span className="label-char" style={{ '--index': 5 }}>o</span>
            <span className="label-char" style={{ '--index': 6 }}>r</span>
            <span className="label-char" style={{ '--index': 7 }}>d</span>
          </label>
          <button
            type="button"
            className="absolute right-4 top-[50%] transform -translate-y-[50%] text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <i className="fas fa-eye"></i>
            ) : (
              <i className="fas fa-eye-slash"></i>
            )}
          </button>
        </div>

        <div className="">
          <button
            type="submit"
            className="w-[320px] sm:w-[380px] md:w-[300px] lg:w-[320px]  bg-[#1f4167] text-white h-14 rounded-[5px] font-semibold text-[16px] sm:text-[17px] lg:text-[19px]"
          >
            {signState}
          </button>
        </div>

        <div className="google_Signin">
          {signState === 'Sign In' ? (
            <h2
              onClick={() => setSignState('Sign Up')}
              className="text-[14px]  sm:text-[15px]"
            >
              New to Rizo Chat?{' '}
              <span className="text-[16px] sm:text-[18px] font-medium text-[#1f4167] cursor-pointer">
                Sign Up
              </span>
            </h2>
          ) : (
            <h1
              onClick={() => setSignState('Sign In')}
              className="text-[14px] sm:text-[15px]"
            >
              Already have an account?{' '}
              <span className="text-[16px] sm:text-[18px] font-medium text-[#1f4167] cursor-pointer">
                Sign In
              </span>
            </h1>
          )}
        </div>

        <div className="google-login-button w-full sm:w-[280px] md:w-[300px] lg:w-[320px] flex items-center justify-center border-2 border-[#747474] rounded-[5px] p-2 m cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            x="0px"
            y="0px"
            className="google-icon mr-3"
            viewBox="0 0 48 48"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.238-2.147,4.199-3.942,5.57c0.002-0.001,0.003-0.002,0.005-0.003 l6.19,5.238c-0.431,0.373,6.729-5.247,6.729-5.247C43.431,29.861,44,27.004,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <span className="text-[#747474] font-medium">Continue With Google</span>
        </div>
      </div>
    </div> 
    </form>
  </div>
    )
  }
 
