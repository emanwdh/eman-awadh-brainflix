import './MainCommentCounter.scss'

export default function MainCommentCounter({videoMain}) {
    return (
        <>
        <p className="main-comments-counter section">{videoMain.comments.length} Comments</p>    
        </>
    )

}