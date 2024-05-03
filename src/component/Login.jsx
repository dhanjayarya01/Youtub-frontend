import React,{useState} from 'react'
import Input from './Input'
import study from "/image/study.png"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import { MdCancel } from "react-icons/md";
import { toast } from 'react-toastify'


 function Login() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [error,setError]=useState("")
  const {apiContext,setIsLoggedIn,currentroutename,setIsHomepage}=useContext(ApiContext)


  const navigate=useNavigate()

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };
  
  const handleSubmit = async () => {
      setEmail(email.replace(/\s/g, ''));

      if (
        email.length < 1 ||
        password.length < 1 
      ) {
           console.log("ijij")
            setError('All fields are required');

          } else if (!validateEmail(email)) {
            toast.error('Please enter a valid email address');
          
          } else if (!validatePassword(password)) {
            
            toast.error('Password must be at least 8 characters long');
          } 
          
          else{ 
          setError('')
          const userdata={
          email:email,
          password:password
        }
    
        const loadingtoast=toast.loading('please wait ...')
        try {
        setError('')
        const response = await apiContext.loginUser(userdata)
        toast.dismiss(loadingtoast)
        toast.success(response.message)
        navigate(`/${currentroutename}`)
        setIsLoggedIn(true)
        const data= await apiContext.getCurrentUser()
      
      } catch (error) {
        toast.dismiss(loadingtoast)
        console.error('login error:', error);
      }


    }
    console.log("ffj",error)
      if(error){
        toast.error(error)
      }
    };

    const handlecancel=()=>{
      setIsHomepage(true)
      navigate("/")
    }
    return (

      <div className='absolute overflow-scroll no-scrollbar z-50 left-[12%] right-[12%] top-2 bottom-2 bg-white rounded-2xl border-2'>
     
     <button  onClick={handlecancel} className='w-[4%] absolute  left-1  text-[#FF5C40]  z-40 hover:text-red-400 text-3xl active:animate-ping '><MdCancel/></button>

   
   
      <div className='outerdiv h-[100%] w-[100%] bg-[#FFFFFF] drop-shadow-lg flex justify-between box-border'>
   
       <div className='inputouter h-[100%] w-[100%] sm:w-full p-20 pr-0 pt-4'>
        
         <div className='logodiv h-[16%] w-[75%] '> 
           <div className='flex items-center   mb-[2%] '>
             <div  className=' flex ml-[35%] h-8 w-[12%] '><img className='h-[100%] w-[100%]'  src='/image/yt1.png'></img></div>
           <div className=' font-bold ml-1'>YOUTUB</div>
           </div>
            
         <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#FF5C40]"}placeholder={"Enter Email"} type={"text"} text={"Email Address"} value={email}  onChange={(e)=>setEmail(e.target.value)}/>
         <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#FF5C40]"}placeholder={"Enter Password"} type={"password"} text={"Password"} value={password}  onChange={(e)=>setPassword(e.target.value)}/>
          <div className='mt-[8%] ml-[38%] h-[45%] w-[26%] rounded-md  bg-[#FF5C40] flex justify-center items-center'>
           <button onClick={handleSubmit} >Submit</button>
           </div>
   
            
            <div className='flex mt-[4%] ml-[23%]'>
               <p>Don't have an account</p>
               <Link to={-1} className='ml-[3%] text-[#FF5C40]'>Signup</Link>
            </div>
        </div>
       </div>
      
      {/**/ }
      <div className='w-0 h-0 sm:w-full sm:h-full'>
    <div  style={{
      height:'100%',
      width:'100%',
      backgroundImage:`url(${study})`,
      backgroundSize:"cover"
    }} className='bg-[#E9EFFF] h-[100%] w-[100%]'></div>
   </div>
      
      </div>
   
   
   
     
      </div>
   
     )
   }




export default Login