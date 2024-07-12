import Comments from "../comments/comments"
import './MainCommentsSection.scss'


export default function MainCommentsSection({data, relativeDate}) {
    return ( 
     
       <div className="main-comments section">
            <Comments data={data} relativeDate={relativeDate}/>
        </div>
      
    ) 
}