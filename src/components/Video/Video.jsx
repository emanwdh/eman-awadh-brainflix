import "./Video.scss"

export default function Video ({VideoMain}) {

    return (
    <>
    <video
        controls
        className="main-video__video section"
        src={VideoMain.video}
        poster={VideoMain.image}>
    </video>
    </>
    
    )

}