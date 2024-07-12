import './MainCommentCounter.scss'

export default function MainCommentCounter({data}) {
    console.log(data[0].comments);
    return (
        <>
        <p className="main-comments-counter section">{data[0].comments.length} Comments</p>    
        </>
    )

}