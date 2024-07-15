import MainCommentCounter from "../main-comment-counter/MainCommentCounter";
import "./CommentForm.scss"
import AvatarImage from "../../assets/Font/Images/Mohan-muruge.jpg"

export default function CommentForm({ data, VideoMain }) {
  return (
    <>
      <form className="comment-form">
        <span><img className="comment-form__avatar avatar" src = {AvatarImage}/></span>
        <div className="comment-form__input-field">
          <label className="input-field__label">Join the Conversation</label>
          <textarea className="input-field__textarea" placeholder = "Add a new comment"></textarea>
          <button className="comment-form__button input-field__button" type="submit">Comment</button>
        </div>
      </form>
    </>
  );
}
