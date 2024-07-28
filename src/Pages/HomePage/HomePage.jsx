import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoSideBar from "../../components/VideoSideBar/VideoSideBar";
import siteData from "../../data/video-details.json";
import MainCommentCounter from "../../components/MainCommentCounter/MainCommentCounter";
import MainCommentsSection from "../../components/MainCommentsSection/MainCommentsSection";
import SideBarVideos from "../../components/SideBarVideos/SideBarVideos";
import Video from "../../components/Video/Video";
import { useParams, useMatch } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function HomePage({
  videoMain,
  videoList,
  relativeDate,
  setMainVideo,
  setVideoList,
}) {
  const { id } = useParams();
  const newBaseURL = 'http://localhost:5050/'
  const homePageMatch = useMatch("/");
  const dynamicVideoMatch = useMatch("video/:id");

  useEffect(
    () => {
      async function getMainVideo(id) {
        try {
          const response = await axios.get(
            `${newBaseURL}videos/${id}`
          );
          const mainVideoObject = response.data;
          setMainVideo(mainVideoObject[0]);
        } catch (error) {
          console.error(error);
        }
      }

      async function getVideosArray() {
        try {
          const response = await axios.get(
            `${newBaseURL}videos`
          );
          const videosArray = response.data;
          setVideoList(videosArray);

          if (homePageMatch !== null) {
            const defaultVideo = videosArray[0];
            getMainVideo(defaultVideo.id);
          }
        } catch (error) {
          console.log(error);
        }
      }

      if (homePageMatch !== null) {
        getVideosArray();
      } else if (dynamicVideoMatch !== null) {
        getVideosArray();
        getMainVideo(id);
      }
    },
    [id],
    [homePageMatch],
    [videoMain], [videoList]
  );

  if (videoMain == null || videoList == null) {
    return (
      <div className="section__loading">
        <h1 className="loading__title">Loading Main Video...</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Video videoMain={videoMain} />
      <div className="main-section section">
        <div className="main-video-section section">
          <MainVideo relativeDate={relativeDate} videoMain={videoMain} />
          <MainCommentCounter videoMain={videoMain} />
          <CommentForm
            setMainVideo={setMainVideo}
            videoMain={videoMain}
          />
          <MainCommentsSection
            relativeDate={relativeDate}
            videoMain={videoMain}
          />
        </div>
        <div className="next-video-section section">
          <VideoSideBar videoList={videoList} videoMain={videoMain} id={id} />
        </div>
      </div>
    </>
  );
}
