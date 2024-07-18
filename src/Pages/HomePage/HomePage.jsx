import Header from "../../components/Header/Header"
import MainVideo from "../../components/MainVideo/MainVideo";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoSideBar from "../../components/VideoSideBar/VideoSideBar";
import siteData from "../../data/video-details.json";
import MainCommentCounter from "../../components/MainCommentCounter/MainCommentCounter";
import MainCommentsSection from "../../components/MainCommentsSection/MainCommentsSection";
import SideBarVideos from "../../components/SideBarVideos/SideBarVideos";
import Video from "../../components/Video/Video";

export default function HomePage({videoMain, videoList, relativeDate, setMainVideo, setVideoList, moveHandler}) {



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
            videoList={videoList}
            setVideoList={setVideoList}
            moveHandler={moveHandler}
            videoMain={videoMain}
          />
        </div>
      </div>
    </>
  );
}
