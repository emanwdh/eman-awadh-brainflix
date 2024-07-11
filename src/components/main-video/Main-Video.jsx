export default function  MainVideo () {

return (

    <div className="main-video section">
        <video className="main-video__video"></video>
        <div className = "main-video__main-info">
            <h1 className="main-info__title"></h1>
            <div className="main-info__video-details">
                <p className="video-details__username"></p>
                <p className="video-details__date"></p>
                <div className="video-details__views video-details__stats">
                    <img className="views__icon"></img>
                    <p className="views__number"></p>
                </div>
                <div className="video-details__likes video-details__stats">
                    <img className="likes__icon"></img>
                    <p className="likes__number"></p>
                </div>
                <p className = "video-details__description"></p>
            </div>
        </div>
    </div>



)






}