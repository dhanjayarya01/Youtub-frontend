import React,{useState,useContext, useEffect,useRef} from 'react'
import ApiContext from '../ApiServer/ApiContext';
import ChannelSkeleton from '../skeleton/ChannelSkeleton';
import { MdCancel } from "react-icons/md";
import camera from"/image/camera.png"
export default function Myprofile() {

  const { apiContext, currentuserinfo } = useContext(ApiContext);
  const [isloading,setIsloading]=useState(true)
  const [isUploadOpen,setIsUPloadOpen]=useState(true)
 const [coverImage,setCoverImage]=useState()
 const [thumbnailFile,setThumbnailFile]=useState()

  const getCurrentUser=()=>{

    if(currentuserinfo){
      setIsloading(false)
    }
  }
  useEffect(()=>{
    getCurrentUser()
  },[])
    // console.log("userinfo",currentuserinfo)
 

    const toggleUpload=()=>{
      setIsUPloadOpen(!isUploadOpen)
    }

      
    const coverRef=useRef(null)
    const ThumbnaiRef=useRef(null)

    const coverfile=()=>{
      coverRef.current.click()
    }
    const Thumbnailclick=()=>{
      ThumbnaiRef.current.click()
    }

    const handleCoverFile = (e) => {
      const file = e.target.files[0];
      setCoverImage(file);
    };

    const handleThumbnailFile = (e) => {
      const file = e.target.files[0];
      setThumbnailFile(file);
    };


    return (
      isloading ? ( <ChannelSkeleton/>): (
      <div className='w-[75rem] p-14 pb-0 pt-0 bg h-{100%}'>
          
            <button  onClick={toggleUpload} className={`bg-[#ECECEC] text-xl  active:translate-x-2 duration-[0.8s]  active:bg-slate-400   rounded-3xl mt-2 h-[10%] absolute right-[5%] flex justify-center items-center ${isUploadOpen?' w-[16%]' :' w-[14%]'}`}>
              {isUploadOpen ?  
              <div className=' flex items-center justify-between '>
                <div className='text-3xl  text-red-400'><MdCancel/></div>
                  <span className='ml-1'>Cancel Upload</span>
                 </div>:'Update Details' }


                </button>
          <div className='w-full  h-[13rem]'>
            <div className='flex items-center justify-center'
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '19px',
                border: '1px solid #000',
                backgroundImage: `url(${currentuserinfo?.coverImage})`,
                backgroundSize: "40%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            {isUploadOpen &&  <button onClick={coverfile} className='flex  z-50 text-red-400 w-[6%] '>
              <img src='/image/camera.png' alt="" />

             </button>}
               <input  className='h-0 w-0' type='file' accept='video/*' ref={coverRef} onChange={handleCoverFile} style={{visibility:'hidden'}}/>

            </div>
          </div>
  

          <div className='w-full flex h-[38%]'>

            <div className='w-[20%] h-full p-3'>
              <div  style={{
                overflow:'visible',
                backgroundImage: `url(${currentuserinfo?.avatar})`,
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}  className='rounded-full  flex items-center justify-center border-[0.1rem] h-[100%] w-[80%] border-zinc-950 overflow-visible '
              
              > {isUploadOpen && <button onClick={Thumbnailclick}  className=' w-[40%]  z-50 text-red-400 h-[40%]'><img  src="/image/camera.png" alt="" /></button>}
               <input  className='h-0 w-0' type='file' accept='image/*' ref={ThumbnaiRef} onChange={handleThumbnailFile} style={{visibility:'hidden'}}/>
              </div>
              {isUploadOpen && <button className={`bg-[#ECECEC]  text-xl w-[90%] h-[30%] active:animate-pulse duration-[0.8s]  active:bg-slate-400   rounded-3xl mt-5  flex justify-center items-center ${isUploadOpen?' w-[16%]' :' w-[14%]'}`}>Update Change</button>}
            </div>


            <div className='w-[80%]  h-full pt-5 '>

              <div className='h-[15rem]  hover:border-[0.01rem] overflow-scroll no-scrollbar  '>
                  <span >FullName</span>
              <input placeholder={isUploadOpen ? `Ex-${currentuserinfo.fullName}`: currentuserinfo.fullName} readOnly={isUploadOpen?0:1}  type="text" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2 text-lg ': null} w-[50%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]  text-4xl font-medium text-red`}/>
              
                  <span >UserName</span>
              <input placeholder={isUploadOpen ? `Ex-${currentuserinfo.username}`: currentuserinfo.username} readOnly={isUploadOpen?0:1}  type="text" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2 text-lg ': null} w-[50%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]  text-4xl font-medium text-red`}/>
              
                  <span >Password</span>
              <input placeholder={isUploadOpen ? `Ex-${currentuserinfo.fullName}`: currentuserinfo.fullName} readOnly={isUploadOpen?0:1}  type="password" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2 text-lg ': null} w-[50%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]  text-4xl font-medium text-red`}/>
              
                  <span >Email</span>
              <input placeholder={isUploadOpen ? `Ex-${currentuserinfo.fullName}`: currentuserinfo.fullName} readOnly={isUploadOpen?0:1}  type="text" className={`${isUploadOpen ?' p-2 focus:border-red-500 hover:caret-red-500 border-2 text-lg ': null} w-[50%] focus:outline-none  flex rounded-xl placeholder-black h-[22%]  text-4xl font-medium text-red`}/>
              
             
              
              </div>
                {/* <div className='button  flex'>
               {!sameUser ? <button onClick={handlesubscription} className={`${isSubscribed ?'w-[18%]': 'w-[16%]'} active:animate-ping duration-[1.3s] justify-center items-center flex   h-[3rem] mt-4 rounded-3xl active:bg-slate-400 bg-[#ECECEC]`}>
                {isSubscribed && <div className='w-[20%] h-full text-3xl flex items-center ml-[-2rem] '><CiBellOn/></div>}
                <div className='h-full flex items-center  ml-1'>{isSubscribed ?'Subscribed':'Subscribe' }</div></button>:
                
               <button onClick={toggleupload} className='w-[18%] ml-[2%] h-[3rem] mt-4 rounded-3xl active:bg-slate-400 bg-[#ECECEC]'>Upload Video</button>
                }
  
  
               <button onClick={() => navigate('/myprofile')} className='w-[18%] ml-[2%] h-[3rem] mt-4 rounded-3xl active:bg-slate-400 bg-[#ECECEC]'>Update Details</button>
               </div> */}
            
            </div>
          </div>
          <div>
           
          </div>
          </div>
        )
      
    );  
  }

