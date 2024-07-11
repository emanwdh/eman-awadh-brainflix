import MainCommentCounter from "../main-comment-counter/Main-Comment-Counter"




export default function CommentForm() {
    return (
        <>
        <MainCommentCounter/>
        <form className="comment-form">
            <img className="comment-form__avatar"></img>
            <div className="comment-form__input-field">
                <label className="input-field__label">
                    <input className="input-field__input">
                    </input>
                </label>
                <button className="comment-form__button" type = "submit"></button>
            </div>
        </form>
        
        </>



    )
}