import './Comments.scss'


export default function Comments({ relativeDate, comment, deleteComment}) {


    return (
    
        <div className="comment">
            <span><span className="comment__avatar avatar"></span></span> 
            <div className="comment__info">
                <div className="comment__info-group">
                    <p className="comment__username">{comment.name}</p>
                    <p className="comment__date">{relativeDate(comment.timestamp)}</p>
                </div>
                <p className="comment__text">{comment.comment}</p>
                <button onClick = {() => deleteComment(comment.id)} className='button--delete'>delete</button>
            </div>
        </div>
        
        
        
    )
}