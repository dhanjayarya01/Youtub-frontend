import React, { useState,useRef} from 'react'
// import signupq from "/image/signupq.png"
import study from "/image/study.png"
import Input from './Input'
import ApiContext from '../ApiServer/ApiContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

function Signup() {
  const navigate = useNavigate(); 

  const {apiContext,setIsHomepage}=useContext(ApiContext)
  const[username,setUsername]=useState("")
  const[fullName,setfullName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [avatar, setAvatar] = useState(null);
  const [coverImagefile, setCoverImagefile] = useState(null);

  const [coverimageUrl,setCoverimageUrl]=useState('')
 const [avatarUrl,setAvatarUrl]=useState('')
  
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
    const avatarUrl = URL.createObjectURL(file);
      setAvatarUrl(avatarUrl)
    setAvatar(file);
  };
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    const coverUrl = URL.createObjectURL(file);
    setCoverimageUrl(coverUrl)
    setCoverImagefile(file);
  };


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
  username.length < 1 ||
  email.length < 1 ||
  password.length < 1 ||
  fullName.length < 1
) {
  
      toast.error('All fields are required');
    } else if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
    
    } else if (!validatePassword(password)) {
      toast.error('Password must be at least 8 characters long');
    } 
    
    else{

    const formData = new FormData();
    formData.append('username', username);
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);
  
    if (!avatar) {
      toast.error('Avatar is required');
      return; 
    } else {
      formData.append('avatar', avatar);
    }
    
    if (!coverImagefile) {
      toast.error('CoverImage is Required')
      return; 
    } else {
      formData.append('coverImage', coverImagefile);
    }
  
    try {
      const loadingtoast=toast.loading('please wait...')
      const response = await apiContext.registerUser(formData); 
      toast.dismiss(loadingtoast)
      toast.success(response.message);
      console.log(email,password)
      const userdata={
        email:email,
        password:password
      }
      await apiContext.loginUser(userdata)
      navigate('/')
    } catch (error) {
      toast.dismiss(loadingtoast)

      console.error('Registration error:', error);
    }
  }

 
  };
 
const handlecancel=()=>{
  setIsHomepage(true)
  navigate('/')
}
  return (
    <div className='absolute overflow-scroll no-scrollbar z-50 left-[12%] right-[12%] top-2 bottom-2 bg-white rounded-2xl border-2'>
     
     <button onClick={handlecancel} className='w-[4%] absolute  left-1 text-[#FF5C40]  z-40 hover:text-red-400 text-3xl active:animate-ping '><MdCancel/></button>

   <div className=' absolute flex h-screen  w-full '>


   <div className='outerdiv h-[100%] w-[100%]    drop-shadow-sm  flex justify-between box-border'>
    <div className='inputouter h-[100%] sm:w-[50%] w-full  p-20 pr-0 pt-4'>
     
      <div className='logodiv h-[16%]  w-[90%]  '> 
        <div className='flex items-center   mb-[2%] '>
          <div  className=' flex ml-[35%] h-8  w-[10%] mr-2 '><img className='h-[100%] w-[100%]'  src='/image/yt1.png'></img></div>
        <div className=' font-bold'>YOUTUB </div>
        </div>
         
     <div style={{
                border: '1px solid #000',
                backgroundImage: coverimageUrl ?`url(${coverimageUrl})`: null ,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} className='imageouter h-[100%] w-[100%]    border-[#FF5C40] border-[0.1rem] rounded-md mb-[3%] flex items-center ' >
        
        <div style={{
                border: '1px solid #000',
                backgroundImage: avatarUrl ?`url(${avatarUrl})`: null ,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} className=' avatar h-[70%] w-[20%] ml-[2%] flex items-center rounded-[50%] border-2 pl-[8%]  '>
        <div   
         onClick={avatarI} className=''><img className='h-[1.3rem]  text-3xl w-36 ' src='/image/camera.png'></img></div>          
        <input  className='h-60'ref={avatarfileInputRef} type='file' accept='image/*' onChange={handleAvatarChange} style={{visibility:'hidden'}}/>

         </div> 

        <div  className=' cover h-[70%] w-[20%] ml-[18%] pl-[8%] flex items-center ' >
          <div onClick={coverImage} className='h-2'><img className='h-[1.51rem] w-[12rem] mb-4 flex items-center' src='/image/camera.png'></img></div>
          <input  className='h-0   bg-red-500'ref={coverfileInputRef} type='file' accept='image/*' onChange={handleCoverImageChange} style={{visibility:'hidden'}}/>
         
        </div> 

      </div> 
      <Input className={"mt-[2.2%] focus:border-[#FF5C40]"}placeholder={"Enter username"} type={"text"} text={"UserName"} value={username}  onChange={(e)=>setUsername(e.target.value)}/>
      <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#FF5C40]"}placeholder={"Enter FullName"} type={"text"} text={"FullName"} value={fullName}  onChange={(e)=>setfullName(e.target.value)}/>
      <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#FF5C40]"}placeholder={"Enter Email"} type={"text"} text={"Email Address"} value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      <Input labelclass={"mt-2"} className={"mt-[2.2%] focus:border-[#FF5C40]"}placeholder={"Enter Password"} type={"password"} text={"Password"} value={password}  onChange={(e)=>setPassword(e.target.value)}/>
       <div className='mt-[8%] ml-[38%] h-[45%] w-[26%] rounded-md  bg-[#FF5C40] flex justify-center items-center'>
        <button onClick={handleSubmit}>Submit</button>
        </div>

         
         <div className='flex  mt-[4%] ml-[23%]'>
            <p>Already have an account </p>
            <Link to="/login" className='ml-[3%] text-[#FF5C40]'>Login</Link>
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
   </div>

  )
}

export default Signup