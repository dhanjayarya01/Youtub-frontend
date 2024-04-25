import React,{useState} from 'react'
import Input from './Input'
import signupq from "/image/signupq.png"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import { MdCancel } from "react-icons/md";


 function Login() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {apiContext,setIsLoggedIn,currentroutename,setIsHomepage}=useContext(ApiContext)


  const navigate=useNavigate()
    const handleSubmit = async () => {
      console.log("email",email)
        const userdata={
          email:email,
          password:password
        }
    
      try {
        const response = await apiContext.loginUser(userdata)
        console.log('User Login successfully:', response);
        navigate(`/${currentroutename}`)
        setIsLoggedIn(true)
        const data= await apiContext.getCurrentUser()
      
      } catch (error) {
        console.error('login error:', error);
      }
    };

    const handlecancel=()=>{
      setIsHomepage(true)
      navigate("/")
    }
    return (

      <div className='absolute overflow-scroll no-scrollbar z-50 left-[12%] right-[12%] top-2 bottom-2 bg-white rounded-2xl border-2'>
     
     <button  onClick={()=>handlecancel} className='w-[4%] absolute  left-1   z-40 hover:text-red-400 text-3xl active:animate-ping '><MdCancel/></button>

   
   
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
               <Link to={-1} className='ml-[3%] text-[#C640FF]'>Signup</Link>
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