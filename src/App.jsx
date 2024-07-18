import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UploadPage from "./Pages/UploadPage/UploadPage";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [videoList, setVideoList] = useState();

  const [videoMain, setMainVideo] = useState();

  useEffect(() => {
    const apiKey = `f1bbc4c0-4138-43f4-a76e-43a19f457007`;
    const baseURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/`;

    async function getData() {
      try {
        const response = await axios.get(
          `${baseURL}videos?api_key=<${apiKey}>`
        );
        const videosArray = response.data;
        setVideoList(videosArray);
        console.log(videoList);
      } catch (error) {
        console.log(error);
      }

      try {
        const response = await axios.get(
          `${baseURL}videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=<${apiKey}>`
        );
        const mainVideoObject = response.data;
        setMainVideo(mainVideoObject);
        console.log(videoMain);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  },[]);


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

  //loading state 

  if (!videoList || !videoMain) {
    return <>Loading Videos...</>;
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
            />
          }
        ></Route>
        <Route path="upload" element={<UploadPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
