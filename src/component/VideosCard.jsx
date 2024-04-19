import React from "react";
import { formatDuration, timeAgo } from "../helpers/timeAgo";
import { useNavigate } from "react-router-dom";

function VideosCard({
    thumbnail,
    duration,   
    title,
    views = 0,
    avatar,
    channelName,
    createdAt,
    videoId,
}) {
    const navigate = useNavigate();

    const handleAvatarClick = (e) => {
        e.stopPropagation();
        navigate(`/channel/${channelName}`);
    };
  
    return (
        <>
            <div
                className="w-[98%]  sm:p-2 cursor-pointer mt-1 "
                onClick={() => navigate(`/v/${videoId}`)}
            >
                <div className="relative sm:h-52  h-44    ">
                    <img
                        src={thumbnail}
                        className="object-cover border-[0.011rem] hover:rounded-none transition-all duration-2000  rounded-2xl w-full h-full"
                    />
                    <span className="absolute bottom-2 right-2 rounded-lg text-sm bg-black py-1 px-2">
                        {formatDuration(duration)}
                    </span>
                </div>
                <div className="flex justify-start h-[32%] items-start  pt-4 px-2 gap-2 ">
                    {avatar && (
                        <div onClick={handleAvatarClick}>
                            <img
                                src={avatar}
                                className="w-10 h-10    rounded-full object-cover border border-slate-700"
                            />
                        </div>
                    )}
                    <div className="w-[90%] h-full ">
                        <h2 className=" line-clamp-2  overflow-hidden font-medium text-gray-950">{title}</h2>
                        {channelName && (
                            <h2 className="text-[1rem] space-x-3 font-semibold text-black">
                                {channelName}
                            </h2>
                        )}
                        <div className="text-xs space-x-1 text-slate-400">
                            <span>{views} Views</span> .
                            <span>{timeAgo(createdAt)}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideosCard;