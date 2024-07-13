import Comments from "../comments/comments"
import './MainCommentsSection.scss'


export default function MainCommentsSection({relativeDate, VideoMain}) {

    const CommentArray = VideoMain.comments;

    return ( 
     
       <div className="main-comments section">
            {CommentArray.map((comment)=>  <Comments 
            comment={comment}
            relativeDate={relativeDate}
                 />)}
        
        </div>
      
    ) 
}