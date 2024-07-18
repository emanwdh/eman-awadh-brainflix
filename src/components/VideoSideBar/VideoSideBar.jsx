import SideBarVideos from "../SideBarVideos/SideBarVideos";
import "./VideoSideBar.scss";
import { Link } from "react-router-dom";

export default function VideoSideBar({ videoList }) {

  return (
    <>
      <div className="video-side-bar section">
        <p className="video-side-bar__title">Next Videos</p>
        {videoList.map((video) => (
          <Link to ={`/${video.id}`} key = {video.id}><SideBarVideos key={video.id} id={video.id} video={video}/></Link>
        ))}
      </div>
    </>
  );
}
