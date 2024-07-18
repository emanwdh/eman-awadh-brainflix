export default function SideBarVideos ({video}) {

    return (
        <div className = "next-video">
                <img className="next-video__preview" src = {video.image}></img>
                <div className="next-video__description">
                    <p className="next-video__title">{video.title}</p>
                    <p className="next-video__username">{video.channel}</p>
                </div>
           </div>
    )
      
    
}