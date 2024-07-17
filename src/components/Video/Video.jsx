import "./Video.scss"

export default function Video ({videoMain}) {

    return (
    <>
    <video
        controls
        className="main-video__video section"
        src={videoMain.video}
        poster={videoMain.image}>
    </video>
    </>
    
    )

}