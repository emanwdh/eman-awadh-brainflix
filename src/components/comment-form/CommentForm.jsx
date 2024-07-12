import MainCommentCounter from "../main-comment-counter/MainCommentCounter";
import "./CommentForm.scss"

export default function CommentForm({ data }) {
  return (
    <>
      <MainCommentCounter data={data} />
      <form className="comment-form section">
        <span><span className="comment-form__avatar"></span></span>
        <div className="comment-form__input-field">
          <label className="input-field__label">Join the Conversation</label>
          <textarea className="input-field__textarea"></textarea>
          <button className="comment-form__button" type="submit">Comment</button>
        </div>
      </form>
    </>
  );
}
