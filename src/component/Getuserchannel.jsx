import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ApiContext from '../ApiServer/ApiContext';
import ChannelSkeleton from '../skeleton/ChannelSkeleton';
import { CiBellOn } from "react-icons/ci";

import Uploadvideo from './Uploadvideo';
function Getuserchannel({ channelname }) {
  const navigate = useNavigate();
  const { apiContext, currentuserinfo } = useContext(ApiContext);
  const [channeldata, setChanneldata] = useState();
  const [channelvideo, setChannelvideo] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribercount, setSubscribercount] = useState();
  const [sameUser,setSameUser]=useState(false)
  const [uploadVideoOpen,setUploadVideoOpen]=useState(false)
  
  const getUserChannelProfile = async () => {
    const channel = await apiContext.getUserChannelProfile(channelname);
    setIsSubscribed(channel?.data?.isSubscribed)
    setSubscribercount(channel?.data?.subscribersCount)
    setChanneldata(channel?.data);
    setIsloading(false);
    setChannelvideo(channel?.data?.channelvideos);
    
    
  };

    useEffect(()=>{

      if(currentuserinfo?.username==channeldata?.username){
        setSameUser(true)
      }
    })

  const handlesubscription =async()=>{
    setIsSubscribed(!isSubscribed)
    setSubscribercount(prev => isSubscribed ? prev - 1 : prev + 1);
   const toggle= await apiContext.toggleSubscription(channeldata._id)

  }
  
  useEffect(() => {
    getUserChannelProfile();
  }, [currentuserinfo]);

  const location = useLocation();



  const toggleupload=()=>{
    setUploadVideoOpen(true)
  }

  return (
    isloading ? <ChannelSkeleton /> : (

      
      <div className='w-[100%] p-14 pb-0 pt-0 bg h-{100%}'>
        { uploadVideoOpen&& <div className='absolute z-50 left-[14%] right-[14%] top-2 bottom-2 bg-white rounded-2xl border-2'>
          <Uploadvideo setUploadVideoOpen={setUploadVideoOpen}/>
          
          </div>}


        <div className='w-full  h-[13rem]'>
          <div
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '19px',
              border: '1px solid #000',
              backgroundImage: `url(${channeldata?.coverImage})`,
              backgroundSize: "40%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div className='sm:w-[68rem] w-full flex  h-[38%]'>
          <div className='w-[19%] h-full  p-3'>
            <img className='rounded-full border-[0.01rem]  border-zinc-950 ' src={channeldata?.avatar} alt="" />
          </div>
          <div className='w-[80%] h-full pt-5'>
            <div className='w-full h-[31%] text-5xl font-medium'>{channeldata?.fullName}</div>
            <div className='w-full mt-[1%] h-[20%] flex'><span>{`@${channeldata?.username}`}</span>
              <span className='ml-[2%] font-normal'>{`${subscribercount|| 0} subscribers`}</span>
              <span className='ml-[2%] font-normal'>{`${channeldata?.videoscount || 0} Videos`}</span>
            </div>

              <div className='button  flex'>
             {!sameUser ? <button onClick={handlesubscription} className={`${isSubscribed ?'w-[50%]  sm:w-[18%]': 'w-[16%]'} pl-2 active:animate-ping duration-[1.3s] justify-center items-center flex   h-[3rem] mt-4 rounded-3xl active:bg-slate-400 bg-[#ECECEC]`}>
              {isSubscribed && <div className='w-[20%] h-full text-3xl flex items-center ml-[-2rem] '><CiBellOn/></div>}
              <div className='h-full flex items-center  ml-1'>{isSubscribed ?'Subscribed':'Subscribe' }</div></button>:
              
             <button onClick={toggleupload} className='sm:w-[18%] w-[44%] ml-[2%] h-[3rem] mt-4 rounded-3xl active:bg-slate-400 bg-[#ECECEC]'>Upload Video</button>
              }


             <button onClick={() => navigate('/myprofile')} className='sm:w-[18%] w-[44%] ml-[2%] h-[3rem] mt-4 rounded-3xl active:bg-slate-400 bg-[#ECECEC]'>Update Details</button>
             </div>
          
          </div>
        </div>
        <div>
          <div className='flex  items-center text-xl border-b-2 h-[3rem]'>
            <button onClick={()=>navigate('/yourchannel/channelvideo',{state:channelvideo})} className={`mr-[8%] ${location.pathname === '/yourchannel/channelvideo' && 'border-b-2 border-red-900'}`}>Videos</button>
            <Link className={`mr-[8%] ${location.pathname === '/yourchannel/playlist' && 'border-b-2 border-black'}`} to="/playlist">Playlist</Link>
            <Link className={`mr-[8%] ${location.pathname === '/yourchannel/about' && 'border-b-2 border-black'}`} to="/about">About</Link>
            <Link className={`mr-[8%] ${location.pathname === '/yourchannel/contact' && 'border-b-2 border-black'}`} to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    )
  );
}

export default Getuserchannel;
