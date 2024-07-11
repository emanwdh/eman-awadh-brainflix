import MainCommentCounter from "../main-comment-counter/Main-Comment-Counter"




export default function CommentForm() {
    return (
        <>
        <MainCommentCounter/>
        <form className="comment-form section">
            <span className="comment-form__avatar"></span>
            <div className="comment-form__input-field">
                <label className="input-field__label">Join the Conversation</label>
                    <textarea className="input-field__input"></textarea>
                <button className="comment-form__button" type = "submit">Comment</button>
            </div>
        </form>
        
        </>



    )
}