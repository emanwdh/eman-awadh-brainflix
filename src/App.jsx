import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import MainVideo from "./components/main-video/Main-Video";
import Comments from "./components/comments/comments";
import CommentForm from "./components/comment-form/CommentForm";
import VideoSideBar from "./components/video-side-bar/video-side-bar";
import SiteData from "./data/video-details.json";
import MainCommentCounter from "./components/main-comment-counter/MainCommentCounter";

function App() {
  const [count, setCount] = useState(0);

  console.log(SiteData);

  return (
    <>
      <Header />
      <MainVideo data={SiteData} />
      <CommentForm data={SiteData} />
      <Comments data={SiteData} />
      <VideoSideBar data={SiteData} />
    </>
  );
}

export default App;
