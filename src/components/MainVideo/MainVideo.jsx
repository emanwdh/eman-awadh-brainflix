import "./MainVideo.scss";
import likesIcon from "../../assets/Icons/likes.svg";
import viewsIcon from "../../assets/Icons/views.svg";
import { useState } from "react";
import axios from "axios";

export default function MainVideo({ relativeDate, videoMain, newBaseURL }) {




  return (
    <>
      <div className="main-video section">
        <div className="main-video__main-info main-info">
          <h1 className="main-info__title">{videoMain.title}</h1>
          <div className="main-info__video-details">
            <div className="video-details__stats">
              <div className="video-details__group">
                <p className="video-details__username">
                  By {videoMain.channel}
                </p>
                <p className="video-details__date">
                  {relativeDate(videoMain.timestamp)}
                </p>
              </div>
              <div className="video-details__group">
                <div className="video-details__views video-details__numbers">
                  <img className="views__icon" src={viewsIcon}></img>
                  <p className="views__number">{videoMain.views}</p>
                </div>
                <div className="video-details__likes video-details__numbers">
                  <img className="likes__icon" src={likesIcon}></img>
                  <p className="likes__number">{videoMain.likes}</p>
                </div>
              </div>
            </div>
            <p className="video-details__description">
              {videoMain.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
