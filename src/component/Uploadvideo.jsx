import React,{useRef, useState} from 'react'
import { MdCancel } from "react-icons/md";
import { useContext } from 'react';
import ApiContext from '../ApiServer/ApiContext';
import { toast } from 'react-toastify';
import camera from "/image/camera.png"
function Uploadvideo({setUploadVideoOpen}) {
  
  const [thumbnailuploaded,setThumbnailuploaded]=useState(false)
  const [videofile,setVideofile]=useState()
  const [thumbnail,setThumbnail]=useState()

  const [title,setTitle]=useState('')
  const [description,setDiscription]=useState('')
  const {apiContext}=useContext(ApiContext)

  //  apiContext.Uploadvideo

  const [fileUrl, setFileUrl] = useState('');

  const handleupload=async()=>{
   

    if(!videofile){
      toast.error('videoFile is required')
      
    }
    else if(!thumbnail){
      toast.error('Video Thumbnail  is required')
      
    }
    else if(!title){
      toast.error('Video Title is required')
    }
    else if(!description){
      toast.error('Video Description is required')
    }
    else{
      const loadingtoast=toast.loading('Uploading Your Video ...')
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);
    formData.append('videoFile', videofile);


    await apiContext.publishAVideo(formData)
    toast.dismiss(loadingtoast)
    toast.success("Uploaded Your Video")

    }

  }





  const handleCancel=()=>{
   setUploadVideoOpen(false)
 }

 const ThumbnailfileRef = useRef(null);
 const videofileRef = useRef(null);

 const videofileref = () => {
   videofileRef.current.click(); 
 };


 const handleUploadVideofile = (e) => {
   const file = e.target.files[0];
   setVideofile(file);
   console.log(file)
 };

 const ThumbnailRef = () => {
  ThumbnailfileRef.current.click(); 
};

const handleThumbnail = (e) => {
  const file = e.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  setFileUrl(imageUrl);

  console.log(imageUrl)
  setThumbnail(file);
};


  return (

    <div className='w-full h-full overflow-y-scroll rounded-2xl no-scrollbar'> 

     <div className='w-full sticky bg-white top-0 z-auto pl-2 pr-2 flex items-center border-b-[0.1rem]  justify-between h-[10%] ' >
      <div className='flex w-[20%] justify-evenly '>
      <button onClick={handleCancel} className='w-[20%] text-[#FF5C40] hover:text-red-400 text-3xl active:animate-ping '><MdCancel/></button>
      <div className='h-full  sm:text-base text-[0rem] sm:w-full w-[0rem]  '>cancel uploading</div>
      </div>

      <button onClick={handleupload} className=' w-[30%] sm:w-[15%] h-[80%] hover:bg-slate-400 active:bg-slate-300   rounded-3xl bg-[#ECECEC]'>upload Video</button>
      </div>


   <div className='w-full h-full p-5'>

      <div className='w-full flex-col h-[37%] flex items-center justify-center  border-2'>
        <div>Upload Your Video File Here</div>
        <button onClick={videofileref} className='w-[15%] mt-2 rounded-xl h-[20%] bg-red-300'>Select File</button>
        <input ref={videofileRef} type='file' accept='video/*' onChange={handleUploadVideofile} style={{visibility:'hidden'}}/>
          <div>{videofile?.name}</div>
      </div>

      <div className='mt-1'>Thumbail *</div>
      <div className='w-full mt-2 h-[52%] justify-between flex '>
        <div  style={{
              backgroundImage: fileUrl ? `url(${fileUrl})` : 'none',
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }} className='w-[30%] h-full flex items-center  justify-center border-2 '>
        
        <button onClick={ThumbnailRef} className='w-[20%] h-[20%]  '><img  src={camera} alt="click" /></button>
        <input className='h-0 w-0' ref={ThumbnailfileRef} type='file' accept='image/*' onChange={handleThumbnail} style={{visibility:'hidden'}}/>
 
        </div>


          <div className='w-[68%] h-full '>
            <div> Video Title *</div>
            <div className='w-full h-[18%] mt-1 rounded-md bg-amber-300'>
               <input value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full pl-2 h-full focus:outline-none text-xl rounded-md border-[#F3F3F3] border-[0.1rem] focus:border-slate-700' type="text"  placeholder='Title'/>
            </div>

            <div className='mt-1'>Video Description *</div>
            <div className='w-full h-[50%] mt-1 '>
            <textarea  
            value={description} onChange={(e)=>setDiscription(e.target.value)}
             className='w-full h-full focus:outline-none text-xl rounded-md border-[#F3F3F3] border-[0.1rem] focus:border-slate-700 resize-none'
             placeholder='Description' 
             style={{ 
               textAlign: 'left', 
               paddingTop: '0.5rem', 
               paddingLeft: '0.5rem' 
             }}
           />
            </div>
          </div>
        
        </div>
      
        </div>
      </div>

  )
}

export default Uploadvideo