import SideBarVideos from "../side-bar-videos/Side-Bar-Videos";
import './VideoSideBar.scss';



export default function  VideoSideBar({data}) {
    
    


        return (
            <>
            <div className="video-side-bar section">
                <p className="video-side-bar__title">Next Videos</p>
                {data.map((video) => (
                     <div className = "next-video">
                        <img className="next-video__preview" src = {video.image}></img>
                        <div className="next-video__description">
                            <p className="next-video__title">{video.title}</p>
                            <p className="next-video__username">{video.channel}</p>
                        </div>
                    </div>
                    ))};
            </div>
            </>
        )
}