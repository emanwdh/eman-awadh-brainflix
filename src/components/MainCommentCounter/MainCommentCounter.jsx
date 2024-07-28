import './MainCommentCounter.scss'

export default function MainCommentCounter({videoMain}) {

    if(videoMain.comments  == null){
        return(
            <p className='main-comments-counter section'>0 Comments</p>
        )
    }
    return (
        <>
        <p className="main-comments-counter section">{videoMain.comments.length} Comments</p>    
        </>
    )

}