import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoSideBar from "../../components/VideoSideBar/VideoSideBar";
import siteData from "../../data/video-details.json";
import MainCommentCounter from "../../components/MainCommentCounter/MainCommentCounter";
import MainCommentsSection from "../../components/MainCommentsSection/MainCommentsSection";
import SideBarVideos from "../../components/SideBarVideos/SideBarVideos";
import Video from "../../components/Video/Video";
import { useParams } from "react-router-dom";
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
  const apiKey = `f1bbc4c0-4138-43f4-a76e-43a19f457007`;
  const baseURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/`;


 




 

  
  useEffect(() => {
    async function getMainVideo() {
      try {
        const response = await axios.get(
          `${baseURL}videos/${id}?api_key=<${apiKey}>`
        );
        const mainVideoObject = response.data;
        setMainVideo(mainVideoObject);
      } catch (error) {
        console.error(error);
      }
    }
    getMainVideo();
  }, [id]);



  if (videoMain == null) {
    return <h1>Loading Main Video...</h1>;
  }

  console.log(videoMain);

  return (
    <>
      <Header />
      <Video videoMain={videoMain} />
      <div className="main-section section">
        <div className="main-video-section section">
          <MainVideo relativeDate={relativeDate} videoMain={videoMain} />
          <MainCommentCounter videoMain={videoMain} />
          <CommentForm />
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
