import SideBarVideos from "../SideBarVideos/SideBarVideos";
import "./VideoSideBar.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function VideoSideBar({ videoList, id, videoMain}) {


  return (
    <>
      <div className="video-side-bar section">
        <p className="video-side-bar__title">Next Videos</p>
        {videoList.filter((video)=> video.id !== videoMain.id).map((video) => (
          <Link to ={`/video/${video.id}`} key = {video.id}><SideBarVideos key={video.id} id={video.id} video={video}/></Link>
        ))}
      </div>
    </>
  );
}

