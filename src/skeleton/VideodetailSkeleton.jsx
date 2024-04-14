function SkeletonComment() {
    return (
        <div className="comment w-full flex p-2 mt-2 rounded-md animate-pulse">
            <div className='avatar w-[3rem] h-[3rem] border-[0.01rem] border-black rounded-full mr-4'></div>
            <div className='w-[40rem] justify-end h-[100%]'>
                <div className='flex h-[26%]'>
                    <div className='w-20 bg-gray-300 rounded h-4 mr-2'></div>
                    <div className='w-20 bg-gray-300 rounded h-4'></div>
                </div>
                <div className='w-full bg-gray-300 rounded h-4 mt-1'></div>
                <div className='flex items-center mt-2'>
                    <div className='w-8 h-8 bg-gray-300 rounded-full mr-2'></div>
                    <div className='w-8 h-8 bg-gray-300 rounded-full mr-2'></div>
                    <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonComment