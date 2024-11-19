import Avathar from '../assets/chating_Avathar.jpeg'
import msgIcon from '../assets/chat icon1.jpg'

const LoginPage = () => {
  return (
    <div>
      <div className="login_page flex relative h-screen">
        <h1 className='p-7 text-[33px] font-sans font-semibold '>Rizo Chat</h1>
        <img src={msgIcon} alt="" className='absolute right-4 top-4 w-[320px]' />
        <div className="left_image absolute bottom-0 left-0 p-8">
          <img src={Avathar} alt="" className='w-[600px]'/>
        </div> 
        <div className="inputFilds flex flex-col justify-center items-start gap-6 p-14 bg-[#f1f2f6] h-[400px] rounded-[12px] absolute top-1/2 right-0 transform -translate-y-1/2 mr-[320px]">
         <h1 className='p-2 text-[28px] font-semibold font-mono text-[#1f4167]'>Sign In to Rizo</h1>
          <input type="text" placeholder='Enter Your Email' className='w-[320px] p-4'/>
          <input type="text" placeholder='Enter Your Password' className='w-[320px] p-4' />
          <div className="button">
          <button type='submit' className='w-[320px] bg-[#1f4167] text-white h-14 rounded-[5px] font-semibold text-[19px]'>Log In</button>
          </div>
          <div className="google_Signin">
            <h2>New to Rizo Chat ?<span className=''> Sign Up</span></h2>
            <h1>Already have an account : <span>Sign In</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
