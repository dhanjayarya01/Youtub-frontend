import React,{useState} from 'react'
import Input from './Input'
import signupq from "/image/signupq.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'


 function Login() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const {apiContext,setIsLoggedIn}=useContext(ApiContext)

    const handleSubmit = async () => {
      console.log("email",email)
        const userdata={
          email:email,
          password:password
        }
    
      try {
        const response = await apiContext.loginUser(userdata); 
        console.log('User Login successfully:', response);
        setIsLoggedIn(true)
        const data= await apiContext.getCurrentUser()
        console.log("userdata is",data)
      } catch (error) {
        console.error('login error:', error);
      }
    };

    return (
      <div className='container flex-1 pl-[6%]  pr-[6%] pb-[2.5%] pt-[2.5%] bg-[#F5EAFF]'>
   
   
      <div className='outerdiv h-[33.89rem] ,w-[100%] bg-[#FFFFFF] drop-shadow-lg flex justify-between box-border'>
   
       <div className='inputouter h-[100%] w-[100%]  p-20 pr-0 pt-4'>
        
         <div className='logodiv h-[16%] w-[75%] '> 
           <div className='flex items-center   mb-[2%] '>
             <div  className=' flex ml-[35%] h-8 w-[12%] '><img className='h-[100%] w-[100%]'  src='/image/yt1.png'></img></div>
           <div className=' font-bold'>YOUTUB</div>
           </div>
            
         <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#C640FF]"}placeholder={"Enter Email"} type={"text"} text={"Email Address"} value={email}  onChange={(e)=>setEmail(e.target.value)}/>
         <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#C640FF]"}placeholder={"Enter Password"} type={"text"} text={"Password"} value={password}  onChange={(e)=>setPassword(e.target.value)}/>
          <div className='mt-[8%] ml-[38%] h-[45%] w-[26%] rounded-md  bg-[#C640FF] flex justify-center items-center'>
           <button onClick={handleSubmit} >Submit</button>
           </div>
   
            
            <div className='flex mt-[4%] ml-[23%]'>
               <p>Don't have an account</p>
               <Link to="/" className='ml-[3%] text-[#C640FF]'>Signup</Link>
            </div>
        </div>
       </div>
      
      {/**/ }
       <div style={{
         height:'100%',
         width:'100%',
         backgroundImage:`url(${signupq})`,
         backgroundSize:"cover"
       }} className='bg-[#E9EFFF] h-[100%] w-[100%]'></div>
      
      </div>
   
   
   
      </div>
   
     )
   }




export default Login