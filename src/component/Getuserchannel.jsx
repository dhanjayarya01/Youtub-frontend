import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ApiContext from '../ApiServer/ApiContext';
import ChannelSkeleton from '../skeleton/ChannelSkeleton';

function Getuserchannel({ channelname }) {
  const navigate = useNavigate();
  const { apiContext, currentuserinfo } = useContext(ApiContext);
  const [channeldata, setChanneldata] = useState();
  const [channelvideo, setChannelvideo] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getUserChannelProfile = async () => {
    console.log(channelname);
    const channel = await apiContext.getUserChannelProfile(channelname);
    setChanneldata(channel?.data);
    setIsloading(false);
    setChannelvideo(channel?.data?.channelvideos);
    
  };



  
  useEffect(() => {
    getUserChannelProfile();
  }, [currentuserinfo]);

  const location = useLocation();

  return (
    isloading ? <ChannelSkeleton /> : (
      <div className='w-full p-14 pb-0 pt-0 bg h-{100%}'>
        <div className='w-full h-[13rem]'>
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

        <div className='w-full flex h-[40%]'>
          <div className='w-[20%] h-full p-3'>
            <img className='rounded-full border-[0.1rem] border-zinc-950 overflow-visible h-full' src={channeldata?.avatar} alt="" />
          </div>
          <div className='w-[80%] h-full pt-5'>
            <div className='w-full h-[31%] text-5xl font-medium'>{channeldata?.fullName}</div>
            <div className='w-full mt-[1%] h-[20%] flex'><span>{`@${channeldata?.username}`}</span>
              <span className='ml-[2%] font-normal'>{`${channeldata?.subscribersCount || 0} subscribers`}</span>
              <span className='ml-[2%] font-normal'>{`${channeldata?.videoscount || 0} Videos`}</span>
            </div>
            <button onClick={() => navigate('/myprofile')} className='w-[18%] h-[3rem] mt-4 rounded-3xl active:bg-slate-400 bg-[#ECECEC]'>Update Details</button>
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
