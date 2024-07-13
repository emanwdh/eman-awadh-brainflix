import './Main-Video.scss'
import likesIcon from '../../assets/Font/Icons/likes.svg'
import viewsIcon from '../../assets/Font/Icons/views.svg'


export default function  MainVideo ({data, relativeDate, VideoList, VideoMain}) {

    console.log(VideoList);
    console.log(VideoMain);

return (

    <div className="main-video section">
        <video controls className="main-video__video" src = {VideoMain.video} poster = {VideoMain.image}></video>
        <div className = "main-video__main-info main-info">
            <h1 className="main-info__title">{VideoMain.title}</h1>
            <div className="main-info__video-details">
                <div className="video-details__stats">
                    <div className="video-details__group">
                        <p className="video-details__username">By {VideoMain.channel}</p>
                        <p className="video-details__date">{relativeDate(VideoMain.timestamp)}</p>
                    </div>
                    <div className="video-details__group">
                        <div className="video-details__views video-details__numbers">
                            <img className="views__icon" src = {viewsIcon}></img>
                            <p className="views__number">{VideoMain.views}</p>
                        </div>
                        <div className="video-details__likes video-details__numbers">
                            <img className="likes__icon" src = {likesIcon}></img>
                            <p className="likes__number">{VideoMain.likes}</p>
                        </div>
                    </div>
                </div>
                <p className = "video-details__description">{VideoMain.description}</p>
            </div>
        </div>
    </div>



)






}