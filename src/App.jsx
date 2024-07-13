import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import MainVideo from "./components/main-video/Main-Video";
import CommentForm from "./components/comment-form/CommentForm";
import VideoSideBar from "./components/video-side-bar/VideoSideBar";
import SiteData from "./data/video-details.json";
import MainCommentCounter from "./components/main-comment-counter/MainCommentCounter";
import MainCommentsSection from "./components/MainCommentsSection/MainCommentsSection";
import SideBarVideos from "./components/side-bar-videos/Side-Bar-Videos";

function App() {

  const [VideoList, setVideoList] = useState(SiteData.slice(1,SiteData.length));
  const [VideoMain, setMainVideo] = useState(SiteData[0]);

  const MainVideoHandler = (id)=>{
    const newMainVideo = SiteData.filter((video)=> video.id == id)
    console.log(newMainVideo[0]);
    setMainVideo(VideoMain => newMainVideo[0]);
    console.log(VideoMain);
}


  const MoveHandler  = (id) => {
    const newArray = SiteData.filter((video) => video.id !== id)
    setVideoList(newArray);
    console.log(newArray);
    console.log(id);
    MainVideoHandler(id);
  
  }






  function relativeDate(date) {

    const diff = Math.round ((new Date() - new Date(date))/ 1000);
    const minute = 60; 
    const hour = minute * 60;
    const day = hour * 24; 
    const week = day * 7; 
    const month = day * 30;
    const year = month * 12;


  if (diff < 30) {
    return "just now";
  } else if (diff < minute) {
    return diff + " seconds ago";
  } else if (diff < 2 * minute) {
    return "a minute ago";
  } else if (diff < hour) {
    return Math.floor(diff / minute) + " minutes ago";
  } else if (Math.floor(diff / hour) == 1) {
    return "1 hour ago";
  } else if (diff < day) {
    return Math.floor(diff / hour) + " hours ago";
  } else if (diff < day * 2) {
    return "yesterday";
  } else if (diff < week) {
    return week + " days ago";
  } else if (diff < month) {
    return Math.floor(diff / week) + " weeks ago";
  } else if (diff < year) {
    return Math.floor(diff / month) + " months ago";
  } else {
    return Math.floor(diff / year) + " years ago";
  }


};

  return (
    <>
      <Header />
      <MainVideo 
                 relativeDate={relativeDate}
                 VideoList={VideoList}
                 VideoMain={VideoMain}
                 setMainVideo={setMainVideo}
                  />
      <MainCommentCounter 
      VideoMain={VideoMain} />           
      <CommentForm data={SiteData} 
      VideoMain={VideoMain}/>
      <MainCommentsSection data={SiteData}
         relativeDate={relativeDate} 
         VideoMain={VideoMain}/>
      <VideoSideBar data={SiteData} 
       setVideoList={setVideoList}
       VideoList={VideoList}
       MoveHandler={MoveHandler}/>
    </>
  );
}

export default App;
