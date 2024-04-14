    import React, { useState, useEffect, useCallback } from 'react';
    import { AiOutlineLike } from "react-icons/ai";
    import { BiDislike } from "react-icons/bi";
    import { PiShareFatThin } from "react-icons/pi";
    import { useContext } from 'react';
    import ApiContext from '../ApiServer/ApiContext';
    import InfiniteScroll from './InfiniteScroll'; // Import the InfiniteScroll component
    import { timeAgo } from '../helpers/timeAgo';
    

    function VideoDetail({ videodetail }) {
        const { apiContext } = useContext(ApiContext);
        const [comments, setComments] = useState([]);
        const [loading, setLoading] = useState(true);
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);
        const [iscommentopen,setIscommentopen]=useState(false)
        const [usercomment,setUsercomment]=useState("")

        const {currentuserinfo}=useContext(ApiContext)

      
        const loadInitialComments = async () => {
            const initialData = await fetchComments(currentPage);
            setComments(initialData.docs);
            setTotalPages(initialData.totalPages);
            setLoading(false);
        };

        const fetchComments = async (page) => {
            try {
                const response = await apiContext.getVideoComments(videodetail?._id);
                return response.data;
            } catch (error) {
                console.error('Error fetching comments:', error);
                return { docs: [], totalPages: 1 };
            }
        };


        const loadMoreComments = useCallback(async () => {
            if (currentPage < totalPages) {
                const nextPage = currentPage + 1;
                const newData = await fetchComments(nextPage);
                setCurrentPage(nextPage);
                setComments((prevData) => [...prevData, ...newData.docs]);
            }
        }, [currentPage, totalPages]);

       
        const handlecommentsub=async()=>{
            await apiContext.addComment(videodetail._id,usercomment)
        }

        useEffect(() => {
            if (videodetail._id) {
                loadInitialComments();
            }
        }, [videodetail,handlecommentsub]);

        const handleCancel=()=>{
           setUsercomment('')
           setIscommentopen(false)
        }
      console.log("comment",comments)
      
        return (
            <div className='w-full flex-grow h-[100%]'>
                <div className='title flex-wrap overflow-clip h-[4rem] ml-1 mt-2 w-[59%] flex justify-start items-center text-2xl font-bold'>{videodetail.title}</div>
                
                <div className='userdetails m-[1%] -800 ml-0 h-[4rem] w-[60%] p-1 flex justify-start items-center'>
                    <div className='avatar w-12 h-12 rounded-full border-zinc-400 border-[0.01rem] overflow-hidden'>
                        {videodetail?.owner?.avatar ? <img className='object-contain' src={videodetail?.owner?.avatar} alt=".." /> : null}
                    </div>
                    <div className='m-[2%] h-[90%] w-[25%]'>
                        <div className='font-bold text-xl h-[40%]'>{videodetail?.owner?.username}</div>
                        <div className='mt-[2%]'>{`${videodetail?.owner?.subscribercount}  subscribers`}</div>
                    </div>
                    <button className='active:bg-red-500 h-[80%] w-[17%] font-bold text-base  rounded-3xl bg-black text-white'>Subscribe</button>
                    <div className='likediv ml-[10%] flex m-[3%]  w-[24%] h-[80%] rounded-3xl bg-[#ECECEC]'>
                        <div className='h-full  flex pl-[12%] items-center rounded-3xl w-[65%] text-3xl'>
                            <AiOutlineLike />
                            <div className='font-light items-center w-[60%] overflow-clip ml-[4%] '>{videodetail.likecount}</div>
                        </div>
                        <div className='h-full flex items-center justify-center w-[34%] text-3xl border-l-black border-l-[0.01rem]  rounded-r-3xl '>
                            <BiDislike />
                        </div>
                    </div>
                    <div className='share flex  w-[17%] rounded-3xl h-[80%] active:ring-emerald-900 bg-[#ECECEC]'>
                        <div className='pl-3 flex items-center text-3xl'><PiShareFatThin /></div>
                        <div className=' flex text-xl justify-center items-center ml-1 mb-[0.4rem]'>Share</div>
                    </div>
                </div>
                
                 <div className='viewandDes  w-[60%] min-h-[19%] rounded-xl pl-2 bg-[#ECECEC]'>
                    <div className='viewandtime flex text-lg font-medium h-[40%] w-[100%] items-center'>{`${videodetail?.views} views`}
                       <div className='ml-3'>{timeAgo(videodetail.createdAt)}</div>
                    </div>
                       
                      <div className='des w-[100%]'>{videodetail.description}</div> 
                 </div>
                
                <div className='commentdiv  w-[60%] h-full'>
                    <div className='commetlen w-full ml-[2%] h-[6%]  text-xl font-semibold mt-[2%]'>{`${comments.length} Comments`}</div>
                     
                     <div className='sendcomment  flex mt-[3%] items-start    h-[17%] w-full'>
                        
                        <div className="avatardiv h-[50%] mt-3 flex items-center rounded-[4rem]  w-[3rem] bg-slate-100">
                            <img src={currentuserinfo?.avatar} alt=".." />
                         </div>

                         <div className='h-[100%]  focu w-full pl-[3%] '>
                            <input readOnly={!iscommentopen} value={usercomment} onChange={(e) => setUsercomment(e.target.value)} onClick={()=>setIscommentopen(!iscommentopen)} className={`w-[98%] h-[40%] mt-2  pl-3 focus:outline-none text-base border-b-[0.01rem] border-b-black ${iscommentopen?'border-b-[0.12rem]':null} `} type="text" placeholder='add Comment '/>
                            <div className='w-[98%] flex justify-end mt-[1%] h-[40%] '>
                               <button onClick={handleCancel} className='h-full rounded-3xl w-[12%] active:bg-slate-400 hover:bg-[#ECECEC]'>Cancel</button>
                               <button onClick={handlecommentsub} className='h-full rounded-3xl ml-2 w-[15%] active:bg-slate-400 bg-[#ECECEC]'>Comment</button>
                            </div>
                         </div>
                         
                     </div>

                    <InfiniteScroll fetchMore={loadMoreComments} hasNextPage={currentPage < totalPages && !loading}>
                        {loading ?
                            Array.from({ length: 6 }).map((_, index) => <div key={index} className="skeleton"></div>)
                            :
                             comments.map((comment) => (
                            <div key={comment._id} className="comment  w-full  flex  p-2 mt-2 rounded-md">
                                <div className='avatar w-[3rem] h-[3rem] border-[0.01rem] border-black  rounded-full  mr-4'>
                                    <img src={comment.owner.avatar || 'default_avatar.png'} alt="User avatar" className="object-contain w-[full] h-full" />
                                </div>
                                  
                                  <div className='w-[40rem] justify-end h-[100%]  '>

                                  <div className='flex h-[26%] '>
                                  <div>{comment.owner.username}</div>
                                  <div className='ml-[1%] font-light'>{timeAgo(comment.createdAt)}</div>
                                  </div>

                                  <div className='w-full overflow-hidden  '>{comment.content} </div>
                                  <div className='flex items-center'>
                                    <button className="p-2 text-green-500 hover:text-green-700"><AiOutlineLike /></button>
                                    <span className="mx-2 text-sm">{comment.likesCount || 0}</span>
                                    <button className="p-2 text-red-500 hover:text-red-700"><BiDislike /></button>
                                </div>


                                  </div>
                                
                                </div>
                            
                        ))
                        }
                    </InfiniteScroll>
                </div>  
            </div>
        );
    }

    export default VideoDetail;
