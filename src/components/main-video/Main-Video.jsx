import './Main-Video.scss'
import likesIcon from '../../assets/Font/Icons/likes.svg'
import viewsIcon from '../../assets/Font/Icons/views.svg'


export default function  MainVideo ({data, relativeDate}) {

    console.log(data);

return (

    <div className="main-video section">
        <video className="main-video__video" src = {data[0].video}></video>
        <div className = "main-video__main-info main-info">
            <h1 className="main-info__title">{data[0].title}</h1>
            <div className="main-info__video-details">
                <div className="video-details__stats">
                    <div className="video-details__group">
                        <p className="video-details__username">By {data[0].channel}</p>
                        <p className="video-details__date">{relativeDate(data[0].timestamp)}</p>
                    </div>
                    <div className="video-details__group">
                        <div className="video-details__views video-details__numbers">
                            <img className="views__icon" src = {viewsIcon}></img>
                            <p className="views__number">{data[0].views}</p>
                        </div>
                        <div className="video-details__likes video-details__numbers">
                            <img className="likes__icon" src = {likesIcon}></img>
                            <p className="likes__number">{data[0].likes}</p>
                        </div>
                    </div>
                </div>
                <p className = "video-details__description">{data[0].description}</p>
            </div>
        </div>
    </div>



)






}