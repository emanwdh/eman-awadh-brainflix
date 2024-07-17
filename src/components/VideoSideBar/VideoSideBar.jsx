import SideBarVideos from "../SideBarVideos/SideBarVideos";
import './VideoSideBar.scss';
import { useState } from "react";


export default function  VideoSideBar({videoList, moveHandler, setVideoList}) {

        return (
            <>
            <div className="video-side-bar section">
                <p className="video-side-bar__title">Next Videos</p>
                {videoList.map((video) => ( 
                <SideBarVideos
                key = {video.id}
                id ={video.id}
                video = {video}
                moveHandler={moveHandler}/>))}
            </div>
            </>
        )
}




