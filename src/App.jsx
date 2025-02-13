import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UploadPage from "./Pages/UploadPage/UploadPage";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [videoList, setVideoList] = useState([]);

  const [videoMain, setMainVideo] = useState(null);

  const [comments, setComments] = useState([]);

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
    } else if (Math.floor(diff / year) == 1) {
      return Math.floor(diff / year) + " year ago";
    } else {
      return Math.floor(diff / year) + " years ago";
    }
  }

  if (!videoList) {
    return (
      <div className="section__loading">
        <h1 className="loading__title">Loading Videos...</h1>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <HomePage
              relativeDate={relativeDate}
              videoList={videoList}
              setMainVideo={setMainVideo}
              videoMain={videoMain}
              setVideoList={setVideoList}
              setComments={setComments}
              comments={comments}
            />
          }
        ></Route>
        <Route
          path={"/video/:id"}
          element={
            <HomePage
              relativeDate={relativeDate}
              videoList={videoList}
              setMainVideo={setMainVideo}
              videoMain={videoMain}
              setVideoList={setVideoList}
              setComments={setComments}
              comments={comments}
            />
          }
        ></Route>
        <Route path="upload" element={<UploadPage
        videoList={videoList}
        setVideoList={setVideoList}
        />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


