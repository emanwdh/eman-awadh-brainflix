import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import CommentForm from "./components/CommentForm/CommentForm";
import VideoSideBar from "./components/VideoSideBar/VideoSideBar";
import siteData from "./data/video-details.json";
import MainCommentCounter from "./components/MainCommentCounter/MainCommentCounter";
import MainCommentsSection from "./components/MainCommentsSection/MainCommentsSection";
import SideBarVideos from "./components/SideBarVideos/SideBarVideos";
import Video from "./components/Video/Video";

function App() {
  const [videoList, setVideoList] = useState(
    siteData.slice(1, siteData.length)
  );

  const [videoMain, setMainVideo] = useState(siteData[0]);

  const mainVideoHandler = (id) => {
    const newMainVideo = siteData.filter((video) => video.id == id);
    setMainVideo((videoMain) => newMainVideo[0]);
  };

  const moveHandler = (id) => {
    const newArray = siteData.filter((video) => video.id !== id);
    setVideoList(newArray);
    mainVideoHandler(id);
  };

  function relativeDate(date) {
    const diff = Math.round((new Date() - new Date(date)) / 1000);
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
  }

  return (
    <>
      <Header />
      <Video videoMain={videoMain} />
      <div className="main-section section">
        <div className="main-video-section section">
          <MainVideo
            relativeDate={relativeDate}
            videoList={videoList}
            videoMain={videoMain}
            setMainVideo={setMainVideo}
          />
          <MainCommentCounter videoMain={videoMain} />
          <CommentForm />
          <MainCommentsSection
            relativeDate={relativeDate}
            videoMain={videoMain}
          />
        </div>
        <div className="next-video-section section">
          <VideoSideBar
            setVideoList={setVideoList}
            videoList={videoList}
            moveHandler={moveHandler}
          />
        </div>
      </div>
    </>
  );
}

export default App;
