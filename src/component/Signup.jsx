import React, { useState,useRef} from 'react'
import signupq from "/image/signupq.png"
import Input from './Input'
import ApiContext from '../ApiServer/ApiContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate(); // Initialize useHistory hook

  const {apiContext,setIsHomepage}=useContext(ApiContext)
  const[username,setUsername]=useState("")
  const[fullName,setfullName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [avatar, setAvatar] = useState(null);
  const [coverImagefile, setCoverImagefile] = useState(null);

  
  const avatarfileInputRef = useRef(null);
  const coverfileInputRef = useRef(null);

  const avatarI = () => {
    avatarfileInputRef.current.click(); 
  };
  const coverImage = () => {
    coverfileInputRef.current.click(); 
  };
   
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImagefile(file);
  };



  const handleSubmit = async () => {
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);
  
    if (avatar) {
      formData.append('avatar', avatar);
    }
  
    if (coverImagefile) {
      formData.append('coverImage', coverImagefile);
    }
  
    try {
      const response = await apiContext.registerUser(formData); 
      console.log('User registered successfully:', response);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
 

  return (
    <div className='absolute overflow-scroll no-scrollbar z-50 left-[12%] right-[12%] top-2 bottom-2 bg-white rounded-2xl border-2'>
     
     <button onClick={()=>setIsHomepage(true)} className='w-[4%] absolute  left-1   z-40 hover:text-red-400 text-3xl active:animate-ping '><MdCancel/></button>

   <div className=' absolute flex h-screen  w-full '>


   <div className='outerdiv h-[100%] w-[100%]    drop-shadow-sm  flex justify-between box-border'>
    <div className='inputouter h-[100%] w-[50%]  p-20 pr-0 pt-4'>
     
      <div className='logodiv h-[16%]  w-[90%]  '> 
        <div className='flex items-center   mb-[2%] '>
          <div  className=' flex ml-[35%] h-8  w-[10%] mr-2 '><img className='h-[100%] w-[100%]'  src='/image/yt1.png'></img></div>
        <div className=' font-bold'>YOUTUB </div>
        </div>
         
     <div className='imageouter h-[100%] w-[100%]   border-[#C640FF] border-[0.1rem] rounded-md mb-[3%] flex items-center ' >
        
        <div className=' avatar h-[70%] w-[20%] ml-[2%] rounded-[50%] bg-green-700 pl-[8%]  '>
        <div onClick={avatarI} className='h-2'><img className='h-[1.1rem] w-36 bg-blue-700' src='/image/camera.png'></img></div>          
        <input  className='h-60'ref={avatarfileInputRef} type='file' accept='image/*' onChange={handleAvatarChange} style={{visibility:'hidden'}}/>

         </div> 

        <div className=' cover h-[70%] w-[20%] ml-[18%]      pl-[8%] flex items-center ' >
          <div onClick={coverImage} className='h-2'><img className='h-[1.51rem] w-[12rem] mb-4 flex items-center' src='/image/camera.png'></img></div>
          <input  className='h-60'ref={coverfileInputRef} type='file' accept='image/*' onChange={handleCoverImageChange} style={{visibility:'hidden'}}/>
          </div> 

      </div> 
      <Input className={"mt-[2.2%] focus:border-[#C640FF]"}placeholder={"Enter username"} type={"text"} text={"UserName"} value={username}  onChange={(e)=>setUsername(e.target.value)}/>
      <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#C640FF]"}placeholder={"Enter FullName"} type={"text"} text={"FullName"} value={fullName}  onChange={(e)=>setfullName(e.target.value)}/>
      <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#C640FF]"}placeholder={"Enter Email"} type={"text"} text={"Email Address"} value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#C640FF]"}placeholder={"Enter Password"} type={"text"} text={"Password"} value={password}  onChange={(e)=>setPassword(e.target.value)}/>
       <div className='mt-[8%] ml-[38%] h-[45%] w-[26%] rounded-md  bg-[#C640FF] flex justify-center items-center'>
        <button onClick={handleSubmit}>Submit</button>
        </div>

         
         <div className='flex mt-[4%] ml-[23%]'>
            <p>Already have an account </p>
            <Link to="/login" className='ml-[3%] text-[#C640FF]'>Login</Link>
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
   </div>

  )
}

export default Signup