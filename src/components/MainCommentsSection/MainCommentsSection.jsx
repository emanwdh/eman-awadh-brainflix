import Comments from "../Comments/Comments";
import "./MainCommentsSection.scss";

export default function MainCommentsSection({ relativeDate, videoMain, comments }) {
  const commentsArray = comments;

  if(commentsArray == null) {
    return <div className="main-comments section">
      <p>No Comments to Display</p>
    </div>
  }
  return (
    <div className="main-comments section">
      {commentsArray
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => (
          <Comments
            comment={comment}
            relativeDate={relativeDate}
            key={comment.id}
          />
        ))}
    </div>
  );
}
