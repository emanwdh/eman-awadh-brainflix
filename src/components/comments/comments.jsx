import './comments.scss'


export default function Comments({data, relativeDate, comment}) {
    return (
    
        <div className="comment">
            <span><span className="comment__avatar avatar"></span></span> 
            <div className="comment__info">
                <p className="comment__username">{comment.name}</p>
                <p className="comment__text">{comment.comment}</p>
                <p className="comment__date">{relativeDate(comment.timestamp)}</p>
            </div>
        </div>
        
        
        
    )
}