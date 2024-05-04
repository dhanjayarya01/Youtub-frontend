import React,{useState,useContext, useEffect,useRef} from 'react'
import ApiContext from '../ApiServer/ApiContext';
import ChannelSkeleton from '../skeleton/ChannelSkeleton';
import { MdCancel } from "react-icons/md";
import camera from"/image/camera.png"
import { FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';

import { FaRegEdit } from "react-icons/fa";

export default function Myprofile() {

  const { apiContext, currentuserinfo } = useContext(ApiContext);
  const [isloading,setIsloading]=useState(true)
  const [isUploadOpen,setIsUPloadOpen]=useState(false)
 const [coverImage,setCoverImage]=useState()
 const [avatar,setAvatar]=useState('')
 const [newUserName,setNewUserName]=useState('')
 const [newFullName,setNewFullName]=useState('')
 const [newEmail,setNewEmail]=useState('')
 const [oldPassword,setOldPassword]=useState('')
 const [newPassword,setNewPassword]=useState('')

 const [coverimageUrl,setCoverimageUrl]=useState('')
 const [avatarUrl,setAvatarUrl]=useState('')



 const UpdateDetails=async()=>{
  
   const loadingtoast=toast.loading('Updating Details ....')
   
  if(!(newEmail || newFullName || newPassword || newUserName || coverImage || avatar)){
    toast.dismiss(loadingtoast)
  }
   if(avatar){
    const formData = new FormData();
    formData.append('avatar', avatar);
    
    setAvatar('')
    await apiContext.updateUserAvatar(formData)
    
    
  }
  if(coverImage){
      const formData = new FormData();

    formData.append('coverImage', coverImage);
     setCoverImage('')
    await apiContext.updateUserCoverImage(formData)

    }

    if(newFullName || newEmail || newUserName){
       const userdata={
        email:newEmail || currentuserinfo.email,
        fullName:newFullName || currentuserinfo.fullName,
        username:newUserName || currentuserinfo.username
       }
       const res=await apiContext.updateAccountDetails(userdata)
    }

    if(newPassword && oldPassword ){

       const password={
         oldPassword:oldPassword,
        newPassword:newPassword,
       }
      await apiContext.changeCurrentPassword(password)
    
    }


    toast.dismiss(loadingtoast)
     setAvatar('')
     setCoverImage('')
     setNewEmail ('')
     setNewPassword ('')
     setNewUserName('')
     setNewFullName('')
     setIsUPloadOpen(false)
    if(newEmail || newFullName || newPassword || newUserName || coverImage || avatar){
      toast.success("User Details Updated successfully")
    }
    
 }

  const getCurrentUser=()=>{

    if(currentuserinfo){
      setIsloading(false)
    }
  }
  useEffect(()=>{
    getCurrentUser()
  },[])
 

    const toggleUpload=()=>{
      setIsUPloadOpen(!isUploadOpen)
    }

      
    const coverRef=useRef(null)
    const avatarRef=useRef(null)

    const coverfile=()=>{
      coverRef.current.click()
    }
    const Thumbnailclick=()=>{
      avatarRef.current.click()
    }

    const handleCoverFile = (e) => {
      const file = e.target.files[0];
      const coverUrl = URL.createObjectURL(file);
      setCoverimageUrl(coverUrl)
      setCoverImage(file);
    };

    const handleavatar = (e) => {
      const file = e.target.files[0];
      const avatarUrl = URL.createObjectURL(file);
      setAvatarUrl(avatarUrl)
      setAvatar(file);
    };



    return (
      isloading ? ( <ChannelSkeleton/>): (
      <div className='w-[100%] p-14 pl-0  pb-0 pt-0 bg h-{100%}'>
          
            <button  onClick={toggleUpload} className={`bg-[#ECECEC] text-xl  active:translate-x-2 duration-[0.8s]  active:bg-slate-400   rounded-3xl mt-2 h-[10%] absolute right-[5%] flex justify-center items-center ${isUploadOpen?' w-[16%]' :' w-[14%]'}`}>
              {isUploadOpen ?  
              <div className='  flex items-center justify-between '>
                <div className='text-3xl sm:text-[0rem]  text-red-400'><MdCancel/></div>
                  <span className='ml-1 flex sm:w-[100%]  overflow-clip w-0'>Cancel Upload</span>
                 </div>:
                 
                 <div className='flex justify-center items-center'>
                  <div className='text-3xl sm:w-0 sm:text-[0rem]  text-red-400'>
                    <FaRegEdit/>
                  </div>
                  <div className='sm:w-[100%]  overflow-clip w-0'>Update Details</div>
                  </div>
                 }


                </button>
          <div className='w-full  h-[13rem]'>
            <div className='flex items-center justify-center'
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '19px',
                border: '1px solid #000',
                backgroundImage: coverimageUrl ?`url(${coverimageUrl})`: `url(${currentuserinfo?.coverImage})`,
                backgroundSize: "40%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            {isUploadOpen &&  <button onClick={coverfile} className='flex  z-50 text-red-400 w-[6%] '>
              <img src='/image/camera.png' alt="" />

             </button>}
               <input  className='h-0 w-0' type='file' accept='image/*' ref={coverRef} onChange={handleCoverFile} style={{visibility:'hidden'}}/>

            </div>
          </div>
  

          <div className='w-full flex h-[38%]'>

            <div className='sm:w-[20%] h-[72%] w-[52%] sm:h-[100%] p-3'>
              <div  style={{
                overflow:'visible',
                backgroundImage: avatarUrl ?`url(${avatarUrl})`: `url(${currentuserinfo?.avatar})`,
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}  className='rounded-full  flex items-center justify-center border-[0.1rem] h-[100%] w-[80%] border-zinc-950 overflow-visible '
              
              > {isUploadOpen && <button onClick={Thumbnailclick}  className=' w-[40%]  z-50 text-red-400 h-[40%]'><img  src="/image/camera.png" alt="" /></button>}
               <input  className='h-0 w-0' type='file' accept='image/*' ref={avatarRef} onChange={handleavatar} style={{visibility:'hidden'}}/>
              </div>
              {isUploadOpen && <button onClick={UpdateDetails} className={`bg-[#ECECEC]  text-xs sm:text-xl w-[90%] h-[30%] active:animate-pulse duration-[0.8s]  active:bg-slate-400   rounded-3xl mt-5  flex justify-center items-center w-[16%]'}`}>Update Change</button>}
            </div>


            <div className='w-[80%]  h-full pt-5 '>

              <div className='h-[15rem]   hover:border-[0.01rem] overflow-scroll no-scrollbar  '>
                  <span >FullName</span>
              <input placeholder={isUploadOpen ? `Ex-${currentuserinfo.fullName}`: currentuserinfo.fullName} readOnly={isUploadOpen?0:1}  onChange={(e)=>setNewFullName(e.target.value)} type="text" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2 text-lg ': null} w-full sm:w-[50%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]   text-sm sm:text-4xl font-medium text-red`}/>
              
                  <span >UserName</span>
              <input placeholder={isUploadOpen ? `Ex-${currentuserinfo.username}`: currentuserinfo.username} readOnly={isUploadOpen?0:1} onChange={(e)=>setNewUserName(e.target.value)}  type="text" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2 text-lg ': null} w-full sm:w-[50%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]   text-sm sm:text-4xl font-medium text-red`}/>
              
                <span >Email</span>
              <input placeholder={isUploadOpen ? `Ex-${currentuserinfo.email}`: currentuserinfo.email} readOnly={isUploadOpen?0:1} onChange={(e)=>setNewEmail(e.target.value)} type="text" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2 text-lg ': null} w-full sm:w-[56%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]    text-sm sm:text-4xl font-medium text-red`}/>
              
                  <span >Old Password *</span>
              <input placeholder={"Enter Your Old password"} readOnly={isUploadOpen?0:1} onChange={(e)=>setOldPassword(e.target.value)} type="password" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2 text-lg ': null} w-full sm:w-[50%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]   text-sm sm:text-4xl font-medium text-red`}/>
              
                <span >New Password *</span>
              <input placeholder={`Ex-${currentuserinfo.fullName}123#`} readOnly={isUploadOpen?0:1} onChange={(e)=>setNewPassword(e.target.value)} type="password" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2   text-lg ': null} w-full sm:w-[50%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]   text-sm sm:text-4xl font-medium text-red`}/>
               
             
      
              </div>
        
            
            </div>
          </div>
         
          </div>
        )
      
    );  
  }

