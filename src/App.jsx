import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import MainVideo from "./components/main-video/Main-Video";
import CommentForm from "./components/comment-form/CommentForm";
import VideoSideBar from "./components/video-side-bar/video-side-bar";
import SiteData from "./data/video-details.json";
import MainCommentCounter from "./components/main-comment-counter/MainCommentCounter";
import MainCommentsSection from "./components/MainCommentsSection/MainCommentsSection";

function App() {
  const [count, setCount] = useState(0);



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


  console.log(SiteData);

  return (
    <>
      <Header />
      <MainVideo data={SiteData}
                 relativeDate={relativeDate}
                  />
      <CommentForm data={SiteData} />
      <MainCommentsSection data={SiteData}
         relativeDate={relativeDate} />
      <VideoSideBar data={SiteData} />
    </>
  );
}

export default App;
