import MainCommentCounter from "../MainCommentCounter/MainCommentCounter";
import "./CommentForm.scss";
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CommentForm({
  apiKey,
  baseURL,
  videoMain,
  setMainVideo,
}) {
  const [username, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  function usernameHandler(e) {
    setUserName(e.target.value);
  }

  function commentHandler(e) {
    setCommentText(e.target.value);
  }

  function onCommentSubmit(e) {
    e.preventDefault();
    let newComment = { name: username, comment: commentText };

    async function postComment(newComment) {
      try {
        await axios.post(
          `${baseURL}videos/${videoMain.id}/comments?api_key=<${apiKey}>`,
          newComment,
          {
            header: {
              "Content-Type": "application/json",
            },
          }
        );

      } catch (error) {
        console.log(error);
      }
    }

    postComment(newComment);
  }

  return (
    <>
      <form className="comment-form" onSubmit={onCommentSubmit}>
        <span>
          <img className="comment-form__avatar avatar" src={AvatarImage} />
        </span>
        <div className="comment-form__input-field">
          <label className="input-field__label">Join the Conversation</label>
          <div className="input-field__inputs">
            <input
              className="input-field__input"
              placeholder="Add your name"
              name="comment-username"
              value={username}
              onChange={usernameHandler}
            ></input>
            <textarea
              className="input-field__textarea"
              placeholder="Add a new comment"
              name="comment-text"
              value={commentText}
              onChange={commentHandler}
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
