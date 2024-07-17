import Comments from "../Comments/Comments";
import "./MainCommentsSection.scss";

export default function MainCommentsSection({ relativeDate, videoMain }) {
  const CommentArray = videoMain.comments;

  return (
    <div className="main-comments section">
      {CommentArray.map((comment) => (
        <Comments
          comment={comment}
          relativeDate={relativeDate}
          key={comment.id}
        />
      ))}
    </div>
  );
}
