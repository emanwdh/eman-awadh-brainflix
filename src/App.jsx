import { useState } from "react";
import "./App.scss";
import siteData from "./data/video-details.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UploadPage from "./Pages/UploadPage/UploadPage";

function App() {
  const [videoList, setVideoList] = useState(
    siteData.slice(1, siteData.length)
  );

  const [videoMain, setMainVideo] = useState(siteData[0]);

  const mainVideoHandler = (id) => {
    const newMainVideo = siteData.find((video) => video.id == id);
    setMainVideo((videoMain) => newMainVideo);
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
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            videoMain={videoMain}
            videoList={videoList}
            relativeDate={relativeDate}
            setMainVideo={setMainVideo}
            setVideoList={setVideoList}
            moveHandler={moveHandler}
          />
        }
      ></Route>
      <Route path="upload" element={<UploadPage />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
