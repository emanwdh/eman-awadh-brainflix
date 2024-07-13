import './MainCommentCounter.scss'

export default function MainCommentCounter({VideoMain}) {
    console.log(VideoMain);
    console.log(VideoMain.comments);
    return (
        <>
        <p className="main-comments-counter section">{VideoMain.comments.length} Comments</p>    
        </>
    )

}