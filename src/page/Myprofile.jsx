import React,{useState,useContext, useEffect} from 'react'
import ApiContext from '../ApiServer/ApiContext';
import ChannelSkeleton from '../skeleton/ChannelSkeleton';
export default function Myprofile() {

  const { apiContext, currentuserinfo } = useContext(ApiContext);
  const [isloading,setIsloading]=useState(true)
  const [isUploadOpen,setIsUPloadOpen]=useState(false)


  const getCurrentUser=()=>{

    if(currentuserinfo){
      setIsloading(false)
    }
  }
  useEffect(()=>{
    getCurrentUser()
  },[])
    console.log("userinfo",currentuserinfo)
    return (
      isloading ? ( <ChannelSkeleton/>): (
      <div className='w-[75rem] p-14 pb-0 pt-0 bg h-{100%}'>
            

            <button className='bg-[#ECECEC] active:bg-slate-400 w-[14%]  rounded-3xl mt-2 h-[10%] absolute right-[5%] flex justify-center items-center text-2xl' >Update Details</button>
          <div className='w-full  h-[13rem]'>
            <div
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
            ></div>
          </div>
  
          <div className='w-full flex h-[38%]'>
            <div className='w-[20%] h-full p-3'>
              <img className='rounded-full border-[0.1rem] border-zinc-950 overflow-visible h-full' src={currentuserinfo?.avatar} alt="" />
            </div>
            <div className='w-[80%] h-full pt-5 '>
              <div>FullName</div>
              <input placeholder={currentuserinfo.fullName}  className='w-[50%] placeholder-black h-[32%]  text-4xl font-medium text-red'/>
              
              <div className='mt-[1%]'>UserName</div>
              <input placeholder={currentuserinfo.username}  className='w-[50%] placeholder-black h-[32%]  text-4xl font-medium text-red'/>
              
              <div className='mt-[1%]'>Email</div>
              <input placeholder={currentuserinfo.username}  className='w-[50%] placeholder-black h-[32%]  text-4xl font-medium text-red'/>
              
              <div className='w-full mt-[1%] h-[20%] flex'><span>{`@${currentuserinfo?.username}`}</span>
                <span className='ml-[2%] font-normal'>{`${currentuserinfo.email} `}</span>
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

