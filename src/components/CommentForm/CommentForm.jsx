import MainCommentCounter from "../MainCommentCounter/MainCommentCounter";
import "./CommentForm.scss"
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg"
import { useState } from "react";

export default function CommentForm() {
  const  [username, setUserName] = useState("");
  const  [commentText, setCommentText] = useState("");

  function usernameHandler(e) {
    setUserName(e.target.value);
    console.log(username);
  }

  function commentHandler(e) {
    setCommentText(e.target.value);
    console.log(commentText);
  }


  return (
    <>
      <form className="comment-form">
        <span><img className="comment-form__avatar avatar" src = {AvatarImage}/></span>
        <div className="comment-form__input-field">
          <label className="input-field__label">Join the Conversation</label>
          <div className="input-field__inputs">
            <input className="input-field__input"placeholder="Add your name" name="comment-username" value={username} onChange={usernameHandler}></input>
            <textarea className="input-field__textarea" placeholder = "Add a new comment" name="comment-text" value={commentText} onChange={commentHandler}></textarea>
          </div>
            <button className="comment-form__button input-field__button" type="submit">Comment</button>
        
        </div>
      </form>
    </>
  );
}
