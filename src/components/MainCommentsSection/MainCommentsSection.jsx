import Comments from "../Comments/Comments";
import "./MainCommentsSection.scss";
import axios from "axios";

export default function MainCommentsSection({ relativeDate, videoMain, comments, newBaseURL, setComments }) {

  async function deleteComment(id) {
    try{
      const deleteResponse = await axios.delete(`${newBaseURL}videos/${videoMain.id}/comments/${id}`);
      setComments(deleteResponse.data);
    }catch(error){
      console.error(error);
    }
   
  }

  if(comments == null) {
    return <div className="main-comments section">
      <p>No Comments to Display</p>
    </div>
  }
  return (
    <div className="main-comments section">
      {comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => (
          <Comments
            comment={comment}
            relativeDate={relativeDate}
            key={comment.id}
            deleteComment={deleteComment}
          />
        ))}
    </div>
  );
}
