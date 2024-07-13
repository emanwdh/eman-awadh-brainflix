export default function SideBarVideos ({video, MoveHandler, id}) {

    return (
        <div className = "next-video" onClick={()=>{MoveHandler(id)}}>
                <img className="next-video__preview" src = {video.image}></img>
                <div className="next-video__description">
                    <p className="next-video__title">{video.title}</p>
                    <p className="next-video__username">{video.channel}</p>
                </div>
           </div>
    )
      
    
}