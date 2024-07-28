import './MainCommentCounter.scss'

export default function MainCommentCounter({videoMain, comments}) {

    if(videoMain.comments  == null){
        return(
            <p className='main-comments-counter section'>0 Comments</p>
        )
    }
    return (
        <>
        <p className="main-comments-counter section">{comments.length} Comments</p>    
        </>
    )

}