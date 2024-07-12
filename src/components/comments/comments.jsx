import './comments.scss'


export default function Comments({data, relativeDate}) {
    return (
    
        <div className="comment">
            <span><span className="comment__avatar"></span></span> 
            <div className="comment__info">
                <p className="comment__username">{data[0].comments[0].name}</p>
                <p className="comment__text">{data[0].comments[0].comment}</p>
                <p className="comment__date">{relativeDate(data[0].comments[0].timestamp)}</p>
            </div>
        </div>
        
        
        
    )
}