import MainCommentCounter from "../MainCommentCounter/MainCommentCounter";
import "./CommentForm.scss";
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function CommentForm({
  videoMain,
  setMainVideo,
  newBaseURL, setVideoList, setComments
}) {

  const formRef = useRef();

  function onCommentSubmit(e) {
    e.preventDefault();
    let commentText = formRef.current.text.value;
    let userName = formRef.current.username.value;


    async function postComment() {
      try {
        const response = await axios.post(
          `${newBaseURL}videos/comments/post`,
          {
            name: userName, 
            comment: commentText, 
            timestamp: Date.now(),
            videoID: videoMain.id  
          }
        );
    
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    postComment();
  }

  return (
    <>
      <form className="comment-form" onSubmit={onCommentSubmit} ref ={formRef}>
        <span>
          <img className="comment-form__avatar avatar" src={AvatarImage} />
        </span>
        <div className="comment-form__input-field">
          <label className="input-field__label">Join the Conversation</label>
          <div className="input-field__inputs">
            <input
              className="input-field__input"
              placeholder="Add your name"
              id="username"
            ></input>
            <textarea
              className="input-field__textarea"
              placeholder="Add a new comment"
              id="text"
            ></textarea>
          </div>
          <button
            className="comment-form__button input-field__button"
            type="submit"
          >
            Comment
          </button>
        </div>
      </form>
    </>
  );
}
