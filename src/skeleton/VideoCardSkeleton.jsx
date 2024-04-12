function VideoCardSkeleton() {
    return (
        <div className="w-[98%] sm:p-2 mt-1 animate-pulse">
            <div className="relative sm:h-52 h-44 bg-gray-300 rounded-2xl">
                <div className="absolute bottom-2 right-2 rounded-lg text-sm bg-gray-400 py-1 px-2">
                </div>
            </div>
            <div className="flex justify-start h-[32%] items-start pt-4 px-2 gap-2">
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-[90%]">
                    <div className="h-6 bg-gray-400 rounded mb-2"></div>
                    <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                </div>
            </div>
        </div>
    );
}

export default VideoCardSkeleton