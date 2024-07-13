import SideBarVideos from "../side-bar-videos/Side-Bar-Videos";
import './VideoSideBar.scss';
import { useState } from "react";


export default function  VideoSideBar({data, VideoList, MoveHandler}) {
        console.log(VideoList)

        return (
            <>
            <div className="video-side-bar section">
                <p className="video-side-bar__title">Next Videos</p>
                {VideoList.map((video) => ( 
                <SideBarVideos
                key = {video.id}
                id ={video.id}
                data = {data}
                video = {video}
                MoveHandler={MoveHandler}/>))}
            </div>
            </>
        )
}




