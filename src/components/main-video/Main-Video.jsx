import './Main-Video.scss'
import likesIcon from '../../assets/Font/Icons/likes.svg'
import viewsIcon from '../../assets/Font/Icons/views.svg'


export default function  MainVideo ({data}) {

    console.log(data);


    function relativeDate(date) {

        const diff = Math.round ((new Date() - new Date(date))/ 1000);
        const minute = 60; 
        const hour = minute * 60;
        const day = hour * 24; 
        const week = day * 7; 
        const month = day * 30;
        const year = month * 12;
    
    
      if (diff < 30) {
        return "just now";
      } else if (diff < minute) {
        return diff + " seconds ago";
      } else if (diff < 2 * minute) {
        return "a minute ago";
      } else if (diff < hour) {
        return Math.floor(diff / minute) + " minutes ago";
      } else if (Math.floor(diff / hour) == 1) {
        return "1 hour ago";
      } else if (diff < day) {
        return Math.floor(diff / hour) + " hours ago";
      } else if (diff < day * 2) {
        return "yesterday";
      } else if (diff < week) {
        return week + " days ago";
      } else if (diff < month) {
        return Math.floor(diff / week) + " weeks ago";
      } else if (diff < year) {
        return Math.floor(diff / month) + " months ago";
      } else {
        return Math.floor(diff / year) + " years ago";
      }
    
    
    };
    
    


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