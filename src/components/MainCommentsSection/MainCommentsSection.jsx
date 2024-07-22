import Comments from "../Comments/Comments";
import "./MainCommentsSection.scss";

export default function MainCommentsSection({ relativeDate, videoMain }) {
  const commentsArray = videoMain.comments;
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
